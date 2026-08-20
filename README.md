# @stackline/angular-data-table-component

An Angular 22 data table for application screens that need sorting, filtering,
pagination, selection, grouping, pinning, virtualization, templates, or a
headless controller without adopting an entire UI framework.

[![npm](https://img.shields.io/npm/v/@stackline/angular-data-table-component.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-data-table-component)
[![downloads](https://img.shields.io/npm/dm/@stackline/angular-data-table-component.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-data-table-component)
[![CI](https://img.shields.io/github/actions/workflow/status/alexandroit/angular-data-table-component/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/alexandroit/angular-data-table-component/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/@stackline/angular-data-table-component.svg?style=flat-square)](https://github.com/alexandroit/angular-data-table-component/blob/main/LICENSE)

[Live documentation](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/)
| [npm](https://www.npmjs.com/package/@stackline/angular-data-table-component)
| [Issues](https://github.com/alexandroit/angular-data-table-component/issues)
| [Security](SECURITY.md)

## Install

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

## Quick Start

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

## Capabilities

- Client and server sorting, filtering, and pagination
- Multi-row, single-row, disabled-row, and visible-page selection
- Global and per-column filters
- Column visibility, ordering, sizing, groups, and sticky pinning
- Row grouping, top/bottom pinning, expansion, and conditional styles
- Virtual row windows for large data sets
- Custom cells and expandable content with Angular templates
- Keyboard activation and grid-oriented ARIA attributes
- Dark and default themes with no external stylesheet import
- View-independent `HeadlessDataTableController` for custom Angular markup

Every feature has a runnable example in the
[Angular 22 documentation](https://alexandro.net/docs/angular/angular-data-table-component/angular-22/).

## Templates

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

## Headless Usage

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

## Main Inputs

| Input | Purpose |
| --- | --- |
| `columns`, `data`, `keyField` | Table structure, records, and stable row identity |
| `pagination`, `paginationServer`, `paginationPerPage` | Client or controlled pagination |
| `sortServer`, `manualSorting`, `manualFiltering`, `manualPagination` | Controlled data operations |
| `globalFilter`, `columnFilters` | Text and column-level filtering |
| `selectableRows`, `selectableRowsSingle`, `selectableRowsVisibleOnly` | Selection modes |
| `expandableRows`, `expandableRowTemplate` | Expandable detail rows |
| `columnVisibility`, `columnOrder`, `columnPinning`, `columnSizing` | Column controls |
| `groupBy`, `grouping`, `rowPinning` | Grouping and pinned rows |
| `virtualRows`, `virtualStartIndex`, `virtualRowCount` | Virtual row window |
| `theme`, `dense`, `striped`, `responsive` | Presentation |

## Main Outputs

`sortChange`, `selectedRowsChange`, `pageChange`, `rowsPerPageChange`,
`rowClicked`, `rowDoubleClicked`, `rowExpandToggled`, `globalFilterChange`,
`columnFiltersChange`, `columnVisibilityChange`, `columnOrderChange`,
`groupingChange`, and `tableStateChange`.

## Angular Compatibility

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

## Development

Use Node `22.22.3` or newer in the Node 22 line:

```bash
npm ci
npm run verify
```

`verify` builds the Angular package, runs behavioral and package-contract tests,
validates clean Angular 22 consumers, and builds the live documentation.

## Security

Please report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).
Do not include sensitive details in a public issue.

## License

[MIT](LICENSE) Copyright (c) 2026 Alexandro Marques.
