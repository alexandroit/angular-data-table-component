# @stackline/angular-data-table-component

> An Angular 22 data table with sorting, filtering, pagination, selection, grouping, pinning, virtualization, templates, and a headless controller.

[![npm version](https://img.shields.io/npm/v/@stackline/angular-data-table-component.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-data-table-component)
[![license](https://img.shields.io/npm/l/@stackline/angular-data-table-component.svg?style=flat-square)](https://github.com/alexandroit/angular-data-table-component)
[![GitHub repository](https://img.shields.io/badge/GitHub-repository-181717?style=flat-square&logo=github)](https://github.com/alexandroit/angular-data-table-component)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/)** | **[Live examples](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/?docs_embed=1)** | **[Example source](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/source/?docs_embed=1)** | **[Angular table guide](https://alexandro.net/docs/guides/angular-table/)** | **[npm](https://www.npmjs.com/package/@stackline/angular-data-table-component)** | **[Issues](https://github.com/alexandroit/angular-data-table-component/issues)** | **[Repository](https://github.com/alexandroit/angular-data-table-component)**

**Current package version:** `22.2.0`

---

## Why this package?

`@stackline/angular-data-table-component` provides Angular 22 tables and a headless controller for applications that need configurable data presentation while keeping their own templates and styling.

## Compatibility

| Item | Value |
| --- | --- |
| Package | `@stackline/angular-data-table-component@22.2.0` |
| Peer: `@angular/common` | `>=22.0.0 <23.0.0` |
| Peer: `@angular/core` | `>=22.0.0 <23.0.0` |
| Runtime dependencies | `tslib` |
| Package format | Angular Package Format with partial-Ivy compilation and TypeScript declarations |


### Angular Compatibility

Package majors follow Angular majors. Install an exact historical major when
maintaining an older Angular application:

| Angular | Package |
| --- | --- |
| 22 | `@stackline/angular-data-table-component@22` |
| 21 | `@stackline/angular-data-table-component@21` |
| 20 | `@stackline/angular-data-table-component@20` |
| 19 | `@stackline/angular-data-table-component@19` |
| 18 | `@stackline/angular-data-table-component@18` |
| 17 | `@stackline/angular-data-table-component@17` |
| 16 | `@stackline/angular-data-table-component@16` |
| 15 | `@stackline/angular-data-table-component@15` |
| 4-14 | Matching package major |
| 2 | `@stackline/angular-data-table-component@2` |

Historical lines remain available on npm. Security and maintenance work is
focused on the current Angular line unless a separate backport is announced.

<a id="install"></a>

## Installation

```bash
npm install @stackline/angular-data-table-component
```

The current release supports Angular 22:

```text
@angular/common  >=22.0.0 <23.0.0
@angular/core    >=22.0.0 <23.0.0
```

Angular applications should keep all Angular framework packages on the same
patch version.

## Usage

### Quick Start

Import the NgModule:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from '@stackline/angular-data-table-component';

@NgModule({
  imports: [BrowserModule, DataTableModule]
})
export class AppModule {}
```

Define columns and rows:

```ts
import { DataTableColumn } from '@stackline/angular-data-table-component';

columns: DataTableColumn[] = [
  { id: 'name', name: 'Name', selector: 'name', sortable: true },
  { id: 'team', name: 'Team', selector: 'team' },
  { id: 'score', name: 'Score', selector: 'score', sortable: true, right: true }
];

rows = [
  { id: 1, name: 'Ada', team: 'Platform', score: 98 },
  { id: 2, name: 'Linus', team: 'Runtime', score: 94 }
];
```

Render the table:

```html
<stackline-data-table
  title="Team scores"
  ariaLabel="Team scores"
  [columns]="columns"
  [data]="rows"
  [pagination]="true"
  [selectableRows]="true"
  [highlightOnHover]="true"
  (selectedRowsChange)="selection = $event">
</stackline-data-table>
```

`data`, `columns`, `hiddenColumns`, `conditionalRowStyles`, and `contextMessage`
accept `null` and `undefined`, so `[data]="rows$ | async"` renders an empty table
until the first value arrives.

## Features

- Client and server sorting, filtering, and pagination
- Multi-row, single-row, disabled-row, and visible-page selection
- Global and per-column filters
- Column visibility, ordering, sizing, groups, and sticky pinning
- Row grouping, top/bottom pinning, expansion, and conditional styles
- Virtual row windows for large data sets
- Custom cells and expandable content with Angular templates
- Keyboard activation and grid-oriented ARIA attributes
- Localizable texts and accessible names, pager options, and custom pager templates
- Dark and default themes with no external stylesheet import
- View-independent `HeadlessDataTableController` for custom Angular markup

Every feature has a runnable example in the
[live Angular 22 examples](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/?docs_embed=1), and the
[example source](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/source/?docs_embed=1) lists the files behind each one. The
[Angular 22 documentation](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/) also links the
[Angular table guide](https://alexandro.net/docs/guides/angular-table/) on server paging,
sorting, and selection.

## Security

Please report vulnerabilities privately as described in [SECURITY.md](https://github.com/alexandroit/angular-data-table-component/blob/main/SECURITY.md).
Do not include sensitive details in a public issue.

## API Surface

### Templates

```html
<ng-template #scoreCell let-row let-value="value">
  <strong [class.high-score]="value >= 90">{{ value }}</strong>
</ng-template>

<stackline-data-table [columns]="templateColumns" [data]="rows">
</stackline-data-table>
```

```ts
import { AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { DataTableColumn } from '@stackline/angular-data-table-component';

@ViewChild('scoreCell') scoreCell!: TemplateRef<unknown>;

templateColumns: DataTableColumn[] = [];

ngAfterViewInit() {
  this.templateColumns = [
    { id: 'name', name: 'Name', selector: 'name' },
    { id: 'score', name: 'Score', selector: 'score', cellTemplate: this.scoreCell }
  ];
}
```


### Headless Usage

Use the same data behavior with custom HTML:

```ts
import { createDataTableController } from '@stackline/angular-data-table-component';

const table = createDataTableController({
  columns,
  data: rows,
  pagination: true,
  perPage: 25,
  selectableRows: true
});

table.setGlobalFilter('platform');
table.toggleSort(columns[0]);

console.log(table.displayedRows);
console.log(table.state);
```

`table.state` includes `page`, `rowsPerPage`, `sortColumnId`, and `sortDirection`.
The controller also accepts the opt-in `paginationEmitOnReset` and
`paginationResetOnFilterChange` options described below.

### Fixed Page Size Without the Rows-Per-Page Selector

`paginationHideRowsPerPage` hides the rows-per-page selector and keeps the rest of
the pager. The page size stays at `paginationPerPage`, and First, Prev, Next, and
Last keep working:

```html
<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [pagination]="true"
  [paginationPerPage]="25"
  [paginationHideRowsPerPage]="true">
</stackline-data-table>
```

`[paginationComponentOptions]="{ noRowsPerPage: true }"`, the
react-data-table-component option, does the same. See the
[live example](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/?docs_embed=1#/hide-rows-per-page).

### Pagination Texts, Localization, and Custom Pagers

`paginationComponentOptions` uses the react-data-table-component option names.
Every option is optional and falls back to the English default:

```ts
import { DataTableLocalization, DataTablePaginationOptions } from '@stackline/angular-data-table-component';

paginationOptions: DataTablePaginationOptions = {
  rowsPerPageText: 'Linhas por página:',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,       // adds an "All" option worth the total row count
  selectAllRowsItemText: 'Todos'
};

localization: DataTableLocalization = {
  pagination: { navigationAriaLabel: 'Paginação de {table}', nextPageAriaLabel: 'Próxima página' },
  sort: { sortAscendingAriaLabel: 'Ordenar {column} crescente' }
};
```

```html
<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [pagination]="true"
  [paginationComponentOptions]="paginationOptions"
  [localization]="localization">
</stackline-data-table>
```

`localization` covers the pager, sorting, selection, expansion, grouping, the
loading text, and the default table label. `{column}`, `{row}`, `{count}`,
`{label}`, `{value}`, and `{table}` are replaced literally. The pager buttons keep
their text as accessible name unless a `*PageAriaLabel` is given. Both inputs
accept `null`, so they can be bound with the `async` pipe.

When the table has a `title` or an `ariaLabel`, the pager is a `navigation`
landmark named after the table, such as "Orders pagination".
`navigationAriaLabel` changes that name (`{table}` is the table name) and also
makes the pager of an unnamed table a landmark; an empty string removes the
landmark. The pager of an unnamed table is not a landmark, so two tables on one
page never expose two landmarks with the same name.

`paginationTemplate` replaces the pager content and keeps its container. The
template then owns focus and announcements: move focus when one of its buttons
disables itself, and mark its range text `aria-live="polite"`. The template
context is `DataTablePaginationContext`:

```html
<ng-template #pager let-pager>
  {{ pager.startRow }}-{{ pager.endRow }} of {{ pager.rowCount }}
  <button type="button" (click)="pager.changePage(pager.currentPage + 1)">Next</button>
</ng-template>

<stackline-data-table [columns]="columns" [data]="rows" [pagination]="true" [paginationTemplate]="pager">
</stackline-data-table>
```

`trackBy` keeps the DOM rows when a refresh, such as an HttpClient reload,
returns new objects for the same records: `[trackBy]="trackById"` with
`trackById = (index: number, row: any) => row.id`. Without it, rows are tracked
by object identity, as before.

During the table's own render pass, derived getters such as `displayedRows` and
`selectedRows` return the same array. Treat them as read-only. Reads between
passes (a parent binding above the table, an event handler, other code) compute
fresh values, so in-place edits show at once, as in earlier releases.

The table clamps `currentPage` during change detection when rows shrink, also
after in-place edits. Read pager state such as `table.currentPage` in a binding
below the `<stackline-data-table>` element, or from `(pageChange)`; a binding
above it can report ExpressionChangedAfterItHasBeenChecked in development mode.

`DataTableComponent` implements `ngDoCheck` and `ngAfterViewChecked`. A subclass
that defines either hook must mark it `override` and call `super`.


### Main Inputs

| Input | Purpose |
| --- | --- |
| `columns`, `data`, `keyField` | Table structure, records, and stable row identity |
| `trackBy` | Row identity for the rendered rows, such as `(index, row) => row.id` |
| `pagination`, `paginationServer`, `paginationPerPage` | Client or controlled pagination |
| `paginationDefaultPage`, `paginationResetDefaultPage` | Starting page; change the reset input to return to it |
| `paginationRowsPerPageOptions`, `paginationHideRowsPerPage` | Rows-per-page choices, or hide that selector |
| `paginationComponentOptions` | Pager texts, `noRowsPerPage`, and an "All" rows-per-page option |
| `paginationServerOptions` | Selection rules for server page and sort changes |
| `paginationTemplate` | Custom pager content |
| `keepPinnedRows`, `persistPagination`, `paginationResetOnFilterChange`, `paginationEmitOnReset` | Opt-in pagination behavior |
| `localization` | Texts and accessible names |
| `sortServer`, `manualSorting`, `manualFiltering`, `manualPagination` | Controlled data operations |
| `globalFilter`, `columnFilters` | Text and column-level filtering |
| `selectableRows`, `selectableRowsSingle`, `selectableRowsVisibleOnly` | Selection modes |
| `expandableRows`, `expandableRowTemplate` | Expandable detail rows |
| `columnVisibility`, `columnOrder`, `columnPinning`, `columnSizing` | Column controls |
| `groupBy`, `grouping`, `rowPinning` | Grouping and pinned rows |
| `virtualRows`, `virtualStartIndex`, `virtualRowCount` | Virtual row window |
| `theme`, `dense`, `striped`, `responsive` | Presentation |

### Opt-in Behavior

These inputs default to `false`, which keeps the behavior of earlier releases.
Turn them on when the new behavior fits the application:

| Input | When `true` | Off by default because |
| --- | --- | --- |
| `keepPinnedRows` | Pinned rows show on every page; client pagination pages and counts the other rows | Pinned rows were paginated with the others |
| `persistPagination` | The pager stays mounted, in place, while `progressPending` is true: the loading block keeps the height of the rows it replaces, so focus and layout survive server page loads | The pager was hidden during loads |
| `paginationResetOnFilterChange` | With client pagination, a new `globalFilter` or `columnFilters` input value goes to page 1 | Input changes kept the page |
| `paginationEmitOnReset` | `pageChange` is also emitted when the table changes the page itself: a sort or filter reset to page 1, or clamping after rows shrink | Those page changes were silent |

`paginationServerOptions` is opt-in too. With `null`, the default, selection
keys survive server page and sort changes, but rows from other pages are not
listed in `selectedRows`. With an object and `paginationServer`, a page change
clears the selection unless `persistSelectedOnPageChange` is true, which also
lists the rows selected on other pages; a sort clears it unless
`persistSelectedOnSort` is true.

### Main Outputs

`sortChange`, `selectedRowsChange`, `pageChange`, `rowsPerPageChange`,
`rowClicked`, `rowDoubleClicked`, `rowExpandToggled`, `globalFilterChange`,
`columnFiltersChange`, `columnVisibilityChange`, `columnOrderChange`,
`groupingChange`, and `tableStateChange`. `tableStateChange` also carries
`page`, `rowsPerPage`, `sortColumnId`, and `sortDirection`.

<a id="run-locally"></a>
<a id="development"></a>

## Local Development

Use Node `24.20.0` and npm `11.19.0` for reproducible release artifacts.

The release toolchain uses Node `24.20.0` and npm `11.19.0`; package peer/runtime support remains as documented above:

```bash
npm ci
npm run verify
```

`verify` builds the Angular package, runs behavioral and package-contract tests,
validates clean Angular 22 consumers, and builds the live documentation.

## Consumer Smoke Test

`npm run check` builds the library and checks its public package contents and existing behavior. Run `npm run test:consumer` for the existing installed-consumer matrix.

## Release Checklist

- Run `npm ci`, `npm run check`, and the applicable browser or consumer checks.
- Review `npm audit` and `npm audit --omit=dev` separately.
- Review the packed README, declarations, exports, license, and compatibility metadata.
- Publish through the [GitHub Actions workflow](https://github.com/alexandroit/angular-data-table-component/actions/workflows/publish.yml) using the tested artifact's SHA-512 digest.
- Verify the exact npm tarball, version, and GitHub provenance after publication; never replace a published version.

## License

[MIT](https://github.com/alexandroit/angular-data-table-component/blob/main/LICENSE) Copyright (c) 2026 Alexandro Marques.

## Credits and original authors

- Copyright (c) 2026 Alexandro Marques.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
