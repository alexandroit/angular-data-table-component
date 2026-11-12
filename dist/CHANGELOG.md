# Changelog

All notable changes to this project are documented here.

## 22.2.0 - 2026-11-12

Every new input defaults to the 22.1.7 behavior. The fixes below are on by
default because the output they replace was wrong.

### Added

- `paginationHideRowsPerPage` hides the rows-per-page selector while keeping pagination ([#36](https://github.com/alexandroit/angular-data-table-component/issues/36)).
- `paginationComponentOptions` with the react-data-table-component options `noRowsPerPage`, `rowsPerPageText`, `rangeSeparatorText`, `selectAllRowsItem`, and `selectAllRowsItemText`, plus `showingText`, `pageText`, `firstPageText`, `previousPageText`, `nextPageText`, and `lastPageText`. The "All" option sets the page size to the total row count (`paginationTotalRows` in server mode) and emits `rowsPerPageChange`; the configured sizes stay listed before it.
- `localization` for every text and accessible name: the pager landmark and buttons, sorting, selection, expansion, grouping, the loading text, and the default table label. `{column}`, `{row}`, `{count}`, `{label}`, `{value}`, and `{table}` are replaced literally. `localization` and `paginationComponentOptions` also accept `null`, so they can be bound with the `async` pipe.
- `getSelectAllAriaLabel()` returns the select-all label with `localization` applied; the template uses it. `selectAllAriaLabel` keeps its 22.1.7 English value and type.
- `paginationResetDefaultPage`: every change after the first returns to `paginationDefaultPage` and emits `pageChange` when the page changes.
- `paginationServerOptions` with `persistSelectedOnSort` and `persistSelectedOnPageChange` for server pagination. With `persistSelectedOnPageChange`, `selectedRows`, `selectedCount`, and `selectedRowsChange` include the rows selected on other pages.
- `paginationTemplate` replaces the pager content; its context type is `DataTablePaginationContext`.
- Opt-in pagination flags, all `false` by default: `keepPinnedRows`, `persistPagination`, `paginationResetOnFilterChange`, and `paginationEmitOnReset`. The headless controller accepts `paginationEmitOnReset` and `paginationResetOnFilterChange`.
- `trackBy` for the rendered rows. `(index, row) => row.id` keeps the DOM rows when a refresh returns new objects.
- `tableStateChange` and the headless `state` carry `page`, `rowsPerPage`, `sortColumnId`, and `sortDirection`. `sortColumnId` is the column `id`, else its `accessorKey`, its selector when that is a string, or its `name`.
- When the table has a `title` or an `ariaLabel`, the pager is a `navigation` landmark named after it, for example "Orders pagination". `localization.pagination.navigationAriaLabel` sets the name (`{table}` is the table name) and also makes the pager of an unnamed table a landmark; an empty string removes the landmark. An unnamed table's pager is not a landmark, so two tables on one page never share a landmark name.
- The pager's range text is a polite live region, and body rows and expanded detail rows have `aria-rowindex`.
- When a pager button disables itself (First or Prev on page 1, Next or Last on the last page), focus moves to the nearest enabled pager button. The auto-repeat of a held Enter does not activate that button, so holding Enter on Next stops on the last page.
- With `persistPagination`, the loading block keeps the height of the rows it replaces, so the pager stays in place during server page loads.
- Public `rowsPerPageOptions` getter and the exported types `DataTablePaginationOptions`, `DataTableLocalization`, `DataTablePaginationServerOptions`, and `DataTablePaginationContext`.

### Fixed

- Change detection: the component uses the eager strategy again. Angular 22 made components OnPush by default, so since 22.0 calls such as `changePage` or `setGrouping` from a parent, and in-place data edits, left the view stale. Visible change: the table updates right after those calls.
- Performance: during the table's own render pass, filtering, sorting, grouping, pagination, and selection state are computed once instead of on every template read, and rows without a `keyField` value no longer scan the data. Reads between render passes (a parent binding above the table, an event handler, other code) compute fresh values, as before, so in-place edits show at once. Visible change: none; large tables render faster. Getter results such as `displayedRows` are shared within a pass and must be treated as read-only.
- Sorting on grouped header columns: nested columns now get `aria-sort`, the Asc and Desc indicator, and descending order on the second click. A nested `defaultSortFieldId` applies, and new column objects keep the active sort by column key. Visible change: grouped headers sort both ways and show their state.
- Page sizes and pages are normalized: a string such as `'5'` is a number, sizes below 1 or not numeric fall back to the previous valid size (else 10), and fractions are floored. Visible change: `paginationPerPage="5"` shows 5 rows on every page; it showed 50 from page 2 on.
- `paginationDefaultPage` waits until rows first arrive, and pages left out of range by `setGrouping`, `setColumnVisibility`, or in-place edits are clamped on the next check. Visible change: a server table can open on its default page before data arrives, and "Showing 17-12 of 12 | Page 3 of 2" no longer appears.
- The rows-per-page select shows the real page size; it showed the first option. Its options are sorted and de-duplicated, invalid ones are dropped, and the current size is added when missing. Visible change: with `paginationPerPage` 5 the select shows 5 and lists 5, 10, 15, 20, 25, and 30.
- `aria-rowcount` counts the header rows and the expanded detail rows, as ARIA requires. Visible change for assistive technology only: 12 rows under one header row report 13.
- Dark theme: the rows-per-page label uses the light pager text color (#b0c1d8) instead of #59708a, which had a 3.35:1 contrast ratio. Visible change: that label is lighter in the dark theme.
- The headless controller normalizes page sizes and pages, keeps the requested page until rows exist, and keeps the active sort when columns are recreated.
- `data`, `columns`, `hiddenColumns`, `conditionalRowStyles`, and `contextMessage` accept `null` and `undefined`; binding them threw a TypeError. Visible change: `[data]="rows$ | async"` renders an empty table until the first value and compiles under `strictTemplates` without `|| []`.
- Default sorting orders `Date` values chronologically; it compared their text, which sorted by weekday name. Invalid dates sort like null values, and other values sort as before. Applies to the component and the headless controller.

### Upgrade notes

- `DataTableComponent` now implements `ngDoCheck` and `ngAfterViewChecked`. A subclass that defines either hook must mark it `override` (required with `noImplicitOverride`, which `ng new` enables) and call `super.ngDoCheck()` or `super.ngAfterViewChecked()`. Without `super.ngDoCheck()`, results stay correct but are not cached.
- The table clamps `currentPage` during change detection when rows shrink, also after in-place edits. A parent binding that reads pager state such as `table.currentPage` should sit below the `<stackline-data-table>` element, or use `(pageChange)`; above it, development mode can report ExpressionChangedAfterItHasBeenChecked for that pass.

## 22.1.7 - 2026-11-05

- Update the runtime and current Angular 22 documentation to the published `@stackline/tslib@1.1.0`, based on upstream tslib 2.9.1.
- Preserve Angular 22 peer compatibility and historical documentation lines.

## 22.1.6 - 2026-11-04

- Refresh the current framework and compatible build/test dependencies.
- Validate normal installs, updates, and the maintained documentation with zero known npm audit vulnerabilities.
- Synchronize the current package documentation and release metadata.

## 22.1.2 - 2026-09-28

- Reuse the verified Stackline fork of tslib, preserving its import name and runtime API.
- Verify the aliased helper library in the Angular package, installed consumers, and live documentation.

## 22.1.1 - 2026-09-28

- Organize package documentation, preserve examples and compatibility guidance, and add verified Stackline community links.
- Add precise Stackline discovery metadata and standardize GitHub release tooling on Node 24.20.0 and npm 11.19.0.
- Fail closed on registry lookup errors and use the reviewed GitHub artifact workflow for public npm releases.
- Patch vulnerable development and documentation dependencies within their existing compatible ranges.
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
