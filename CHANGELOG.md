# Changelog

All notable changes to this project are documented here.

## Unreleased

- Classified non-current documentation families as compatibility fixtures while
  keeping the maintained framework line buildable and audited.
- Moved exact-version dependency records to `package.fixture.json`, repaired
  their validators, and added an offline catalog contract to keep historical
  metadata out of active dependency alerts.

## 22.1.0 - 2026-08-20

- Restored the complete Angular 22 source and public API in the GitHub repository.
- Updated the release toolchain to Angular 22.1.3, ng-packagr 22.1.1, and TypeScript 6.0.3.
- Enabled strict type-checking with TypeScript 6-compatible module resolution.
- Reduced client-side sort preparation from repeated linear index lookups to one indexed pass.
- Preserved stable ordering and accurate selector indexes, including duplicate row references.
- Hardened internal dictionaries for row IDs and column IDs such as `__proto__`, `prototype`, and `constructor`.
- Prevented custom objects without `hasOwnProperty` from breaking filters, styles, and visibility state.
- Added controlled rendering for circular object values.
- Added behavioral, package-contract, consumer, documentation, and browser validation.
- Included `LICENSE`, `CHANGELOG.md`, and `SECURITY.md` in the npm artifact.

## 22.0.0 - 2026-06-21

- Added the Angular 22 package line.
- Added filtering, grouping, pinning, virtual rows, keyboard behavior, and the headless controller.

## 2.0.0 - 2026-06-21

- Added the Angular 2 compatibility line.
