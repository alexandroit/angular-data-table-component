import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FIXTURE_MANIFEST = 'package.fixture.json';

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function collectMetadata(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) collectMetadata(target, files);
    else if (entry.name === 'stackline-release.json') files.push(target);
  }
  return files;
}

function frameworkDependencies(framework, dependencies) {
  if (framework === 'angular') {
    return Object.entries(dependencies)
      .filter(([name]) => name.startsWith('@angular/'));
  }
  if (framework === 'react') {
    return ['react', 'react-dom']
      .filter((name) => dependencies[name])
      .map((name) => [name, dependencies[name]]);
  }
  if (framework === 'vue') {
    return dependencies.vue ? [['vue', dependencies.vue]] : [];
  }
  return [];
}

function validateFrameworkFamilies(repositoryRoot) {
  const docsRoot = path.join(repositoryRoot, 'docs-src');
  const currentMajor = Number.parseInt(readJson(path.join(repositoryRoot, 'package.json')).version, 10);
  const families = readdirSync(docsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^angular-\d+$/.test(entry.name))
    .map((entry) => ({
      directory: path.join(docsRoot, entry.name),
      major: Number.parseInt(entry.name.slice('angular-'.length), 10)
    }));
  let archived = 0;

  assert(families.some(({ major }) => major === currentMajor),
    `Missing current Angular ${currentMajor} documentation family`);

  for (const { directory, major } of families) {
    const activeManifest = path.join(directory, 'package.json');
    const activeLock = path.join(directory, 'package-lock.json');
    const fixtureManifest = path.join(directory, FIXTURE_MANIFEST);
    const fixtureLock = path.join(directory, 'package-lock.fixture.json');

    if (major === currentMajor) {
      assert(existsSync(activeManifest),
        `Current Angular ${major} docs must expose package.json`);
      assert(existsSync(activeLock),
        `Current Angular ${major} docs must expose package-lock.json`);
      assert(!existsSync(fixtureManifest),
        `Current Angular ${major} docs must not be archived`);
      readJson(activeLock);
      continue;
    }

    archived += 1;
    assert(existsSync(fixtureManifest),
      `Missing family fixture manifest: ${directory}`);
    assert(!existsSync(activeManifest),
      `Historical family must not expose package.json: ${directory}`);
    assert(!existsSync(activeLock),
      `Historical family must not expose package-lock.json: ${directory}`);

    const manifest = readJson(fixtureManifest);
    assert(manifest.private === true, 'Historical family fixtures must stay private');

    for (const [name, version] of frameworkDependencies(
      'angular',
      manifest.dependencies || {}
    )) {
      assert(
        Number.parseInt(String(version).match(/\d+/)?.[0], 10) === major,
        `${name} must stay on Angular ${major}, found ${version}`
      );
    }

    if (existsSync(fixtureLock)) readJson(fixtureLock);
  }

  return archived;
}
export function validateRelease(releaseRoot) {
  const metadata = readJson(path.join(releaseRoot, 'stackline-release.json'));
  const manifestFile = path.join(releaseRoot, FIXTURE_MANIFEST);
  const legacyManifest = path.join(releaseRoot, 'package.json');
  const manifest = readJson(existsSync(manifestFile) ? manifestFile : legacyManifest);
  const dependencies = {
    ...(manifest.dependencies || {}),
    ...(manifest.devDependencies || {})
  };

  assert(manifest.private === true, 'Compatibility fixtures must stay private');
  assert(metadata.packageName, 'stackline-release.json must declare packageName');
  assert(metadata.framework, 'stackline-release.json must declare framework');
  assert(metadata.exactVersion, 'stackline-release.json must declare exactVersion');
  assert(
    metadata.family === `${metadata.framework}-${metadata.major}`,
    `Invalid framework family: ${metadata.family}`
  );
  assert(
    path.basename(releaseRoot) === metadata.exactVersion,
    `Fixture directory must match ${metadata.exactVersion}`
  );
  assert(
    Number.parseInt(metadata.exactVersion, 10) === metadata.major,
    `Fixture major does not match ${metadata.exactVersion}`
  );
  assert(
    dependencies[metadata.packageName] === `file:${metadata.localInstallSource}`,
    `Invalid local package source for ${metadata.packageName}`
  );
  assert(Array.isArray(metadata.expectedExports), 'expectedExports must be an array');

  for (const [name, version] of frameworkDependencies(metadata.framework, dependencies)) {
    assert(
      version === metadata.exactVersion,
      `${name} must be pinned to ${metadata.exactVersion}, found ${version}`
    );
  }

  return metadata;
}

export function validateCatalog(repositoryRoot) {
  const docsRoot = path.join(repositoryRoot, 'docs-src');
  const metadataFiles = collectMetadata(docsRoot);
  assert(metadataFiles.length > 0, 'No compatibility fixtures were found');

  for (const metadataFile of metadataFiles) {
    const releaseRoot = path.dirname(metadataFile);
    assert(existsSync(path.join(releaseRoot, FIXTURE_MANIFEST)),
      `Missing ${FIXTURE_MANIFEST}: ${releaseRoot}`);
    assert(!existsSync(path.join(releaseRoot, 'package.json')),
      `Historical fixture must not expose package.json: ${releaseRoot}`);
    assert(!existsSync(path.join(releaseRoot, 'package-lock.json')),
      `Historical fixture must not expose package-lock.json: ${releaseRoot}`);
    assert(existsSync(path.join(releaseRoot, 'stackline-validate.mjs')),
      `Missing fixture validator: ${releaseRoot}`);
    validateRelease(releaseRoot);
  }

  const archivedFamilies = validateFrameworkFamilies(repositoryRoot);
  process.stdout.write(
    `Validated ${metadataFiles.length} exact-version fixtures and ` +
      `${archivedFamilies} historical framework families\n`
  );
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] === currentFile && process.argv[2] === '--catalog') {
  validateCatalog(path.resolve(path.dirname(currentFile), '..'));
}
