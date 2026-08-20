import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stackline-angular-data-table-'));
const artifactDir = path.join(temporaryRoot, 'artifact');
fs.mkdirSync(artifactDir);

const configuredTarball = process.env.STACKLINE_PACKAGE_TARBALL;
const tarball = configuredTarball
  ? path.resolve(configuredTarball)
  : path.join(
      artifactDir,
      JSON.parse(execFileSync('npm', ['pack', path.join(root, 'dist'), '--json', '--pack-destination', artifactDir], {
        cwd: root,
        encoding: 'utf8'
      }))[0].filename
    );

assert.ok(fs.existsSync(tarball), `Package tarball not found: ${tarball}`);

const matrices = [
  { name: 'peer-floor', angular: '22.0.2', compilerCli: '22.0.2' },
  { name: 'current', angular: '22.1.3', compilerCli: '22.1.3' }
];

try {
  for (const matrix of matrices) {
    const consumer = path.join(temporaryRoot, matrix.name);
    fs.mkdirSync(consumer);

    fs.writeFileSync(path.join(consumer, 'package.json'), `${JSON.stringify({
      name: `angular-data-table-consumer-${matrix.name}`,
      private: true,
      type: 'module',
      dependencies: {
        '@angular/common': matrix.angular,
        '@angular/compiler': matrix.angular,
        '@angular/compiler-cli': matrix.compilerCli,
        '@angular/core': matrix.angular,
        '@stackline/angular-data-table-component': `file:${tarball}`,
        tslib: '2.8.1',
        typescript: '6.0.3'
      }
    }, null, 2)}\n`);

    fs.writeFileSync(path.join(consumer, 'tsconfig.json'), `${JSON.stringify({
      compilerOptions: {
        declaration: true,
        experimentalDecorators: true,
        importHelpers: true,
        module: 'ES2022',
        moduleResolution: 'bundler',
        outDir: 'build',
        skipLibCheck: false,
        strict: true,
        target: 'ES2022'
      },
      angularCompilerOptions: {
        compilationMode: 'full',
        strictTemplates: true
      },
      files: ['usage.ts']
    }, null, 2)}\n`);

    fs.writeFileSync(path.join(consumer, 'usage.ts'), `import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {
  DataTableModule,
  createDataTableController,
  type DataTableColumn,
  type DataTableSelectionState
} from '@stackline/angular-data-table-component';

const columns: DataTableColumn[] = [
  { id: 'name', name: 'Name', selector: 'name', sortable: true }
];
const rows = [{ id: 1, name: 'Ada' }];

@Component({
  standalone: false,
  selector: 'consumer-root',
  template: '<stackline-data-table [columns]="columns" [data]="rows" (selectedRowsChange)="selected($event)"></stackline-data-table>'
})
class ConsumerComponent {
  columns = columns;
  rows = rows;
  selected(state: DataTableSelectionState) {
    return state.selectedCount;
  }
}

@NgModule({
  imports: [CommonModule, DataTableModule],
  declarations: [ConsumerComponent]
})
class ConsumerModule {}

const controller = createDataTableController({ columns, data: rows });
if (controller.displayedRows.length !== 1) throw new Error('Invalid headless controller.');
export { ConsumerComponent, ConsumerModule };
`);

    fs.writeFileSync(path.join(consumer, 'runtime.mjs'), `import '@angular/compiler';
import { createDataTableController } from '@stackline/angular-data-table-component';
const table = createDataTableController({ columns: [], data: [] });
if (!Array.isArray(table.displayedRows)) throw new Error('Invalid runtime export.');
`);

    execFileSync('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund'], {
      cwd: consumer,
      stdio: 'inherit'
    });
    execFileSync(path.join(consumer, 'node_modules/.bin/ngc'), ['--project', 'tsconfig.json'], {
      cwd: consumer,
      stdio: 'inherit'
    });
    execFileSync(process.execPath, ['runtime.mjs'], { cwd: consumer, stdio: 'inherit' });

    console.log(`Consumer verified: Angular ${matrix.angular}.`);
  }
} finally {
  fs.rmSync(temporaryRoot, { recursive: true, force: true });
}
