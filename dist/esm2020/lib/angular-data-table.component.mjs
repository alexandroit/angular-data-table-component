import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DATA_TABLE_TEMPLATE } from './angular-data-table.template';
import { clamp, resolveCellValue, sortRows, styleObjectToString, toCellText } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DataTableComponent {
    constructor() {
        this.columns = [];
        this.data = [];
        this.keyField = 'id';
        this.title = '';
        this.ariaLabel = '';
        this.pagination = false;
        this.paginationServer = false;
        this.paginationDefaultPage = 1;
        this.paginationPerPage = 10;
        this.paginationTotalRows = 0;
        this.paginationRowsPerPageOptions = [10, 15, 20, 25, 30];
        this.selectableRows = false;
        this.selectableRowsSingle = false;
        this.selectableRowsHighlight = false;
        this.selectableRowsNoSelectAll = false;
        this.selectableRowsVisibleOnly = false;
        this.clearSelectedRows = false;
        this.selectableRowSelected = null;
        this.selectableRowDisabled = null;
        this.expandableRows = false;
        this.expandableRowsHideExpander = false;
        this.expandOnRowClicked = false;
        this.expandOnRowDoubleClicked = false;
        this.expandableRowDisabled = null;
        this.expandableRowExpanded = null;
        this.expandableRowTemplate = null;
        this.striped = false;
        this.highlightOnHover = false;
        this.pointerOnHover = false;
        this.dense = false;
        this.responsive = true;
        this.progressPending = false;
        this.noHeader = false;
        this.noTableHead = false;
        this.noContextMenu = false;
        this.fixedHeader = false;
        this.fixedHeaderScrollHeight = '420px';
        this.subHeader = false;
        this.subHeaderTemplate = null;
        this.noDataText = 'There are no records to display';
        this.conditionalRowStyles = [];
        this.defaultSortFieldId = null;
        this.defaultSortAsc = true;
        this.sortServer = false;
        this.theme = 'default';
        this.contextMessage = {
            singular: 'item',
            plural: 'items',
            message: 'selected'
        };
        this.sortChange = new EventEmitter();
        this.selectedRowsChange = new EventEmitter();
        this.pageChange = new EventEmitter();
        this.rowsPerPageChange = new EventEmitter();
        this.rowClicked = new EventEmitter();
        this.rowDoubleClicked = new EventEmitter();
        this.rowMouseEnter = new EventEmitter();
        this.rowMouseLeave = new EventEmitter();
        this.rowExpandToggled = new EventEmitter();
        this.currentPage = 1;
        this.rowsPerPage = 10;
        this.sortDirection = 'asc';
        this.activeSortColumn = null;
        this.selectedKeys = new Set();
        this.expandedKeys = new Set();
        this.trackByColumn = (index, column) => column.id ?? column.name ?? index;
        this.trackByRow = (index, row) => this.getRowKey(row) || index;
    }
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
}
DataTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DataTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DataTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: DataTableComponent, selector: "revive-data-table", inputs: { columns: "columns", data: "data", keyField: "keyField", title: "title", ariaLabel: "ariaLabel", pagination: "pagination", paginationServer: "paginationServer", paginationDefaultPage: "paginationDefaultPage", paginationPerPage: "paginationPerPage", paginationTotalRows: "paginationTotalRows", paginationRowsPerPageOptions: "paginationRowsPerPageOptions", selectableRows: "selectableRows", selectableRowsSingle: "selectableRowsSingle", selectableRowsHighlight: "selectableRowsHighlight", selectableRowsNoSelectAll: "selectableRowsNoSelectAll", selectableRowsVisibleOnly: "selectableRowsVisibleOnly", clearSelectedRows: "clearSelectedRows", selectableRowSelected: "selectableRowSelected", selectableRowDisabled: "selectableRowDisabled", expandableRows: "expandableRows", expandableRowsHideExpander: "expandableRowsHideExpander", expandOnRowClicked: "expandOnRowClicked", expandOnRowDoubleClicked: "expandOnRowDoubleClicked", expandableRowDisabled: "expandableRowDisabled", expandableRowExpanded: "expandableRowExpanded", expandableRowTemplate: "expandableRowTemplate", striped: "striped", highlightOnHover: "highlightOnHover", pointerOnHover: "pointerOnHover", dense: "dense", responsive: "responsive", progressPending: "progressPending", noHeader: "noHeader", noTableHead: "noTableHead", noContextMenu: "noContextMenu", fixedHeader: "fixedHeader", fixedHeaderScrollHeight: "fixedHeaderScrollHeight", subHeader: "subHeader", subHeaderTemplate: "subHeaderTemplate", noDataText: "noDataText", conditionalRowStyles: "conditionalRowStyles", defaultSortFieldId: "defaultSortFieldId", defaultSortAsc: "defaultSortAsc", sortServer: "sortServer", theme: "theme", contextMessage: "contextMessage" }, outputs: { sortChange: "sortChange", selectedRowsChange: "selectedRowsChange", pageChange: "pageChange", rowsPerPageChange: "rowsPerPageChange", rowClicked: "rowClicked", rowDoubleClicked: "rowDoubleClicked", rowMouseEnter: "rowMouseEnter", rowMouseLeave: "rowMouseLeave", rowExpandToggled: "rowExpandToggled" }, usesOnChanges: true, ngImport: i0, template: "\n<div [attr.class]=\"shellClassName\">\n  <div *ngIf=\"title && !noHeader\" class=\"adtc-header\">\n    <h3>{{ title }}</h3>\n  </div>\n\n  <div *ngIf=\"subHeader && subHeaderTemplate\" class=\"adtc-subheader\">\n    <ng-container *ngTemplateOutlet=\"subHeaderTemplate\"></ng-container>\n  </div>\n\n  <div *ngIf=\"showContextBar\" class=\"adtc-context\">\n    <strong>{{ selectedCount }}</strong>\n    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}\n    {{ contextMessage.message }}\n  </div>\n\n  <div *ngIf=\"progressPending\" class=\"adtc-state adtc-loading\">\n    Loading\u2026\n  </div>\n\n  <div *ngIf=\"!progressPending && !hasRows\" class=\"adtc-state\">\n    {{ noDataText }}\n  </div>\n\n  <ng-container *ngIf=\"!progressPending && hasRows\">\n    <div [attr.class]=\"getWrapperClassName()\">\n      <div [attr.class]=\"getScrollClassName()\" [attr.style]=\"getScrollStyleAttribute()\">\n        <table class=\"adtc-table\" [attr.aria-label]=\"ariaLabel || null\">\n          <thead *ngIf=\"!noTableHead\">\n            <tr>\n              <ng-container *ngIf=\"selectableRows\">\n                <th class=\"adtc-select-col\">\n                  <input\n                    *ngIf=\"!selectableRowsSingle && !selectableRowsNoSelectAll\"\n                    type=\"checkbox\"\n                    [checked]=\"allRowsSelected\"\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"toggleAllRows($any($event.target).checked)\" />\n                </th>\n              </ng-container>\n\n              <ng-container *ngIf=\"expandableRows && !expandableRowsHideExpander\">\n                <th class=\"adtc-expand-col\"></th>\n              </ng-container>\n\n              <ng-container *ngFor=\"let column of visibleColumns; trackBy: trackByColumn\">\n                <th [attr.class]=\"getHeaderClassName(column)\" [attr.style]=\"getHeaderStyleAttribute(column)\">\n                  <button\n                    type=\"button\"\n                    [attr.class]=\"getSortButtonClassName(column)\"\n                    [disabled]=\"!column.sortable\"\n                    (click)=\"toggleSort(column)\">\n                    <span>{{ column.name }}</span>\n                    <span *ngIf=\"column.sortable\" [attr.class]=\"getSortIndicatorClassName(column)\">\n                      {{ activeSortColumn === column ? (sortDirection === 'asc' ? '\u25B2' : '\u25BC') : '\u2195' }}\n                    </span>\n                  </button>\n                </th>\n              </ng-container>\n            </tr>\n          </thead>\n\n          <tbody>\n            <ng-container *ngFor=\"let row of displayedRows; let rowIndex = index; trackBy: trackByRow\">\n              <tr\n                [attr.class]=\"getRowClassName(row)\"\n                [attr.style]=\"getRowStyleAttribute(row)\"\n                (click)=\"handleRowClick(row)\"\n                (dblclick)=\"handleRowDoubleClick(row)\"\n                (mouseenter)=\"handleMouseEnter(row)\"\n                (mouseleave)=\"handleMouseLeave(row)\">\n                <ng-container *ngIf=\"selectableRows\">\n                  <td class=\"adtc-select-col\">\n                    <input\n                      [type]=\"selectableRowsSingle ? 'radio' : 'checkbox'\"\n                      [checked]=\"isRowSelected(row)\"\n                      [disabled]=\"isSelectableDisabled(row)\"\n                      (click)=\"$event.stopPropagation()\"\n                      (change)=\"toggleRowSelection(row)\" />\n                  </td>\n                </ng-container>\n\n                <ng-container *ngIf=\"expandableRows && !expandableRowsHideExpander\">\n                  <td class=\"adtc-expand-col\">\n                    <button\n                      type=\"button\"\n                      class=\"adtc-expander\"\n                      [disabled]=\"isExpandableDisabled(row)\"\n                      (click)=\"$event.stopPropagation(); toggleRowExpansion(row)\">\n                      {{ isRowExpanded(row) ? '\u2212' : '+' }}\n                    </button>\n                  </td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of visibleColumns; trackBy: trackByColumn\">\n                  <td [attr.class]=\"getCellClassName(column)\" [attr.style]=\"getCellStyleAttribute(column)\">\n                    <ng-container *ngIf=\"column.cellTemplate\">\n                      <ng-container\n                        *ngTemplateOutlet=\"column.cellTemplate; context: getCellContext(row, column, rowIndex)\">\n                      </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"!column.cellTemplate\">\n                      {{ getCellText(row, column, rowIndex) }}\n                    </ng-container>\n                  </td>\n                </ng-container>\n              </tr>\n\n              <tr *ngIf=\"expandableRows && expandableRowTemplate && isRowExpanded(row)\" class=\"adtc-expanded-row\">\n                <td\n                  class=\"adtc-expanded-cell\"\n                  [attr.colspan]=\"visibleColumns.length + (selectableRows ? 1 : 0) + (expandableRows && !expandableRowsHideExpander ? 1 : 0)\">\n                  <ng-container\n                    *ngTemplateOutlet=\"expandableRowTemplate; context: getExpandableContext(row, rowIndex)\">\n                  </ng-container>\n                </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div *ngIf=\"showPagination\" class=\"adtc-pagination\">\n      <div class=\"adtc-pagination-meta\">\n        Showing {{ startRow }}\u2013{{ endRow }} of {{ totalRows }}\n      </div>\n\n      <div class=\"adtc-pagination-controls\">\n        <label class=\"adtc-pagination-size\">\n          Rows:\n          <select [value]=\"rowsPerPage\" (change)=\"changeRowsPerPage(+$any($event.target).value)\">\n            <option *ngFor=\"let size of paginationRowsPerPageOptions\" [value]=\"size\">\n              {{ size }}\n            </option>\n          </select>\n        </label>\n\n        <button type=\"button\" (click)=\"changePage(1)\" [disabled]=\"currentPage === 1\">\n          First\n        </button>\n        <button type=\"button\" (click)=\"changePage(currentPage - 1)\" [disabled]=\"currentPage === 1\">\n          Prev\n        </button>\n        <span class=\"adtc-page-indicator\">Page {{ currentPage }} of {{ totalPages }}</span>\n        <button type=\"button\" (click)=\"changePage(currentPage + 1)\" [disabled]=\"currentPage === totalPages\">\n          Next\n        </button>\n        <button type=\"button\" (click)=\"changePage(totalPages)\" [disabled]=\"currentPage === totalPages\">\n          Last\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</div>\n", isInline: true, styles: [":host{display:block}.adtc-shell{--adtc-bg: #ffffff;--adtc-surface: #f8fafc;--adtc-border: #d9e2ec;--adtc-border-strong: #b9c8d8;--adtc-text: #17324d;--adtc-muted: #59708a;--adtc-accent: #0c73b8;--adtc-accent-soft: rgba(12, 115, 184, .08);--adtc-selected: rgba(12, 115, 184, .12);--adtc-striped: rgba(16, 44, 74, .03);--adtc-hover: rgba(12, 115, 184, .06);color:var(--adtc-text)}.adtc-theme-dark{--adtc-bg: #111c2d;--adtc-surface: #162438;--adtc-border: #2b3c56;--adtc-border-strong: #3f5678;--adtc-text: #eef4fb;--adtc-muted: #b0c1d8;--adtc-accent: #7cc7ff;--adtc-accent-soft: rgba(124, 199, 255, .12);--adtc-selected: rgba(124, 199, 255, .18);--adtc-striped: rgba(255, 255, 255, .025);--adtc-hover: rgba(124, 199, 255, .08)}.adtc-shell{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:18px;overflow:hidden}.adtc-header,.adtc-subheader,.adtc-context,.adtc-pagination{padding:1rem 1.25rem}.adtc-header{border-bottom:1px solid var(--adtc-border);background:linear-gradient(180deg,var(--adtc-bg),var(--adtc-surface))}.adtc-header h3{margin:0;font-size:1.1rem}.adtc-subheader{border-bottom:1px solid var(--adtc-border);background:var(--adtc-surface)}.adtc-context{border-bottom:1px solid var(--adtc-border);background:var(--adtc-accent-soft);color:var(--adtc-text)}.adtc-wrapper{background:var(--adtc-bg)}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{width:100%;border-collapse:collapse;min-width:720px}.adtc-table thead th{background:var(--adtc-surface);border-bottom:1px solid var(--adtc-border-strong);color:var(--adtc-muted);font-size:.82rem;font-weight:700;letter-spacing:.02em;padding:0;text-align:left}.adtc-table td{border-bottom:1px solid var(--adtc-border);color:var(--adtc-text);padding:.9rem 1rem;vertical-align:middle}.adtc-row-hoverable:hover td{background:var(--adtc-hover)}.adtc-row-pointer td{cursor:pointer}.adtc-row-striped:nth-child(4n + 1) td,.adtc-row-striped:nth-child(4n + 2) td{background:var(--adtc-striped)}.adtc-row-dense td{padding-block:.58rem}.adtc-row-selected td{background:var(--adtc-selected)}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;gap:.45rem;justify-content:space-between;padding:.95rem 1rem;width:100%}.adtc-sortable{cursor:pointer}.adtc-sort-indicator{color:var(--adtc-border-strong);font-size:.8rem}.adtc-sort-indicator.active{color:var(--adtc-accent)}.adtc-select-col,.adtc-expand-col{width:1%;white-space:nowrap;text-align:center}.adtc-expander{background:transparent;border:1px solid var(--adtc-border);border-radius:999px;color:var(--adtc-accent);cursor:pointer;font-size:1rem;height:2rem;line-height:1;width:2rem}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:var(--adtc-surface)}.adtc-expanded-cell{padding:1rem 1.25rem}.adtc-pagination{align-items:center;border-top:1px solid var(--adtc-border);display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between}.adtc-pagination-meta{color:var(--adtc-muted);font-size:.92rem}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:.65rem}.adtc-pagination-size{align-items:center;color:var(--adtc-muted);display:inline-flex;gap:.4rem}.adtc-pagination select,.adtc-pagination button{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:10px;color:var(--adtc-text);font:inherit;padding:.45rem .7rem}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.5}.adtc-page-indicator{color:var(--adtc-muted);font-size:.92rem}.adtc-state{color:var(--adtc-muted);padding:2rem 1.25rem;text-align:center}.adtc-loading{font-weight:700}@media (max-width: 900px){.adtc-shell{border-radius:14px}.adtc-table{min-width:620px}.adtc-pagination{align-items:flex-start;flex-direction:column}}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.Default });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DataTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'revive-data-table', template: DATA_TABLE_TEMPLATE, changeDetection: ChangeDetectionStrategy.Default, styles: [":host{display:block}.adtc-shell{--adtc-bg: #ffffff;--adtc-surface: #f8fafc;--adtc-border: #d9e2ec;--adtc-border-strong: #b9c8d8;--adtc-text: #17324d;--adtc-muted: #59708a;--adtc-accent: #0c73b8;--adtc-accent-soft: rgba(12, 115, 184, .08);--adtc-selected: rgba(12, 115, 184, .12);--adtc-striped: rgba(16, 44, 74, .03);--adtc-hover: rgba(12, 115, 184, .06);color:var(--adtc-text)}.adtc-theme-dark{--adtc-bg: #111c2d;--adtc-surface: #162438;--adtc-border: #2b3c56;--adtc-border-strong: #3f5678;--adtc-text: #eef4fb;--adtc-muted: #b0c1d8;--adtc-accent: #7cc7ff;--adtc-accent-soft: rgba(124, 199, 255, .12);--adtc-selected: rgba(124, 199, 255, .18);--adtc-striped: rgba(255, 255, 255, .025);--adtc-hover: rgba(124, 199, 255, .08)}.adtc-shell{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:18px;overflow:hidden}.adtc-header,.adtc-subheader,.adtc-context,.adtc-pagination{padding:1rem 1.25rem}.adtc-header{border-bottom:1px solid var(--adtc-border);background:linear-gradient(180deg,var(--adtc-bg),var(--adtc-surface))}.adtc-header h3{margin:0;font-size:1.1rem}.adtc-subheader{border-bottom:1px solid var(--adtc-border);background:var(--adtc-surface)}.adtc-context{border-bottom:1px solid var(--adtc-border);background:var(--adtc-accent-soft);color:var(--adtc-text)}.adtc-wrapper{background:var(--adtc-bg)}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{width:100%;border-collapse:collapse;min-width:720px}.adtc-table thead th{background:var(--adtc-surface);border-bottom:1px solid var(--adtc-border-strong);color:var(--adtc-muted);font-size:.82rem;font-weight:700;letter-spacing:.02em;padding:0;text-align:left}.adtc-table td{border-bottom:1px solid var(--adtc-border);color:var(--adtc-text);padding:.9rem 1rem;vertical-align:middle}.adtc-row-hoverable:hover td{background:var(--adtc-hover)}.adtc-row-pointer td{cursor:pointer}.adtc-row-striped:nth-child(4n + 1) td,.adtc-row-striped:nth-child(4n + 2) td{background:var(--adtc-striped)}.adtc-row-dense td{padding-block:.58rem}.adtc-row-selected td{background:var(--adtc-selected)}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;gap:.45rem;justify-content:space-between;padding:.95rem 1rem;width:100%}.adtc-sortable{cursor:pointer}.adtc-sort-indicator{color:var(--adtc-border-strong);font-size:.8rem}.adtc-sort-indicator.active{color:var(--adtc-accent)}.adtc-select-col,.adtc-expand-col{width:1%;white-space:nowrap;text-align:center}.adtc-expander{background:transparent;border:1px solid var(--adtc-border);border-radius:999px;color:var(--adtc-accent);cursor:pointer;font-size:1rem;height:2rem;line-height:1;width:2rem}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:var(--adtc-surface)}.adtc-expanded-cell{padding:1rem 1.25rem}.adtc-pagination{align-items:center;border-top:1px solid var(--adtc-border);display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between}.adtc-pagination-meta{color:var(--adtc-muted);font-size:.92rem}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:.65rem}.adtc-pagination-size{align-items:center;color:var(--adtc-muted);display:inline-flex;gap:.4rem}.adtc-pagination select,.adtc-pagination button{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:10px;color:var(--adtc-text);font:inherit;padding:.45rem .7rem}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.5}.adtc-page-indicator{color:var(--adtc-muted);font-size:.92rem}.adtc-state{color:var(--adtc-muted);padding:2rem 1.25rem;text-align:center}.adtc-loading{font-weight:700}@media (max-width: 900px){.adtc-shell{border-radius:14px}.adtc-table{min-width:620px}.adtc-pagination{align-items:flex-start;flex-direction:column}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kYXRhLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYW5ndWxhci1kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQWN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7OztBQVE3RixNQUFNLE9BQU8sa0JBQWtCO0lBTi9CO1FBU1csWUFBTyxHQUF5QixFQUFFLENBQUM7UUFDbkMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QiwwQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixpQ0FBNEIsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5RCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2Qix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUNsQyw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDbEMsc0JBQWlCLEdBQUcs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QUNHLGtCQUFrQjtzQkFBM0IsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLGlCQUFpQjtzQkFBMUIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uZGl0aW9uYWxTdHlsZSxcbiAgRGF0YVRhYmxlQ29sdW1uLFxuICBEYXRhVGFibGVDb250ZXh0TWVzc2FnZSxcbiAgRGF0YVRhYmxlRXhwYW5kRXZlbnQsXG4gIERhdGFUYWJsZUV4cGFuZGFibGVDb250ZXh0LFxuICBEYXRhVGFibGVQYWdlRXZlbnQsXG4gIERhdGFUYWJsZVJvd3NQZXJQYWdlRXZlbnQsXG4gIERhdGFUYWJsZVNlbGVjdGlvblN0YXRlLFxuICBEYXRhVGFibGVTb3J0RXZlbnQsXG4gIERhdGFUYWJsZVNvcnRPcmRlcixcbiAgRGF0YVRhYmxlVGhlbWVOYW1lXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgREFUQV9UQUJMRV9URU1QTEFURSB9IGZyb20gJy4vYW5ndWxhci1kYXRhLXRhYmxlLnRlbXBsYXRlJztcbmltcG9ydCB7IGNsYW1wLCByZXNvbHZlQ2VsbFZhbHVlLCBzb3J0Um93cywgc3R5bGVPYmplY3RUb1N0cmluZywgdG9DZWxsVGV4dCB9IGZyb20gJy4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXZpdmUtZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBEQVRBX1RBQkxFX1RFTVBMQVRFLFxuICBzdHlsZVVybHM6IFsnLi9hbmd1bGFyLWRhdGEtdGFibGUuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IFJlY29yZDxzdHJpbmcsIHVua25vd24+PlxuICBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICBASW5wdXQoKSBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW48VD5bXSA9IFtdO1xuICBASW5wdXQoKSBkYXRhOiBUW10gPSBbXTtcbiAgQElucHV0KCkga2V5RmllbGQgPSAnaWQnO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBhcmlhTGFiZWwgPSAnJztcblxuICBASW5wdXQoKSBwYWdpbmF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb25TZXJ2ZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbkRlZmF1bHRQYWdlID0gMTtcbiAgQElucHV0KCkgcGFnaW5hdGlvblBlclBhZ2UgPSAxMDtcbiAgQElucHV0KCkgcGFnaW5hdGlvblRvdGFsUm93cyA9IDA7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Sb3dzUGVyUGFnZU9wdGlvbnM6IG51bWJlcltdID0gWzEwLCAxNSwgMjAsIDI1LCAzMF07XG5cbiAgQElucHV0KCkgc2VsZWN0YWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0YWJsZVJvd3NTaW5nbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0YWJsZVJvd3NIaWdobGlnaHQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0YWJsZVJvd3NOb1NlbGVjdEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlUm93c1Zpc2libGVPbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsZWFyU2VsZWN0ZWRSb3dzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGVSb3dTZWxlY3RlZDogKChyb3c6IFQpID0+IGJvb2xlYW4pIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGVSb3dEaXNhYmxlZDogKChyb3c6IFQpID0+IGJvb2xlYW4pIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kYWJsZVJvd3NIaWRlRXhwYW5kZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kT25Sb3dDbGlja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4cGFuZE9uUm93RG91YmxlQ2xpY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBleHBhbmRhYmxlUm93RGlzYWJsZWQ6ICgocm93OiBUKSA9PiBib29sZWFuKSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBleHBhbmRhYmxlUm93RXhwYW5kZWQ6ICgocm93OiBUKSA9PiBib29sZWFuKSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBleHBhbmRhYmxlUm93VGVtcGxhdGU6IFRlbXBsYXRlUmVmPERhdGFUYWJsZUV4cGFuZGFibGVDb250ZXh0PFQ+PiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpIHN0cmlwZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaGlnaGxpZ2h0T25Ib3ZlciA9IGZhbHNlO1xuICBASW5wdXQoKSBwb2ludGVyT25Ib3ZlciA9IGZhbHNlO1xuICBASW5wdXQoKSBkZW5zZSA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNwb25zaXZlID0gdHJ1ZTtcbiAgQElucHV0KCkgcHJvZ3Jlc3NQZW5kaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vSGVhZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vVGFibGVIZWFkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vQ29udGV4dE1lbnUgPSBmYWxzZTtcbiAgQElucHV0KCkgZml4ZWRIZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZml4ZWRIZWFkZXJTY3JvbGxIZWlnaHQgPSAnNDIwcHgnO1xuICBASW5wdXQoKSBzdWJIZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgc3ViSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHVua25vd24+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG5vRGF0YVRleHQgPSAnVGhlcmUgYXJlIG5vIHJlY29yZHMgdG8gZGlzcGxheSc7XG4gIEBJbnB1dCgpIGNvbmRpdGlvbmFsUm93U3R5bGVzOiBDb25kaXRpb25hbFN0eWxlPFQ+W10gPSBbXTtcbiAgQElucHV0KCkgZGVmYXVsdFNvcnRGaWVsZElkOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZGVmYXVsdFNvcnRBc2MgPSB0cnVlO1xuICBASW5wdXQoKSBzb3J0U2VydmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRoZW1lOiBEYXRhVGFibGVUaGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGNvbnRleHRNZXNzYWdlOiBEYXRhVGFibGVDb250ZXh0TWVzc2FnZSA9IHtcbiAgICBzaW5ndWxhcjogJ2l0ZW0nLFxuICAgIHBsdXJhbDogJ2l0ZW1zJyxcbiAgICBtZXNzYWdlOiAnc2VsZWN0ZWQnXG4gIH07XG5cbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFUYWJsZVNvcnRFdmVudDxUPj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUm93c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlU2VsZWN0aW9uU3RhdGU8VD4+KCk7XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVQYWdlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByb3dzUGVyUGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlUm93c1BlclBhZ2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJvd0NsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBPdXRwdXQoKSByb3dEb3VibGVDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAT3V0cHV0KCkgcm93TW91c2VFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIHJvd01vdXNlTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBPdXRwdXQoKSByb3dFeHBhbmRUb2dnbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVFeHBhbmRFdmVudDxUPj4oKTtcblxuICBjdXJyZW50UGFnZSA9IDE7XG4gIHJvd3NQZXJQYWdlID0gMTA7XG4gIHNvcnREaXJlY3Rpb246IERhdGFUYWJsZVNvcnRPcmRlciA9ICdhc2MnO1xuICBhY3RpdmVTb3J0Q29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4gfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkS2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGV4cGFuZGVkS2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1sncGFnaW5hdGlvblBlclBhZ2UnXSkge1xuICAgICAgdGhpcy5yb3dzUGVyUGFnZSA9IHRoaXMucGFnaW5hdGlvblBlclBhZ2U7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ3BhZ2luYXRpb25EZWZhdWx0UGFnZSddKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmF0aW9uRGVmYXVsdFBhZ2U7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2NsZWFyU2VsZWN0ZWRSb3dzJ10gJiYgIWNoYW5nZXNbJ2NsZWFyU2VsZWN0ZWRSb3dzJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzLmNsZWFyKCk7XG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25TdGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNoYW5nZXNbJ2NvbHVtbnMnXSB8fFxuICAgICAgY2hhbmdlc1snZGVmYXVsdFNvcnRGaWVsZElkJ10gfHxcbiAgICAgIGNoYW5nZXNbJ2RlZmF1bHRTb3J0QXNjJ11cbiAgICApIHtcbiAgICAgIHRoaXMuYXBwbHlEZWZhdWx0U29ydCgpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWydkYXRhJ10gfHwgY2hhbmdlc1snc2VsZWN0YWJsZVJvd1NlbGVjdGVkJ10pIHtcbiAgICAgIHRoaXMuc3luY1Byb2dyYW1tYXRpY1NlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWydkYXRhJ10gfHwgY2hhbmdlc1snZXhwYW5kYWJsZVJvd0V4cGFuZGVkJ10pIHtcbiAgICAgIHRoaXMuc3luY1Byb2dyYW1tYXRpY0V4cGFuc2lvbigpO1xuICAgIH1cblxuICAgIHRoaXMuZW5zdXJlVmFsaWRQYWdlKCk7XG4gIH1cblxuICBnZXQgdmlzaWJsZUNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWNvbHVtbi5vbWl0KTtcbiAgfVxuXG4gIGdldCBzaGVsbENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gWydhZHRjLXNoZWxsJywgdGhpcy50aGVtZSA9PT0gJ2RhcmsnID8gJ2FkdGMtdGhlbWUtZGFyaycgOiAnJ11cbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBnZXQgc29ydGVkUm93cygpIHtcbiAgICBpZiAodGhpcy5zb3J0U2VydmVyKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMuZGF0YV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvcnRSb3dzKHRoaXMuZGF0YSwgdGhpcy5hY3RpdmVTb3J0Q29sdW1uLCB0aGlzLnNvcnREaXJlY3Rpb24pO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXllZFJvd3MoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbiAmJiAhdGhpcy5wYWdpbmF0aW9uU2VydmVyKSB7XG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnJvd3NQZXJQYWdlO1xuICAgICAgcmV0dXJuIHRoaXMuc29ydGVkUm93cy5zbGljZShzdGFydCwgc3RhcnQgKyB0aGlzLnJvd3NQZXJQYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zb3J0ZWRSb3dzO1xuICB9XG5cbiAgZ2V0IGhhc1Jvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IHRvdGFsUm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uU2VydmVyID8gdGhpcy5wYWdpbmF0aW9uVG90YWxSb3dzIHx8IHRoaXMuZGF0YS5sZW5ndGggOiB0aGlzLnNvcnRlZFJvd3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHRvdGFsUGFnZXMoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDEsIE1hdGguY2VpbChNYXRoLm1heCh0aGlzLnRvdGFsUm93cywgMSkgLyB0aGlzLnJvd3NQZXJQYWdlKSk7XG4gIH1cblxuICBnZXQgc3RhcnRSb3coKSB7XG4gICAgaWYgKCF0aGlzLnRvdGFsUm93cykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnJvd3NQZXJQYWdlICsgMTtcbiAgfVxuXG4gIGdldCBlbmRSb3coKSB7XG4gICAgaWYgKCF0aGlzLnRvdGFsUm93cykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuY3VycmVudFBhZ2UgKiB0aGlzLnJvd3NQZXJQYWdlLCB0aGlzLnRvdGFsUm93cyk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKChyb3cpID0+IHRoaXMuc2VsZWN0ZWRLZXlzLmhhcyh0aGlzLmdldFJvd0tleShyb3cpKSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvd3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGFsbFJvd3NTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBzZWxlY3RhYmxlUm93cyA9IHRoaXMuc2VsZWN0aW9uU2NvcGVSb3dzLmZpbHRlcihcbiAgICAgIChyb3cpID0+ICF0aGlzLmlzU2VsZWN0YWJsZURpc2FibGVkKHJvdylcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHNlbGVjdGFibGVSb3dzLmxlbmd0aCA+IDAgJiZcbiAgICAgIHNlbGVjdGFibGVSb3dzLmV2ZXJ5KChyb3cpID0+IHRoaXMuc2VsZWN0ZWRLZXlzLmhhcyh0aGlzLmdldFJvd0tleShyb3cpKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dDb250ZXh0QmFyKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGFibGVSb3dzICYmICF0aGlzLm5vQ29udGV4dE1lbnUgJiYgdGhpcy5zZWxlY3RlZENvdW50ID4gMDtcbiAgfVxuXG4gIGdldCBzaG93UGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uICYmICF0aGlzLnByb2dyZXNzUGVuZGluZyAmJiB0aGlzLnRvdGFsUm93cyA+IDA7XG4gIH1cblxuICBnZXQgc2VsZWN0aW9uU2NvcGVSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGFibGVSb3dzVmlzaWJsZU9ubHkgPyB0aGlzLmRpc3BsYXllZFJvd3MgOiB0aGlzLnNvcnRlZFJvd3M7XG4gIH1cblxuICByZWFkb25seSB0cmFja0J5Q29sdW1uID0gKGluZGV4OiBudW1iZXIsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PlxuICAgIGNvbHVtbi5pZCA/PyBjb2x1bW4ubmFtZSA/PyBpbmRleDtcblxuICByZWFkb25seSB0cmFja0J5Um93ID0gKGluZGV4OiBudW1iZXIsIHJvdzogVCkgPT5cbiAgICB0aGlzLmdldFJvd0tleShyb3cpIHx8IGluZGV4O1xuXG4gIGdldENlbGxWYWx1ZShyb3c6IFQsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uPFQ+LCByb3dJbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHJlc29sdmVDZWxsVmFsdWUocm93LCBjb2x1bW4sIHJvd0luZGV4KTtcbiAgfVxuXG4gIGdldENlbGxUZXh0KHJvdzogVCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4sIHJvd0luZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdG9DZWxsVGV4dCh0aGlzLmdldENlbGxWYWx1ZShyb3csIGNvbHVtbiwgcm93SW5kZXgpKTtcbiAgfVxuXG4gIGdldENlbGxDb250ZXh0KHJvdzogVCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4sIHJvd0luZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJGltcGxpY2l0OiByb3csXG4gICAgICByb3csXG4gICAgICByb3dJbmRleCxcbiAgICAgIGNvbHVtbixcbiAgICAgIHZhbHVlOiB0aGlzLmdldENlbGxWYWx1ZShyb3csIGNvbHVtbiwgcm93SW5kZXgpXG4gICAgfTtcbiAgfVxuXG4gIGdldEV4cGFuZGFibGVDb250ZXh0KHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICAkaW1wbGljaXQ6IHJvdyxcbiAgICAgIHJvdyxcbiAgICAgIHJvd0luZGV4XG4gICAgfTtcbiAgfVxuXG4gIGdldEhlYWRlclN0eWxlKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBjb2x1bW4ud2lkdGggPz8gbnVsbCxcbiAgICAgIG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggPz8gbnVsbCxcbiAgICAgIG1heFdpZHRoOiBjb2x1bW4ubWF4V2lkdGggPz8gbnVsbCxcbiAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZVxuICAgIH07XG4gIH1cblxuICBnZXRDZWxsU3R5bGUoY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGNvbHVtbi53aWR0aCA/PyBudWxsLFxuICAgICAgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCA/PyBudWxsLFxuICAgICAgbWF4V2lkdGg6IGNvbHVtbi5tYXhXaWR0aCA/PyBudWxsLFxuICAgICAgLi4uY29sdW1uLnN0eWxlXG4gICAgfTtcbiAgfVxuXG4gIGdldFdyYXBwZXJDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIFsnYWR0Yy13cmFwcGVyJywgdGhpcy5yZXNwb25zaXZlID8gJ2FkdGMtcmVzcG9uc2l2ZScgOiAnJ11cbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRTY3JvbGxDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIFsnYWR0Yy1zY3JvbGwnLCB0aGlzLmZpeGVkSGVhZGVyID8gJ2FkdGMtZml4ZWQtaGVhZGVyJyA6ICcnXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldFNjcm9sbFN0eWxlQXR0cmlidXRlKCkge1xuICAgIHJldHVybiBzdHlsZU9iamVjdFRvU3RyaW5nKHtcbiAgICAgIG1heEhlaWdodDogdGhpcy5maXhlZEhlYWRlciA/IHRoaXMuZml4ZWRIZWFkZXJTY3JvbGxIZWlnaHQgOiBudWxsXG4gICAgfSkgfHwgbnVsbDtcbiAgfVxuXG4gIGdldFNvcnRCdXR0b25DbGFzc05hbWUoY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gWydhZHRjLXNvcnQtYnV0dG9uJywgY29sdW1uLnNvcnRhYmxlID8gJ2FkdGMtc29ydGFibGUnIDogJyddXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgZ2V0U29ydEluZGljYXRvckNsYXNzTmFtZShjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHJldHVybiBbXG4gICAgICAnYWR0Yy1zb3J0LWluZGljYXRvcicsXG4gICAgICB0aGlzLmFjdGl2ZVNvcnRDb2x1bW4gPT09IGNvbHVtbiA/ICdhY3RpdmUnIDogJydcbiAgICBdXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgZ2V0SGVhZGVyQ2xhc3NOYW1lKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUgfHwgJycsXG4gICAgICBjb2x1bW4ucmlnaHQgPyAnYWR0Yy1hbGlnbi1yaWdodCcgOiAnJyxcbiAgICAgIGNvbHVtbi5jZW50ZXIgPyAnYWR0Yy1hbGlnbi1jZW50ZXInIDogJycsXG4gICAgICBjb2x1bW4ud3JhcCA/ICdhZHRjLXdyYXAnIDogJ2FkdGMtbm93cmFwJ1xuICAgIF1cbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRDZWxsQ2xhc3NOYW1lKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbHVtbi5jbGFzc05hbWUgfHwgJycsXG4gICAgICBjb2x1bW4ucmlnaHQgPyAnYWR0Yy1hbGlnbi1yaWdodCcgOiAnJyxcbiAgICAgIGNvbHVtbi5jZW50ZXIgPyAnYWR0Yy1hbGlnbi1jZW50ZXInIDogJycsXG4gICAgICBjb2x1bW4ud3JhcCA/ICdhZHRjLXdyYXAnIDogJ2FkdGMtbm93cmFwJ1xuICAgIF1cbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRSb3dDbGFzc05hbWVzKHJvdzogVCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbJ2FkdGMtcm93J107XG5cbiAgICBpZiAodGhpcy5zdHJpcGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2FkdGMtcm93LXN0cmlwZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRPbkhvdmVyKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2FkdGMtcm93LWhvdmVyYWJsZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvaW50ZXJPbkhvdmVyKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2FkdGMtcm93LXBvaW50ZXInKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZW5zZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhZHRjLXJvdy1kZW5zZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGFibGVSb3dzSGlnaGxpZ2h0ICYmIHRoaXMuc2VsZWN0ZWRLZXlzLmhhcyh0aGlzLmdldFJvd0tleShyb3cpKSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhZHRjLXJvdy1zZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY29uZGl0aW9uYWxTdHlsZSBvZiB0aGlzLmNvbmRpdGlvbmFsUm93U3R5bGVzKSB7XG4gICAgICBpZiAoIWNvbmRpdGlvbmFsU3R5bGUud2hlbihyb3cpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjbGFzc05hbWUgPVxuICAgICAgICB0eXBlb2YgY29uZGl0aW9uYWxTdHlsZS5jbGFzc05hbWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGNvbmRpdGlvbmFsU3R5bGUuY2xhc3NOYW1lKHJvdylcbiAgICAgICAgICA6IGNvbmRpdGlvbmFsU3R5bGUuY2xhc3NOYW1lO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzO1xuICB9XG5cbiAgZ2V0Um93Q2xhc3NOYW1lKHJvdzogVCkge1xuICAgIHJldHVybiB0aGlzLmdldFJvd0NsYXNzTmFtZXMocm93KS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRSb3dTdHlsZShyb3c6IFQpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbFJvd1N0eWxlcy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPj4oKGFjYywgY29uZGl0aW9uYWxTdHlsZSkgPT4ge1xuICAgICAgaWYgKCFjb25kaXRpb25hbFN0eWxlLndoZW4ocm93KSB8fCAhY29uZGl0aW9uYWxTdHlsZS5zdHlsZSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdHlsZSA9XG4gICAgICAgIHR5cGVvZiBjb25kaXRpb25hbFN0eWxlLnN0eWxlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBjb25kaXRpb25hbFN0eWxlLnN0eWxlKHJvdylcbiAgICAgICAgICA6IGNvbmRpdGlvbmFsU3R5bGUuc3R5bGU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgLi4uc3R5bGVcbiAgICAgIH07XG4gICAgfSwge30pO1xuICB9XG5cbiAgZ2V0SGVhZGVyU3R5bGVBdHRyaWJ1dGUoY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3RUb1N0cmluZyh0aGlzLmdldEhlYWRlclN0eWxlKGNvbHVtbikpIHx8IG51bGw7XG4gIH1cblxuICBnZXRDZWxsU3R5bGVBdHRyaWJ1dGUoY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3RUb1N0cmluZyh0aGlzLmdldENlbGxTdHlsZShjb2x1bW4pKSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0Um93U3R5bGVBdHRyaWJ1dGUocm93OiBUKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0VG9TdHJpbmcodGhpcy5nZXRSb3dTdHlsZShyb3cpKSB8fCBudWxsO1xuICB9XG5cbiAgaXNSb3dTZWxlY3RlZChyb3c6IFQpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEtleXMuaGFzKHRoaXMuZ2V0Um93S2V5KHJvdykpO1xuICB9XG5cbiAgaXNSb3dFeHBhbmRlZChyb3c6IFQpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEtleXMuaGFzKHRoaXMuZ2V0Um93S2V5KHJvdykpO1xuICB9XG5cbiAgaXNTZWxlY3RhYmxlRGlzYWJsZWQocm93OiBUKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0YWJsZVJvd0Rpc2FibGVkID8gdGhpcy5zZWxlY3RhYmxlUm93RGlzYWJsZWQocm93KSA6IGZhbHNlO1xuICB9XG5cbiAgaXNFeHBhbmRhYmxlRGlzYWJsZWQocm93OiBUKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kYWJsZVJvd0Rpc2FibGVkID8gdGhpcy5leHBhbmRhYmxlUm93RGlzYWJsZWQocm93KSA6IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU29ydChjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIGlmICghY29sdW1uLnNvcnRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlU29ydENvbHVtbiA9PT0gY29sdW1uKSB7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSB0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlU29ydENvbHVtbiA9IGNvbHVtbjtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdhc2MnO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuc29ydGVkUm93cztcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7XG4gICAgICBjb2x1bW4sXG4gICAgICBkaXJlY3Rpb246IHRoaXMuc29ydERpcmVjdGlvbixcbiAgICAgIHJvd3NcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUFsbFJvd3MoY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnNlbGVjdGlvblNjb3BlUm93cy5maWx0ZXIoKHJvdykgPT4gIXRoaXMuaXNTZWxlY3RhYmxlRGlzYWJsZWQocm93KSk7XG5cbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkS2V5cy5hZGQodGhpcy5nZXRSb3dLZXkocm93KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEtleXMuZGVsZXRlKHRoaXMuZ2V0Um93S2V5KHJvdykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdFNlbGVjdGlvblN0YXRlKCk7XG4gIH1cblxuICB0b2dnbGVSb3dTZWxlY3Rpb24ocm93OiBUKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGFibGVSb3dzIHx8IHRoaXMuaXNTZWxlY3RhYmxlRGlzYWJsZWQocm93KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0Um93S2V5KHJvdyk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlUm93c1NpbmdsZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEtleXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzLmFkZChrZXkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEtleXMuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzLmRlbGV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkS2V5cy5hZGQoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXRTZWxlY3Rpb25TdGF0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlUm93RXhwYW5zaW9uKHJvdzogVCkge1xuICAgIGlmICghdGhpcy5leHBhbmRhYmxlUm93cyB8fCB0aGlzLmlzRXhwYW5kYWJsZURpc2FibGVkKHJvdykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldFJvd0tleShyb3cpO1xuICAgIGNvbnN0IGV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWRLZXlzLmhhcyhrZXkpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkS2V5cy5hZGQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRlZEtleXMuZGVsZXRlKGtleSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb3dFeHBhbmRUb2dnbGVkLmVtaXQoeyBleHBhbmRlZCwgcm93IH0pO1xuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2socm93OiBUKSB7XG4gICAgdGhpcy5yb3dDbGlja2VkLmVtaXQocm93KTtcblxuICAgIGlmICh0aGlzLmV4cGFuZGFibGVSb3dzICYmIHRoaXMuZXhwYW5kT25Sb3dDbGlja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVJvd0V4cGFuc2lvbihyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJvd0RvdWJsZUNsaWNrKHJvdzogVCkge1xuICAgIHRoaXMucm93RG91YmxlQ2xpY2tlZC5lbWl0KHJvdyk7XG5cbiAgICBpZiAodGhpcy5leHBhbmRhYmxlUm93cyAmJiB0aGlzLmV4cGFuZE9uUm93RG91YmxlQ2xpY2tlZCkge1xuICAgICAgdGhpcy50b2dnbGVSb3dFeHBhbnNpb24ocm93KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZUVudGVyKHJvdzogVCkge1xuICAgIHRoaXMucm93TW91c2VFbnRlci5lbWl0KHJvdyk7XG4gIH1cblxuICBoYW5kbGVNb3VzZUxlYXZlKHJvdzogVCkge1xuICAgIHRoaXMucm93TW91c2VMZWF2ZS5lbWl0KHJvdyk7XG4gIH1cblxuICBjaGFuZ2VQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjbGFtcChwYWdlLCAxLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICB0b3RhbFJvd3M6IHRoaXMudG90YWxSb3dzXG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VSb3dzUGVyUGFnZShyb3dzUGVyUGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5yb3dzUGVyUGFnZSA9IHJvd3NQZXJQYWdlO1xuICAgIHRoaXMuZW5zdXJlVmFsaWRQYWdlKCk7XG4gICAgdGhpcy5yb3dzUGVyUGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgIHJvd3NQZXJQYWdlOiB0aGlzLnJvd3NQZXJQYWdlLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlEZWZhdWx0U29ydCgpIHtcbiAgICBpZiAoIXRoaXMuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYWN0aXZlU29ydENvbHVtbiA9IG51bGw7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnYXNjJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0Q29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoXG4gICAgICAoY29sdW1uKSA9PlxuICAgICAgICBjb2x1bW4uaWQgPT09IHRoaXMuZGVmYXVsdFNvcnRGaWVsZElkIHx8XG4gICAgICAgIFN0cmluZyhjb2x1bW4uaWQpID09PSBTdHJpbmcodGhpcy5kZWZhdWx0U29ydEZpZWxkSWQpXG4gICAgKTtcblxuICAgIHRoaXMuYWN0aXZlU29ydENvbHVtbiA9IGRlZmF1bHRDb2x1bW4gPz8gdGhpcy5hY3RpdmVTb3J0Q29sdW1uO1xuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHRoaXMuZGVmYXVsdFNvcnRBc2MgPyAnYXNjJyA6ICdkZXNjJztcbiAgfVxuXG4gIHByaXZhdGUgc3luY1Byb2dyYW1tYXRpY1NlbGVjdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0YWJsZVJvd1NlbGVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZEtleXMuY2xlYXIoKTtcblxuICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZVJvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEtleXMuYWRkKHRoaXMuZ2V0Um93S2V5KHJvdykpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGVSb3dzU2luZ2xlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVtaXRTZWxlY3Rpb25TdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jUHJvZ3JhbW1hdGljRXhwYW5zaW9uKCkge1xuICAgIGlmICghdGhpcy5leHBhbmRhYmxlUm93RXhwYW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV4cGFuZGVkS2V5cy5jbGVhcigpO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5leHBhbmRhYmxlUm93RXhwYW5kZWQocm93KSkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkS2V5cy5hZGQodGhpcy5nZXRSb3dLZXkocm93KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0U2VsZWN0aW9uU3RhdGUoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3NDaGFuZ2UuZW1pdCh7XG4gICAgICBhbGxTZWxlY3RlZDogdGhpcy5hbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBzZWxlY3RlZENvdW50OiB0aGlzLnNlbGVjdGVkQ291bnQsXG4gICAgICBzZWxlY3RlZFJvd3M6IHRoaXMuc2VsZWN0ZWRSb3dzXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGVuc3VyZVZhbGlkUGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gY2xhbXAodGhpcy5jdXJyZW50UGFnZSwgMSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um93S2V5KHJvdzogVCkge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHJvd1t0aGlzLmtleUZpZWxkIGFzIGtleW9mIFRdO1xuXG4gICAgaWYgKGNhbmRpZGF0ZSA9PSBudWxsIHx8IGNhbmRpZGF0ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBgcm93LSR7dGhpcy5kYXRhLmluZGV4T2Yocm93KX1gO1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcoY2FuZGlkYXRlKTtcbiAgfVxufVxuIl19