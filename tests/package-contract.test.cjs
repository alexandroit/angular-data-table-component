const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { pathToFileURL } = require('node:url');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

test('built package has the expected Angular 22 contract and release files', async () => {
  const packageJson = JSON.parse(fs.readFileSync(path.join(dist, 'package.json'), 'utf8'));

  assert.equal(packageJson.name, '@stackline/angular-data-table-component');
  assert.equal(packageJson.version, '22.1.0');
  assert.equal(packageJson.peerDependencies['@angular/common'], '>=22.0.0 <23.0.0');
  assert.equal(packageJson.peerDependencies['@angular/core'], '>=22.0.0 <23.0.0');
  assert.equal(packageJson.sideEffects, false);

  for (const file of [
    'README.md',
    'LICENSE',
    'CHANGELOG.md',
    'SECURITY.md',
    'fesm2022/stackline-angular-data-table-component.mjs',
    'fesm2022/stackline-angular-data-table-component.mjs.map',
    'types/stackline-angular-data-table-component.d.ts'
  ]) {
    assert.ok(fs.existsSync(path.join(dist, file)), `${file} is missing from dist.`);
  }

  await import('@angular/compiler');
  const api = await import(pathToFileURL(
    path.join(dist, 'fesm2022/stackline-angular-data-table-component.mjs')
  ).href);

  for (const exportName of [
    'DataTableComponent',
    'DataTableModule',
    'HeadlessDataTableController',
    'createDataTableController'
  ]) {
    assert.ok(exportName in api, `${exportName} is missing from the runtime API.`);
  }

  const declarations = fs.readFileSync(
    path.join(dist, 'types/stackline-angular-data-table-component.d.ts'),
    'utf8'
  );
  for (const publicType of [
    'DataTableColumn',
    'DataTableColumnFilter',
    'DataTableColumnPinningState',
    'DataTableRowPinningState',
    'DataTableStateChangeEvent',
    'HeadlessDataTableOptions'
  ]) {
    assert.match(declarations, new RegExp(`\\b${publicType}\\b`));
  }
});

test('source no longer performs index lookup inside the sort comparator', () => {
  const source = fs.readFileSync(path.join(root, 'src/lib/utils.ts'), 'utf8');
  assert.doesNotMatch(source, /rows\.indexOf\(/);
  assert.match(source, /left\.index - right\.index/);
});
