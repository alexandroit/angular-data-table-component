# @revivejs/angular-data-table-component

> A maintained **Angular 17 data table component** with sorting, row selection, expandable rows, client or server pagination, conditional styles, and versioned live demos.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular-data-table-component.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-data-table-component)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular-data-table-component.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-data-table-component)
[![license](https://img.shields.io/npm/l/@revivejs/angular-data-table-component.svg?style=flat-square)](https://github.com/alexandroit/angular-data-table-component/blob/master/LICENSE)
[![Angular 17](https://img.shields.io/badge/Angular-17.3-red?style=flat-square&logo=angular)](https://angular.io)
[![TypeScript 5.4](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

**[Documentation & Live Demos](https://alexandroit.github.io/angular-data-table-component/)** | **[npm](https://www.npmjs.com/package/@revivejs/angular-data-table-component)** | **[Issues](https://github.com/alexandroit/angular-data-table-component/issues)** | **[Repository](https://github.com/alexandroit/angular-data-table-component)**

**Latest version:** `17.0.0`

## Why this library?

`@revivejs/angular-data-table-component` ports the practical data-table surface from the React project into an Angular-friendly API and project structure:

- declarative column definitions
- Angular templates for custom cells and expandable content
- built-in sorting, selection, expansion, and pagination
- versioned demos that follow the Angular release line

The repository starts with the Angular 15 line and is structured to grow sequentially through Angular 21.

## Supported Angular Versions

| Package version | Angular version | TypeScript | Demo link |
| :---: | :---: | :---: | :--- |
| **17.0.0** | **17.3.x** | **5.4.x** | [Angular 17 demo](https://alexandroit.github.io/angular-data-table-component/angular-17/) |
| **16.0.0** | **16.2.x** | **5.1.x** | [Angular 16 demo](https://alexandroit.github.io/angular-data-table-component/angular-16/) |
| **15.0.0** | **15.2.x** | **4.9.x** | [Angular 15 demo](https://alexandroit.github.io/angular-data-table-component/angular-15/) |

## Installation

```bash
npm install @revivejs/angular-data-table-component
```

## Basic Usage

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from '@revivejs/angular-data-table-component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataTableModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```ts
import { Component } from '@angular/core';
import { DataTableColumn } from '@revivejs/angular-data-table-component';

type Movie = {
  id: number;
  title: string;
  year: number;
};

@Component({
  selector: 'app-root',
  template: `
    <revive-data-table
      [columns]="columns"
      [data]="data"
      [pagination]="true">
    </revive-data-table>
  `
})
export class AppComponent {
  columns: DataTableColumn<Movie>[] = [
    { id: 'title', name: 'Title', selector: row => row.title, sortable: true },
    { id: 'year', name: 'Year', selector: row => row.year, sortable: true, right: true }
  ];

  data: Movie[] = [
    { id: 1, title: 'Beetlejuice', year: 1988 },
    { id: 2, title: 'Ghostbusters', year: 1984 }
  ];
}
```

## Main Features

- Declarative columns via `DataTableColumn<T>[]`
- Built-in client sorting
- Selectable rows with single or multi-select
- Expandable rows with `TemplateRef`
- Client or server-driven pagination
- Conditional row styles
- `default` and `dark` theme presets
- Responsive wrapper with fixed-header support

## API Snapshot

| Input | Type | Notes |
| :--- | :--- | :--- |
| `columns` | `DataTableColumn<T>[]` | Required. Declarative column definitions. |
| `data` | `T[]` | Required. Row data. |
| `keyField` | `string` | Defaults to `id`. |
| `title` | `string` | Optional table title. |
| `pagination` | `boolean` | Enables the footer pagination UI. |
| `paginationServer` | `boolean` | Disables client slicing and leaves paging to your code. |
| `selectableRows` | `boolean` | Enables row selection. |
| `selectableRowsSingle` | `boolean` | Restricts selection to a single row. |
| `expandableRows` | `boolean` | Enables expandable detail rows. |
| `expandableRowTemplate` | `TemplateRef` | Template used to render expanded row content. |
| `conditionalRowStyles` | `ConditionalStyle<T>[]` | Applies row styles when conditions match. |
| `theme` | `'default' \| 'dark'` | Built-in theme preset. |

| Output | Payload | Notes |
| :--- | :--- | :--- |
| `sortChange` | `{ column, direction, rows }` | Fires after sorting changes. |
| `selectedRowsChange` | `{ allSelected, selectedCount, selectedRows }` | Fires after selection changes. |
| `pageChange` | `{ page, totalRows }` | Fires when the current page changes. |
| `rowsPerPageChange` | `{ rowsPerPage, currentPage }` | Fires when rows-per-page changes. |
| `rowClicked` | `row` | Fires when a row is clicked. |
| `rowExpandToggled` | `{ expanded, row }` | Fires when a detail row is opened or closed. |

## Changelog

### 17.0.0
- Updated the library and docs app to Angular 17.3.x
- Added a versioned Angular 17 demo app
- Expanded peer dependency support to Angular 15 through Angular 17
- Escaped literal `@` characters in the docs template for Angular 17 parsing rules

### 16.0.0
- Updated the library and docs app to Angular 16.2.x
- Moved the build output to the Angular 16 `esm2022` and `fesm2022` package format
- Added a versioned Angular 16 demo app
- Expanded peer dependency support to Angular 15 and Angular 16

### 15.0.0
- Initial Angular 15 line
- Added a versioned Angular 15 demo app
- Introduced sorting, selection, expansion, pagination, conditional styles, and theme support
