# @stackline/angular-data-table-component

> A maintained Angular 2 data table component for legacy Angular applications, with sorting, row selection, expandable rows, client or server pagination, large-data pagination, image/media cells, headless custom HTML, column controls, grouped rows, templates, keyboard/ARIA behavior, and Angular-versioned release lines.

[![npm version](https://img.shields.io/npm/v/@stackline/angular-data-table-component.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-data-table-component)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/angular-data-table-component.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-data-table-component)
[![license](https://img.shields.io/npm/l/@stackline/angular-data-table-component.svg?style=flat-square)](https://github.com/alexandroit/angular-data-table-component/blob/master/LICENSE)
[![Angular 2](https://img.shields.io/badge/Angular-2.x-red?style=flat-square&logo=angular)](https://alexandro.net/docs/angular/angular-data-table-component/angular-2/)
[![TypeScript 2.4](https://img.shields.io/badge/TypeScript-2.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation & Live Demos](https://alexandro.net/docs/angular/angular-data-table-component/)** | **[Angular 2 Demo](https://alexandro.net/docs/angular/angular-data-table-component/angular-2/)** | **[StackBlitz Angular 2](https://stackblitz.com/github/alexandroit/stackline-angular-data-table-angular-2?file=src%2Fapp%2Fexamples%2Fbasic%2Fbasic.component.ts&initialpath=%2Fbasic&startScript=start)** | **[npm](https://www.npmjs.com/package/@stackline/angular-data-table-component)** | **[Issues](https://github.com/alexandroit/angular-data-table-component/issues)** | **[Repository](https://github.com/alexandroit/angular-data-table-component)** | **[Community Discussions](https://www.reddit.com/r/Stackline/)**

**Angular 2 release:** `2.0.0`

---

> **Credits:** Current Stackline maintenance, Angular release-line packaging, docs, live tests, publishing, and repository stewardship by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-data-table-component).

---

## Why this library?

`@stackline/angular-data-table-component` keeps Angular data-heavy screens practical across maintained Stackline release lines, including legacy Angular 2 applications that still run through SystemJS and classic NgModule imports.

The goal is not to force a design system or hide your data model. Your application owns the rows, columns, server calls, filters, sorting, pagination state, row templates, and business rules. The component provides a stable `<stackline-data-table>` surface for admin tables, dashboards, reports, support queues, finance views, and operational tools.

The Angular 2 package family is `2.0.0` and is intended for Angular `2.x` applications. The live validation app for this line is a clean Angular `2.4.10` SystemJS consumer app, organized with one example component per feature.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 2 tested package line | ✅ |
| Classic NgModule import | ✅ |
| SystemJS-friendly package output | ✅ |
| Declarative column definitions | ✅ |
| Custom cell templates with Angular `TemplateRef` | ✅ |
| Image and media cells through templates | ✅ |
| Headless custom HTML controller | ✅ |
| Expandable row templates | ✅ |
| Client-side sorting | ✅ |
| Server-side sorting event contract | ✅ |
| Client-side pagination | ✅ |
| Server-side pagination | ✅ |
| Large-data pagination example | ✅ |
| Rows-per-page selector | ✅ |
| Multi row selection | ✅ |
| Single row selection | ✅ |
| Visible-page selection | ✅ |
| Programmatic selected rows | ✅ |
| Disabled selectable rows | ✅ |
| Global filtering | ✅ |
| Column filtering | ✅ |
| Column visibility | ✅ |
| Column ordering | ✅ |
| Column pinning | ✅ |
| Row pinning | ✅ |
| Column sizing | ✅ |
| Grouped rows | ✅ |
| Grouped headers | ✅ |
| Faceted unique value counts | ✅ |
| Virtual row windowing | ✅ |
| Conditional row styles | ✅ |
| Row click, double-click, enter, and leave outputs | ✅ |
| Fixed header | ✅ |
| Dense layout | ✅ |
| Responsive wrapper and wrapped cells | ✅ |
| Loading and empty states | ✅ |
| Default and dark themes | ✅ |
| Keyboard/ARIA tested behavior | ✅ |
| Versioned docs builds per Angular line | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [StackBlitz Playground](#stackblitz-playground)
4. [Setup](#setup)
5. [Basic Usage](#basic-usage)
6. [Column Definitions](#column-definitions)
7. [Large Data Pagination](#large-data-pagination)
8. [Selection](#selection)
9. [Templates and Expandable Rows](#templates-and-expandable-rows)
10. [Image Cells](#image-cells)
11. [Headless Custom HTML](#headless-custom-html)
12. [Filtering and Column Controls](#filtering-and-column-controls)
13. [Accessibility and Keyboard](#accessibility-and-keyboard)
14. [API Surface](#api-surface)
15. [Wrapper Capabilities](#wrapper-capabilities)
16. [License](#license)

## Angular Version Compatibility

Each package family targets one Angular major. Keep the package major aligned with the Angular major used by your application.

| Package family | Angular family | Peer range | Install |
| :---: | :---: | :---: | :--- |
| `2.x` | Angular `2.x` | `>=2.0.0 <3.0.0` | `npm install @stackline/angular-data-table-component@2.0.0 --save-exact` |

Angular 3 does not have a package family because Angular skipped version 3.

## Installation

```bash
npm install @stackline/angular-data-table-component@2.0.0 --save-exact
```

## StackBlitz Playground

The Angular 2 StackBlitz project uses a dedicated clean consumer app with one route and one folder per example, matching the validation app structure.

**StackBlitz URL:**

https://stackblitz.com/github/alexandroit/stackline-angular-data-table-angular-2?file=src%2Fapp%2Fexamples%2Fbasic%2Fbasic.component.ts&initialpath=%2Fbasic&startScript=start

The target repository name is:

```text
alexandroit/stackline-angular-data-table-angular-2
```

Angular 2 projects normally keep the framework runtime aligned with the application:

```json
{
  "@angular/common": "2.4.10",
  "@angular/compiler": "2.4.10",
  "@angular/core": "2.4.10",
  "@angular/forms": "2.4.10",
  "@angular/platform-browser": "2.4.10",
  "@angular/platform-browser-dynamic": "2.4.10",
  "core-js": "2.6.12",
  "reflect-metadata": "0.1.10",
  "rxjs": "5.0.3",
  "systemjs": "0.19.47",
  "zone.js": "0.7.8"
}
```

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from '@stackline/angular-data-table-component';

@NgModule({
  imports: [
    BrowserModule,
    DataTableModule
  ]
})
export class AppModule {}
```

### 2. Add the SystemJS package map

```js
System.config({
  map: {
    '@stackline/angular-data-table-component': 'npm:@stackline/angular-data-table-component'
  },
  packages: {
    '@stackline/angular-data-table-component': {
      main: './index.js',
      defaultExtension: 'js'
    }
  }
});
```

## Basic Usage

### 1. Render a table

```html
<stackline-data-table
  title="Orders"
  ariaLabel="Orders table"
  [columns]="orderColumns"
  [data]="orders"
  [pagination]="true"
  [paginationPerPage]="5"
  [selectableRows]="true"
  [selectableRowsHighlight]="true"
  [striped]="true"
  [highlightOnHover]="true"
  defaultSortFieldId="order"
  (selectedRowsChange)="onSelection($event)"
  (sortChange)="onSort($event)">
</stackline-data-table>
```

### 2. Keep columns and rows in the component

```ts
orderColumns = [
  { id: 'order', name: 'Order', selector: 'order', sortable: true },
  { id: 'customer', name: 'Customer', selector: 'customer', sortable: true },
  { id: 'status', name: 'Status', selector: 'status', sortable: true, center: true },
  { id: 'total', name: 'Total', selector: this.formatTotal, sortable: true, right: true }
];

orders = [
  { id: 1, order: 'SO-1001', customer: 'Acme Studio', status: 'Paid', total: 1840 },
  { id: 2, order: 'SO-1002', customer: 'Northwind', status: 'Pending', total: 920 }
];

formatTotal(row: any) {
  return '$' + row.total.toLocaleString();
}
```

## Column Definitions

Columns describe how the component reads and renders row objects.

```ts
columns = [
  {
    id: 'order',
    name: 'Order',
    selector: 'order',
    sortable: true,
    width: '130px'
  },
  {
    id: 'customer',
    name: 'Customer',
    selector: 'customer',
    sortable: true,
    wrap: true,
    minWidth: '220px'
  },
  {
    id: 'total',
    name: 'Total',
    selector: function(row: any) {
      return '$' + row.total.toLocaleString();
    },
    sortable: true,
    right: true
  }
];
```

Common column options:

| Option | Purpose |
| :--- | :--- |
| `id` | Stable column key used by sorting, visibility, order, sizing, and pinning. |
| `name` | Header label. |
| `selector` | String key or function used to read a value from the row. |
| `sortable` | Enables sort controls for the column. |
| `cellTemplate` | Angular `TemplateRef` used for custom cells. |
| `width`, `minWidth`, `maxWidth` | Column sizing hints. |
| `right`, `center` | Cell alignment helpers. |
| `wrap` | Allows long text to wrap. |
| `omit` | Removes the column from the rendered table. |

## Large Data Pagination

For large datasets, pass only the visible page to the component and keep the total row count in your app state. This is the expected pattern for APIs, SQL-backed screens, reports, and admin grids with thousands or millions of rows.

```json
{
  "rows": [
    {
      "id": 1,
      "account": "Enterprise account 00001",
      "region": "Canada",
      "status": "Paid",
      "amount": 500
    },
    {
      "id": 2,
      "account": "Enterprise account 00002",
      "region": "Brazil",
      "status": "Pending",
      "amount": 573
    }
  ],
  "totalRows": 10000,
  "page": 1,
  "perPage": 25,
  "sort": {
    "field": "id",
    "direction": "asc"
  },
  "loading": false
}
```

```html
<stackline-data-table
  title="Large dataset"
  ariaLabel="Large server paginated dataset"
  [columns]="largeColumns"
  [data]="largePage.rows"
  [pagination]="true"
  [paginationServer]="true"
  [paginationTotalRows]="largePage.totalRows"
  [paginationDefaultPage]="largePage.page"
  [paginationPerPage]="largePage.perPage"
  [paginationRowsPerPageOptions]="pageSizes"
  [sortServer]="true"
  [progressPending]="largePage.loading"
  (pageChange)="loadPage($event.page, largePage.perPage)"
  (rowsPerPageChange)="loadPage(1, $event.rowsPerPage)"
  (sortChange)="sortLargeData($event)">
</stackline-data-table>
```

```ts
largePage = {
  rows: [],
  totalRows: 10000,
  page: 1,
  perPage: 25,
  loading: false
};

pageSizes = [10, 25, 50, 100];
sortField = 'id';
sortDirection = 'asc';

loadPage(page: number, perPage: number) {
  this.largePage.loading = true;

  this.ordersApi.getOrders({
    page: page,
    perPage: perPage,
    sortField: this.sortField,
    sortDirection: this.sortDirection
  }).then((result: any) => {
    this.largePage = {
      rows: result.rows,
      totalRows: result.totalRows,
      page: page,
      perPage: perPage,
      loading: false
    };
  });
}

sortLargeData(event: any) {
  this.sortField = event.column.id;
  this.sortDirection = event.direction;
  this.loadPage(1, this.largePage.perPage);
}
```

## Selection

### Multi selection

```html
<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [selectableRows]="true"
  [selectableRowsHighlight]="true"
  (selectedRowsChange)="onSelection($event)">
</stackline-data-table>
```

### Single selection

```html
<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [selectableRows]="true"
  [selectableRowsSingle]="true"
  keyField="id">
</stackline-data-table>
```

### Visible-page selection

```html
<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [pagination]="true"
  [selectableRows]="true"
  [selectableRowsVisibleOnly]="true">
</stackline-data-table>
```

## Templates and Expandable Rows

### Custom cell template

```html
<template #statusCell let-value="value">
  <span class="status-badge">{{ value }}</span>
</template>

<stackline-data-table
  title="Template cells"
  [columns]="templateColumns"
  [data]="orders">
</stackline-data-table>
```

```ts
@ViewChild('statusCell') statusCellTemplate: TemplateRef<any>;

ngAfterViewInit() {
  this.templateColumns = [
    { id: 'order', name: 'Order', selector: 'order', sortable: true },
    { id: 'status', name: 'Status', selector: 'status', cellTemplate: this.statusCellTemplate }
  ];
}
```

### Expandable row template

```html
<template #orderDetail let-row="row">
  <div>
    <strong>{{ row.customer }}</strong>
    <span>{{ row.notes }}</span>
  </div>
</template>

<stackline-data-table
  title="Expandable order details"
  [columns]="orderColumns"
  [data]="orders"
  [expandableRows]="true"
  [expandableRowTemplate]="orderDetail">
</stackline-data-table>
```

## Image Cells

Use Angular templates for product thumbnails, avatars, flags, badges, previews, or any other media-rich cell. The table owns the grid behavior while your application owns the cell HTML.

```html
<template #productCell let-row="row">
  <span class="product-cell">
    <img [src]="row.image" [alt]="row.name" />
    <span>
      <strong>{{ row.name }}</strong>
      <small>{{ row.category }}</small>
    </span>
  </span>
</template>

<template #stockCell let-value="value">
  <span class="stock-pill" [class.stock-low]="value < 10">
    {{ value }} units
  </span>
</template>

<stackline-data-table
  title="Product media table"
  ariaLabel="Product media table with images"
  [columns]="productColumns"
  [data]="products"
  [selectableRows]="true"
  [striped]="true">
</stackline-data-table>
```

```ts
@ViewChild('productCell') productCellTemplate: TemplateRef<any>;
@ViewChild('stockCell') stockCellTemplate: TemplateRef<any>;

products = [
  {
    id: 1,
    name: 'Studio Camera',
    category: 'Media kit',
    stock: 18,
    image: 'assets/products/camera.svg'
  },
  {
    id: 2,
    name: 'Audio Headphones',
    category: 'Support desk',
    stock: 7,
    image: 'assets/products/headphones.svg'
  }
];

ngAfterViewInit() {
  this.productColumns = [
    { id: 'product', name: 'Product', selector: 'name', cellTemplate: this.productCellTemplate },
    { id: 'category', name: 'Category', selector: 'category', sortable: true },
    { id: 'stock', name: 'Stock', selector: 'stock', cellTemplate: this.stockCellTemplate, right: true }
  ];
}
```

## Headless Custom HTML

When you need to replace the entire table HTML, use `createDataTableController`. It gives your component the same table engine for columns, filters, sorting, pagination, selection, row keys, cell text, and ARIA sort labels, but you render the markup yourself.

This is useful for dashboards, card grids, mobile-first layouts, command surfaces, or strict design systems where `<table>` is not the right DOM.

```ts
import { createDataTableController } from '@stackline/angular-data-table-component';

columns = [
  { id: 'name', name: 'Project', selector: 'name', sortable: true },
  { id: 'status', name: 'Status', selector: 'status', sortable: true },
  { id: 'owner', name: 'Owner', selector: 'owner', sortable: true },
  { id: 'score', name: 'Score', selector: 'score', sortable: true }
];

rows = [
  { id: 1, name: 'Mobile audit', status: 'Ready', owner: 'Maya', score: 92 },
  { id: 2, name: 'Billing export', status: 'Review', owner: 'Theo', score: 76 }
];

headless = createDataTableController({
  columns: this.columns,
  data: this.rows,
  selectableRows: true,
  pagination: true,
  perPage: 4
});

setSearch(value: string) {
  this.headless.setGlobalFilter(value || '');
}
```

```html
<section class="headless-board" role="grid" aria-label="Headless projects">
  <input
    type="search"
    placeholder="Search projects"
    (input)="setSearch($event.target.value)" />

  <div class="headless-sortbar" role="row">
    <button
      *ngFor="let column of headless.visibleColumns"
      type="button"
      [attr.aria-sort]="headless.getAriaSort(column)"
      [attr.aria-label]="headless.getSortButtonAriaLabel(column)"
      (click)="headless.toggleSort(column)">
      {{ column.name }}
    </button>
  </div>

  <article
    *ngFor="let row of headless.displayedRows"
    role="row"
    tabindex="0"
    [attr.aria-selected]="headless.isRowSelected(row)"
    (click)="headless.toggleRowSelection(row)">
    <strong>{{ row.name }}</strong>
    <span>{{ row.status }}</span>
    <small>{{ row.owner }} · {{ row.score }}</small>
  </article>

  <button type="button" (click)="headless.changePage(headless.currentPage - 1)">
    Previous
  </button>
  <button type="button" (click)="headless.changePage(headless.currentPage + 1)">
    Next
  </button>
</section>
```

## Filtering and Column Controls

### Global filter

```html
<input
  type="search"
  [value]="globalFilter"
  (input)="globalFilter = $event.target.value">

<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [globalFilter]="globalFilter">
</stackline-data-table>
```

### Column filters

```ts
columnFilters = [
  { id: 'status', value: 'Paid' },
  { id: 'region', value: 'Canada' }
];
```

```html
<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [columnFilters]="columnFilters">
</stackline-data-table>
```

### Visibility, ordering, pinning, sizing

```html
<stackline-data-table
  [columns]="columns"
  [data]="rows"
  [columnVisibility]="{ channel: false }"
  [columnOrder]="['customer', 'order', 'status', 'total']"
  [columnPinning]="{ left: ['order'], right: ['total'] }"
  [columnSizing]="{ order: 130, customer: 240, total: 130 }">
</stackline-data-table>
```

## Accessibility and Keyboard

The component is accessibility-focused and keyboard/ARIA tested.

The Angular 2 package exposes:

- `role="grid"` on the table
- `aria-label` through `ariaLabel`
- `aria-rowcount` and `aria-colcount`
- `aria-sort` on sortable headers
- `aria-selected` on selectable rows
- `aria-checked` on selection controls
- `aria-expanded` and `aria-controls` on expandable rows
- keyboard activation for selectable or expandable rows through `keyboardRows`
- native button and input behavior preserved inside rows

```html
<stackline-data-table
  title="Accessibility keyboard contract"
  ariaLabel="Accessibility keyboard orders"
  [columns]="orderColumns"
  [data]="orders"
  [selectableRows]="true"
  [expandableRows]="true"
  [expandableRowTemplate]="orderDetail"
  [keyboardRows]="true">
</stackline-data-table>
```

## API Surface

### Exports

| Export | Purpose |
| :--- | :--- |
| `DataTableModule` | Angular NgModule for `<stackline-data-table>`. |
| `DataTableColumn` | Column definition contract. |
| `HeadlessDataTableController` | Custom HTML controller class. |
| `createDataTableController` | Helper factory for headless/custom layouts. |

### Inputs

| Input | Purpose |
| :--- | :--- |
| `columns` | Column definitions. |
| `data` | Current rows to render. |
| `keyField` | Stable row key. Defaults to `id`. |
| `title` | Optional table title. |
| `ariaLabel` | Accessible grid label. |
| `keyboardRows` | Enables row keyboard activation. |
| `pagination` | Enables pagination UI. |
| `paginationServer` | Tells the component that the app owns page data. |
| `paginationTotalRows` | Total row count for server pagination. |
| `paginationDefaultPage` | Current page for controlled/server pagination. |
| `paginationPerPage` | Current rows per page. |
| `paginationRowsPerPageOptions` | Available page-size options. |
| `sortServer` | Emits sort changes without sorting local rows. |
| `globalFilter` | Controlled global filter value. |
| `columnFilters` | Controlled column filters. |
| `columnVisibility` | Controlled visible/hidden column map. |
| `columnOrder` | Controlled column order. |
| `columnPinning` | Sticky left/right column state. |
| `columnSizing` | Controlled column width state. |
| `groupBy` | Group rows by one or more columns. |
| `pinnedTopRows` | Rows fixed to the top. |
| `pinnedBottomRows` | Rows fixed to the bottom. |
| `virtualRows` | Renders a local row window. |
| `selectableRows` | Enables row selection. |
| `selectableRowsSingle` | Uses single-selection behavior. |
| `selectableRowsVisibleOnly` | Select all affects only visible rows. |
| `selectableRowSelected` | Predicate for programmatic selected rows. |
| `selectableRowDisabled` | Predicate for disabled selectable rows. |
| `expandableRows` | Enables row detail templates. |
| `expandableRowTemplate` | Angular template rendered below expanded rows. |
| `expandOnRowClicked` | Toggles expansion on row click. |
| `conditionalRowStyles` | Row style/class rules. |
| `theme` | `default` or `dark`. |

### Outputs

| Output | Payload |
| :--- | :--- |
| `sortChange` | `{ column, direction, rows }` |
| `selectedRowsChange` | `{ allSelected, selectedCount, selectedRows }` |
| `pageChange` | `{ page, totalRows }` |
| `rowsPerPageChange` | `{ rowsPerPage, currentPage }` |
| `rowClicked` | Row object |
| `rowDoubleClicked` | Row object |
| `rowMouseEnter` | Row object |
| `rowMouseLeave` | Row object |
| `rowExpandToggled` | `{ expanded, row }` |
| `tableStateChange` | Controlled table state snapshot |

## Wrapper Capabilities

| Capability | Usage |
| :--- | :--- |
| Options API | Declarative `[columns]` and `[data]` inputs. |
| Server data | Use `paginationServer`, `paginationTotalRows`, `pageChange`, and `rowsPerPageChange`. |
| Server sorting | Use `sortServer` and respond to `sortChange`. |
| Custom DOM | Use Angular `TemplateRef` through `cellTemplate` and `expandableRowTemplate`, including image/media cells. |
| Headless HTML | Use `createDataTableController` when the app needs to own all rendered HTML. |
| Controlled state | Use filter, visibility, order, pinning, grouping, and sizing inputs. |
| Events | Use row, selection, sort, page, rows-per-page, expansion, and table-state outputs. |
| Accessibility | Use `ariaLabel`, `keyboardRows`, native inputs, ARIA sort, selected, checked, and expanded states. |

## License

MIT
