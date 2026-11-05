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

  assert.equal(packageJson.version, packageJson.dependencies['@stackline/angular-data-table-component']);
  assert.equal(packageJson.dependencies['@angular/core'], '22.2.4');
  assert.match(packageJson.dependencies['@stackline/angular-data-table-component'], /^\d+\.\d+\.\d+$/);
  const lock = JSON.parse(fs.readFileSync(path.join(docsRoot, 'package-lock.json'), 'utf8'));
  const installed = lock.packages['node_modules/@stackline/angular-data-table-component'];
  assert.equal(installed.version, packageJson.version);
  assert.equal(installed.resolved, `https://registry.npmjs.org/@stackline/angular-data-table-component/-/angular-data-table-component-${packageJson.dependencies['@stackline/angular-data-table-component']}.tgz`);
  assert.match(installed.integrity, /^sha512-/);
  assert.ok(app.includes(`angularVersion = '${packageJson.dependencies['@angular/core']}'`));
  assert.ok(app.includes(`packageVersion = '${packageJson.version}'`));
  assert.match(index, /<base href="\.\/">/);
  assert.match(index, /rel="canonical"/);
});

test('documentation index redirects to the current Angular line', () => {
  const { version } = JSON.parse(fs.readFileSync(path.join(docsRoot, 'package.json'), 'utf8'));
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
    assert.ok(content.includes(version), `${file} must document ${version}.`);
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
