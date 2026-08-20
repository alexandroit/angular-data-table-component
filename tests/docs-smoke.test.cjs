const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'docs-src', 'angular-22');

test('Angular 22 documentation metadata matches the release', () => {
  const packageJson = JSON.parse(fs.readFileSync(path.join(docsRoot, 'package.json'), 'utf8'));
  const app = fs.readFileSync(path.join(docsRoot, 'src/app/app.component.ts'), 'utf8');
  const index = fs.readFileSync(path.join(docsRoot, 'src/index.html'), 'utf8');

  assert.equal(packageJson.version, '22.1.0');
  assert.equal(packageJson.dependencies['@angular/core'], '22.1.3');
  assert.equal(packageJson.dependencies['@stackline/angular-data-table-component'], 'file:../../dist');
  assert.match(app, /angularVersion = '22\.1\.3'/);
  assert.match(app, /packageVersion = '22\.1\.0'/);
  assert.match(index, /<base href="\.\/">/);
  assert.match(index, /rel="canonical"/);
});

test('documentation index redirects to the current Angular line', () => {
  const index = fs.readFileSync(path.join(root, 'docs/index.html'), 'utf8');
  assert.match(index, /content="0; url=angular-22\/"/);
  assert.match(index, /class="version latest" href="angular-22\/"/);
  assert.doesNotMatch(index, /radial-gradient|angular-21\/">Angular 21 <span>\(latest\)/);

  for (const file of [
    path.join(root, 'docs/llms.txt'),
    path.join(root, 'docs/llms-full.txt'),
    path.join(docsRoot, 'public/llms.txt'),
    path.join(docsRoot, 'public/llms-full.txt')
  ]) {
    const content = fs.readFileSync(file, 'utf8');
    assert.match(content, /@stackline\/angular-data-table-component/);
    assert.match(content, /22\.1\.0/);
  }
});

test('documentation exposes all examples without stale framework copy', () => {
  const menu = fs.readFileSync(
    path.join(docsRoot, 'src/app/shared/example-menu.ts'),
    'utf8'
  );
  const componentFiles = fs.readdirSync(path.join(docsRoot, 'src/app/examples'));

  assert.equal((menu.match(/order: '/g) || []).length, 40);
  assert.ok(componentFiles.length > 0);
  assert.doesNotMatch(menu, /Angular 4|legacy/i);

  for (const relative of [
    'src/app/app.component.html',
    'src/app/shared/example-shell.component.html',
    'src/app/examples/http-client-data/http-client-data.component.ts',
    'src/app/examples/async-pipe-stream/async-pipe-stream.component.ts'
  ]) {
    const source = fs.readFileSync(path.join(docsRoot, relative), 'utf8');
    assert.doesNotMatch(source, /22\.0\.0|22\.0\.2|Angular 4|legacy/i, relative);
  }
});
