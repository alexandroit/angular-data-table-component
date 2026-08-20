import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(root, 'dist', 'package.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const runtime = './fesm2022/stackline-angular-data-table-component.mjs';
const types = './types/stackline-angular-data-table-component.d.ts';

manifest.main = runtime;
manifest.module = runtime;
manifest.es2022 = runtime;
manifest.fesm2022 = runtime;
manifest.typings = types;
manifest.types = types;
manifest.exports = {
  './package.json': {
    default: './package.json'
  },
  '.': {
    types,
    default: runtime
  }
};

delete manifest.files;
delete manifest.packageManager;

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
