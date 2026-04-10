import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function syncFamilySource(family) {
  if (!family) {
    throw new Error('Usage: node scripts/sync-docs-source.mjs <family>');
  }

  const docsFamilyDir = path.join(rootDir, 'docs-src', family);
  const sourceDir = path.join(rootDir, 'src');
  const targetDir = path.join(docsFamilyDir, '.stackline-lib');

  if (!fs.existsSync(docsFamilyDir)) {
    throw new Error(`Docs family directory not found: ${docsFamilyDir}`);
  }

  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(targetDir, { recursive: true });
  fs.cpSync(sourceDir, targetDir, { recursive: true });

  console.log(`Synced library source into docs workspace for ${family}.`);
}

try {
  syncFamilySource(process.argv[2]);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
