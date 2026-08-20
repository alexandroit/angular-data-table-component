import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function createSafeDictionary() {
    return Object.create(null);
}
function hasOwnKey(value, key) {
    return Object.prototype.hasOwnProperty.call(value, key);
}
function copySafeDictionary(source) {
    var target = createSafeDictionary();
    var key;
    if (!source) {
        return target;
    }
    for (key in source) {
        if (hasOwnKey(source, key)) {
            target[key] = source[key];
        }
    }
    return target;
}
function resolveSelectorValue(row, column, rowIndex) {
    if (!column.selector) {
        if (column.accessorKey) {
            return row ? row[column.accessorKey] : null;
        }
        if (column.id !== null && column.id !== undefined && row && row[column.id] !== undefined) {
            return row[column.id];
        }
        return null;
    }
    if (typeof column.selector === 'function') {
        return column.selector(row, rowIndex);
    }
    return row ? row[column.selector] : null;
}
function resolveCellValue(row, column, rowIndex) {
    if (column.format) {
        return column.format(row, rowIndex);
    }
    return resolveSelectorValue(row, column, rowIndex);
}
function toCellText(value) {
    if (value === null || value === undefined) {
        return '';
    }
    if (typeof value === 'object') {
        try {
            var serialized = JSON.stringify(value);
            return serialized === undefined ? '' : serialized;
        }
        catch (_error) {
            return '[Unserializable value]';
        }
    }
    return String(value);
}
function styleObjectToString(style) {
    var output = [];
    var key;
    if (!style) {
        return '';
    }
    for (key in style) {
        if (hasOwnKey(style, key) && style[key] !== null && style[key] !== undefined && style[key] !== '') {
            output.push(toKebabCase(key) + ': ' + String(style[key]));
        }
    }
    return output.join('; ');
}
function sortRows(rows, column, direction) {
    var multiplier = direction === 'asc' ? 1 : -1;
    var decorated;
    if (!column) {
        return rows.slice(0);
    }
    decorated = rows.map(function (row, index) {
        return {
            index: index,
            row: row,
            value: column && !column.sortFunction
                ? resolveSelectorValue(row, column, index)
                : undefined
        };
    });
    decorated.sort(function (left, right) {
        var comparison;
        if (column && column.sortFunction) {
            comparison = column.sortFunction(left.row, right.row) * multiplier;
        }
        else {
            comparison = compareUnknown(left.value, right.value) * multiplier;
        }
        return comparison || left.index - right.index;
    });
    return decorated.map(function (entry) {
        return entry.row;
    });
}
function compareUnknown(left, right) {
    if (left === null || left === undefined) {
        return right === null || right === undefined ? 0 : -1;
    }
    if (right === null || right === undefined) {
        return 1;
    }
    if (typeof left === 'number' && typeof right === 'number') {
        return left - right;
    }
    if (typeof left === 'boolean' && typeof right === 'boolean') {
        return Number(left) - Number(right);
    }
    return String(left).localeCompare(String(right));
}
function toKebabCase(value) {
    return value.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}

class HeadlessDataTableController {
    columns = [];
    data = [];
    keyField = 'id';
    pagination = false;
    paginationServer = false;
    totalRowCount = 0;
    sortServer = false;
    globalFilter = '';
    columnFilters = [];
    columnVisibility = {};
    columnOrder = [];
    selectableRows = false;
    selectableRowsSingle = false;
    currentPage = 1;
    rowsPerPage = 10;
    sortDirection = 'asc';
    activeSortColumn = null;
    selectedKeys = createSafeDictionary();
    onSortChange = null;
    onSelectionChange = null;
    onPageChange = null;
    onRowsPerPageChange = null;
    onStateChange = null;
    constructor(options) {
        this.update(options || { columns: [], data: [] });
    }
    update(options) {
        this.columns = options.columns || [];
        this.data = options.data || [];
        this.keyField = options.keyField || this.keyField || 'id';
        this.pagination = !!options.pagination;
        this.paginationServer = !!options.paginationServer;
        this.totalRowCount = Number(options.totalRows || 0);
        this.sortServer = !!options.sortServer;
        this.globalFilter = options.globalFilter || '';
        this.columnFilters = options.columnFilters || [];
        this.columnVisibility = options.columnVisibility || {};
        this.columnOrder = options.columnOrder || [];
        this.selectableRows = !!options.selectableRows;
        this.selectableRowsSingle = !!options.selectableRowsSingle;
        this.currentPage = options.page || this.currentPage || 1;
        this.rowsPerPage = options.perPage || this.rowsPerPage || 10;
        this.onSortChange = options.onSortChange || null;
        this.onSelectionChange = options.onSelectionChange || null;
        this.onPageChange = options.onPageChange || null;
        this.onRowsPerPageChange = options.onRowsPerPageChange || null;
        this.onStateChange = options.onStateChange || null;
        if (options.selectedKeys) {
            this.selectedKeys = copySafeDictionary(options.selectedKeys);
        }
        this.ensureValidPage();
        return this;
    }
    get flatColumns() {
        return this.flattenColumns(this.columns);
    }
    get visibleColumns() {
        var columns = this.flatColumns.filter((column) => {
            return !column.omit && this.isColumnVisible(column);
        });
        var order = this.columnOrder || [];
        var ordered = [];
        var used = createSafeDictionary();
        var key;
        var i;
        var j;
        for (i = 0; i < order.length; i += 1) {
            key = String(order[i]);
            for (j = 0; j < columns.length; j += 1) {
                if (!used[this.getColumnKey(columns[j])] && this.getColumnKey(columns[j]) === key) {
                    ordered.push(columns[j]);
                    used[key] = true;
                    break;
                }
            }
        }
        for (i = 0; i < columns.length; i += 1) {
            key = this.getColumnKey(columns[i]);
            if (!used[key]) {
                ordered.push(columns[i]);
            }
        }
        return ordered;
    }
    get filteredRows() {
        var rows = this.applyGlobalFilter(this.data);
        return this.applyColumnFilters(rows);
    }
    get sortedRows() {
        if (this.sortServer) {
            return this.filteredRows.slice(0);
        }
        return sortRows(this.filteredRows, this.activeSortColumn, this.sortDirection);
    }
    get displayedRows() {
        var rows = this.sortedRows;
        var start;
        if (this.pagination && !this.paginationServer) {
            start = (this.currentPage - 1) * this.rowsPerPage;
            return rows.slice(start, start + this.rowsPerPage);
        }
        return rows;
    }
    get totalRows() {
        return this.paginationServer ? (this.totalRowCount || this.data.length) : this.filteredRows.length;
    }
    get totalPages() {
        return Math.max(1, Math.ceil(Math.max(this.totalRows, 1) / this.rowsPerPage));
    }
    get startRow() {
        if (!this.totalRows) {
            return 0;
        }
        return (this.currentPage - 1) * this.rowsPerPage + 1;
    }
    get endRow() {
        if (!this.totalRows) {
            return 0;
        }
        return Math.min(this.currentPage * this.rowsPerPage, this.totalRows);
    }
    get selectedRows() {
        var rows = [];
        var i;
        for (i = 0; i < this.data.length; i += 1) {
            if (this.isRowSelected(this.data[i])) {
                rows.push(this.data[i]);
            }
        }
        return rows;
    }
    get selectedCount() {
        return this.selectedRows.length;
    }
    get allRowsSelected() {
        var rows = this.displayedRows;
        var i;
        if (!rows.length) {
            return false;
        }
        for (i = 0; i < rows.length; i += 1) {
            if (!this.isRowSelected(rows[i])) {
                return false;
            }
        }
        return true;
    }
    get state() {
        return {
            globalFilter: this.globalFilter,
            columnFilters: this.columnFilters,
            columnVisibility: this.columnVisibility,
            columnOrder: this.columnOrder,
            groupBy: []
        };
    }
    getColumnKey(column) {
        return String(column.id !== undefined && column.id !== null ? column.id : column.name);
    }
    getRowKey(row) {
        if (row && row[this.keyField] !== undefined && row[this.keyField] !== null) {
            return String(row[this.keyField]);
        }
        return String(this.data.indexOf(row));
    }
    getCellValue(row, column, rowIndex) {
        return resolveCellValue(row, column, rowIndex);
    }
    getCellText(row, column, rowIndex) {
        return toCellText(this.getCellValue(row, column, rowIndex));
    }
    getAriaSort(column) {
        if (!column.sortable) {
            return null;
        }
        if (this.activeSortColumn !== column) {
            return 'none';
        }
        return this.sortDirection === 'asc' ? 'ascending' : 'descending';
    }
    getSortButtonAriaLabel(column) {
        var name = String(column.name || this.getColumnKey(column));
        if (!column.sortable) {
            return name + ' column';
        }
        if (this.activeSortColumn !== column) {
            return 'Sort ' + name + ' ascending';
        }
        return this.sortDirection === 'asc'
            ? 'Sort ' + name + ' descending'
            : 'Sort ' + name + ' ascending';
    }
    isColumnVisible(column) {
        var key = this.getColumnKey(column);
        return !hasOwnKey(this.columnVisibility, key) || this.columnVisibility[key] !== false;
    }
    isRowSelected(row) {
        return !!this.selectedKeys[this.getRowKey(row)];
    }
    toggleSort(column) {
        if (!column.sortable) {
            return;
        }
        if (this.activeSortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        }
        else {
            this.activeSortColumn = column;
            this.sortDirection = 'asc';
        }
        this.currentPage = 1;
        if (this.onSortChange) {
            this.onSortChange({
                column: column,
                direction: this.sortDirection,
                rows: this.sortedRows
            });
        }
        this.emitState();
    }
    toggleRowSelection(row) {
        var key;
        if (!this.selectableRows) {
            return;
        }
        key = this.getRowKey(row);
        if (this.selectableRowsSingle) {
            this.selectedKeys = createSafeDictionary();
            this.selectedKeys[key] = true;
        }
        else if (this.selectedKeys[key]) {
            delete this.selectedKeys[key];
        }
        else {
            this.selectedKeys[key] = true;
        }
        this.emitSelection();
    }
    toggleAllVisibleRows() {
        var rows = this.displayedRows;
        var shouldSelect = !this.allRowsSelected;
        var i;
        if (!this.selectableRows) {
            return;
        }
        if (this.selectableRowsSingle) {
            this.selectedKeys = createSafeDictionary();
            if (shouldSelect && rows.length) {
                this.selectedKeys[this.getRowKey(rows[0])] = true;
            }
        }
        else {
            for (i = 0; i < rows.length; i += 1) {
                if (shouldSelect) {
                    this.selectedKeys[this.getRowKey(rows[i])] = true;
                }
                else {
                    delete this.selectedKeys[this.getRowKey(rows[i])];
                }
            }
        }
        this.emitSelection();
    }
    changePage(page) {
        this.currentPage = clamp(page, 1, this.totalPages);
        if (this.onPageChange) {
            this.onPageChange({
                page: this.currentPage,
                totalRows: this.totalRows
            });
        }
        this.emitState();
    }
    changeRowsPerPage(rowsPerPage) {
        this.rowsPerPage = Number(rowsPerPage) || this.rowsPerPage;
        this.currentPage = 1;
        if (this.onRowsPerPageChange) {
            this.onRowsPerPageChange({
                rowsPerPage: this.rowsPerPage,
                currentPage: this.currentPage
            });
        }
        this.emitState();
    }
    setGlobalFilter(value) {
        this.globalFilter = value || '';
        this.currentPage = 1;
        this.ensureValidPage();
        this.emitState();
    }
    setColumnFilter(columnId, value) {
        var filters = this.getColumnFilterMap();
        filters[String(columnId)] = value;
        this.columnFilters = filters;
        this.currentPage = 1;
        this.ensureValidPage();
        this.emitState();
    }
    flattenColumns(columns) {
        var output = [];
        var i;
        var nested;
        var j;
        for (i = 0; i < columns.length; i += 1) {
            var column = columns[i];
            var childColumns = column.columns || [];
            if (childColumns.length) {
                nested = this.flattenColumns(childColumns);
                for (j = 0; j < nested.length; j += 1) {
                    output.push(nested[j]);
                }
            }
            else {
                output.push(column);
            }
        }
        return output;
    }
    applyGlobalFilter(rows) {
        var value = (this.globalFilter || '').toLowerCase();
        var columns = this.visibleColumns;
        var output = [];
        var i;
        var j;
        if (!value) {
            return rows.slice(0);
        }
        for (i = 0; i < rows.length; i += 1) {
            for (j = 0; j < columns.length; j += 1) {
                if (this.getCellText(rows[i], columns[j], i).toLowerCase().indexOf(value) !== -1) {
                    output.push(rows[i]);
                    break;
                }
            }
        }
        return output;
    }
    applyColumnFilters(rows) {
        var filters = this.getColumnFilterMap();
        var keys = [];
        var key;
        var output = [];
        var columns = this.visibleColumns;
        var column;
        var i;
        for (key in filters) {
            if (hasOwnKey(filters, key) && filters[key] !== null && filters[key] !== undefined && filters[key] !== '') {
                keys.push(key);
            }
        }
        if (!keys.length) {
            return rows.slice(0);
        }
        for (i = 0; i < rows.length; i += 1) {
            if (this.rowPassesColumnFilters(rows[i], i, keys, filters, columns)) {
                output.push(rows[i]);
            }
        }
        return output;
    }
    rowPassesColumnFilters(row, rowIndex, keys, filters, columns) {
        var i;
        var column;
        var value;
        for (i = 0; i < keys.length; i += 1) {
            column = this.findColumn(keys[i], columns);
            if (!column) {
                continue;
            }
            value = filters[keys[i]];
            if (column.filterFn) {
                if (!column.filterFn(row, value, column)) {
                    return false;
                }
            }
            else if (this.getCellText(row, column, rowIndex).toLowerCase().indexOf(String(value).toLowerCase()) === -1) {
                return false;
            }
        }
        return true;
    }
    findColumn(columnId, columns) {
        var key = String(columnId);
        var i;
        for (i = 0; i < columns.length; i += 1) {
            if (this.getColumnKey(columns[i]) === key) {
                return columns[i];
            }
        }
        return null;
    }
    getColumnFilterMap() {
        var output = createSafeDictionary();
        var filters = this.columnFilters || [];
        var i;
        if (filters.length !== undefined) {
            for (i = 0; i < filters.length; i += 1) {
                output[String(filters[i].id)] = filters[i].value;
            }
            return output;
        }
        for (var key in filters) {
            if (hasOwnKey(filters, key)) {
                output[key] = filters[key];
            }
        }
        return output;
    }
    ensureValidPage() {
        this.currentPage = clamp(this.currentPage || 1, 1, this.totalPages);
    }
    emitSelection() {
        if (this.onSelectionChange) {
            this.onSelectionChange({
                allSelected: this.allRowsSelected,
                selectedCount: this.selectedCount,
                selectedRows: this.selectedRows
            });
        }
    }
    emitState() {
        if (this.onStateChange) {
            this.onStateChange(this.state);
        }
    }
}
function createDataTableController(options) {
    return new HeadlessDataTableController(options);
}

const DATA_TABLE_STYLES = `
:host {
  display: block;
}

.adtc-shell {
  background: #ffffff;
  border: 1px solid #d6dee8;
  border-radius: 6px;
  color: #17324d;
  font-family: inherit;
  overflow: hidden;
}

.adtc-theme-dark {
  background: #111c2d;
  border-color: #2b3c56;
  color: #eef4fb;
}

.adtc-header,
.adtc-context,
.adtc-pagination {
  padding: 10px 12px;
}

.adtc-header {
  background: #fbfcfe;
  border-bottom: 1px solid #d9e2ec;
}

.adtc-theme-dark .adtc-header {
  background: #162438;
  border-bottom-color: #2b3c56;
}

.adtc-header h3 {
  color: #142842;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
}

.adtc-context {
  background: #eaf5fd;
  border-bottom: 1px solid #d9e2ec;
}

.adtc-theme-dark .adtc-context {
  background: #183555;
  border-bottom-color: #2b3c56;
}

.adtc-responsive {
  overflow-x: auto;
}

.adtc-scroll {
  overflow: auto;
}

.adtc-fixed-header thead th {
  position: sticky;
  top: 0;
  z-index: 2;
}

.adtc-table {
  border-collapse: collapse;
  font-size: 13px;
  line-height: 1.35;
  min-width: 100%;
  table-layout: fixed;
  width: 100%;
}

.adtc-responsive .adtc-table {
  min-width: 720px;
}

.adtc-table thead th {
  background: #f7f9fc;
  border-bottom: 1px solid #cbd6e2;
  border-right: 1px solid #e7edf4;
  color: #405874;
  font-size: 12px;
  font-weight: 700;
  padding: 0;
  text-align: left;
  vertical-align: middle;
}

.adtc-table thead th:last-child {
  border-right: 0;
}

.adtc-group-header {
  padding: 8px 10px !important;
  text-align: center;
}

.adtc-theme-dark .adtc-table thead th {
  background: #162438;
  border-bottom-color: #3f5678;
  color: #b0c1d8;
}

.adtc-table td {
  border-bottom: 1px solid #d9e2ec;
  border-right: 1px solid #eef3f7;
  color: inherit;
  height: 38px;
  padding: 7px 10px;
  vertical-align: middle;
}

.adtc-table td:last-child {
  border-right: 0;
}

.adtc-theme-dark .adtc-table td {
  border-bottom-color: #2b3c56;
  border-right-color: #243650;
}

.adtc-theme-dark .adtc-table thead th {
  border-right-color: #243650;
}

.adtc-row-hoverable:hover td {
  background: #f2f8fd;
}

.adtc-theme-dark .adtc-row-hoverable:hover td {
  background: #183555;
}

.adtc-row-pointer td {
  cursor: pointer;
}

.adtc-row:focus {
  outline: 2px solid rgba(12, 115, 184, 0.34);
  outline-offset: -2px;
}

.adtc-row:focus td {
  background: #eef7ff;
}

.adtc-row-striped:nth-child(odd) td {
  background: #fbfcfe;
}

.adtc-theme-dark .adtc-row-striped:nth-child(odd) td {
  background: #142238;
}

.adtc-row-dense td {
  height: 32px;
  padding: 5px 9px;
}

.adtc-row-selected td {
  background: #e9f4fd;
}

.adtc-row-pinned-top td,
.adtc-row-pinned-bottom td {
  background: #f3f8fc;
  font-weight: 600;
}

.adtc-theme-dark .adtc-row-pinned-top td,
.adtc-theme-dark .adtc-row-pinned-bottom td {
  background: #183555;
}

.adtc-theme-dark .adtc-row-selected td {
  background: #1e4268;
}

.adtc-align-right {
  text-align: right;
}

.adtc-align-center {
  text-align: center;
}

.adtc-nowrap {
  white-space: nowrap;
}

.adtc-wrap {
  white-space: normal;
}

.adtc-sort-button {
  align-items: center;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: default;
  display: inline-flex;
  font: inherit;
  justify-content: flex-start;
  min-height: 36px;
  padding: 8px 10px;
  text-align: left;
  width: 100%;
}

.adtc-sort-button:focus {
  outline: 2px solid rgba(12, 115, 184, 0.28);
  outline-offset: -2px;
}

.adtc-sort-button span:first-child {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.adtc-sortable {
  cursor: pointer;
}

.adtc-sort-right {
  justify-content: flex-end;
  text-align: right;
}

.adtc-sort-center {
  justify-content: center;
  text-align: center;
}

.adtc-sort-indicator {
  color: #8395a8;
  flex: 0 0 auto;
  font-size: 9px;
  margin-left: 6px;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  text-transform: uppercase;
  transition: max-width 0.16s ease, opacity 0.16s ease;
  white-space: nowrap;
}

.adtc-sort-indicator.active {
  color: #0c73b8;
  max-width: 36px;
  opacity: 1;
}

.adtc-table thead th:hover .adtc-sort-indicator {
  max-width: 36px;
  opacity: 0.72;
}

.adtc-select-col {
  background: #fbfdff;
  min-width: 54px;
  padding-left: 16px !important;
  padding-right: 16px !important;
  text-align: center;
  white-space: nowrap;
  width: 54px;
}

.adtc-expand-col {
  text-align: center;
  white-space: nowrap;
  width: 46px;
}

.adtc-select-col input {
  accent-color: #0c73b8;
  appearance: none;
  background: #ffffff;
  border: 1px solid #9fb0c3;
  border-radius: 3px;
  cursor: pointer;
  display: block;
  height: 16px;
  margin: 0 auto;
  position: relative;
  vertical-align: middle;
  width: 16px;
}

.adtc-select-col input[type='radio'] {
  border-radius: 999px;
}

.adtc-select-col input:checked {
  background: #0c73b8;
  border-color: #0c73b8;
}

.adtc-select-col input[type='checkbox']:checked:after {
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  content: '';
  height: 8px;
  left: 5px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg);
  width: 4px;
}

.adtc-select-col input[type='radio']:checked:after {
  background: #ffffff;
  border-radius: 999px;
  content: '';
  height: 6px;
  left: 4px;
  position: absolute;
  top: 4px;
  width: 6px;
}

.adtc-select-col input:disabled {
  background: #eef2f6;
  border-color: #c6d0dc;
  cursor: not-allowed;
  opacity: 0.7;
}

.adtc-select-col input:focus {
  outline: 2px solid rgba(12, 115, 184, 0.28);
  outline-offset: 2px;
}

.adtc-expander {
  align-items: center;
  background: transparent;
  border: 1px solid #d9e2ec;
  border-radius: 999px;
  color: #0c73b8;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  height: 26px;
  justify-content: center;
  line-height: 1;
  padding: 0;
  width: 26px;
}

.adtc-theme-dark .adtc-expander {
  border-color: #3f5678;
  color: #7cc7ff;
}

.adtc-expander:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.adtc-expanded-row td {
  background: #f8fafc;
}

.adtc-theme-dark .adtc-expanded-row td {
  background: #162438;
}

.adtc-expanded-cell {
  padding: 12px;
}

.adtc-group-row td {
  background: #eef6fd;
  border-bottom: 1px solid #d9e2ec;
  color: #17324d;
  padding: 8px 10px;
}

.adtc-theme-dark .adtc-group-row td {
  background: #183555;
  border-bottom-color: #2b3c56;
  color: #eef4fb;
}

.adtc-group-cell {
  align-items: center;
  display: flex;
  gap: 8px;
  min-width: 0;
}

.adtc-group-cell em {
  color: #59708a;
  flex: 0 0 auto;
  font-size: 12px;
  font-style: normal;
  margin-left: auto;
  white-space: nowrap;
}

.adtc-group-toggle {
  align-items: center;
  background: #ffffff;
  border: 1px solid #d9e2ec;
  border-radius: 999px;
  color: #0c73b8;
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 700;
  height: 26px;
  justify-content: center;
  line-height: 1;
  padding: 0;
  width: 26px;
}

.adtc-pinned-left {
  box-shadow: 2px 0 0 rgba(12, 115, 184, 0.08);
}

.adtc-pinned-right {
  box-shadow: -2px 0 0 rgba(12, 115, 184, 0.08);
}

.adtc-pagination {
  align-items: center;
  border-top: 1px solid #d9e2ec;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
}

.adtc-theme-dark .adtc-pagination {
  border-top-color: #2b3c56;
}

.adtc-pagination-meta {
  color: #59708a;
  font-size: 12px;
}

.adtc-theme-dark .adtc-pagination-meta {
  color: #b0c1d8;
}

.adtc-pagination-controls {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.adtc-pagination-size {
  align-items: center;
  color: #59708a;
  display: inline-flex;
  gap: 6px;
  font-size: 12px;
}

.adtc-pagination select,
.adtc-pagination button {
  background: #ffffff;
  border: 1px solid #d9e2ec;
  border-radius: 6px;
  color: #17324d;
  font-size: 12px;
  min-height: 30px;
  padding: 5px 9px;
}

.adtc-pagination select {
  min-width: 64px;
}

.adtc-theme-dark .adtc-pagination select,
.adtc-theme-dark .adtc-pagination button {
  background: #111c2d;
  border-color: #2b3c56;
  color: #eef4fb;
}

.adtc-pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.adtc-page-indicator {
  color: #59708a;
  font-size: 12px;
}

.adtc-theme-dark .adtc-page-indicator {
  color: #b0c1d8;
}

.adtc-state {
  color: #59708a;
  padding: 32px 16px;
  text-align: center;
}

.adtc-theme-dark .adtc-state {
  color: #b0c1d8;
}
`;

const DATA_TABLE_TEMPLATE = `
<div [attr.class]="shellClassName">
  <div *ngIf="title && !noHeader" class="adtc-header">
    <h3>{{ title }}</h3>
  </div>

  <div *ngIf="showContextBar" class="adtc-context">
    <strong>{{ selectedCount }}</strong>
    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}
    {{ contextMessage.message }}
  </div>

  <div *ngIf="progressPending" class="adtc-state adtc-loading" role="status" aria-live="polite">
    Loading...
  </div>

  <div *ngIf="!progressPending && !hasRows" class="adtc-state" role="status" aria-live="polite">
    {{ noDataText }}
  </div>

  <div *ngIf="!progressPending && hasRows">
      <div [attr.class]="wrapperClassName">
      <div [attr.class]="scrollClassName" [attr.style]="scrollStyleText">
        <table
          class="adtc-table"
          role="grid"
          [attr.aria-label]="tableAriaLabel"
          [attr.aria-rowcount]="totalRows"
          [attr.aria-colcount]="expandedColspan">
          <thead *ngIf="!noTableHead">
            <tr *ngIf="hasColumnGroups" role="row">
              <th *ngIf="selectableRows" class="adtc-select-col" rowspan="2" scope="col" role="columnheader">
                <input
                  *ngIf="!selectableRowsSingle && !selectableRowsNoSelectAll"
                  type="checkbox"
                  [attr.aria-label]="selectAllAriaLabel"
                  [attr.aria-checked]="selectAllAriaChecked"
                  [indeterminate]="someRowsSelected"
                  [checked]="allRowsSelected"
                  (click)="$event.stopPropagation()"
                  (change)="toggleAllRows($any($event.target).checked)" />
              </th>

              <th *ngIf="expandableRows && !expandableRowsHideExpander" class="adtc-expand-col" rowspan="2" scope="col" role="columnheader"></th>

              <th *ngFor="let group of columnGroups" class="adtc-group-header" [attr.colspan]="group.colspan" scope="colgroup" role="columnheader">
                {{ group.name }}
              </th>
            </tr>

            <tr role="row">
              <th *ngIf="selectableRows && !hasColumnGroups" class="adtc-select-col" scope="col" role="columnheader">
                <input
                  *ngIf="!selectableRowsSingle && !selectableRowsNoSelectAll"
                  type="checkbox"
                  [attr.aria-label]="selectAllAriaLabel"
                  [attr.aria-checked]="selectAllAriaChecked"
                  [indeterminate]="someRowsSelected"
                  [checked]="allRowsSelected"
                  (click)="$event.stopPropagation()"
                  (change)="toggleAllRows($any($event.target).checked)" />
              </th>

              <th *ngIf="expandableRows && !expandableRowsHideExpander && !hasColumnGroups" class="adtc-expand-col" scope="col" role="columnheader"></th>

              <th
                *ngFor="let column of visibleColumns"
                [attr.class]="getHeaderClassName(column)"
                [attr.style]="getHeaderStyleText(column)"
                scope="col"
                role="columnheader"
                [attr.aria-sort]="getAriaSort(column)">
                <button
                  type="button"
	                  [attr.class]="getSortButtonClassName(column)"
	                  [attr.aria-label]="getSortButtonAriaLabel(column)"
	                  [disabled]="!column.sortable"
	                  (keydown)="handleSortButtonKeydown($event, column)"
	                  (click)="toggleSort(column)">
                  <span>{{ column.name }}</span>
                  <span *ngIf="column.sortable" [attr.class]="getSortIndicatorClassName(column)">
                    {{ activeSortColumn === column ? (sortDirection === 'asc' ? 'Asc' : 'Desc') : 'Sort' }}
                  </span>
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            <ng-template ngFor let-row [ngForOf]="displayedRows" let-rowIndex="index">
              <tr *ngIf="isGroupRow(row)" class="adtc-group-row" role="row" [attr.id]="getGroupRowId(row)">
                <td class="adtc-group-cell" [attr.colspan]="expandedColspan" role="gridcell">
                  <button
                    type="button"
                    class="adtc-group-toggle"
	                    [attr.aria-label]="getGroupToggleAriaLabel(row)"
	                    [attr.aria-expanded]="isGroupRowExpanded(row)"
	                    [attr.aria-controls]="getGroupRowId(row)"
	                    (keydown)="handleGroupToggleKeydown($event, row)"
	                    (click)="toggleGroupRow(row)">
                    {{ isGroupRowExpanded(row) ? '-' : '+' }}
                  </button>
                  <strong>{{ row.groupLabel }}</strong>
                  <span>{{ row.groupValue }}</span>
                  <em>{{ row.leafRows.length }} rows</em>
                </td>
              </tr>

              <tr
                *ngIf="!isGroupRow(row)"
                role="row"
                [attr.class]="getRowClassName(row)"
                [attr.style]="getRowStyleText(row)"
                [attr.tabindex]="getRowTabIndex(row)"
                [attr.aria-selected]="getRowAriaSelected(row)"
                (keydown)="handleRowKeydown($event, row)"
                (click)="handleRowClick(row)"
                (dblclick)="handleRowDoubleClick(row)"
                (mouseenter)="handleMouseEnter(row)"
                (mouseleave)="handleMouseLeave(row)">
                <td *ngIf="selectableRows" class="adtc-select-col" role="gridcell">
                  <input
                    [type]="selectableRowsSingle ? 'radio' : 'checkbox'"
                    [attr.aria-label]="getRowSelectionAriaLabel(row, rowIndex)"
                    [attr.aria-checked]="isRowSelected(row)"
                    [checked]="isRowSelected(row)"
                    [disabled]="isSelectableDisabled(row)"
                    (click)="$event.stopPropagation()"
                    (change)="toggleRowSelection(row)" />
                </td>

                <td *ngIf="expandableRows && !expandableRowsHideExpander" class="adtc-expand-col" role="gridcell">
                  <button
                    type="button"
                    class="adtc-expander"
                    [attr.aria-label]="getRowExpandAriaLabel(row, rowIndex)"
	                    [attr.aria-expanded]="isRowExpanded(row)"
	                    [attr.aria-controls]="getExpandedRowId(row)"
	                    [disabled]="isExpandableDisabled(row)"
	                    (keydown)="handleExpanderKeydown($event, row)"
	                    (click)="$event.stopPropagation(); toggleRowExpansion(row)">
                    {{ isRowExpanded(row) ? '-' : '+' }}
                  </button>
                </td>

                <td *ngFor="let column of visibleColumns" [attr.class]="getCellClassName(column)" [attr.style]="getCellStyleText(column)" role="gridcell">
                  <ng-template [ngIf]="column.cellTemplate">
                    <ng-template
                      [ngTemplateOutlet]="column.cellTemplate"
                      [ngTemplateOutletContext]="getCellContext(row, column, rowIndex)">
                    </ng-template>
                  </ng-template>
                  <ng-template [ngIf]="!column.cellTemplate">
                    {{ getCellText(row, column, rowIndex) }}
                  </ng-template>
                </td>
              </tr>

              <tr
                *ngIf="!isGroupRow(row) && expandableRows && expandableRowTemplate && isRowExpanded(row)"
                class="adtc-expanded-row"
                role="row"
                [attr.id]="getExpandedRowId(row)">
                <td class="adtc-expanded-cell" [attr.colspan]="expandedColspan" role="gridcell">
                  <ng-template
                    [ngTemplateOutlet]="expandableRowTemplate"
                    [ngTemplateOutletContext]="getExpandableContext(row, rowIndex)">
                  </ng-template>
                </td>
              </tr>
            </ng-template>
          </tbody>
        </table>
      </div>
    </div>

    <div *ngIf="showPagination" class="adtc-pagination">
      <div class="adtc-pagination-meta">
        Showing {{ startRow }}-{{ endRow }} of {{ totalRows }}
      </div>

      <div class="adtc-pagination-controls">
        <label class="adtc-pagination-size">
          Rows:
          <select [value]="rowsPerPage" (change)="changeRowsPerPage($any($event.target).value)">
            <option *ngFor="let size of paginationRowsPerPageOptions" [value]="size">
              {{ size }}
            </option>
          </select>
        </label>

        <button type="button" (click)="changePage(1)" [disabled]="currentPage === 1">First</button>
        <button type="button" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">Prev</button>
        <span class="adtc-page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
        <button type="button" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">Next</button>
        <button type="button" (click)="changePage(totalPages)" [disabled]="currentPage === totalPages">Last</button>
      </div>
    </div>
  </div>
</div>
`;

class DataTableComponent {
    columns = [];
    data = [];
    keyField = 'id';
    title = '';
    ariaLabel = '';
    keyboardRows = true;
    pagination = false;
    paginationServer = false;
    paginationDefaultPage = 1;
    paginationPerPage = 10;
    paginationTotalRows = 0;
    paginationRowsPerPageOptions = [10, 15, 20, 25, 30];
    selectableRows = false;
    selectableRowsSingle = false;
    selectableRowsHighlight = false;
    selectableRowsNoSelectAll = false;
    selectableRowsVisibleOnly = false;
    clearSelectedRows = false;
    selectableRowSelected = null;
    selectableRowDisabled = null;
    expandableRows = false;
    expandableRowsHideExpander = false;
    expandOnRowClicked = false;
    expandOnRowDoubleClicked = false;
    expandableRowDisabled = null;
    expandableRowExpanded = null;
    expandableRowTemplate = null;
    striped = false;
    highlightOnHover = false;
    pointerOnHover = false;
    dense = false;
    responsive = true;
    progressPending = false;
    noHeader = false;
    noTableHead = false;
    fixedHeader = false;
    fixedHeaderScrollHeight = '420px';
    noDataText = 'There are no records to display';
    conditionalRowStyles = [];
    defaultSortFieldId = null;
    defaultSortAsc = true;
    sortServer = false;
    manualSorting = false;
    manualFiltering = false;
    manualPagination = false;
    globalFilter = '';
    columnFilters = [];
    hiddenColumns = [];
    columnVisibility = {};
    columnOrder = [];
    columnPinning = { left: [], right: [] };
    columnSizing = {};
    groupBy = [];
    grouping = [];
    aggregationFns = {};
    pinnedTopRows = [];
    pinnedBottomRows = [];
    rowPinning = null;
    virtualRows = false;
    virtualStartIndex = 0;
    virtualRowCount = 25;
    theme = 'default';
    contextMessage = {
        singular: 'item',
        plural: 'items',
        message: 'selected'
    };
    sortChange = new EventEmitter();
    selectedRowsChange = new EventEmitter();
    pageChange = new EventEmitter();
    rowsPerPageChange = new EventEmitter();
    rowClicked = new EventEmitter();
    rowDoubleClicked = new EventEmitter();
    rowMouseEnter = new EventEmitter();
    rowMouseLeave = new EventEmitter();
    rowExpandToggled = new EventEmitter();
    globalFilterChange = new EventEmitter();
    columnFiltersChange = new EventEmitter();
    columnVisibilityChange = new EventEmitter();
    columnOrderChange = new EventEmitter();
    groupingChange = new EventEmitter();
    tableStateChange = new EventEmitter();
    currentPage = 1;
    rowsPerPage = 10;
    sortDirection = 'asc';
    activeSortColumn = null;
    selectedKeys = createSafeDictionary();
    expandedKeys = createSafeDictionary();
    collapsedGroupKeys = createSafeDictionary();
    ngOnChanges(changes) {
        if (changes['paginationPerPage']) {
            this.rowsPerPage = this.paginationPerPage;
        }
        if (changes['paginationDefaultPage']) {
            this.currentPage = this.paginationDefaultPage;
        }
        if (changes['clearSelectedRows'] && !changes['clearSelectedRows'].firstChange) {
            this.selectedKeys = createSafeDictionary();
            this.emitSelectionState();
        }
        if (changes['columns'] || changes['defaultSortFieldId'] || changes['defaultSortAsc']) {
            this.applyDefaultSort();
        }
        if (changes['data'] || changes['selectableRowSelected']) {
            this.syncProgrammaticSelection();
        }
        if (changes['data'] || changes['expandableRowExpanded']) {
            this.syncProgrammaticExpansion();
        }
        this.ensureValidPage();
    }
    get flatColumns() {
        return this.flattenColumns(this.columns);
    }
    get visibleColumns() {
        var columns = this.flatColumns.filter((column) => {
            return !column.omit && this.isColumnVisible(column);
        });
        var order = this.columnOrder || [];
        var ordered = [];
        var used = createSafeDictionary();
        var i;
        var j;
        var key;
        for (i = 0; i < order.length; i += 1) {
            key = String(order[i]);
            for (j = 0; j < columns.length; j += 1) {
                if (!used[this.getColumnKey(columns[j])] && this.getColumnKey(columns[j]) === key) {
                    ordered.push(columns[j]);
                    used[key] = true;
                    break;
                }
            }
        }
        for (i = 0; i < columns.length; i += 1) {
            key = this.getColumnKey(columns[i]);
            if (!used[key]) {
                ordered.push(columns[i]);
            }
        }
        return ordered;
    }
    get hasColumnGroups() {
        var columns = this.visibleColumns;
        var i;
        for (i = 0; i < columns.length; i += 1) {
            if (columns[i].group) {
                return true;
            }
        }
        return false;
    }
    get columnGroups() {
        var groups = [];
        var columns = this.visibleColumns;
        var i;
        var label;
        var current = null;
        for (i = 0; i < columns.length; i += 1) {
            label = String(columns[i].group || '');
            if (!current || current.name !== label) {
                current = {
                    name: label,
                    colspan: 1
                };
                groups.push(current);
            }
            else {
                current.colspan += 1;
            }
        }
        return groups;
    }
    get shellClassName() {
        return this.joinClasses([
            'adtc-shell',
            this.theme === 'dark' ? 'adtc-theme-dark' : ''
        ]);
    }
    get wrapperClassName() {
        return this.joinClasses([
            'adtc-wrapper',
            this.responsive ? 'adtc-responsive' : '',
            this.fixedHeader ? 'adtc-fixed-header' : ''
        ]);
    }
    get scrollClassName() {
        return this.fixedHeader ? 'adtc-scroll' : '';
    }
    get scrollStyle() {
        if (!this.fixedHeader) {
            return {};
        }
        return { 'max-height': this.fixedHeaderScrollHeight };
    }
    get scrollStyleText() {
        return styleObjectToString(this.scrollStyle) || null;
    }
    getHeaderStyleText(column) {
        return styleObjectToString(this.getHeaderStyle(column)) || null;
    }
    getRowStyleText(row) {
        return styleObjectToString(this.getRowStyle(row)) || null;
    }
    getCellStyleText(column) {
        return styleObjectToString(this.getCellStyle(column)) || null;
    }
    get tableAriaLabel() {
        return this.ariaLabel || this.title || 'Data table';
    }
    get pinnedTopDisplayRows() {
        return this.getPinnedRows('top');
    }
    get pinnedBottomDisplayRows() {
        return this.getPinnedRows('bottom');
    }
    get filteredPinnedTopRows() {
        return this.filterPinnedRows(this.pinnedTopDisplayRows);
    }
    get filteredPinnedBottomRows() {
        return this.filterPinnedRows(this.pinnedBottomDisplayRows);
    }
    get unpinnedRows() {
        var pinned = createSafeDictionary();
        var top = this.pinnedTopDisplayRows;
        var bottom = this.pinnedBottomDisplayRows;
        var rows = [];
        var i;
        for (i = 0; i < top.length; i += 1) {
            pinned[this.getRowKey(top[i])] = true;
        }
        for (i = 0; i < bottom.length; i += 1) {
            pinned[this.getRowKey(bottom[i])] = true;
        }
        for (i = 0; i < this.data.length; i += 1) {
            if (!pinned[this.getRowKey(this.data[i])]) {
                rows.push(this.data[i]);
            }
        }
        return rows;
    }
    get filteredRows() {
        if (this.manualFiltering) {
            return this.unpinnedRows.slice(0);
        }
        return this.applyFilters(this.unpinnedRows);
    }
    get sortedRows() {
        if (this.sortServer || this.manualSorting) {
            return this.filteredRows.slice(0);
        }
        return sortRows(this.filteredRows, this.activeSortColumn, this.sortDirection);
    }
    get groupedRows() {
        var groups = this.normalizedGrouping;
        if (!groups.length) {
            return this.sortedRows;
        }
        return this.buildGroupedRows(this.sortedRows, groups, 0, '');
    }
    get bodyRows() {
        var rows = [];
        var top = this.filteredPinnedTopRows;
        var bottom = this.filteredPinnedBottomRows;
        var center = this.groupedRows;
        var i;
        for (i = 0; i < top.length; i += 1) {
            rows.push(top[i]);
        }
        for (i = 0; i < center.length; i += 1) {
            rows.push(center[i]);
        }
        for (i = 0; i < bottom.length; i += 1) {
            rows.push(bottom[i]);
        }
        return rows;
    }
    get displayedRows() {
        var start;
        var rows = this.bodyRows;
        if (this.pagination && !this.paginationServer && !this.manualPagination) {
            start = (this.currentPage - 1) * this.rowsPerPage;
            rows = rows.slice(start, start + this.rowsPerPage);
        }
        if (this.virtualRows) {
            start = Math.max(0, this.virtualStartIndex || 0);
            rows = rows.slice(start, start + Math.max(1, this.virtualRowCount || 25));
        }
        return rows;
    }
    get hasRows() {
        return this.bodyRows.length > 0;
    }
    get totalRows() {
        return (this.paginationServer || this.manualPagination)
            ? this.paginationTotalRows || this.data.length
            : this.bodyRows.length;
    }
    get totalPages() {
        return Math.max(1, Math.ceil(Math.max(this.totalRows, 1) / this.rowsPerPage));
    }
    get startRow() {
        if (!this.totalRows) {
            return 0;
        }
        return (this.currentPage - 1) * this.rowsPerPage + 1;
    }
    get endRow() {
        if (!this.totalRows) {
            return 0;
        }
        return Math.min(this.currentPage * this.rowsPerPage, this.totalRows);
    }
    get selectedRows() {
        var rows = [];
        var i;
        for (i = 0; i < this.data.length; i += 1) {
            if (this.selectedKeys[this.getRowKey(this.data[i])]) {
                rows.push(this.data[i]);
            }
        }
        return rows;
    }
    get selectedCount() {
        return this.selectedRows.length;
    }
    get selectionScopeRows() {
        return this.selectableRowsVisibleOnly
            ? this.onlyLeafRows(this.displayedRows)
            : this.onlyLeafRows(this.bodyRows);
    }
    get allRowsSelected() {
        var selectableRows = this.getSelectableRows();
        var i;
        if (!selectableRows.length) {
            return false;
        }
        for (i = 0; i < selectableRows.length; i += 1) {
            if (!this.selectedKeys[this.getRowKey(selectableRows[i])]) {
                return false;
            }
        }
        return true;
    }
    get someRowsSelected() {
        var selectableRows = this.getSelectableRows();
        var selected = 0;
        var i;
        if (!selectableRows.length || this.allRowsSelected) {
            return false;
        }
        for (i = 0; i < selectableRows.length; i += 1) {
            if (this.selectedKeys[this.getRowKey(selectableRows[i])]) {
                selected += 1;
            }
        }
        return selected > 0;
    }
    get selectAllAriaLabel() {
        return this.selectableRowsVisibleOnly ? 'Select all visible rows' : 'Select all rows';
    }
    get selectAllAriaChecked() {
        if (this.allRowsSelected) {
            return 'true';
        }
        return this.someRowsSelected ? 'mixed' : 'false';
    }
    get showContextBar() {
        return this.selectableRows && this.selectedCount > 0;
    }
    get showPagination() {
        return this.pagination && !this.progressPending && this.totalRows > 0;
    }
    get expandedColspan() {
        return this.visibleColumns.length +
            (this.selectableRows ? 1 : 0) +
            (this.expandableRows && !this.expandableRowsHideExpander ? 1 : 0);
    }
    getCellText(row, column, rowIndex) {
        return toCellText(resolveCellValue(row, column, rowIndex));
    }
    getAriaSort(column) {
        if (!column.sortable) {
            return null;
        }
        if (this.activeSortColumn !== column) {
            return 'none';
        }
        return this.sortDirection === 'asc' ? 'ascending' : 'descending';
    }
    getSortButtonAriaLabel(column) {
        var name = String(column.name || column.header || this.getColumnKey(column));
        if (!column.sortable) {
            return name + ' column';
        }
        if (this.activeSortColumn !== column) {
            return 'Sort ' + name + ' ascending';
        }
        return this.sortDirection === 'asc'
            ? 'Sort ' + name + ' descending'
            : 'Sort ' + name + ' ascending';
    }
    getRowAriaSelected(row) {
        return this.selectableRows ? String(this.isRowSelected(row)) : null;
    }
    getRowTabIndex(row) {
        return this.keyboardRows && this.isKeyboardInteractiveRow(row) ? 0 : null;
    }
    getRowSelectionAriaLabel(row, rowIndex) {
        var action = this.selectableRowsSingle ? 'Choose' : (this.isRowSelected(row) ? 'Clear selection for' : 'Select');
        return action + ' row ' + this.getRowAccessibleLabel(row, rowIndex);
    }
    getRowExpandAriaLabel(row, rowIndex) {
        var action = this.isRowExpanded(row) ? 'Collapse details for' : 'Expand details for';
        return action + ' row ' + this.getRowAccessibleLabel(row, rowIndex);
    }
    getExpandedRowId(row) {
        return 'adtc-expanded-' + this.sanitizeId(this.getRowKey(row));
    }
    getGroupRowId(row) {
        return 'adtc-group-' + this.sanitizeId(row && row.groupKey ? row.groupKey : 'group');
    }
    getGroupToggleAriaLabel(row) {
        var action = this.isGroupRowExpanded(row) ? 'Collapse group' : 'Expand group';
        return action + ' ' + row.groupLabel + ' ' + row.groupValue;
    }
    getCellContext(row, column, rowIndex) {
        return {
            $implicit: row,
            row: row,
            rowIndex: rowIndex,
            column: column,
            value: resolveCellValue(row, column, rowIndex)
        };
    }
    getExpandableContext(row, rowIndex) {
        return {
            $implicit: row,
            row: row,
            rowIndex: rowIndex
        };
    }
    toggleSort(column) {
        if (!column.sortable) {
            return;
        }
        if (this.activeSortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        }
        else {
            this.activeSortColumn = column;
            this.sortDirection = 'asc';
        }
        this.currentPage = 1;
        this.sortChange.emit({
            column: column,
            direction: this.sortDirection,
            rows: this.sortedRows
        });
        this.emitTableState();
    }
    toggleAllRows(checked) {
        var rows = this.getSelectableRows();
        var i;
        if (checked) {
            if (this.selectableRowsSingle && rows.length) {
                this.selectedKeys = createSafeDictionary();
                this.selectedKeys[this.getRowKey(rows[0])] = true;
            }
            else {
                for (i = 0; i < rows.length; i += 1) {
                    this.selectedKeys[this.getRowKey(rows[i])] = true;
                }
            }
        }
        else {
            for (i = 0; i < rows.length; i += 1) {
                delete this.selectedKeys[this.getRowKey(rows[i])];
            }
        }
        this.emitSelectionState();
    }
    toggleRowSelection(row) {
        var key;
        if (this.isSelectableDisabled(row)) {
            return;
        }
        key = this.getRowKey(row);
        if (this.selectableRowsSingle) {
            this.selectedKeys = createSafeDictionary();
            this.selectedKeys[key] = true;
        }
        else if (this.selectedKeys[key]) {
            delete this.selectedKeys[key];
        }
        else {
            this.selectedKeys[key] = true;
        }
        this.emitSelectionState();
    }
    isRowSelected(row) {
        return !!this.selectedKeys[this.getRowKey(row)];
    }
    isSelectableDisabled(row) {
        return !!(this.selectableRowDisabled && this.selectableRowDisabled(row));
    }
    handleRowKeydown(event, row) {
        if (!this.isActivationKey(event)) {
            return;
        }
        if (this.isInteractiveEventTarget(event.target)) {
            return;
        }
        if (!this.isKeyboardInteractiveRow(row)) {
            return;
        }
        event.preventDefault();
        if (this.selectableRows && !this.isSelectableDisabled(row)) {
            this.toggleRowSelection(row);
            return;
        }
        if (this.expandableRows && !this.isExpandableDisabled(row)) {
            this.toggleRowExpansion(row);
            return;
        }
        this.rowClicked.emit(row);
    }
    handleSortButtonKeydown(event, column) {
        if (!this.isActivationKey(event)) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.toggleSort(column);
    }
    handleExpanderKeydown(event, row) {
        if (!this.isActivationKey(event)) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.toggleRowExpansion(row);
    }
    handleGroupToggleKeydown(event, row) {
        if (!this.isActivationKey(event)) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.toggleGroupRow(row);
    }
    handleRowClick(row) {
        if (this.expandableRows && this.expandOnRowClicked) {
            this.toggleRowExpansion(row);
        }
        this.rowClicked.emit(row);
    }
    handleRowDoubleClick(row) {
        if (this.expandableRows && this.expandOnRowDoubleClicked) {
            this.toggleRowExpansion(row);
        }
        this.rowDoubleClicked.emit(row);
    }
    handleMouseEnter(row) {
        this.rowMouseEnter.emit(row);
    }
    handleMouseLeave(row) {
        this.rowMouseLeave.emit(row);
    }
    changePage(page) {
        this.currentPage = clamp(page, 1, this.totalPages);
        this.pageChange.emit({
            page: this.currentPage,
            totalRows: this.totalRows
        });
        this.emitTableState();
    }
    changeRowsPerPage(value) {
        this.rowsPerPage = Number(value) || this.paginationPerPage;
        this.currentPage = 1;
        this.rowsPerPageChange.emit({
            rowsPerPage: this.rowsPerPage,
            currentPage: this.currentPage
        });
        this.ensureValidPage();
        this.emitTableState();
    }
    toggleRowExpansion(row) {
        var key;
        if (this.isExpandableDisabled(row)) {
            return;
        }
        key = this.getRowKey(row);
        if (this.expandedKeys[key]) {
            delete this.expandedKeys[key];
        }
        else {
            this.expandedKeys[key] = true;
        }
        this.rowExpandToggled.emit({
            expanded: !!this.expandedKeys[key],
            row: row
        });
    }
    isRowExpanded(row) {
        return !!this.expandedKeys[this.getRowKey(row)];
    }
    isExpandableDisabled(row) {
        return !!(this.expandableRowDisabled && this.expandableRowDisabled(row));
    }
    isGroupRow(row) {
        return !!(row && row.__adtcGroup);
    }
    isGroupRowExpanded(row) {
        return !this.collapsedGroupKeys[row.groupKey];
    }
    toggleGroupRow(row) {
        if (!this.isGroupRow(row)) {
            return;
        }
        if (this.collapsedGroupKeys[row.groupKey]) {
            delete this.collapsedGroupKeys[row.groupKey];
        }
        else {
            this.collapsedGroupKeys[row.groupKey] = true;
        }
    }
    setGlobalFilter(value) {
        this.globalFilter = value || '';
        this.currentPage = 1;
        this.globalFilterChange.emit(this.globalFilter);
        this.emitTableState();
    }
    setColumnFilter(columnId, value) {
        var filters = this.getColumnFilterMap();
        filters[String(columnId)] = value;
        this.columnFilters = filters;
        this.currentPage = 1;
        this.columnFiltersChange.emit(this.columnFilters);
        this.emitTableState();
    }
    setColumnVisibility(columnId, visible) {
        var next = copySafeDictionary(this.columnVisibility);
        next[String(columnId)] = visible;
        this.columnVisibility = next;
        this.columnVisibilityChange.emit(this.columnVisibility);
        this.emitTableState();
    }
    setColumnOrder(order) {
        this.columnOrder = order || [];
        this.columnOrderChange.emit(this.columnOrder);
        this.emitTableState();
    }
    setGrouping(grouping) {
        this.grouping = grouping || [];
        this.groupBy = grouping || [];
        this.groupingChange.emit(this.normalizedGrouping);
        this.emitTableState();
    }
    getColumnUniqueValues(columnId) {
        var column = this.findColumn(columnId);
        var values = createSafeDictionary();
        var rows = this.filteredRows;
        var i;
        var value;
        var key;
        if (!column) {
            return values;
        }
        for (i = 0; i < rows.length; i += 1) {
            value = resolveCellValue(rows[i], column, i);
            key = String(value);
            values[key] = (values[key] || 0) + 1;
        }
        return values;
    }
    getHeaderClassName(column) {
        return this.joinClasses([
            this.getPinnedClassName(column),
            column.headerClassName || '',
            column.right ? 'adtc-align-right' : '',
            column.center ? 'adtc-align-center' : ''
        ]);
    }
    getHeaderStyle(column) {
        return this.mergeColumnSize(column, this.mergePinnedStyle(column, column.headerStyle, true));
    }
    getCellClassName(column) {
        return this.joinClasses([
            this.getPinnedClassName(column),
            column.className || '',
            column.right ? 'adtc-align-right' : '',
            column.center ? 'adtc-align-center' : '',
            column.wrap ? 'adtc-wrap' : 'adtc-nowrap'
        ]);
    }
    getCellStyle(column) {
        return this.mergeColumnSize(column, this.mergePinnedStyle(column, column.style, false));
    }
    getSortButtonClassName(column) {
        return this.joinClasses([
            'adtc-sort-button',
            column.sortable ? 'adtc-sortable' : '',
            column.right ? 'adtc-sort-right' : '',
            column.center ? 'adtc-sort-center' : ''
        ]);
    }
    getSortIndicatorClassName(column) {
        return this.joinClasses([
            'adtc-sort-indicator',
            this.activeSortColumn === column ? 'active' : ''
        ]);
    }
    getRowClassName(row) {
        var classes = [
            'adtc-row',
            this.striped ? 'adtc-row-striped' : '',
            this.dense ? 'adtc-row-dense' : '',
            this.highlightOnHover ? 'adtc-row-hoverable' : '',
            this.pointerOnHover ? 'adtc-row-pointer' : '',
            this.isPinnedTopRow(row) ? 'adtc-row-pinned-top' : '',
            this.isPinnedBottomRow(row) ? 'adtc-row-pinned-bottom' : '',
            this.selectableRowsHighlight && this.isRowSelected(row) ? 'adtc-row-selected' : ''
        ];
        var i;
        var conditional;
        var className;
        for (i = 0; i < this.conditionalRowStyles.length; i += 1) {
            conditional = this.conditionalRowStyles[i];
            if (conditional.when(row)) {
                className = conditional.className;
                if (typeof className === 'function') {
                    classes.push(className(row));
                }
                else if (className) {
                    classes.push(className);
                }
            }
        }
        return this.joinClasses(classes);
    }
    getRowStyle(row) {
        var merged = createSafeDictionary();
        var i;
        var conditional;
        var style;
        var key;
        for (i = 0; i < this.conditionalRowStyles.length; i += 1) {
            conditional = this.conditionalRowStyles[i];
            if (conditional.when(row)) {
                style = typeof conditional.style === 'function'
                    ? conditional.style(row)
                    : conditional.style;
                for (key in style) {
                    if (hasOwnKey(style, key)) {
                        merged[key] = style[key];
                    }
                }
            }
        }
        return merged;
    }
    getRowKey(row) {
        var key = row && row[this.keyField] !== undefined ? row[this.keyField] : this.data.indexOf(row);
        return String(key);
    }
    getColumnKey(column) {
        return String(column.id !== undefined && column.id !== null
            ? column.id
            : column.accessorKey || column.selector || column.name);
    }
    flattenColumns(columns) {
        var output = [];
        var i;
        var child;
        var j;
        for (i = 0; i < columns.length; i += 1) {
            if (columns[i].columns && columns[i].columns.length) {
                for (j = 0; j < columns[i].columns.length; j += 1) {
                    child = columns[i].columns[j];
                    output.push(child.group ? child : this.withInheritedGroup(child, columns[i].header || columns[i].name));
                }
            }
            else {
                output.push(columns[i]);
            }
        }
        return output;
    }
    withInheritedGroup(column, group) {
        var copy = createSafeDictionary();
        var key;
        for (key in column) {
            if (hasOwnKey(column, key)) {
                copy[key] = column[key];
            }
        }
        copy.group = group;
        return copy;
    }
    isColumnVisible(column) {
        var key = this.getColumnKey(column);
        var i;
        if (column.enableHiding === false) {
            return true;
        }
        if (this.columnVisibility &&
            hasOwnKey(this.columnVisibility, key) &&
            this.columnVisibility[key] === false) {
            return false;
        }
        for (i = 0; i < this.hiddenColumns.length; i += 1) {
            if (String(this.hiddenColumns[i]) === key) {
                return false;
            }
        }
        return true;
    }
    applyFilters(rows) {
        var filtered = rows.slice(0);
        var global = String(this.globalFilter || '').toLowerCase();
        var columnFilters = this.getColumnFilterMap();
        var key;
        var column;
        if (global) {
            filtered = filtered.filter((row) => this.matchesGlobalFilter(row, global));
        }
        for (key in columnFilters) {
            if (hasOwnKey(columnFilters, key) && columnFilters[key] !== null && columnFilters[key] !== undefined && columnFilters[key] !== '') {
                column = this.findColumn(key);
                if (column) {
                    filtered = filtered.filter((row) => this.matchesColumnFilter(row, column, columnFilters[key]));
                }
            }
        }
        return filtered;
    }
    matchesGlobalFilter(row, global) {
        var columns = this.visibleColumns;
        var i;
        var value;
        for (i = 0; i < columns.length; i += 1) {
            if (columns[i].enableGlobalFilter === false) {
                continue;
            }
            value = resolveCellValue(row, columns[i], i);
            if (String(value === null || value === undefined ? '' : value).toLowerCase().indexOf(global) !== -1) {
                return true;
            }
        }
        return false;
    }
    matchesColumnFilter(row, column, filterValue) {
        var value;
        var text;
        if (column.filterFn) {
            return column.filterFn(row, filterValue, column);
        }
        value = resolveCellValue(row, column, 0);
        if (Array.isArray(filterValue)) {
            if (filterValue.length === 2 && typeof filterValue[0] === 'number' && typeof filterValue[1] === 'number') {
                return Number(value) >= filterValue[0] && Number(value) <= filterValue[1];
            }
            return filterValue.indexOf(value) !== -1;
        }
        text = String(value === null || value === undefined ? '' : value).toLowerCase();
        return text.indexOf(String(filterValue).toLowerCase()) !== -1;
    }
    getColumnFilterMap() {
        var map = createSafeDictionary();
        var filters = this.columnFilters || {};
        var i;
        if (Array.isArray(filters)) {
            for (i = 0; i < filters.length; i += 1) {
                if (filters[i] && filters[i].id !== undefined) {
                    map[String(filters[i].id)] = filters[i].value;
                }
            }
            return map;
        }
        return copySafeDictionary(filters);
    }
    findColumn(columnId) {
        var columns = this.flatColumns;
        var key = String(columnId);
        var i;
        for (i = 0; i < columns.length; i += 1) {
            if (this.getColumnKey(columns[i]) === key) {
                return columns[i];
            }
        }
        return null;
    }
    get normalizedGrouping() {
        var source = this.grouping && (Array.isArray(this.grouping) ? this.grouping.length : this.grouping)
            ? this.grouping
            : this.groupBy;
        if (Array.isArray(source)) {
            return source;
        }
        return source === null || source === undefined || source === '' ? [] : [source];
    }
    buildGroupedRows(rows, groups, depth, parentKey) {
        var column = this.findColumn(groups[depth]);
        var buckets = createSafeDictionary();
        var order = [];
        var output = [];
        var i;
        var value;
        var key;
        var groupRow;
        var children;
        if (!column || depth >= groups.length) {
            return rows;
        }
        for (i = 0; i < rows.length; i += 1) {
            value = resolveCellValue(rows[i], column, i);
            key = String(value);
            if (!buckets[key]) {
                buckets[key] = [];
                order.push(key);
            }
            buckets[key].push(rows[i]);
        }
        for (i = 0; i < order.length; i += 1) {
            key = parentKey + String(groups[depth]) + ':' + order[i];
            groupRow = {
                __adtcGroup: true,
                groupKey: key,
                groupColumn: groups[depth],
                groupLabel: column.name || groups[depth],
                groupValue: order[i],
                depth: depth,
                leafRows: buckets[order[i]]
            };
            output.push(groupRow);
            if (!this.collapsedGroupKeys[key]) {
                children = depth + 1 < groups.length
                    ? this.buildGroupedRows(buckets[order[i]], groups, depth + 1, key + '|')
                    : buckets[order[i]];
                output = output.concat(children);
            }
        }
        return output;
    }
    onlyLeafRows(rows) {
        var output = [];
        var i;
        for (i = 0; i < rows.length; i += 1) {
            if (!this.isGroupRow(rows[i])) {
                output.push(rows[i]);
            }
        }
        return output;
    }
    getPinnedRows(position) {
        if (this.rowPinning && this.rowPinning[position]) {
            return this.rowPinning[position] || [];
        }
        return position === 'top' ? this.pinnedTopRows || [] : this.pinnedBottomRows || [];
    }
    filterPinnedRows(rows) {
        if (this.manualFiltering) {
            return rows.slice(0);
        }
        return this.applyFilters(rows);
    }
    isPinnedTopRow(row) {
        return this.rowExistsIn(row, this.pinnedTopDisplayRows);
    }
    isPinnedBottomRow(row) {
        return this.rowExistsIn(row, this.pinnedBottomDisplayRows);
    }
    rowExistsIn(row, rows) {
        var key = this.getRowKey(row);
        var i;
        for (i = 0; i < rows.length; i += 1) {
            if (this.getRowKey(rows[i]) === key) {
                return true;
            }
        }
        return false;
    }
    getPinnedClassName(column) {
        var side = this.getColumnPinSide(column);
        return side === 'left' ? 'adtc-pinned-left' : side === 'right' ? 'adtc-pinned-right' : '';
    }
    getColumnPinSide(column) {
        var key = this.getColumnKey(column);
        var left = (this.columnPinning && this.columnPinning.left) || [];
        var right = (this.columnPinning && this.columnPinning.right) || [];
        var i;
        if (column.pin === 'left' || column.pin === 'right') {
            return column.pin;
        }
        for (i = 0; i < left.length; i += 1) {
            if (String(left[i]) === key) {
                return 'left';
            }
        }
        for (i = 0; i < right.length; i += 1) {
            if (String(right[i]) === key) {
                return 'right';
            }
        }
        return '';
    }
    mergePinnedStyle(column, style, header) {
        var merged = createSafeDictionary();
        var key;
        var side = this.getColumnPinSide(column);
        var offset;
        if (style) {
            for (key in style) {
                if (hasOwnKey(style, key)) {
                    merged[key] = style[key];
                }
            }
        }
        if (side) {
            offset = this.getPinnedOffset(column, side);
            merged.position = 'sticky';
            merged[side] = offset + 'px';
            merged.zIndex = header ? 5 : 3;
            merged.background = this.theme === 'dark' ? '#111c2d' : '#ffffff';
        }
        return merged;
    }
    getPinnedOffset(column, side) {
        var columns = this.visibleColumns;
        var offset = 0;
        var i;
        if (side === 'left') {
            for (i = 0; i < columns.length; i += 1) {
                if (this.getColumnKey(columns[i]) === this.getColumnKey(column)) {
                    return offset;
                }
                if (this.getColumnPinSide(columns[i]) === 'left') {
                    offset += this.getColumnPixelWidth(columns[i]);
                }
            }
        }
        else {
            for (i = columns.length - 1; i >= 0; i -= 1) {
                if (this.getColumnKey(columns[i]) === this.getColumnKey(column)) {
                    return offset;
                }
                if (this.getColumnPinSide(columns[i]) === 'right') {
                    offset += this.getColumnPixelWidth(columns[i]);
                }
            }
        }
        return offset;
    }
    getColumnPixelWidth(column) {
        var key = this.getColumnKey(column);
        var size = this.columnSizing && hasOwnKey(this.columnSizing, key)
            ? this.columnSizing[key]
            : column.size || column.width;
        var parsed;
        if (typeof size === 'number') {
            return size;
        }
        if (typeof size === 'string' && size.indexOf('px') !== -1) {
            parsed = parseInt(size, 10);
            return isNaN(parsed) ? 160 : parsed;
        }
        return 160;
    }
    getSelectableRows() {
        var rows = [];
        var source = this.selectionScopeRows;
        var i;
        for (i = 0; i < source.length; i += 1) {
            if (!this.isSelectableDisabled(source[i])) {
                rows.push(source[i]);
            }
        }
        return rows;
    }
    isKeyboardInteractiveRow(row) {
        if (this.selectableRows && !this.isSelectableDisabled(row)) {
            return true;
        }
        if (this.expandableRows && !this.isExpandableDisabled(row)) {
            return true;
        }
        return !!this.pointerOnHover;
    }
    isActivationKey(event) {
        var key = event.key || '';
        return key === 'Enter' || key === ' ' || key === 'Spacebar' || event.keyCode === 13 || event.keyCode === 32;
    }
    isInteractiveEventTarget(target) {
        var node = target;
        var tag;
        var role;
        while (node) {
            tag = node.tagName ? String(node.tagName).toLowerCase() : '';
            role = node.getAttribute ? node.getAttribute('role') : null;
            if (tag === 'button' ||
                tag === 'input' ||
                tag === 'select' ||
                tag === 'textarea' ||
                tag === 'a' ||
                role === 'button' ||
                role === 'checkbox' ||
                role === 'radio') {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    getRowAccessibleLabel(row, rowIndex) {
        var label = row && (row.ariaLabel || row.label || row.name || row.title);
        var column;
        var value;
        if (label) {
            return String(label);
        }
        column = this.getFirstReadableColumn();
        if (column) {
            value = this.getCellText(row, column, rowIndex);
            if (value) {
                return value;
            }
        }
        return String(rowIndex + 1);
    }
    getFirstReadableColumn() {
        var columns = this.visibleColumns;
        var i;
        for (i = 0; i < columns.length; i += 1) {
            if (!columns[i].omit) {
                return columns[i];
            }
        }
        return null;
    }
    sanitizeId(value) {
        return String(value || 'row').replace(/[^a-zA-Z0-9_-]/g, '-');
    }
    emitSelectionState() {
        this.selectedRowsChange.emit({
            allSelected: this.allRowsSelected,
            selectedCount: this.selectedCount,
            selectedRows: this.selectedRows
        });
    }
    emitTableState() {
        this.tableStateChange.emit({
            globalFilter: this.globalFilter,
            columnFilters: this.columnFilters,
            columnVisibility: this.columnVisibility,
            columnOrder: this.columnOrder,
            groupBy: this.normalizedGrouping
        });
    }
    syncProgrammaticSelection() {
        var next = createSafeDictionary();
        var i;
        if (!this.selectableRowSelected) {
            return;
        }
        for (i = 0; i < this.data.length; i += 1) {
            if (this.selectableRowSelected(this.data[i])) {
                next[this.getRowKey(this.data[i])] = true;
            }
        }
        this.selectedKeys = next;
        this.emitSelectionState();
    }
    syncProgrammaticExpansion() {
        var next = createSafeDictionary();
        var i;
        if (!this.expandableRowExpanded) {
            return;
        }
        for (i = 0; i < this.data.length; i += 1) {
            if (this.expandableRowExpanded(this.data[i])) {
                next[this.getRowKey(this.data[i])] = true;
            }
        }
        this.expandedKeys = next;
    }
    applyDefaultSort() {
        var i;
        var column;
        if (this.defaultSortFieldId === null || this.defaultSortFieldId === undefined) {
            return;
        }
        for (i = 0; i < this.columns.length; i += 1) {
            column = this.columns[i];
            if (column.id === this.defaultSortFieldId || column.sortField === this.defaultSortFieldId) {
                this.activeSortColumn = column;
                this.sortDirection = this.defaultSortAsc ? 'asc' : 'desc';
                return;
            }
        }
    }
    ensureValidPage() {
        this.currentPage = clamp(this.currentPage, 1, this.totalPages);
    }
    mergeColumnSize(column, style) {
        var merged = createSafeDictionary();
        var key;
        var sizedWidth = null;
        if (style) {
            for (key in style) {
                if (hasOwnKey(style, key)) {
                    merged[key] = style[key];
                }
            }
        }
        if (column.width) {
            merged.width = column.width;
        }
        if (column.size) {
            merged.width = column.size + 'px';
        }
        if (this.columnSizing && hasOwnKey(this.columnSizing, this.getColumnKey(column))) {
            sizedWidth = typeof this.columnSizing[this.getColumnKey(column)] === 'number'
                ? this.columnSizing[this.getColumnKey(column)] + 'px'
                : this.columnSizing[this.getColumnKey(column)];
            merged.width = sizedWidth;
        }
        if (column.minWidth) {
            merged.minWidth = column.minWidth;
        }
        if (column.minSize) {
            merged.minWidth = column.minSize + 'px';
        }
        if (column.maxWidth) {
            merged.maxWidth = column.maxWidth;
        }
        if (column.maxSize) {
            merged.maxWidth = column.maxSize + 'px';
        }
        if (sizedWidth) {
            if (!merged.minWidth) {
                merged.minWidth = sizedWidth;
            }
            if (!merged.maxWidth) {
                merged.maxWidth = sizedWidth;
            }
        }
        return merged;
    }
    joinClasses(classes) {
        var output = [];
        var i;
        for (i = 0; i < classes.length; i += 1) {
            if (classes[i]) {
                output.push(classes[i]);
            }
        }
        return output.join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.3", ngImport: i0, type: DataTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "22.1.3", type: DataTableComponent, isStandalone: false, selector: "stackline-data-table", inputs: { columns: "columns", data: "data", keyField: "keyField", title: "title", ariaLabel: "ariaLabel", keyboardRows: "keyboardRows", pagination: "pagination", paginationServer: "paginationServer", paginationDefaultPage: "paginationDefaultPage", paginationPerPage: "paginationPerPage", paginationTotalRows: "paginationTotalRows", paginationRowsPerPageOptions: "paginationRowsPerPageOptions", selectableRows: "selectableRows", selectableRowsSingle: "selectableRowsSingle", selectableRowsHighlight: "selectableRowsHighlight", selectableRowsNoSelectAll: "selectableRowsNoSelectAll", selectableRowsVisibleOnly: "selectableRowsVisibleOnly", clearSelectedRows: "clearSelectedRows", selectableRowSelected: "selectableRowSelected", selectableRowDisabled: "selectableRowDisabled", expandableRows: "expandableRows", expandableRowsHideExpander: "expandableRowsHideExpander", expandOnRowClicked: "expandOnRowClicked", expandOnRowDoubleClicked: "expandOnRowDoubleClicked", expandableRowDisabled: "expandableRowDisabled", expandableRowExpanded: "expandableRowExpanded", expandableRowTemplate: "expandableRowTemplate", striped: "striped", highlightOnHover: "highlightOnHover", pointerOnHover: "pointerOnHover", dense: "dense", responsive: "responsive", progressPending: "progressPending", noHeader: "noHeader", noTableHead: "noTableHead", fixedHeader: "fixedHeader", fixedHeaderScrollHeight: "fixedHeaderScrollHeight", noDataText: "noDataText", conditionalRowStyles: "conditionalRowStyles", defaultSortFieldId: "defaultSortFieldId", defaultSortAsc: "defaultSortAsc", sortServer: "sortServer", manualSorting: "manualSorting", manualFiltering: "manualFiltering", manualPagination: "manualPagination", globalFilter: "globalFilter", columnFilters: "columnFilters", hiddenColumns: "hiddenColumns", columnVisibility: "columnVisibility", columnOrder: "columnOrder", columnPinning: "columnPinning", columnSizing: "columnSizing", groupBy: "groupBy", grouping: "grouping", aggregationFns: "aggregationFns", pinnedTopRows: "pinnedTopRows", pinnedBottomRows: "pinnedBottomRows", rowPinning: "rowPinning", virtualRows: "virtualRows", virtualStartIndex: "virtualStartIndex", virtualRowCount: "virtualRowCount", theme: "theme", contextMessage: "contextMessage" }, outputs: { sortChange: "sortChange", selectedRowsChange: "selectedRowsChange", pageChange: "pageChange", rowsPerPageChange: "rowsPerPageChange", rowClicked: "rowClicked", rowDoubleClicked: "rowDoubleClicked", rowMouseEnter: "rowMouseEnter", rowMouseLeave: "rowMouseLeave", rowExpandToggled: "rowExpandToggled", globalFilterChange: "globalFilterChange", columnFiltersChange: "columnFiltersChange", columnVisibilityChange: "columnVisibilityChange", columnOrderChange: "columnOrderChange", groupingChange: "groupingChange", tableStateChange: "tableStateChange" }, usesOnChanges: true, ngImport: i0, template: "\n<div [attr.class]=\"shellClassName\">\n  <div *ngIf=\"title && !noHeader\" class=\"adtc-header\">\n    <h3>{{ title }}</h3>\n  </div>\n\n  <div *ngIf=\"showContextBar\" class=\"adtc-context\">\n    <strong>{{ selectedCount }}</strong>\n    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}\n    {{ contextMessage.message }}\n  </div>\n\n  <div *ngIf=\"progressPending\" class=\"adtc-state adtc-loading\" role=\"status\" aria-live=\"polite\">\n    Loading...\n  </div>\n\n  <div *ngIf=\"!progressPending && !hasRows\" class=\"adtc-state\" role=\"status\" aria-live=\"polite\">\n    {{ noDataText }}\n  </div>\n\n  <div *ngIf=\"!progressPending && hasRows\">\n      <div [attr.class]=\"wrapperClassName\">\n      <div [attr.class]=\"scrollClassName\" [attr.style]=\"scrollStyleText\">\n        <table\n          class=\"adtc-table\"\n          role=\"grid\"\n          [attr.aria-label]=\"tableAriaLabel\"\n          [attr.aria-rowcount]=\"totalRows\"\n          [attr.aria-colcount]=\"expandedColspan\">\n          <thead *ngIf=\"!noTableHead\">\n            <tr *ngIf=\"hasColumnGroups\" role=\"row\">\n              <th *ngIf=\"selectableRows\" class=\"adtc-select-col\" rowspan=\"2\" scope=\"col\" role=\"columnheader\">\n                <input\n                  *ngIf=\"!selectableRowsSingle && !selectableRowsNoSelectAll\"\n                  type=\"checkbox\"\n                  [attr.aria-label]=\"selectAllAriaLabel\"\n                  [attr.aria-checked]=\"selectAllAriaChecked\"\n                  [indeterminate]=\"someRowsSelected\"\n                  [checked]=\"allRowsSelected\"\n                  (click)=\"$event.stopPropagation()\"\n                  (change)=\"toggleAllRows($any($event.target).checked)\" />\n              </th>\n\n              <th *ngIf=\"expandableRows && !expandableRowsHideExpander\" class=\"adtc-expand-col\" rowspan=\"2\" scope=\"col\" role=\"columnheader\"></th>\n\n              <th *ngFor=\"let group of columnGroups\" class=\"adtc-group-header\" [attr.colspan]=\"group.colspan\" scope=\"colgroup\" role=\"columnheader\">\n                {{ group.name }}\n              </th>\n            </tr>\n\n            <tr role=\"row\">\n              <th *ngIf=\"selectableRows && !hasColumnGroups\" class=\"adtc-select-col\" scope=\"col\" role=\"columnheader\">\n                <input\n                  *ngIf=\"!selectableRowsSingle && !selectableRowsNoSelectAll\"\n                  type=\"checkbox\"\n                  [attr.aria-label]=\"selectAllAriaLabel\"\n                  [attr.aria-checked]=\"selectAllAriaChecked\"\n                  [indeterminate]=\"someRowsSelected\"\n                  [checked]=\"allRowsSelected\"\n                  (click)=\"$event.stopPropagation()\"\n                  (change)=\"toggleAllRows($any($event.target).checked)\" />\n              </th>\n\n              <th *ngIf=\"expandableRows && !expandableRowsHideExpander && !hasColumnGroups\" class=\"adtc-expand-col\" scope=\"col\" role=\"columnheader\"></th>\n\n              <th\n                *ngFor=\"let column of visibleColumns\"\n                [attr.class]=\"getHeaderClassName(column)\"\n                [attr.style]=\"getHeaderStyleText(column)\"\n                scope=\"col\"\n                role=\"columnheader\"\n                [attr.aria-sort]=\"getAriaSort(column)\">\n                <button\n                  type=\"button\"\n\t                  [attr.class]=\"getSortButtonClassName(column)\"\n\t                  [attr.aria-label]=\"getSortButtonAriaLabel(column)\"\n\t                  [disabled]=\"!column.sortable\"\n\t                  (keydown)=\"handleSortButtonKeydown($event, column)\"\n\t                  (click)=\"toggleSort(column)\">\n                  <span>{{ column.name }}</span>\n                  <span *ngIf=\"column.sortable\" [attr.class]=\"getSortIndicatorClassName(column)\">\n                    {{ activeSortColumn === column ? (sortDirection === 'asc' ? 'Asc' : 'Desc') : 'Sort' }}\n                  </span>\n                </button>\n              </th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <ng-template ngFor let-row [ngForOf]=\"displayedRows\" let-rowIndex=\"index\">\n              <tr *ngIf=\"isGroupRow(row)\" class=\"adtc-group-row\" role=\"row\" [attr.id]=\"getGroupRowId(row)\">\n                <td class=\"adtc-group-cell\" [attr.colspan]=\"expandedColspan\" role=\"gridcell\">\n                  <button\n                    type=\"button\"\n                    class=\"adtc-group-toggle\"\n\t                    [attr.aria-label]=\"getGroupToggleAriaLabel(row)\"\n\t                    [attr.aria-expanded]=\"isGroupRowExpanded(row)\"\n\t                    [attr.aria-controls]=\"getGroupRowId(row)\"\n\t                    (keydown)=\"handleGroupToggleKeydown($event, row)\"\n\t                    (click)=\"toggleGroupRow(row)\">\n                    {{ isGroupRowExpanded(row) ? '-' : '+' }}\n                  </button>\n                  <strong>{{ row.groupLabel }}</strong>\n                  <span>{{ row.groupValue }}</span>\n                  <em>{{ row.leafRows.length }} rows</em>\n                </td>\n              </tr>\n\n              <tr\n                *ngIf=\"!isGroupRow(row)\"\n                role=\"row\"\n                [attr.class]=\"getRowClassName(row)\"\n                [attr.style]=\"getRowStyleText(row)\"\n                [attr.tabindex]=\"getRowTabIndex(row)\"\n                [attr.aria-selected]=\"getRowAriaSelected(row)\"\n                (keydown)=\"handleRowKeydown($event, row)\"\n                (click)=\"handleRowClick(row)\"\n                (dblclick)=\"handleRowDoubleClick(row)\"\n                (mouseenter)=\"handleMouseEnter(row)\"\n                (mouseleave)=\"handleMouseLeave(row)\">\n                <td *ngIf=\"selectableRows\" class=\"adtc-select-col\" role=\"gridcell\">\n                  <input\n                    [type]=\"selectableRowsSingle ? 'radio' : 'checkbox'\"\n                    [attr.aria-label]=\"getRowSelectionAriaLabel(row, rowIndex)\"\n                    [attr.aria-checked]=\"isRowSelected(row)\"\n                    [checked]=\"isRowSelected(row)\"\n                    [disabled]=\"isSelectableDisabled(row)\"\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"toggleRowSelection(row)\" />\n                </td>\n\n                <td *ngIf=\"expandableRows && !expandableRowsHideExpander\" class=\"adtc-expand-col\" role=\"gridcell\">\n                  <button\n                    type=\"button\"\n                    class=\"adtc-expander\"\n                    [attr.aria-label]=\"getRowExpandAriaLabel(row, rowIndex)\"\n\t                    [attr.aria-expanded]=\"isRowExpanded(row)\"\n\t                    [attr.aria-controls]=\"getExpandedRowId(row)\"\n\t                    [disabled]=\"isExpandableDisabled(row)\"\n\t                    (keydown)=\"handleExpanderKeydown($event, row)\"\n\t                    (click)=\"$event.stopPropagation(); toggleRowExpansion(row)\">\n                    {{ isRowExpanded(row) ? '-' : '+' }}\n                  </button>\n                </td>\n\n                <td *ngFor=\"let column of visibleColumns\" [attr.class]=\"getCellClassName(column)\" [attr.style]=\"getCellStyleText(column)\" role=\"gridcell\">\n                  <ng-template [ngIf]=\"column.cellTemplate\">\n                    <ng-template\n                      [ngTemplateOutlet]=\"column.cellTemplate\"\n                      [ngTemplateOutletContext]=\"getCellContext(row, column, rowIndex)\">\n                    </ng-template>\n                  </ng-template>\n                  <ng-template [ngIf]=\"!column.cellTemplate\">\n                    {{ getCellText(row, column, rowIndex) }}\n                  </ng-template>\n                </td>\n              </tr>\n\n              <tr\n                *ngIf=\"!isGroupRow(row) && expandableRows && expandableRowTemplate && isRowExpanded(row)\"\n                class=\"adtc-expanded-row\"\n                role=\"row\"\n                [attr.id]=\"getExpandedRowId(row)\">\n                <td class=\"adtc-expanded-cell\" [attr.colspan]=\"expandedColspan\" role=\"gridcell\">\n                  <ng-template\n                    [ngTemplateOutlet]=\"expandableRowTemplate\"\n                    [ngTemplateOutletContext]=\"getExpandableContext(row, rowIndex)\">\n                  </ng-template>\n                </td>\n              </tr>\n            </ng-template>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div *ngIf=\"showPagination\" class=\"adtc-pagination\">\n      <div class=\"adtc-pagination-meta\">\n        Showing {{ startRow }}-{{ endRow }} of {{ totalRows }}\n      </div>\n\n      <div class=\"adtc-pagination-controls\">\n        <label class=\"adtc-pagination-size\">\n          Rows:\n          <select [value]=\"rowsPerPage\" (change)=\"changeRowsPerPage($any($event.target).value)\">\n            <option *ngFor=\"let size of paginationRowsPerPageOptions\" [value]=\"size\">\n              {{ size }}\n            </option>\n          </select>\n        </label>\n\n        <button type=\"button\" (click)=\"changePage(1)\" [disabled]=\"currentPage === 1\">First</button>\n        <button type=\"button\" (click)=\"changePage(currentPage - 1)\" [disabled]=\"currentPage === 1\">Prev</button>\n        <span class=\"adtc-page-indicator\">Page {{ currentPage }} of {{ totalPages }}</span>\n        <button type=\"button\" (click)=\"changePage(currentPage + 1)\" [disabled]=\"currentPage === totalPages\">Next</button>\n        <button type=\"button\" (click)=\"changePage(totalPages)\" [disabled]=\"currentPage === totalPages\">Last</button>\n      </div>\n    </div>\n  </div>\n</div>\n", isInline: true, styles: [":host{display:block}.adtc-shell{background:#fff;border:1px solid #d6dee8;border-radius:6px;color:#17324d;font-family:inherit;overflow:hidden}.adtc-theme-dark{background:#111c2d;border-color:#2b3c56;color:#eef4fb}.adtc-header,.adtc-context,.adtc-pagination{padding:10px 12px}.adtc-header{background:#fbfcfe;border-bottom:1px solid #d9e2ec}.adtc-theme-dark .adtc-header{background:#162438;border-bottom-color:#2b3c56}.adtc-header h3{color:#142842;font-size:14px;font-weight:700;line-height:1.25;margin:0}.adtc-context{background:#eaf5fd;border-bottom:1px solid #d9e2ec}.adtc-theme-dark .adtc-context{background:#183555;border-bottom-color:#2b3c56}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{border-collapse:collapse;font-size:13px;line-height:1.35;min-width:100%;table-layout:fixed;width:100%}.adtc-responsive .adtc-table{min-width:720px}.adtc-table thead th{background:#f7f9fc;border-bottom:1px solid #cbd6e2;border-right:1px solid #e7edf4;color:#405874;font-size:12px;font-weight:700;padding:0;text-align:left;vertical-align:middle}.adtc-table thead th:last-child{border-right:0}.adtc-group-header{padding:8px 10px!important;text-align:center}.adtc-theme-dark .adtc-table thead th{background:#162438;border-bottom-color:#3f5678;color:#b0c1d8}.adtc-table td{border-bottom:1px solid #d9e2ec;border-right:1px solid #eef3f7;color:inherit;height:38px;padding:7px 10px;vertical-align:middle}.adtc-table td:last-child{border-right:0}.adtc-theme-dark .adtc-table td{border-bottom-color:#2b3c56;border-right-color:#243650}.adtc-theme-dark .adtc-table thead th{border-right-color:#243650}.adtc-row-hoverable:hover td{background:#f2f8fd}.adtc-theme-dark .adtc-row-hoverable:hover td{background:#183555}.adtc-row-pointer td{cursor:pointer}.adtc-row:focus{outline:2px solid rgba(12,115,184,.34);outline-offset:-2px}.adtc-row:focus td{background:#eef7ff}.adtc-row-striped:nth-child(odd) td{background:#fbfcfe}.adtc-theme-dark .adtc-row-striped:nth-child(odd) td{background:#142238}.adtc-row-dense td{height:32px;padding:5px 9px}.adtc-row-selected td{background:#e9f4fd}.adtc-row-pinned-top td,.adtc-row-pinned-bottom td{background:#f3f8fc;font-weight:600}.adtc-theme-dark .adtc-row-pinned-top td,.adtc-theme-dark .adtc-row-pinned-bottom td{background:#183555}.adtc-theme-dark .adtc-row-selected td{background:#1e4268}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;justify-content:flex-start;min-height:36px;padding:8px 10px;text-align:left;width:100%}.adtc-sort-button:focus{outline:2px solid rgba(12,115,184,.28);outline-offset:-2px}.adtc-sort-button span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.adtc-sortable{cursor:pointer}.adtc-sort-right{justify-content:flex-end;text-align:right}.adtc-sort-center{justify-content:center;text-align:center}.adtc-sort-indicator{color:#8395a8;flex:0 0 auto;font-size:9px;margin-left:6px;max-width:0;opacity:0;overflow:hidden;text-transform:uppercase;transition:max-width .16s ease,opacity .16s ease;white-space:nowrap}.adtc-sort-indicator.active{color:#0c73b8;max-width:36px;opacity:1}.adtc-table thead th:hover .adtc-sort-indicator{max-width:36px;opacity:.72}.adtc-select-col{background:#fbfdff;min-width:54px;padding-left:16px!important;padding-right:16px!important;text-align:center;white-space:nowrap;width:54px}.adtc-expand-col{text-align:center;white-space:nowrap;width:46px}.adtc-select-col input{accent-color:#0c73b8;appearance:none;background:#fff;border:1px solid #9fb0c3;border-radius:3px;cursor:pointer;display:block;height:16px;margin:0 auto;position:relative;vertical-align:middle;width:16px}.adtc-select-col input[type=radio]{border-radius:999px}.adtc-select-col input:checked{background:#0c73b8;border-color:#0c73b8}.adtc-select-col input[type=checkbox]:checked:after{border:solid #ffffff;border-width:0 2px 2px 0;content:\"\";height:8px;left:5px;position:absolute;top:1px;transform:rotate(45deg);width:4px}.adtc-select-col input[type=radio]:checked:after{background:#fff;border-radius:999px;content:\"\";height:6px;left:4px;position:absolute;top:4px;width:6px}.adtc-select-col input:disabled{background:#eef2f6;border-color:#c6d0dc;cursor:not-allowed;opacity:.7}.adtc-select-col input:focus{outline:2px solid rgba(12,115,184,.28);outline-offset:2px}.adtc-expander{align-items:center;background:transparent;border:1px solid #d9e2ec;border-radius:999px;color:#0c73b8;cursor:pointer;display:inline-flex;font-size:14px;font-weight:700;height:26px;justify-content:center;line-height:1;padding:0;width:26px}.adtc-theme-dark .adtc-expander{border-color:#3f5678;color:#7cc7ff}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:#f8fafc}.adtc-theme-dark .adtc-expanded-row td{background:#162438}.adtc-expanded-cell{padding:12px}.adtc-group-row td{background:#eef6fd;border-bottom:1px solid #d9e2ec;color:#17324d;padding:8px 10px}.adtc-theme-dark .adtc-group-row td{background:#183555;border-bottom-color:#2b3c56;color:#eef4fb}.adtc-group-cell{align-items:center;display:flex;gap:8px;min-width:0}.adtc-group-cell em{color:#59708a;flex:0 0 auto;font-size:12px;font-style:normal;margin-left:auto;white-space:nowrap}.adtc-group-toggle{align-items:center;background:#fff;border:1px solid #d9e2ec;border-radius:999px;color:#0c73b8;cursor:pointer;display:inline-flex;flex:0 0 auto;font-size:14px;font-weight:700;height:26px;justify-content:center;line-height:1;padding:0;width:26px}.adtc-pinned-left{box-shadow:2px 0 #0c73b814}.adtc-pinned-right{box-shadow:-2px 0 #0c73b814}.adtc-pagination{align-items:center;border-top:1px solid #d9e2ec;display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between}.adtc-theme-dark .adtc-pagination{border-top-color:#2b3c56}.adtc-pagination-meta{color:#59708a;font-size:12px}.adtc-theme-dark .adtc-pagination-meta{color:#b0c1d8}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:6px}.adtc-pagination-size{align-items:center;color:#59708a;display:inline-flex;gap:6px;font-size:12px}.adtc-pagination select,.adtc-pagination button{background:#fff;border:1px solid #d9e2ec;border-radius:6px;color:#17324d;font-size:12px;min-height:30px;padding:5px 9px}.adtc-pagination select{min-width:64px}.adtc-theme-dark .adtc-pagination select,.adtc-theme-dark .adtc-pagination button{background:#111c2d;border-color:#2b3c56;color:#eef4fb}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.45}.adtc-page-indicator{color:#59708a;font-size:12px}.adtc-theme-dark .adtc-page-indicator{color:#b0c1d8}.adtc-state{color:#59708a;padding:32px 16px;text-align:center}.adtc-theme-dark .adtc-state{color:#b0c1d8}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.3", ngImport: i0, type: DataTableComponent, decorators: [{
            type: Component,
            args: [{ standalone: false, selector: 'stackline-data-table', template: DATA_TABLE_TEMPLATE, styles: [":host{display:block}.adtc-shell{background:#fff;border:1px solid #d6dee8;border-radius:6px;color:#17324d;font-family:inherit;overflow:hidden}.adtc-theme-dark{background:#111c2d;border-color:#2b3c56;color:#eef4fb}.adtc-header,.adtc-context,.adtc-pagination{padding:10px 12px}.adtc-header{background:#fbfcfe;border-bottom:1px solid #d9e2ec}.adtc-theme-dark .adtc-header{background:#162438;border-bottom-color:#2b3c56}.adtc-header h3{color:#142842;font-size:14px;font-weight:700;line-height:1.25;margin:0}.adtc-context{background:#eaf5fd;border-bottom:1px solid #d9e2ec}.adtc-theme-dark .adtc-context{background:#183555;border-bottom-color:#2b3c56}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{border-collapse:collapse;font-size:13px;line-height:1.35;min-width:100%;table-layout:fixed;width:100%}.adtc-responsive .adtc-table{min-width:720px}.adtc-table thead th{background:#f7f9fc;border-bottom:1px solid #cbd6e2;border-right:1px solid #e7edf4;color:#405874;font-size:12px;font-weight:700;padding:0;text-align:left;vertical-align:middle}.adtc-table thead th:last-child{border-right:0}.adtc-group-header{padding:8px 10px!important;text-align:center}.adtc-theme-dark .adtc-table thead th{background:#162438;border-bottom-color:#3f5678;color:#b0c1d8}.adtc-table td{border-bottom:1px solid #d9e2ec;border-right:1px solid #eef3f7;color:inherit;height:38px;padding:7px 10px;vertical-align:middle}.adtc-table td:last-child{border-right:0}.adtc-theme-dark .adtc-table td{border-bottom-color:#2b3c56;border-right-color:#243650}.adtc-theme-dark .adtc-table thead th{border-right-color:#243650}.adtc-row-hoverable:hover td{background:#f2f8fd}.adtc-theme-dark .adtc-row-hoverable:hover td{background:#183555}.adtc-row-pointer td{cursor:pointer}.adtc-row:focus{outline:2px solid rgba(12,115,184,.34);outline-offset:-2px}.adtc-row:focus td{background:#eef7ff}.adtc-row-striped:nth-child(odd) td{background:#fbfcfe}.adtc-theme-dark .adtc-row-striped:nth-child(odd) td{background:#142238}.adtc-row-dense td{height:32px;padding:5px 9px}.adtc-row-selected td{background:#e9f4fd}.adtc-row-pinned-top td,.adtc-row-pinned-bottom td{background:#f3f8fc;font-weight:600}.adtc-theme-dark .adtc-row-pinned-top td,.adtc-theme-dark .adtc-row-pinned-bottom td{background:#183555}.adtc-theme-dark .adtc-row-selected td{background:#1e4268}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;justify-content:flex-start;min-height:36px;padding:8px 10px;text-align:left;width:100%}.adtc-sort-button:focus{outline:2px solid rgba(12,115,184,.28);outline-offset:-2px}.adtc-sort-button span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.adtc-sortable{cursor:pointer}.adtc-sort-right{justify-content:flex-end;text-align:right}.adtc-sort-center{justify-content:center;text-align:center}.adtc-sort-indicator{color:#8395a8;flex:0 0 auto;font-size:9px;margin-left:6px;max-width:0;opacity:0;overflow:hidden;text-transform:uppercase;transition:max-width .16s ease,opacity .16s ease;white-space:nowrap}.adtc-sort-indicator.active{color:#0c73b8;max-width:36px;opacity:1}.adtc-table thead th:hover .adtc-sort-indicator{max-width:36px;opacity:.72}.adtc-select-col{background:#fbfdff;min-width:54px;padding-left:16px!important;padding-right:16px!important;text-align:center;white-space:nowrap;width:54px}.adtc-expand-col{text-align:center;white-space:nowrap;width:46px}.adtc-select-col input{accent-color:#0c73b8;appearance:none;background:#fff;border:1px solid #9fb0c3;border-radius:3px;cursor:pointer;display:block;height:16px;margin:0 auto;position:relative;vertical-align:middle;width:16px}.adtc-select-col input[type=radio]{border-radius:999px}.adtc-select-col input:checked{background:#0c73b8;border-color:#0c73b8}.adtc-select-col input[type=checkbox]:checked:after{border:solid #ffffff;border-width:0 2px 2px 0;content:\"\";height:8px;left:5px;position:absolute;top:1px;transform:rotate(45deg);width:4px}.adtc-select-col input[type=radio]:checked:after{background:#fff;border-radius:999px;content:\"\";height:6px;left:4px;position:absolute;top:4px;width:6px}.adtc-select-col input:disabled{background:#eef2f6;border-color:#c6d0dc;cursor:not-allowed;opacity:.7}.adtc-select-col input:focus{outline:2px solid rgba(12,115,184,.28);outline-offset:2px}.adtc-expander{align-items:center;background:transparent;border:1px solid #d9e2ec;border-radius:999px;color:#0c73b8;cursor:pointer;display:inline-flex;font-size:14px;font-weight:700;height:26px;justify-content:center;line-height:1;padding:0;width:26px}.adtc-theme-dark .adtc-expander{border-color:#3f5678;color:#7cc7ff}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:#f8fafc}.adtc-theme-dark .adtc-expanded-row td{background:#162438}.adtc-expanded-cell{padding:12px}.adtc-group-row td{background:#eef6fd;border-bottom:1px solid #d9e2ec;color:#17324d;padding:8px 10px}.adtc-theme-dark .adtc-group-row td{background:#183555;border-bottom-color:#2b3c56;color:#eef4fb}.adtc-group-cell{align-items:center;display:flex;gap:8px;min-width:0}.adtc-group-cell em{color:#59708a;flex:0 0 auto;font-size:12px;font-style:normal;margin-left:auto;white-space:nowrap}.adtc-group-toggle{align-items:center;background:#fff;border:1px solid #d9e2ec;border-radius:999px;color:#0c73b8;cursor:pointer;display:inline-flex;flex:0 0 auto;font-size:14px;font-weight:700;height:26px;justify-content:center;line-height:1;padding:0;width:26px}.adtc-pinned-left{box-shadow:2px 0 #0c73b814}.adtc-pinned-right{box-shadow:-2px 0 #0c73b814}.adtc-pagination{align-items:center;border-top:1px solid #d9e2ec;display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between}.adtc-theme-dark .adtc-pagination{border-top-color:#2b3c56}.adtc-pagination-meta{color:#59708a;font-size:12px}.adtc-theme-dark .adtc-pagination-meta{color:#b0c1d8}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:6px}.adtc-pagination-size{align-items:center;color:#59708a;display:inline-flex;gap:6px;font-size:12px}.adtc-pagination select,.adtc-pagination button{background:#fff;border:1px solid #d9e2ec;border-radius:6px;color:#17324d;font-size:12px;min-height:30px;padding:5px 9px}.adtc-pagination select{min-width:64px}.adtc-theme-dark .adtc-pagination select,.adtc-theme-dark .adtc-pagination button{background:#111c2d;border-color:#2b3c56;color:#eef4fb}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.45}.adtc-page-indicator{color:#59708a;font-size:12px}.adtc-theme-dark .adtc-page-indicator{color:#b0c1d8}.adtc-state{color:#59708a;padding:32px 16px;text-align:center}.adtc-theme-dark .adtc-state{color:#b0c1d8}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], data: [{
                type: Input
            }], keyField: [{
                type: Input
            }], title: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], keyboardRows: [{
                type: Input
            }], pagination: [{
                type: Input
            }], paginationServer: [{
                type: Input
            }], paginationDefaultPage: [{
                type: Input
            }], paginationPerPage: [{
                type: Input
            }], paginationTotalRows: [{
                type: Input
            }], paginationRowsPerPageOptions: [{
                type: Input
            }], selectableRows: [{
                type: Input
            }], selectableRowsSingle: [{
                type: Input
            }], selectableRowsHighlight: [{
                type: Input
            }], selectableRowsNoSelectAll: [{
                type: Input
            }], selectableRowsVisibleOnly: [{
                type: Input
            }], clearSelectedRows: [{
                type: Input
            }], selectableRowSelected: [{
                type: Input
            }], selectableRowDisabled: [{
                type: Input
            }], expandableRows: [{
                type: Input
            }], expandableRowsHideExpander: [{
                type: Input
            }], expandOnRowClicked: [{
                type: Input
            }], expandOnRowDoubleClicked: [{
                type: Input
            }], expandableRowDisabled: [{
                type: Input
            }], expandableRowExpanded: [{
                type: Input
            }], expandableRowTemplate: [{
                type: Input
            }], striped: [{
                type: Input
            }], highlightOnHover: [{
                type: Input
            }], pointerOnHover: [{
                type: Input
            }], dense: [{
                type: Input
            }], responsive: [{
                type: Input
            }], progressPending: [{
                type: Input
            }], noHeader: [{
                type: Input
            }], noTableHead: [{
                type: Input
            }], fixedHeader: [{
                type: Input
            }], fixedHeaderScrollHeight: [{
                type: Input
            }], noDataText: [{
                type: Input
            }], conditionalRowStyles: [{
                type: Input
            }], defaultSortFieldId: [{
                type: Input
            }], defaultSortAsc: [{
                type: Input
            }], sortServer: [{
                type: Input
            }], manualSorting: [{
                type: Input
            }], manualFiltering: [{
                type: Input
            }], manualPagination: [{
                type: Input
            }], globalFilter: [{
                type: Input
            }], columnFilters: [{
                type: Input
            }], hiddenColumns: [{
                type: Input
            }], columnVisibility: [{
                type: Input
            }], columnOrder: [{
                type: Input
            }], columnPinning: [{
                type: Input
            }], columnSizing: [{
                type: Input
            }], groupBy: [{
                type: Input
            }], grouping: [{
                type: Input
            }], aggregationFns: [{
                type: Input
            }], pinnedTopRows: [{
                type: Input
            }], pinnedBottomRows: [{
                type: Input
            }], rowPinning: [{
                type: Input
            }], virtualRows: [{
                type: Input
            }], virtualStartIndex: [{
                type: Input
            }], virtualRowCount: [{
                type: Input
            }], theme: [{
                type: Input
            }], contextMessage: [{
                type: Input
            }], sortChange: [{
                type: Output
            }], selectedRowsChange: [{
                type: Output
            }], pageChange: [{
                type: Output
            }], rowsPerPageChange: [{
                type: Output
            }], rowClicked: [{
                type: Output
            }], rowDoubleClicked: [{
                type: Output
            }], rowMouseEnter: [{
                type: Output
            }], rowMouseLeave: [{
                type: Output
            }], rowExpandToggled: [{
                type: Output
            }], globalFilterChange: [{
                type: Output
            }], columnFiltersChange: [{
                type: Output
            }], columnVisibilityChange: [{
                type: Output
            }], columnOrderChange: [{
                type: Output
            }], groupingChange: [{
                type: Output
            }], tableStateChange: [{
                type: Output
            }] } });

class DataTableModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.3", ngImport: i0, type: DataTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.3", ngImport: i0, type: DataTableModule, declarations: [DataTableComponent], imports: [CommonModule], exports: [DataTableComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.3", ngImport: i0, type: DataTableModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.3", ngImport: i0, type: DataTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [DataTableComponent],
                    exports: [DataTableComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DataTableComponent, DataTableModule, HeadlessDataTableController, createDataTableController };
//# sourceMappingURL=stackline-angular-data-table-component.mjs.map
