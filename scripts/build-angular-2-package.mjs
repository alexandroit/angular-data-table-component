import { copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'packages/angular-2');
const output = resolve(root, '.stackline-build/angular-data-table-lines/angular-2');

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

execFileSync('npx', ['tsc', '-p', resolve(source, 'tsconfig.json')], {
  cwd: root,
  stdio: 'inherit'
});

copyFileSync(resolve(source, 'package.json'), resolve(output, 'package.json'));
copyFileSync(resolve(source, 'README.md'), resolve(output, 'README.md'));
