import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const pack = JSON.parse(execFileSync('npm', [
  'pack',
  dist,
  '--dry-run',
  '--json'
], {
  cwd: root,
  encoding: 'utf8'
}))[0];
const files = pack.files.map((entry) => entry.path);

for (const expected of [
  'package.json',
  'README.md',
  'LICENSE',
  'CHANGELOG.md',
  'SECURITY.md',
  'fesm2022/stackline-angular-data-table-component.mjs',
  'fesm2022/stackline-angular-data-table-component.mjs.map',
  'types/stackline-angular-data-table-component.d.ts'
]) {
  assert.ok(files.includes(expected), `${expected} is missing from the package archive.`);
}

assert.ok(files.every((file) => !file.startsWith('src/')));
assert.ok(files.every((file) => !file.startsWith('tests/')));

const packageJson = JSON.parse(fs.readFileSync(path.join(dist, 'package.json'), 'utf8'));
const exportTarget = packageJson.exports['.'].default;
const typeTarget = packageJson.exports['.'].types;

assert.ok(fs.existsSync(path.resolve(dist, exportTarget)), 'Runtime export target is missing.');
assert.ok(fs.existsSync(path.resolve(dist, typeTarget)), 'Type export target is missing.');

console.log(`Package archive verified: ${pack.filename}, ${files.length} files.`);
