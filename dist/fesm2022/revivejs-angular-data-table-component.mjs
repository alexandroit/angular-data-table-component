import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

const DATA_TABLE_TEMPLATE = `
<div [attr.class]="shellClassName">
  <div *ngIf="title && !noHeader" class="adtc-header">
    <h3>{{ title }}</h3>
  </div>

  <div *ngIf="subHeader && subHeaderTemplate" class="adtc-subheader">
    <ng-container *ngTemplateOutlet="subHeaderTemplate"></ng-container>
  </div>

  <div *ngIf="showContextBar" class="adtc-context">
    <strong>{{ selectedCount }}</strong>
    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}
    {{ contextMessage.message }}
  </div>

  <div *ngIf="progressPending" class="adtc-state adtc-loading">
    Loading…
  </div>

  <div *ngIf="!progressPending && !hasRows" class="adtc-state">
    {{ noDataText }}
  </div>

  <ng-container *ngIf="!progressPending && hasRows">
    <div [attr.class]="getWrapperClassName()">
      <div [attr.class]="getScrollClassName()" [attr.style]="getScrollStyleAttribute()">
        <table class="adtc-table" [attr.aria-label]="ariaLabel || null">
          <thead *ngIf="!noTableHead">
            <tr>
              <ng-container *ngIf="selectableRows">
                <th class="adtc-select-col">
                  <input
                    *ngIf="!selectableRowsSingle && !selectableRowsNoSelectAll"
                    type="checkbox"
                    [checked]="allRowsSelected"
                    (click)="$event.stopPropagation()"
                    (change)="toggleAllRows($any($event.target).checked)" />
                </th>
              </ng-container>

              <ng-container *ngIf="expandableRows && !expandableRowsHideExpander">
                <th class="adtc-expand-col"></th>
              </ng-container>

              <ng-container *ngFor="let column of visibleColumns; trackBy: trackByColumn">
                <th [attr.class]="getHeaderClassName(column)" [attr.style]="getHeaderStyleAttribute(column)">
                  <button
                    type="button"
                    [attr.class]="getSortButtonClassName(column)"
                    [disabled]="!column.sortable"
                    (click)="toggleSort(column)">
                    <span>{{ column.name }}</span>
                    <span *ngIf="column.sortable" [attr.class]="getSortIndicatorClassName(column)">
                      {{ activeSortColumn === column ? (sortDirection === 'asc' ? '▲' : '▼') : '↕' }}
                    </span>
                  </button>
                </th>
              </ng-container>
            </tr>
          </thead>

          <tbody>
            <ng-container *ngFor="let row of displayedRows; let rowIndex = index; trackBy: trackByRow">
              <tr
                [attr.class]="getRowClassName(row)"
                [attr.style]="getRowStyleAttribute(row)"
                (click)="handleRowClick(row)"
                (dblclick)="handleRowDoubleClick(row)"
                (mouseenter)="handleMouseEnter(row)"
                (mouseleave)="handleMouseLeave(row)">
                <ng-container *ngIf="selectableRows">
                  <td class="adtc-select-col">
                    <input
                      [type]="selectableRowsSingle ? 'radio' : 'checkbox'"
                      [checked]="isRowSelected(row)"
                      [disabled]="isSelectableDisabled(row)"
                      (click)="$event.stopPropagation()"
                      (change)="toggleRowSelection(row)" />
                  </td>
                </ng-container>

                <ng-container *ngIf="expandableRows && !expandableRowsHideExpander">
                  <td class="adtc-expand-col">
                    <button
                      type="button"
                      class="adtc-expander"
                      [disabled]="isExpandableDisabled(row)"
                      (click)="$event.stopPropagation(); toggleRowExpansion(row)">
                      {{ isRowExpanded(row) ? '−' : '+' }}
                    </button>
                  </td>
                </ng-container>

                <ng-container *ngFor="let column of visibleColumns; trackBy: trackByColumn">
                  <td [attr.class]="getCellClassName(column)" [attr.style]="getCellStyleAttribute(column)">
                    <ng-container *ngIf="column.cellTemplate">
                      <ng-container
                        *ngTemplateOutlet="column.cellTemplate; context: getCellContext(row, column, rowIndex)">
                      </ng-container>
                    </ng-container>
                    <ng-container *ngIf="!column.cellTemplate">
                      {{ getCellText(row, column, rowIndex) }}
                    </ng-container>
                  </td>
                </ng-container>
              </tr>

              <tr *ngIf="expandableRows && expandableRowTemplate && isRowExpanded(row)" class="adtc-expanded-row">
                <td
                  class="adtc-expanded-cell"
                  [attr.colspan]="visibleColumns.length + (selectableRows ? 1 : 0) + (expandableRows && !expandableRowsHideExpander ? 1 : 0)">
                  <ng-container
                    *ngTemplateOutlet="expandableRowTemplate; context: getExpandableContext(row, rowIndex)">
                  </ng-container>
                </td>
              </tr>
            </ng-container>
          </tbody>
        </table>
      </div>
    </div>

    <div *ngIf="showPagination" class="adtc-pagination">
      <div class="adtc-pagination-meta">
        Showing {{ startRow }}–{{ endRow }} of {{ totalRows }}
      </div>

      <div class="adtc-pagination-controls">
        <label class="adtc-pagination-size">
          Rows:
          <select [value]="rowsPerPage" (change)="changeRowsPerPage(+$any($event.target).value)">
            <option *ngFor="let size of paginationRowsPerPageOptions" [value]="size">
              {{ size }}
            </option>
          </select>
        </label>

        <button type="button" (click)="changePage(1)" [disabled]="currentPage === 1">
          First
        </button>
        <button type="button" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">
          Prev
        </button>
        <span class="adtc-page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
        <button type="button" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">
          Next
        </button>
        <button type="button" (click)="changePage(totalPages)" [disabled]="currentPage === totalPages">
          Last
        </button>
      </div>
    </div>
  </ng-container>
</div>
`;

function compareUnknown(left, right) {
    if (left == null && right == null) {
        return 0;
    }
    if (left == null) {
        return -1;
    }
    if (right == null) {
        return 1;
    }
    if (typeof left === 'number' && typeof right === 'number') {
        return left - right;
    }
    if (typeof left === 'boolean' && typeof right === 'boolean') {
        return Number(left) - Number(right);
    }
    return String(left).localeCompare(String(right), undefined, {
        numeric: true,
        sensitivity: 'base'
    });
}
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function resolveSelectorValue(row, column, rowIndex) {
    if (!column.selector) {
        return null;
    }
    if (typeof column.selector === 'function') {
        return column.selector(row, rowIndex);
    }
    return row[column.selector];
}
function resolveCellValue(row, column, rowIndex) {
    if (column.format) {
        return column.format(row, rowIndex);
    }
    return resolveSelectorValue(row, column, rowIndex);
}
function toCellText(value) {
    if (value == null) {
        return '';
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    return String(value);
}
function toKebabCase(value) {
    return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
function styleObjectToString(style) {
    return Object.entries(style)
        .filter(([, value]) => value != null && value !== '')
        .map(([property, value]) => `${toKebabCase(property)}: ${String(value)}`)
        .join('; ');
}
function sortRows(rows, column, direction) {
    if (!column) {
        return [...rows];
    }
    const multiplier = direction === 'asc' ? 1 : -1;
    return [...rows].sort((left, right) => {
        if (column.sortFunction) {
            return column.sortFunction(left, right) * multiplier;
        }
        const leftIndex = rows.indexOf(left);
        const rightIndex = rows.indexOf(right);
        return compareUnknown(resolveSelectorValue(left, column, leftIndex), resolveSelectorValue(right, column, rightIndex)) * multiplier;
    });
}

class DataTableComponent {
    columns = [];
    data = [];
    keyField = 'id';
    title = '';
    ariaLabel = '';
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
    noContextMenu = false;
    fixedHeader = false;
    fixedHeaderScrollHeight = '420px';
    subHeader = false;
    subHeaderTemplate = null;
    noDataText = 'There are no records to display';
    conditionalRowStyles = [];
    defaultSortFieldId = null;
    defaultSortAsc = true;
    sortServer = false;
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
    currentPage = 1;
    rowsPerPage = 10;
    sortDirection = 'asc';
    activeSortColumn = null;
    selectedKeys = new Set();
    expandedKeys = new Set();
    ngOnChanges(changes) {
        if (changes['paginationPerPage']) {
            this.rowsPerPage = this.paginationPerPage;
        }
        if (changes['paginationDefaultPage']) {
            this.currentPage = this.paginationDefaultPage;
        }
        if (changes['clearSelectedRows'] && !changes['clearSelectedRows'].firstChange) {
            this.selectedKeys.clear();
            this.emitSelectionState();
        }
        if (changes['columns'] ||
            changes['defaultSortFieldId'] ||
            changes['defaultSortAsc']) {
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
    get visibleColumns() {
        return this.columns.filter((column) => !column.omit);
    }
    get shellClassName() {
        return ['adtc-shell', this.theme === 'dark' ? 'adtc-theme-dark' : '']
            .filter(Boolean)
            .join(' ');
    }
    get sortedRows() {
        if (this.sortServer) {
            return [...this.data];
        }
        return sortRows(this.data, this.activeSortColumn, this.sortDirection);
    }
    get displayedRows() {
        if (this.pagination && !this.paginationServer) {
            const start = (this.currentPage - 1) * this.rowsPerPage;
            return this.sortedRows.slice(start, start + this.rowsPerPage);
        }
        return this.sortedRows;
    }
    get hasRows() {
        return this.data.length > 0;
    }
    get totalRows() {
        return this.paginationServer ? this.paginationTotalRows || this.data.length : this.sortedRows.length;
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
        return this.data.filter((row) => this.selectedKeys.has(this.getRowKey(row)));
    }
    get selectedCount() {
        return this.selectedRows.length;
    }
    get allRowsSelected() {
        const selectableRows = this.selectionScopeRows.filter((row) => !this.isSelectableDisabled(row));
        return (selectableRows.length > 0 &&
            selectableRows.every((row) => this.selectedKeys.has(this.getRowKey(row))));
    }
    get showContextBar() {
        return this.selectableRows && !this.noContextMenu && this.selectedCount > 0;
    }
    get showPagination() {
        return this.pagination && !this.progressPending && this.totalRows > 0;
    }
    get selectionScopeRows() {
        return this.selectableRowsVisibleOnly ? this.displayedRows : this.sortedRows;
    }
    trackByColumn = (index, column) => column.id ?? column.name ?? index;
    trackByRow = (index, row) => this.getRowKey(row) || index;
    getCellValue(row, column, rowIndex) {
        return resolveCellValue(row, column, rowIndex);
    }
    getCellText(row, column, rowIndex) {
        return toCellText(this.getCellValue(row, column, rowIndex));
    }
    getCellContext(row, column, rowIndex) {
        return {
            $implicit: row,
            row,
            rowIndex,
            column,
            value: this.getCellValue(row, column, rowIndex)
        };
    }
    getExpandableContext(row, rowIndex) {
        return {
            $implicit: row,
            row,
            rowIndex
        };
    }
    getHeaderStyle(column) {
        return {
            width: column.width ?? null,
            minWidth: column.minWidth ?? null,
            maxWidth: column.maxWidth ?? null,
            ...column.headerStyle
        };
    }
    getCellStyle(column) {
        return {
            width: column.width ?? null,
            minWidth: column.minWidth ?? null,
            maxWidth: column.maxWidth ?? null,
            ...column.style
        };
    }
    getWrapperClassName() {
        return ['adtc-wrapper', this.responsive ? 'adtc-responsive' : '']
            .filter(Boolean)
            .join(' ');
    }
    getScrollClassName() {
        return ['adtc-scroll', this.fixedHeader ? 'adtc-fixed-header' : '']
            .filter(Boolean)
            .join(' ');
    }
    getScrollStyleAttribute() {
        return styleObjectToString({
            maxHeight: this.fixedHeader ? this.fixedHeaderScrollHeight : null
        }) || null;
    }
    getSortButtonClassName(column) {
        return ['adtc-sort-button', column.sortable ? 'adtc-sortable' : '']
            .filter(Boolean)
            .join(' ');
    }
    getSortIndicatorClassName(column) {
        return [
            'adtc-sort-indicator',
            this.activeSortColumn === column ? 'active' : ''
        ]
            .filter(Boolean)
            .join(' ');
    }
    getHeaderClassName(column) {
        return [
            column.headerClassName || '',
            column.right ? 'adtc-align-right' : '',
            column.center ? 'adtc-align-center' : '',
            column.wrap ? 'adtc-wrap' : 'adtc-nowrap'
        ]
            .filter(Boolean)
            .join(' ');
    }
    getCellClassName(column) {
        return [
            column.className || '',
            column.right ? 'adtc-align-right' : '',
            column.center ? 'adtc-align-center' : '',
            column.wrap ? 'adtc-wrap' : 'adtc-nowrap'
        ]
            .filter(Boolean)
            .join(' ');
    }
    getRowClassNames(row) {
        const classNames = ['adtc-row'];
        if (this.striped) {
            classNames.push('adtc-row-striped');
        }
        if (this.highlightOnHover) {
            classNames.push('adtc-row-hoverable');
        }
        if (this.pointerOnHover) {
            classNames.push('adtc-row-pointer');
        }
        if (this.dense) {
            classNames.push('adtc-row-dense');
        }
        if (this.selectableRowsHighlight && this.selectedKeys.has(this.getRowKey(row))) {
            classNames.push('adtc-row-selected');
        }
        for (const conditionalStyle of this.conditionalRowStyles) {
            if (!conditionalStyle.when(row)) {
                continue;
            }
            const className = typeof conditionalStyle.className === 'function'
                ? conditionalStyle.className(row)
                : conditionalStyle.className;
            if (className) {
                classNames.push(className);
            }
        }
        return classNames;
    }
    getRowClassName(row) {
        return this.getRowClassNames(row).join(' ');
    }
    getRowStyle(row) {
        return this.conditionalRowStyles.reduce((acc, conditionalStyle) => {
            if (!conditionalStyle.when(row) || !conditionalStyle.style) {
                return acc;
            }
            const style = typeof conditionalStyle.style === 'function'
                ? conditionalStyle.style(row)
                : conditionalStyle.style;
            return {
                ...acc,
                ...style
            };
        }, {});
    }
    getHeaderStyleAttribute(column) {
        return styleObjectToString(this.getHeaderStyle(column)) || null;
    }
    getCellStyleAttribute(column) {
        return styleObjectToString(this.getCellStyle(column)) || null;
    }
    getRowStyleAttribute(row) {
        return styleObjectToString(this.getRowStyle(row)) || null;
    }
    isRowSelected(row) {
        return this.selectedKeys.has(this.getRowKey(row));
    }
    isRowExpanded(row) {
        return this.expandedKeys.has(this.getRowKey(row));
    }
    isSelectableDisabled(row) {
        return this.selectableRowDisabled ? this.selectableRowDisabled(row) : false;
    }
    isExpandableDisabled(row) {
        return this.expandableRowDisabled ? this.expandableRowDisabled(row) : false;
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
        const rows = this.sortedRows;
        this.sortChange.emit({
            column,
            direction: this.sortDirection,
            rows
        });
    }
    toggleAllRows(checked) {
        const rows = this.selectionScopeRows.filter((row) => !this.isSelectableDisabled(row));
        if (checked) {
            for (const row of rows) {
                this.selectedKeys.add(this.getRowKey(row));
            }
        }
        else {
            for (const row of rows) {
                this.selectedKeys.delete(this.getRowKey(row));
            }
        }
        this.emitSelectionState();
    }
    toggleRowSelection(row) {
        if (!this.selectableRows || this.isSelectableDisabled(row)) {
            return;
        }
        const key = this.getRowKey(row);
        if (this.selectableRowsSingle) {
            this.selectedKeys.clear();
            this.selectedKeys.add(key);
        }
        else if (this.selectedKeys.has(key)) {
            this.selectedKeys.delete(key);
        }
        else {
            this.selectedKeys.add(key);
        }
        this.emitSelectionState();
    }
    toggleRowExpansion(row) {
        if (!this.expandableRows || this.isExpandableDisabled(row)) {
            return;
        }
        const key = this.getRowKey(row);
        const expanded = !this.expandedKeys.has(key);
        if (expanded) {
            this.expandedKeys.add(key);
        }
        else {
            this.expandedKeys.delete(key);
        }
        this.rowExpandToggled.emit({ expanded, row });
    }
    handleRowClick(row) {
        this.rowClicked.emit(row);
        if (this.expandableRows && this.expandOnRowClicked) {
            this.toggleRowExpansion(row);
        }
    }
    handleRowDoubleClick(row) {
        this.rowDoubleClicked.emit(row);
        if (this.expandableRows && this.expandOnRowDoubleClicked) {
            this.toggleRowExpansion(row);
        }
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
    }
    changeRowsPerPage(rowsPerPage) {
        this.rowsPerPage = rowsPerPage;
        this.ensureValidPage();
        this.rowsPerPageChange.emit({
            rowsPerPage: this.rowsPerPage,
            currentPage: this.currentPage
        });
    }
    applyDefaultSort() {
        if (!this.columns.length) {
            this.activeSortColumn = null;
            this.sortDirection = 'asc';
            return;
        }
        const defaultColumn = this.columns.find((column) => column.id === this.defaultSortFieldId ||
            String(column.id) === String(this.defaultSortFieldId));
        this.activeSortColumn = defaultColumn ?? this.activeSortColumn;
        this.sortDirection = this.defaultSortAsc ? 'asc' : 'desc';
    }
    syncProgrammaticSelection() {
        if (!this.selectableRowSelected) {
            return;
        }
        this.selectedKeys.clear();
        for (const row of this.data) {
            if (this.selectableRowSelected(row)) {
                this.selectedKeys.add(this.getRowKey(row));
                if (this.selectableRowsSingle) {
                    break;
                }
            }
        }
        this.emitSelectionState();
    }
    syncProgrammaticExpansion() {
        if (!this.expandableRowExpanded) {
            return;
        }
        this.expandedKeys.clear();
        for (const row of this.data) {
            if (this.expandableRowExpanded(row)) {
                this.expandedKeys.add(this.getRowKey(row));
            }
        }
    }
    emitSelectionState() {
        this.selectedRowsChange.emit({
            allSelected: this.allRowsSelected,
            selectedCount: this.selectedCount,
            selectedRows: this.selectedRows
        });
    }
    ensureValidPage() {
        this.currentPage = clamp(this.currentPage, 1, this.totalPages);
    }
    getRowKey(row) {
        const candidate = row[this.keyField];
        if (candidate == null || candidate === '') {
            return `row-${this.data.indexOf(row)}`;
        }
        return String(candidate);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.18", ngImport: i0, type: DataTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.18", type: DataTableComponent, isStandalone: false, selector: "revive-data-table", inputs: { columns: "columns", data: "data", keyField: "keyField", title: "title", ariaLabel: "ariaLabel", pagination: "pagination", paginationServer: "paginationServer", paginationDefaultPage: "paginationDefaultPage", paginationPerPage: "paginationPerPage", paginationTotalRows: "paginationTotalRows", paginationRowsPerPageOptions: "paginationRowsPerPageOptions", selectableRows: "selectableRows", selectableRowsSingle: "selectableRowsSingle", selectableRowsHighlight: "selectableRowsHighlight", selectableRowsNoSelectAll: "selectableRowsNoSelectAll", selectableRowsVisibleOnly: "selectableRowsVisibleOnly", clearSelectedRows: "clearSelectedRows", selectableRowSelected: "selectableRowSelected", selectableRowDisabled: "selectableRowDisabled", expandableRows: "expandableRows", expandableRowsHideExpander: "expandableRowsHideExpander", expandOnRowClicked: "expandOnRowClicked", expandOnRowDoubleClicked: "expandOnRowDoubleClicked", expandableRowDisabled: "expandableRowDisabled", expandableRowExpanded: "expandableRowExpanded", expandableRowTemplate: "expandableRowTemplate", striped: "striped", highlightOnHover: "highlightOnHover", pointerOnHover: "pointerOnHover", dense: "dense", responsive: "responsive", progressPending: "progressPending", noHeader: "noHeader", noTableHead: "noTableHead", noContextMenu: "noContextMenu", fixedHeader: "fixedHeader", fixedHeaderScrollHeight: "fixedHeaderScrollHeight", subHeader: "subHeader", subHeaderTemplate: "subHeaderTemplate", noDataText: "noDataText", conditionalRowStyles: "conditionalRowStyles", defaultSortFieldId: "defaultSortFieldId", defaultSortAsc: "defaultSortAsc", sortServer: "sortServer", theme: "theme", contextMessage: "contextMessage" }, outputs: { sortChange: "sortChange", selectedRowsChange: "selectedRowsChange", pageChange: "pageChange", rowsPerPageChange: "rowsPerPageChange", rowClicked: "rowClicked", rowDoubleClicked: "rowDoubleClicked", rowMouseEnter: "rowMouseEnter", rowMouseLeave: "rowMouseLeave", rowExpandToggled: "rowExpandToggled" }, usesOnChanges: true, ngImport: i0, template: "\n<div [attr.class]=\"shellClassName\">\n  <div *ngIf=\"title && !noHeader\" class=\"adtc-header\">\n    <h3>{{ title }}</h3>\n  </div>\n\n  <div *ngIf=\"subHeader && subHeaderTemplate\" class=\"adtc-subheader\">\n    <ng-container *ngTemplateOutlet=\"subHeaderTemplate\"></ng-container>\n  </div>\n\n  <div *ngIf=\"showContextBar\" class=\"adtc-context\">\n    <strong>{{ selectedCount }}</strong>\n    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}\n    {{ contextMessage.message }}\n  </div>\n\n  <div *ngIf=\"progressPending\" class=\"adtc-state adtc-loading\">\n    Loading\u2026\n  </div>\n\n  <div *ngIf=\"!progressPending && !hasRows\" class=\"adtc-state\">\n    {{ noDataText }}\n  </div>\n\n  <ng-container *ngIf=\"!progressPending && hasRows\">\n    <div [attr.class]=\"getWrapperClassName()\">\n      <div [attr.class]=\"getScrollClassName()\" [attr.style]=\"getScrollStyleAttribute()\">\n        <table class=\"adtc-table\" [attr.aria-label]=\"ariaLabel || null\">\n          <thead *ngIf=\"!noTableHead\">\n            <tr>\n              <ng-container *ngIf=\"selectableRows\">\n                <th class=\"adtc-select-col\">\n                  <input\n                    *ngIf=\"!selectableRowsSingle && !selectableRowsNoSelectAll\"\n                    type=\"checkbox\"\n                    [checked]=\"allRowsSelected\"\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"toggleAllRows($any($event.target).checked)\" />\n                </th>\n              </ng-container>\n\n              <ng-container *ngIf=\"expandableRows && !expandableRowsHideExpander\">\n                <th class=\"adtc-expand-col\"></th>\n              </ng-container>\n\n              <ng-container *ngFor=\"let column of visibleColumns; trackBy: trackByColumn\">\n                <th [attr.class]=\"getHeaderClassName(column)\" [attr.style]=\"getHeaderStyleAttribute(column)\">\n                  <button\n                    type=\"button\"\n                    [attr.class]=\"getSortButtonClassName(column)\"\n                    [disabled]=\"!column.sortable\"\n                    (click)=\"toggleSort(column)\">\n                    <span>{{ column.name }}</span>\n                    <span *ngIf=\"column.sortable\" [attr.class]=\"getSortIndicatorClassName(column)\">\n                      {{ activeSortColumn === column ? (sortDirection === 'asc' ? '\u25B2' : '\u25BC') : '\u2195' }}\n                    </span>\n                  </button>\n                </th>\n              </ng-container>\n            </tr>\n          </thead>\n\n          <tbody>\n            <ng-container *ngFor=\"let row of displayedRows; let rowIndex = index; trackBy: trackByRow\">\n              <tr\n                [attr.class]=\"getRowClassName(row)\"\n                [attr.style]=\"getRowStyleAttribute(row)\"\n                (click)=\"handleRowClick(row)\"\n                (dblclick)=\"handleRowDoubleClick(row)\"\n                (mouseenter)=\"handleMouseEnter(row)\"\n                (mouseleave)=\"handleMouseLeave(row)\">\n                <ng-container *ngIf=\"selectableRows\">\n                  <td class=\"adtc-select-col\">\n                    <input\n                      [type]=\"selectableRowsSingle ? 'radio' : 'checkbox'\"\n                      [checked]=\"isRowSelected(row)\"\n                      [disabled]=\"isSelectableDisabled(row)\"\n                      (click)=\"$event.stopPropagation()\"\n                      (change)=\"toggleRowSelection(row)\" />\n                  </td>\n                </ng-container>\n\n                <ng-container *ngIf=\"expandableRows && !expandableRowsHideExpander\">\n                  <td class=\"adtc-expand-col\">\n                    <button\n                      type=\"button\"\n                      class=\"adtc-expander\"\n                      [disabled]=\"isExpandableDisabled(row)\"\n                      (click)=\"$event.stopPropagation(); toggleRowExpansion(row)\">\n                      {{ isRowExpanded(row) ? '\u2212' : '+' }}\n                    </button>\n                  </td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of visibleColumns; trackBy: trackByColumn\">\n                  <td [attr.class]=\"getCellClassName(column)\" [attr.style]=\"getCellStyleAttribute(column)\">\n                    <ng-container *ngIf=\"column.cellTemplate\">\n                      <ng-container\n                        *ngTemplateOutlet=\"column.cellTemplate; context: getCellContext(row, column, rowIndex)\">\n                      </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"!column.cellTemplate\">\n                      {{ getCellText(row, column, rowIndex) }}\n                    </ng-container>\n                  </td>\n                </ng-container>\n              </tr>\n\n              <tr *ngIf=\"expandableRows && expandableRowTemplate && isRowExpanded(row)\" class=\"adtc-expanded-row\">\n                <td\n                  class=\"adtc-expanded-cell\"\n                  [attr.colspan]=\"visibleColumns.length + (selectableRows ? 1 : 0) + (expandableRows && !expandableRowsHideExpander ? 1 : 0)\">\n                  <ng-container\n                    *ngTemplateOutlet=\"expandableRowTemplate; context: getExpandableContext(row, rowIndex)\">\n                  </ng-container>\n                </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div *ngIf=\"showPagination\" class=\"adtc-pagination\">\n      <div class=\"adtc-pagination-meta\">\n        Showing {{ startRow }}\u2013{{ endRow }} of {{ totalRows }}\n      </div>\n\n      <div class=\"adtc-pagination-controls\">\n        <label class=\"adtc-pagination-size\">\n          Rows:\n          <select [value]=\"rowsPerPage\" (change)=\"changeRowsPerPage(+$any($event.target).value)\">\n            <option *ngFor=\"let size of paginationRowsPerPageOptions\" [value]=\"size\">\n              {{ size }}\n            </option>\n          </select>\n        </label>\n\n        <button type=\"button\" (click)=\"changePage(1)\" [disabled]=\"currentPage === 1\">\n          First\n        </button>\n        <button type=\"button\" (click)=\"changePage(currentPage - 1)\" [disabled]=\"currentPage === 1\">\n          Prev\n        </button>\n        <span class=\"adtc-page-indicator\">Page {{ currentPage }} of {{ totalPages }}</span>\n        <button type=\"button\" (click)=\"changePage(currentPage + 1)\" [disabled]=\"currentPage === totalPages\">\n          Next\n        </button>\n        <button type=\"button\" (click)=\"changePage(totalPages)\" [disabled]=\"currentPage === totalPages\">\n          Last\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</div>\n", isInline: true, styles: [":host{display:block}.adtc-shell{--adtc-bg: #ffffff;--adtc-surface: #f8fafc;--adtc-border: #d9e2ec;--adtc-border-strong: #b9c8d8;--adtc-text: #17324d;--adtc-muted: #59708a;--adtc-accent: #0c73b8;--adtc-accent-soft: rgba(12, 115, 184, .08);--adtc-selected: rgba(12, 115, 184, .12);--adtc-striped: rgba(16, 44, 74, .03);--adtc-hover: rgba(12, 115, 184, .06);color:var(--adtc-text)}.adtc-theme-dark{--adtc-bg: #111c2d;--adtc-surface: #162438;--adtc-border: #2b3c56;--adtc-border-strong: #3f5678;--adtc-text: #eef4fb;--adtc-muted: #b0c1d8;--adtc-accent: #7cc7ff;--adtc-accent-soft: rgba(124, 199, 255, .12);--adtc-selected: rgba(124, 199, 255, .18);--adtc-striped: rgba(255, 255, 255, .025);--adtc-hover: rgba(124, 199, 255, .08)}.adtc-shell{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:18px;overflow:hidden}.adtc-header,.adtc-subheader,.adtc-context,.adtc-pagination{padding:1rem 1.25rem}.adtc-header{border-bottom:1px solid var(--adtc-border);background:linear-gradient(180deg,var(--adtc-bg),var(--adtc-surface))}.adtc-header h3{margin:0;font-size:1.1rem}.adtc-subheader{border-bottom:1px solid var(--adtc-border);background:var(--adtc-surface)}.adtc-context{border-bottom:1px solid var(--adtc-border);background:var(--adtc-accent-soft);color:var(--adtc-text)}.adtc-wrapper{background:var(--adtc-bg)}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{width:100%;border-collapse:collapse;min-width:720px}.adtc-table thead th{background:var(--adtc-surface);border-bottom:1px solid var(--adtc-border-strong);color:var(--adtc-muted);font-size:.82rem;font-weight:700;letter-spacing:.02em;padding:0;text-align:left}.adtc-table td{border-bottom:1px solid var(--adtc-border);color:var(--adtc-text);padding:.9rem 1rem;vertical-align:middle}.adtc-row-hoverable:hover td{background:var(--adtc-hover)}.adtc-row-pointer td{cursor:pointer}.adtc-row-striped:nth-child(4n+1) td,.adtc-row-striped:nth-child(4n+2) td{background:var(--adtc-striped)}.adtc-row-dense td{padding-block:.58rem}.adtc-row-selected td{background:var(--adtc-selected)}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;gap:.45rem;justify-content:space-between;padding:.95rem 1rem;width:100%}.adtc-sortable{cursor:pointer}.adtc-sort-indicator{color:var(--adtc-border-strong);font-size:.8rem}.adtc-sort-indicator.active{color:var(--adtc-accent)}.adtc-select-col,.adtc-expand-col{width:1%;white-space:nowrap;text-align:center}.adtc-expander{background:transparent;border:1px solid var(--adtc-border);border-radius:999px;color:var(--adtc-accent);cursor:pointer;font-size:1rem;height:2rem;line-height:1;width:2rem}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:var(--adtc-surface)}.adtc-expanded-cell{padding:1rem 1.25rem}.adtc-pagination{align-items:center;border-top:1px solid var(--adtc-border);display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between}.adtc-pagination-meta{color:var(--adtc-muted);font-size:.92rem}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:.65rem}.adtc-pagination-size{align-items:center;color:var(--adtc-muted);display:inline-flex;gap:.4rem}.adtc-pagination select,.adtc-pagination button{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:10px;color:var(--adtc-text);font:inherit;padding:.45rem .7rem}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.5}.adtc-page-indicator{color:var(--adtc-muted);font-size:.92rem}.adtc-state{color:var(--adtc-muted);padding:2rem 1.25rem;text-align:center}.adtc-loading{font-weight:700}@media(max-width:900px){.adtc-shell{border-radius:14px}.adtc-table{min-width:620px}.adtc-pagination{align-items:flex-start;flex-direction:column}}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.Default });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.18", ngImport: i0, type: DataTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'revive-data-table', standalone: false, template: DATA_TABLE_TEMPLATE, changeDetection: ChangeDetectionStrategy.Default, styles: [":host{display:block}.adtc-shell{--adtc-bg: #ffffff;--adtc-surface: #f8fafc;--adtc-border: #d9e2ec;--adtc-border-strong: #b9c8d8;--adtc-text: #17324d;--adtc-muted: #59708a;--adtc-accent: #0c73b8;--adtc-accent-soft: rgba(12, 115, 184, .08);--adtc-selected: rgba(12, 115, 184, .12);--adtc-striped: rgba(16, 44, 74, .03);--adtc-hover: rgba(12, 115, 184, .06);color:var(--adtc-text)}.adtc-theme-dark{--adtc-bg: #111c2d;--adtc-surface: #162438;--adtc-border: #2b3c56;--adtc-border-strong: #3f5678;--adtc-text: #eef4fb;--adtc-muted: #b0c1d8;--adtc-accent: #7cc7ff;--adtc-accent-soft: rgba(124, 199, 255, .12);--adtc-selected: rgba(124, 199, 255, .18);--adtc-striped: rgba(255, 255, 255, .025);--adtc-hover: rgba(124, 199, 255, .08)}.adtc-shell{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:18px;overflow:hidden}.adtc-header,.adtc-subheader,.adtc-context,.adtc-pagination{padding:1rem 1.25rem}.adtc-header{border-bottom:1px solid var(--adtc-border);background:linear-gradient(180deg,var(--adtc-bg),var(--adtc-surface))}.adtc-header h3{margin:0;font-size:1.1rem}.adtc-subheader{border-bottom:1px solid var(--adtc-border);background:var(--adtc-surface)}.adtc-context{border-bottom:1px solid var(--adtc-border);background:var(--adtc-accent-soft);color:var(--adtc-text)}.adtc-wrapper{background:var(--adtc-bg)}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{width:100%;border-collapse:collapse;min-width:720px}.adtc-table thead th{background:var(--adtc-surface);border-bottom:1px solid var(--adtc-border-strong);color:var(--adtc-muted);font-size:.82rem;font-weight:700;letter-spacing:.02em;padding:0;text-align:left}.adtc-table td{border-bottom:1px solid var(--adtc-border);color:var(--adtc-text);padding:.9rem 1rem;vertical-align:middle}.adtc-row-hoverable:hover td{background:var(--adtc-hover)}.adtc-row-pointer td{cursor:pointer}.adtc-row-striped:nth-child(4n+1) td,.adtc-row-striped:nth-child(4n+2) td{background:var(--adtc-striped)}.adtc-row-dense td{padding-block:.58rem}.adtc-row-selected td{background:var(--adtc-selected)}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;gap:.45rem;justify-content:space-between;padding:.95rem 1rem;width:100%}.adtc-sortable{cursor:pointer}.adtc-sort-indicator{color:var(--adtc-border-strong);font-size:.8rem}.adtc-sort-indicator.active{color:var(--adtc-accent)}.adtc-select-col,.adtc-expand-col{width:1%;white-space:nowrap;text-align:center}.adtc-expander{background:transparent;border:1px solid var(--adtc-border);border-radius:999px;color:var(--adtc-accent);cursor:pointer;font-size:1rem;height:2rem;line-height:1;width:2rem}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:var(--adtc-surface)}.adtc-expanded-cell{padding:1rem 1.25rem}.adtc-pagination{align-items:center;border-top:1px solid var(--adtc-border);display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between}.adtc-pagination-meta{color:var(--adtc-muted);font-size:.92rem}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:.65rem}.adtc-pagination-size{align-items:center;color:var(--adtc-muted);display:inline-flex;gap:.4rem}.adtc-pagination select,.adtc-pagination button{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:10px;color:var(--adtc-text);font:inherit;padding:.45rem .7rem}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.5}.adtc-page-indicator{color:var(--adtc-muted);font-size:.92rem}.adtc-state{color:var(--adtc-muted);padding:2rem 1.25rem;text-align:center}.adtc-loading{font-weight:700}@media(max-width:900px){.adtc-shell{border-radius:14px}.adtc-table{min-width:620px}.adtc-pagination{align-items:flex-start;flex-direction:column}}\n"] }]
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
            }], noContextMenu: [{
                type: Input
            }], fixedHeader: [{
                type: Input
            }], fixedHeaderScrollHeight: [{
                type: Input
            }], subHeader: [{
                type: Input
            }], subHeaderTemplate: [{
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
            }] } });

class DataTableModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.18", ngImport: i0, type: DataTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.18", ngImport: i0, type: DataTableModule, declarations: [DataTableComponent], imports: [CommonModule], exports: [DataTableComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.18", ngImport: i0, type: DataTableModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.18", ngImport: i0, type: DataTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DataTableComponent],
                    imports: [CommonModule],
                    exports: [DataTableComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DataTableComponent, DataTableModule };
//# sourceMappingURL=revivejs-angular-data-table-component.mjs.map
