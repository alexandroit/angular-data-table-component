import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DATA_TABLE_TEMPLATE } from './angular-data-table.template';
import { clamp, resolveCellValue, sortRows, styleObjectToString, toCellText } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DataTableComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DataTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: DataTableComponent, selector: "revive-data-table", inputs: { columns: "columns", data: "data", keyField: "keyField", title: "title", ariaLabel: "ariaLabel", pagination: "pagination", paginationServer: "paginationServer", paginationDefaultPage: "paginationDefaultPage", paginationPerPage: "paginationPerPage", paginationTotalRows: "paginationTotalRows", paginationRowsPerPageOptions: "paginationRowsPerPageOptions", selectableRows: "selectableRows", selectableRowsSingle: "selectableRowsSingle", selectableRowsHighlight: "selectableRowsHighlight", selectableRowsNoSelectAll: "selectableRowsNoSelectAll", selectableRowsVisibleOnly: "selectableRowsVisibleOnly", clearSelectedRows: "clearSelectedRows", selectableRowSelected: "selectableRowSelected", selectableRowDisabled: "selectableRowDisabled", expandableRows: "expandableRows", expandableRowsHideExpander: "expandableRowsHideExpander", expandOnRowClicked: "expandOnRowClicked", expandOnRowDoubleClicked: "expandOnRowDoubleClicked", expandableRowDisabled: "expandableRowDisabled", expandableRowExpanded: "expandableRowExpanded", expandableRowTemplate: "expandableRowTemplate", striped: "striped", highlightOnHover: "highlightOnHover", pointerOnHover: "pointerOnHover", dense: "dense", responsive: "responsive", progressPending: "progressPending", noHeader: "noHeader", noTableHead: "noTableHead", noContextMenu: "noContextMenu", fixedHeader: "fixedHeader", fixedHeaderScrollHeight: "fixedHeaderScrollHeight", subHeader: "subHeader", subHeaderTemplate: "subHeaderTemplate", noDataText: "noDataText", conditionalRowStyles: "conditionalRowStyles", defaultSortFieldId: "defaultSortFieldId", defaultSortAsc: "defaultSortAsc", sortServer: "sortServer", theme: "theme", contextMessage: "contextMessage" }, outputs: { sortChange: "sortChange", selectedRowsChange: "selectedRowsChange", pageChange: "pageChange", rowsPerPageChange: "rowsPerPageChange", rowClicked: "rowClicked", rowDoubleClicked: "rowDoubleClicked", rowMouseEnter: "rowMouseEnter", rowMouseLeave: "rowMouseLeave", rowExpandToggled: "rowExpandToggled" }, usesOnChanges: true, ngImport: i0, template: "\n<div [attr.class]=\"shellClassName\">\n  <div *ngIf=\"title && !noHeader\" class=\"adtc-header\">\n    <h3>{{ title }}</h3>\n  </div>\n\n  <div *ngIf=\"subHeader && subHeaderTemplate\" class=\"adtc-subheader\">\n    <ng-container *ngTemplateOutlet=\"subHeaderTemplate\"></ng-container>\n  </div>\n\n  <div *ngIf=\"showContextBar\" class=\"adtc-context\">\n    <strong>{{ selectedCount }}</strong>\n    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}\n    {{ contextMessage.message }}\n  </div>\n\n  <div *ngIf=\"progressPending\" class=\"adtc-state adtc-loading\">\n    Loading\u2026\n  </div>\n\n  <div *ngIf=\"!progressPending && !hasRows\" class=\"adtc-state\">\n    {{ noDataText }}\n  </div>\n\n  <ng-container *ngIf=\"!progressPending && hasRows\">\n    <div [attr.class]=\"getWrapperClassName()\">\n      <div [attr.class]=\"getScrollClassName()\" [attr.style]=\"getScrollStyleAttribute()\">\n        <table class=\"adtc-table\" [attr.aria-label]=\"ariaLabel || null\">\n          <thead *ngIf=\"!noTableHead\">\n            <tr>\n              <ng-container *ngIf=\"selectableRows\">\n                <th class=\"adtc-select-col\">\n                  <input\n                    *ngIf=\"!selectableRowsSingle && !selectableRowsNoSelectAll\"\n                    type=\"checkbox\"\n                    [checked]=\"allRowsSelected\"\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"toggleAllRows($any($event.target).checked)\" />\n                </th>\n              </ng-container>\n\n              <ng-container *ngIf=\"expandableRows && !expandableRowsHideExpander\">\n                <th class=\"adtc-expand-col\"></th>\n              </ng-container>\n\n              <ng-container *ngFor=\"let column of visibleColumns; trackBy: trackByColumn\">\n                <th [attr.class]=\"getHeaderClassName(column)\" [attr.style]=\"getHeaderStyleAttribute(column)\">\n                  <button\n                    type=\"button\"\n                    [attr.class]=\"getSortButtonClassName(column)\"\n                    [disabled]=\"!column.sortable\"\n                    (click)=\"toggleSort(column)\">\n                    <span>{{ column.name }}</span>\n                    <span *ngIf=\"column.sortable\" [attr.class]=\"getSortIndicatorClassName(column)\">\n                      {{ activeSortColumn === column ? (sortDirection === 'asc' ? '\u25B2' : '\u25BC') : '\u2195' }}\n                    </span>\n                  </button>\n                </th>\n              </ng-container>\n            </tr>\n          </thead>\n\n          <tbody>\n            <ng-container *ngFor=\"let row of displayedRows; let rowIndex = index; trackBy: trackByRow\">\n              <tr\n                [attr.class]=\"getRowClassName(row)\"\n                [attr.style]=\"getRowStyleAttribute(row)\"\n                (click)=\"handleRowClick(row)\"\n                (dblclick)=\"handleRowDoubleClick(row)\"\n                (mouseenter)=\"handleMouseEnter(row)\"\n                (mouseleave)=\"handleMouseLeave(row)\">\n                <ng-container *ngIf=\"selectableRows\">\n                  <td class=\"adtc-select-col\">\n                    <input\n                      [type]=\"selectableRowsSingle ? 'radio' : 'checkbox'\"\n                      [checked]=\"isRowSelected(row)\"\n                      [disabled]=\"isSelectableDisabled(row)\"\n                      (click)=\"$event.stopPropagation()\"\n                      (change)=\"toggleRowSelection(row)\" />\n                  </td>\n                </ng-container>\n\n                <ng-container *ngIf=\"expandableRows && !expandableRowsHideExpander\">\n                  <td class=\"adtc-expand-col\">\n                    <button\n                      type=\"button\"\n                      class=\"adtc-expander\"\n                      [disabled]=\"isExpandableDisabled(row)\"\n                      (click)=\"$event.stopPropagation(); toggleRowExpansion(row)\">\n                      {{ isRowExpanded(row) ? '\u2212' : '+' }}\n                    </button>\n                  </td>\n                </ng-container>\n\n                <ng-container *ngFor=\"let column of visibleColumns; trackBy: trackByColumn\">\n                  <td [attr.class]=\"getCellClassName(column)\" [attr.style]=\"getCellStyleAttribute(column)\">\n                    <ng-container *ngIf=\"column.cellTemplate\">\n                      <ng-container\n                        *ngTemplateOutlet=\"column.cellTemplate; context: getCellContext(row, column, rowIndex)\">\n                      </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"!column.cellTemplate\">\n                      {{ getCellText(row, column, rowIndex) }}\n                    </ng-container>\n                  </td>\n                </ng-container>\n              </tr>\n\n              <tr *ngIf=\"expandableRows && expandableRowTemplate && isRowExpanded(row)\" class=\"adtc-expanded-row\">\n                <td\n                  class=\"adtc-expanded-cell\"\n                  [attr.colspan]=\"visibleColumns.length + (selectableRows ? 1 : 0) + (expandableRows && !expandableRowsHideExpander ? 1 : 0)\">\n                  <ng-container\n                    *ngTemplateOutlet=\"expandableRowTemplate; context: getExpandableContext(row, rowIndex)\">\n                  </ng-container>\n                </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div *ngIf=\"showPagination\" class=\"adtc-pagination\">\n      <div class=\"adtc-pagination-meta\">\n        Showing {{ startRow }}\u2013{{ endRow }} of {{ totalRows }}\n      </div>\n\n      <div class=\"adtc-pagination-controls\">\n        <label class=\"adtc-pagination-size\">\n          Rows:\n          <select [value]=\"rowsPerPage\" (change)=\"changeRowsPerPage(+$any($event.target).value)\">\n            <option *ngFor=\"let size of paginationRowsPerPageOptions\" [value]=\"size\">\n              {{ size }}\n            </option>\n          </select>\n        </label>\n\n        <button type=\"button\" (click)=\"changePage(1)\" [disabled]=\"currentPage === 1\">\n          First\n        </button>\n        <button type=\"button\" (click)=\"changePage(currentPage - 1)\" [disabled]=\"currentPage === 1\">\n          Prev\n        </button>\n        <span class=\"adtc-page-indicator\">Page {{ currentPage }} of {{ totalPages }}</span>\n        <button type=\"button\" (click)=\"changePage(currentPage + 1)\" [disabled]=\"currentPage === totalPages\">\n          Next\n        </button>\n        <button type=\"button\" (click)=\"changePage(totalPages)\" [disabled]=\"currentPage === totalPages\">\n          Last\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</div>\n", isInline: true, styles: [":host{display:block}.adtc-shell{--adtc-bg: #ffffff;--adtc-surface: #f8fafc;--adtc-border: #d9e2ec;--adtc-border-strong: #b9c8d8;--adtc-text: #17324d;--adtc-muted: #59708a;--adtc-accent: #0c73b8;--adtc-accent-soft: rgba(12, 115, 184, .08);--adtc-selected: rgba(12, 115, 184, .12);--adtc-striped: rgba(16, 44, 74, .03);--adtc-hover: rgba(12, 115, 184, .06);color:var(--adtc-text)}.adtc-theme-dark{--adtc-bg: #111c2d;--adtc-surface: #162438;--adtc-border: #2b3c56;--adtc-border-strong: #3f5678;--adtc-text: #eef4fb;--adtc-muted: #b0c1d8;--adtc-accent: #7cc7ff;--adtc-accent-soft: rgba(124, 199, 255, .12);--adtc-selected: rgba(124, 199, 255, .18);--adtc-striped: rgba(255, 255, 255, .025);--adtc-hover: rgba(124, 199, 255, .08)}.adtc-shell{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:18px;overflow:hidden}.adtc-header,.adtc-subheader,.adtc-context,.adtc-pagination{padding:1rem 1.25rem}.adtc-header{border-bottom:1px solid var(--adtc-border);background:linear-gradient(180deg,var(--adtc-bg),var(--adtc-surface))}.adtc-header h3{margin:0;font-size:1.1rem}.adtc-subheader{border-bottom:1px solid var(--adtc-border);background:var(--adtc-surface)}.adtc-context{border-bottom:1px solid var(--adtc-border);background:var(--adtc-accent-soft);color:var(--adtc-text)}.adtc-wrapper{background:var(--adtc-bg)}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{width:100%;border-collapse:collapse;min-width:720px}.adtc-table thead th{background:var(--adtc-surface);border-bottom:1px solid var(--adtc-border-strong);color:var(--adtc-muted);font-size:.82rem;font-weight:700;letter-spacing:.02em;padding:0;text-align:left}.adtc-table td{border-bottom:1px solid var(--adtc-border);color:var(--adtc-text);padding:.9rem 1rem;vertical-align:middle}.adtc-row-hoverable:hover td{background:var(--adtc-hover)}.adtc-row-pointer td{cursor:pointer}.adtc-row-striped:nth-child(4n+1) td,.adtc-row-striped:nth-child(4n+2) td{background:var(--adtc-striped)}.adtc-row-dense td{padding-block:.58rem}.adtc-row-selected td{background:var(--adtc-selected)}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;gap:.45rem;justify-content:space-between;padding:.95rem 1rem;width:100%}.adtc-sortable{cursor:pointer}.adtc-sort-indicator{color:var(--adtc-border-strong);font-size:.8rem}.adtc-sort-indicator.active{color:var(--adtc-accent)}.adtc-select-col,.adtc-expand-col{width:1%;white-space:nowrap;text-align:center}.adtc-expander{background:transparent;border:1px solid var(--adtc-border);border-radius:999px;color:var(--adtc-accent);cursor:pointer;font-size:1rem;height:2rem;line-height:1;width:2rem}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:var(--adtc-surface)}.adtc-expanded-cell{padding:1rem 1.25rem}.adtc-pagination{align-items:center;border-top:1px solid var(--adtc-border);display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between}.adtc-pagination-meta{color:var(--adtc-muted);font-size:.92rem}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:.65rem}.adtc-pagination-size{align-items:center;color:var(--adtc-muted);display:inline-flex;gap:.4rem}.adtc-pagination select,.adtc-pagination button{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:10px;color:var(--adtc-text);font:inherit;padding:.45rem .7rem}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.5}.adtc-page-indicator{color:var(--adtc-muted);font-size:.92rem}.adtc-state{color:var(--adtc-muted);padding:2rem 1.25rem;text-align:center}.adtc-loading{font-weight:700}@media (max-width: 900px){.adtc-shell{border-radius:14px}.adtc-table{min-width:620px}.adtc-pagination{align-items:flex-start;flex-direction:column}}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.Default });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DataTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'revive-data-table', template: DATA_TABLE_TEMPLATE, changeDetection: ChangeDetectionStrategy.Default, styles: [":host{display:block}.adtc-shell{--adtc-bg: #ffffff;--adtc-surface: #f8fafc;--adtc-border: #d9e2ec;--adtc-border-strong: #b9c8d8;--adtc-text: #17324d;--adtc-muted: #59708a;--adtc-accent: #0c73b8;--adtc-accent-soft: rgba(12, 115, 184, .08);--adtc-selected: rgba(12, 115, 184, .12);--adtc-striped: rgba(16, 44, 74, .03);--adtc-hover: rgba(12, 115, 184, .06);color:var(--adtc-text)}.adtc-theme-dark{--adtc-bg: #111c2d;--adtc-surface: #162438;--adtc-border: #2b3c56;--adtc-border-strong: #3f5678;--adtc-text: #eef4fb;--adtc-muted: #b0c1d8;--adtc-accent: #7cc7ff;--adtc-accent-soft: rgba(124, 199, 255, .12);--adtc-selected: rgba(124, 199, 255, .18);--adtc-striped: rgba(255, 255, 255, .025);--adtc-hover: rgba(124, 199, 255, .08)}.adtc-shell{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:18px;overflow:hidden}.adtc-header,.adtc-subheader,.adtc-context,.adtc-pagination{padding:1rem 1.25rem}.adtc-header{border-bottom:1px solid var(--adtc-border);background:linear-gradient(180deg,var(--adtc-bg),var(--adtc-surface))}.adtc-header h3{margin:0;font-size:1.1rem}.adtc-subheader{border-bottom:1px solid var(--adtc-border);background:var(--adtc-surface)}.adtc-context{border-bottom:1px solid var(--adtc-border);background:var(--adtc-accent-soft);color:var(--adtc-text)}.adtc-wrapper{background:var(--adtc-bg)}.adtc-responsive{overflow-x:auto}.adtc-scroll{overflow:auto}.adtc-fixed-header thead th{position:sticky;top:0;z-index:2}.adtc-table{width:100%;border-collapse:collapse;min-width:720px}.adtc-table thead th{background:var(--adtc-surface);border-bottom:1px solid var(--adtc-border-strong);color:var(--adtc-muted);font-size:.82rem;font-weight:700;letter-spacing:.02em;padding:0;text-align:left}.adtc-table td{border-bottom:1px solid var(--adtc-border);color:var(--adtc-text);padding:.9rem 1rem;vertical-align:middle}.adtc-row-hoverable:hover td{background:var(--adtc-hover)}.adtc-row-pointer td{cursor:pointer}.adtc-row-striped:nth-child(4n+1) td,.adtc-row-striped:nth-child(4n+2) td{background:var(--adtc-striped)}.adtc-row-dense td{padding-block:.58rem}.adtc-row-selected td{background:var(--adtc-selected)}.adtc-align-right{text-align:right}.adtc-align-center{text-align:center}.adtc-nowrap{white-space:nowrap}.adtc-wrap{white-space:normal}.adtc-sort-button{align-items:center;background:transparent;border:0;color:inherit;cursor:default;display:inline-flex;font:inherit;gap:.45rem;justify-content:space-between;padding:.95rem 1rem;width:100%}.adtc-sortable{cursor:pointer}.adtc-sort-indicator{color:var(--adtc-border-strong);font-size:.8rem}.adtc-sort-indicator.active{color:var(--adtc-accent)}.adtc-select-col,.adtc-expand-col{width:1%;white-space:nowrap;text-align:center}.adtc-expander{background:transparent;border:1px solid var(--adtc-border);border-radius:999px;color:var(--adtc-accent);cursor:pointer;font-size:1rem;height:2rem;line-height:1;width:2rem}.adtc-expander:disabled{cursor:not-allowed;opacity:.45}.adtc-expanded-row td{background:var(--adtc-surface)}.adtc-expanded-cell{padding:1rem 1.25rem}.adtc-pagination{align-items:center;border-top:1px solid var(--adtc-border);display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between}.adtc-pagination-meta{color:var(--adtc-muted);font-size:.92rem}.adtc-pagination-controls{align-items:center;display:flex;flex-wrap:wrap;gap:.65rem}.adtc-pagination-size{align-items:center;color:var(--adtc-muted);display:inline-flex;gap:.4rem}.adtc-pagination select,.adtc-pagination button{background:var(--adtc-bg);border:1px solid var(--adtc-border);border-radius:10px;color:var(--adtc-text);font:inherit;padding:.45rem .7rem}.adtc-pagination button:disabled{cursor:not-allowed;opacity:.5}.adtc-page-indicator{color:var(--adtc-muted);font-size:.92rem}.adtc-state{color:var(--adtc-muted);padding:2rem 1.25rem;text-align:center}.adtc-loading{font-weight:700}@media (max-width: 900px){.adtc-shell{border-radius:14px}.adtc-table{min-width:620px}.adtc-pagination{align-items:flex-start;flex-direction:column}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kYXRhLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYW5ndWxhci1kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQWN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7OztBQVE3RixNQUFNLE9BQU8sa0JBQWtCO0lBR3BCLE9BQU8sR0FBeUIsRUFBRSxDQUFDO0lBQ25DLElBQUksR0FBUSxFQUFFLENBQUM7SUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRWYsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNuQixnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDekIscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUN2QixtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDeEIsNEJBQTRCLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUQsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUN2QixvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDN0IsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUNsQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDbEMsaUJBQWlCLEdBQUcsS0FBSyxD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QkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLHVCQUF1QjtzQkFBL0IsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQU1JLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csa0JBQWtCO3NCQUEzQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csaUJBQWlCO3NCQUExQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csZ0JBQWdCO3NCQUF6QixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25kaXRpb25hbFN0eWxlLFxuICBEYXRhVGFibGVDb2x1bW4sXG4gIERhdGFUYWJsZUNvbnRleHRNZXNzYWdlLFxuICBEYXRhVGFibGVFeHBhbmRFdmVudCxcbiAgRGF0YVRhYmxlRXhwYW5kYWJsZUNvbnRleHQsXG4gIERhdGFUYWJsZVBhZ2VFdmVudCxcbiAgRGF0YVRhYmxlUm93c1BlclBhZ2VFdmVudCxcbiAgRGF0YVRhYmxlU2VsZWN0aW9uU3RhdGUsXG4gIERhdGFUYWJsZVNvcnRFdmVudCxcbiAgRGF0YVRhYmxlU29ydE9yZGVyLFxuICBEYXRhVGFibGVUaGVtZU5hbWVcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBEQVRBX1RBQkxFX1RFTVBMQVRFIH0gZnJvbSAnLi9hbmd1bGFyLWRhdGEtdGFibGUudGVtcGxhdGUnO1xuaW1wb3J0IHsgY2xhbXAsIHJlc29sdmVDZWxsVmFsdWUsIHNvcnRSb3dzLCBzdHlsZU9iamVjdFRvU3RyaW5nLCB0b0NlbGxUZXh0IH0gZnJvbSAnLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Jldml2ZS1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IERBVEFfVEFCTEVfVEVNUExBVEUsXG4gIHN0eWxlVXJsczogWycuL2FuZ3VsYXItZGF0YS10YWJsZS5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb21wb25lbnQ8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4+XG4gIGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gIEBJbnB1dCgpIGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbjxUPltdID0gW107XG4gIEBJbnB1dCgpIGRhdGE6IFRbXSA9IFtdO1xuICBASW5wdXQoKSBrZXlGaWVsZCA9ICdpZCc7XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbCA9ICcnO1xuXG4gIEBJbnB1dCgpIHBhZ2luYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvblNlcnZlciA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uRGVmYXVsdFBhZ2UgPSAxO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uUGVyUGFnZSA9IDEwO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uVG90YWxSb3dzID0gMDtcbiAgQElucHV0KCkgcGFnaW5hdGlvblJvd3NQZXJQYWdlT3B0aW9uczogbnVtYmVyW10gPSBbMTAsIDE1LCAyMCwgMjUsIDMwXTtcblxuICBASW5wdXQoKSBzZWxlY3RhYmxlUm93cyA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlUm93c1NpbmdsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlUm93c0hpZ2hsaWdodCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlUm93c05vU2VsZWN0QWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGVSb3dzVmlzaWJsZU9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xlYXJTZWxlY3RlZFJvd3MgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0YWJsZVJvd1NlbGVjdGVkOiAoKHJvdzogVCkgPT4gYm9vbGVhbikgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc2VsZWN0YWJsZVJvd0Rpc2FibGVkOiAoKHJvdzogVCkgPT4gYm9vbGVhbikgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKSBleHBhbmRhYmxlUm93cyA9IGZhbHNlO1xuICBASW5wdXQoKSBleHBhbmRhYmxlUm93c0hpZGVFeHBhbmRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBleHBhbmRPblJvd0NsaWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kT25Sb3dEb3VibGVDbGlja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dEaXNhYmxlZDogKChyb3c6IFQpID0+IGJvb2xlYW4pIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dFeHBhbmRlZDogKChyb3c6IFQpID0+IGJvb2xlYW4pIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVSb3dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8RGF0YVRhYmxlRXhwYW5kYWJsZUNvbnRleHQ8VD4+IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KCkgc3RyaXBlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBoaWdobGlnaHRPbkhvdmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBvaW50ZXJPbkhvdmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRlbnNlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlc3BvbnNpdmUgPSB0cnVlO1xuICBASW5wdXQoKSBwcm9ncmVzc1BlbmRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9IZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9UYWJsZUhlYWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9Db250ZXh0TWVudSA9IGZhbHNlO1xuICBASW5wdXQoKSBmaXhlZEhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBmaXhlZEhlYWRlclNjcm9sbEhlaWdodCA9ICc0MjBweCc7XG4gIEBJbnB1dCgpIHN1YkhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzdWJIZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dW5rbm93bj4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbm9EYXRhVGV4dCA9ICdUaGVyZSBhcmUgbm8gcmVjb3JkcyB0byBkaXNwbGF5JztcbiAgQElucHV0KCkgY29uZGl0aW9uYWxSb3dTdHlsZXM6IENvbmRpdGlvbmFsU3R5bGU8VD5bXSA9IFtdO1xuICBASW5wdXQoKSBkZWZhdWx0U29ydEZpZWxkSWQ6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkZWZhdWx0U29ydEFzYyA9IHRydWU7XG4gIEBJbnB1dCgpIHNvcnRTZXJ2ZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgdGhlbWU6IERhdGFUYWJsZVRoZW1lTmFtZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgY29udGV4dE1lc3NhZ2U6IERhdGFUYWJsZUNvbnRleHRNZXNzYWdlID0ge1xuICAgIHNpbmd1bGFyOiAnaXRlbScsXG4gICAgcGx1cmFsOiAnaXRlbXMnLFxuICAgIG1lc3NhZ2U6ICdzZWxlY3RlZCdcbiAgfTtcblxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0YVRhYmxlU29ydEV2ZW50PFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVTZWxlY3Rpb25TdGF0ZTxUPj4oKTtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFUYWJsZVBhZ2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJvd3NQZXJQYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVGFibGVSb3dzUGVyUGFnZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm93Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIHJvd0RvdWJsZUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBPdXRwdXQoKSByb3dNb3VzZUVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAT3V0cHV0KCkgcm93TW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIHJvd0V4cGFuZFRvZ2dsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFUYWJsZUV4cGFuZEV2ZW50PFQ+PigpO1xuXG4gIGN1cnJlbnRQYWdlID0gMTtcbiAgcm93c1BlclBhZ2UgPSAxMDtcbiAgc29ydERpcmVjdGlvbjogRGF0YVRhYmxlU29ydE9yZGVyID0gJ2FzYyc7XG4gIGFjdGl2ZVNvcnRDb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPiB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWRLZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZXhwYW5kZWRLZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydwYWdpbmF0aW9uUGVyUGFnZSddKSB7XG4gICAgICB0aGlzLnJvd3NQZXJQYWdlID0gdGhpcy5wYWdpbmF0aW9uUGVyUGFnZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlc1sncGFnaW5hdGlvbkRlZmF1bHRQYWdlJ10pIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luYXRpb25EZWZhdWx0UGFnZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlc1snY2xlYXJTZWxlY3RlZFJvd3MnXSAmJiAhY2hhbmdlc1snY2xlYXJTZWxlY3RlZFJvd3MnXS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEtleXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuZW1pdFNlbGVjdGlvblN0YXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2hhbmdlc1snY29sdW1ucyddIHx8XG4gICAgICBjaGFuZ2VzWydkZWZhdWx0U29ydEZpZWxkSWQnXSB8fFxuICAgICAgY2hhbmdlc1snZGVmYXVsdFNvcnRBc2MnXVxuICAgICkge1xuICAgICAgdGhpcy5hcHBseURlZmF1bHRTb3J0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2RhdGEnXSB8fCBjaGFuZ2VzWydzZWxlY3RhYmxlUm93U2VsZWN0ZWQnXSkge1xuICAgICAgdGhpcy5zeW5jUHJvZ3JhbW1hdGljU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2RhdGEnXSB8fCBjaGFuZ2VzWydleHBhbmRhYmxlUm93RXhwYW5kZWQnXSkge1xuICAgICAgdGhpcy5zeW5jUHJvZ3JhbW1hdGljRXhwYW5zaW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnN1cmVWYWxpZFBhZ2UoKTtcbiAgfVxuXG4gIGdldCB2aXNpYmxlQ29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhY29sdW1uLm9taXQpO1xuICB9XG5cbiAgZ2V0IHNoZWxsQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiBbJ2FkdGMtc2hlbGwnLCB0aGlzLnRoZW1lID09PSAnZGFyaycgPyAnYWR0Yy10aGVtZS1kYXJrJyA6ICcnXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBzb3J0ZWRSb3dzKCkge1xuICAgIGlmICh0aGlzLnNvcnRTZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBbLi4udGhpcy5kYXRhXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc29ydFJvd3ModGhpcy5kYXRhLCB0aGlzLmFjdGl2ZVNvcnRDb2x1bW4sIHRoaXMuc29ydERpcmVjdGlvbik7XG4gIH1cblxuICBnZXQgZGlzcGxheWVkUm93cygpIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uICYmICF0aGlzLnBhZ2luYXRpb25TZXJ2ZXIpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucm93c1BlclBhZ2U7XG4gICAgICByZXR1cm4gdGhpcy5zb3J0ZWRSb3dzLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMucm93c1BlclBhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNvcnRlZFJvd3M7XG4gIH1cblxuICBnZXQgaGFzUm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCA+IDA7XG4gIH1cblxuICBnZXQgdG90YWxSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb25TZXJ2ZXIgPyB0aGlzLnBhZ2luYXRpb25Ub3RhbFJvd3MgfHwgdGhpcy5kYXRhLmxlbmd0aCA6IHRoaXMuc29ydGVkUm93cy5sZW5ndGg7XG4gIH1cblxuICBnZXQgdG90YWxQYWdlcygpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKE1hdGgubWF4KHRoaXMudG90YWxSb3dzLCAxKSAvIHRoaXMucm93c1BlclBhZ2UpKTtcbiAgfVxuXG4gIGdldCBzdGFydFJvdygpIHtcbiAgICBpZiAoIXRoaXMudG90YWxSb3dzKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucm93c1BlclBhZ2UgKyAxO1xuICB9XG5cbiAgZ2V0IGVuZFJvdygpIHtcbiAgICBpZiAoIXRoaXMudG90YWxSb3dzKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJyZW50UGFnZSAqIHRoaXMucm93c1BlclBhZ2UsIHRoaXMudG90YWxSb3dzKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoKHJvdykgPT4gdGhpcy5zZWxlY3RlZEtleXMuaGFzKHRoaXMuZ2V0Um93S2V5KHJvdykpKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93cy5sZW5ndGg7XG4gIH1cblxuICBnZXQgYWxsUm93c1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGFibGVSb3dzID0gdGhpcy5zZWxlY3Rpb25TY29wZVJvd3MuZmlsdGVyKFxuICAgICAgKHJvdykgPT4gIXRoaXMuaXNTZWxlY3RhYmxlRGlzYWJsZWQocm93KVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgc2VsZWN0YWJsZVJvd3MubGVuZ3RoID4gMCAmJlxuICAgICAgc2VsZWN0YWJsZVJvd3MuZXZlcnkoKHJvdykgPT4gdGhpcy5zZWxlY3RlZEtleXMuaGFzKHRoaXMuZ2V0Um93S2V5KHJvdykpKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd0NvbnRleHRCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0YWJsZVJvd3MgJiYgIXRoaXMubm9Db250ZXh0TWVudSAmJiB0aGlzLnNlbGVjdGVkQ291bnQgPiAwO1xuICB9XG5cbiAgZ2V0IHNob3dQYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24gJiYgIXRoaXMucHJvZ3Jlc3NQZW5kaW5nICYmIHRoaXMudG90YWxSb3dzID4gMDtcbiAgfVxuXG4gIGdldCBzZWxlY3Rpb25TY29wZVJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0YWJsZVJvd3NWaXNpYmxlT25seSA/IHRoaXMuZGlzcGxheWVkUm93cyA6IHRoaXMuc29ydGVkUm93cztcbiAgfVxuXG4gIHJlYWRvbmx5IHRyYWNrQnlDb2x1bW4gPSAoaW5kZXg6IG51bWJlciwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pID0+XG4gICAgY29sdW1uLmlkID8/IGNvbHVtbi5uYW1lID8/IGluZGV4O1xuXG4gIHJlYWRvbmx5IHRyYWNrQnlSb3cgPSAoaW5kZXg6IG51bWJlciwgcm93OiBUKSA9PlxuICAgIHRoaXMuZ2V0Um93S2V5KHJvdykgfHwgaW5kZXg7XG5cbiAgZ2V0Q2VsbFZhbHVlKHJvdzogVCwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4sIHJvd0luZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gcmVzb2x2ZUNlbGxWYWx1ZShyb3csIGNvbHVtbiwgcm93SW5kZXgpO1xuICB9XG5cbiAgZ2V0Q2VsbFRleHQocm93OiBULCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPiwgcm93SW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0b0NlbGxUZXh0KHRoaXMuZ2V0Q2VsbFZhbHVlKHJvdywgY29sdW1uLCByb3dJbmRleCkpO1xuICB9XG5cbiAgZ2V0Q2VsbENvbnRleHQocm93OiBULCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPiwgcm93SW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICAkaW1wbGljaXQ6IHJvdyxcbiAgICAgIHJvdyxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgY29sdW1uLFxuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q2VsbFZhbHVlKHJvdywgY29sdW1uLCByb3dJbmRleClcbiAgICB9O1xuICB9XG5cbiAgZ2V0RXhwYW5kYWJsZUNvbnRleHQocm93OiBULCByb3dJbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICRpbXBsaWNpdDogcm93LFxuICAgICAgcm93LFxuICAgICAgcm93SW5kZXhcbiAgICB9O1xuICB9XG5cbiAgZ2V0SGVhZGVyU3R5bGUoY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGNvbHVtbi53aWR0aCA/PyBudWxsLFxuICAgICAgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCA/PyBudWxsLFxuICAgICAgbWF4V2lkdGg6IGNvbHVtbi5tYXhXaWR0aCA/PyBudWxsLFxuICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlXG4gICAgfTtcbiAgfVxuXG4gIGdldENlbGxTdHlsZShjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogY29sdW1uLndpZHRoID8/IG51bGwsXG4gICAgICBtaW5XaWR0aDogY29sdW1uLm1pbldpZHRoID8/IG51bGwsXG4gICAgICBtYXhXaWR0aDogY29sdW1uLm1heFdpZHRoID8/IG51bGwsXG4gICAgICAuLi5jb2x1bW4uc3R5bGVcbiAgICB9O1xuICB9XG5cbiAgZ2V0V3JhcHBlckNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gWydhZHRjLXdyYXBwZXInLCB0aGlzLnJlc3BvbnNpdmUgPyAnYWR0Yy1yZXNwb25zaXZlJyA6ICcnXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldFNjcm9sbENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gWydhZHRjLXNjcm9sbCcsIHRoaXMuZml4ZWRIZWFkZXIgPyAnYWR0Yy1maXhlZC1oZWFkZXInIDogJyddXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgZ2V0U2Nyb2xsU3R5bGVBdHRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0VG9TdHJpbmcoe1xuICAgICAgbWF4SGVpZ2h0OiB0aGlzLmZpeGVkSGVhZGVyID8gdGhpcy5maXhlZEhlYWRlclNjcm9sbEhlaWdodCA6IG51bGxcbiAgICB9KSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0U29ydEJ1dHRvbkNsYXNzTmFtZShjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHJldHVybiBbJ2FkdGMtc29ydC1idXR0b24nLCBjb2x1bW4uc29ydGFibGUgPyAnYWR0Yy1zb3J0YWJsZScgOiAnJ11cbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRTb3J0SW5kaWNhdG9yQ2xhc3NOYW1lKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdhZHRjLXNvcnQtaW5kaWNhdG9yJyxcbiAgICAgIHRoaXMuYWN0aXZlU29ydENvbHVtbiA9PT0gY29sdW1uID8gJ2FjdGl2ZScgOiAnJ1xuICAgIF1cbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRIZWFkZXJDbGFzc05hbWUoY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gW1xuICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSB8fCAnJyxcbiAgICAgIGNvbHVtbi5yaWdodCA/ICdhZHRjLWFsaWduLXJpZ2h0JyA6ICcnLFxuICAgICAgY29sdW1uLmNlbnRlciA/ICdhZHRjLWFsaWduLWNlbnRlcicgOiAnJyxcbiAgICAgIGNvbHVtbi53cmFwID8gJ2FkdGMtd3JhcCcgOiAnYWR0Yy1ub3dyYXAnXG4gICAgXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldENlbGxDbGFzc05hbWUoY29sdW1uOiBEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gW1xuICAgICAgY29sdW1uLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgIGNvbHVtbi5yaWdodCA/ICdhZHRjLWFsaWduLXJpZ2h0JyA6ICcnLFxuICAgICAgY29sdW1uLmNlbnRlciA/ICdhZHRjLWFsaWduLWNlbnRlcicgOiAnJyxcbiAgICAgIGNvbHVtbi53cmFwID8gJ2FkdGMtd3JhcCcgOiAnYWR0Yy1ub3dyYXAnXG4gICAgXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldFJvd0NsYXNzTmFtZXMocm93OiBUKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsnYWR0Yy1yb3cnXTtcblxuICAgIGlmICh0aGlzLnN0cmlwZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWR0Yy1yb3ctc3RyaXBlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhpZ2hsaWdodE9uSG92ZXIpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWR0Yy1yb3ctaG92ZXJhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9pbnRlck9uSG92ZXIpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWR0Yy1yb3ctcG9pbnRlcicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlbnNlKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2FkdGMtcm93LWRlbnNlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZVJvd3NIaWdobGlnaHQgJiYgdGhpcy5zZWxlY3RlZEtleXMuaGFzKHRoaXMuZ2V0Um93S2V5KHJvdykpKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2FkdGMtcm93LXNlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjb25kaXRpb25hbFN0eWxlIG9mIHRoaXMuY29uZGl0aW9uYWxSb3dTdHlsZXMpIHtcbiAgICAgIGlmICghY29uZGl0aW9uYWxTdHlsZS53aGVuKHJvdykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9XG4gICAgICAgIHR5cGVvZiBjb25kaXRpb25hbFN0eWxlLmNsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gY29uZGl0aW9uYWxTdHlsZS5jbGFzc05hbWUocm93KVxuICAgICAgICAgIDogY29uZGl0aW9uYWxTdHlsZS5jbGFzc05hbWU7XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH1cblxuICBnZXRSb3dDbGFzc05hbWUocm93OiBUKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93Q2xhc3NOYW1lcyhyb3cpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldFJvd1N0eWxlKHJvdzogVCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsUm93U3R5bGVzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+PigoYWNjLCBjb25kaXRpb25hbFN0eWxlKSA9PiB7XG4gICAgICBpZiAoIWNvbmRpdGlvbmFsU3R5bGUud2hlbihyb3cpIHx8ICFjb25kaXRpb25hbFN0eWxlLnN0eWxlKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0eWxlID1cbiAgICAgICAgdHlwZW9mIGNvbmRpdGlvbmFsU3R5bGUuc3R5bGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGNvbmRpdGlvbmFsU3R5bGUuc3R5bGUocm93KVxuICAgICAgICAgIDogY29uZGl0aW9uYWxTdHlsZS5zdHlsZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi5zdHlsZVxuICAgICAgfTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBnZXRIZWFkZXJTdHlsZUF0dHJpYnV0ZShjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHJldHVybiBzdHlsZU9iamVjdFRvU3RyaW5nKHRoaXMuZ2V0SGVhZGVyU3R5bGUoY29sdW1uKSkgfHwgbnVsbDtcbiAgfVxuXG4gIGdldENlbGxTdHlsZUF0dHJpYnV0ZShjb2x1bW46IERhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHJldHVybiBzdHlsZU9iamVjdFRvU3RyaW5nKHRoaXMuZ2V0Q2VsbFN0eWxlKGNvbHVtbikpIHx8IG51bGw7XG4gIH1cblxuICBnZXRSb3dTdHlsZUF0dHJpYnV0ZShyb3c6IFQpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3RUb1N0cmluZyh0aGlzLmdldFJvd1N0eWxlKHJvdykpIHx8IG51bGw7XG4gIH1cblxuICBpc1Jvd1NlbGVjdGVkKHJvdzogVCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkS2V5cy5oYXModGhpcy5nZXRSb3dLZXkocm93KSk7XG4gIH1cblxuICBpc1Jvd0V4cGFuZGVkKHJvdzogVCkge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkS2V5cy5oYXModGhpcy5nZXRSb3dLZXkocm93KSk7XG4gIH1cblxuICBpc1NlbGVjdGFibGVEaXNhYmxlZChyb3c6IFQpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RhYmxlUm93RGlzYWJsZWQgPyB0aGlzLnNlbGVjdGFibGVSb3dEaXNhYmxlZChyb3cpIDogZmFsc2U7XG4gIH1cblxuICBpc0V4cGFuZGFibGVEaXNhYmxlZChyb3c6IFQpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlUm93RGlzYWJsZWQgPyB0aGlzLmV4cGFuZGFibGVSb3dEaXNhYmxlZChyb3cpIDogZmFsc2U7XG4gIH1cblxuICB0b2dnbGVTb3J0KGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgaWYgKCFjb2x1bW4uc29ydGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTb3J0Q29sdW1uID09PSBjb2x1bW4pIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVTb3J0Q29sdW1uID0gY29sdW1uO1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2FzYyc7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG5cbiAgICBjb25zdCByb3dzID0gdGhpcy5zb3J0ZWRSb3dzO1xuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHtcbiAgICAgIGNvbHVtbixcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5zb3J0RGlyZWN0aW9uLFxuICAgICAgcm93c1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlQWxsUm93cyhjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29uc3Qgcm93cyA9IHRoaXMuc2VsZWN0aW9uU2NvcGVSb3dzLmZpbHRlcigocm93KSA9PiAhdGhpcy5pc1NlbGVjdGFibGVEaXNhYmxlZChyb3cpKTtcblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzLmFkZCh0aGlzLmdldFJvd0tleShyb3cpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkS2V5cy5kZWxldGUodGhpcy5nZXRSb3dLZXkocm93KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uU3RhdGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVJvd1NlbGVjdGlvbihyb3c6IFQpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0YWJsZVJvd3MgfHwgdGhpcy5pc1NlbGVjdGFibGVEaXNhYmxlZChyb3cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRSb3dLZXkocm93KTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGFibGVSb3dzU2luZ2xlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkS2V5cy5jbGVhcigpO1xuICAgICAgdGhpcy5zZWxlY3RlZEtleXMuYWRkKGtleSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkS2V5cy5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEtleXMuZGVsZXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzLmFkZChrZXkpO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdFNlbGVjdGlvblN0YXRlKCk7XG4gIH1cblxuICB0b2dnbGVSb3dFeHBhbnNpb24ocm93OiBUKSB7XG4gICAgaWYgKCF0aGlzLmV4cGFuZGFibGVSb3dzIHx8IHRoaXMuaXNFeHBhbmRhYmxlRGlzYWJsZWQocm93KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0Um93S2V5KHJvdyk7XG4gICAgY29uc3QgZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZEtleXMuaGFzKGtleSk7XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRLZXlzLmFkZChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZGVkS2V5cy5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLnJvd0V4cGFuZFRvZ2dsZWQuZW1pdCh7IGV4cGFuZGVkLCByb3cgfSk7XG4gIH1cblxuICBoYW5kbGVSb3dDbGljayhyb3c6IFQpIHtcbiAgICB0aGlzLnJvd0NsaWNrZWQuZW1pdChyb3cpO1xuXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZVJvd3MgJiYgdGhpcy5leHBhbmRPblJvd0NsaWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUm93RXhwYW5zaW9uKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUm93RG91YmxlQ2xpY2socm93OiBUKSB7XG4gICAgdGhpcy5yb3dEb3VibGVDbGlja2VkLmVtaXQocm93KTtcblxuICAgIGlmICh0aGlzLmV4cGFuZGFibGVSb3dzICYmIHRoaXMuZXhwYW5kT25Sb3dEb3VibGVDbGlja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVJvd0V4cGFuc2lvbihyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIocm93OiBUKSB7XG4gICAgdGhpcy5yb3dNb3VzZUVudGVyLmVtaXQocm93KTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTGVhdmUocm93OiBUKSB7XG4gICAgdGhpcy5yb3dNb3VzZUxlYXZlLmVtaXQocm93KTtcbiAgfVxuXG4gIGNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IGNsYW1wKHBhZ2UsIDEsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHRvdGFsUm93czogdGhpcy50b3RhbFJvd3NcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZVJvd3NQZXJQYWdlKHJvd3NQZXJQYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLnJvd3NQZXJQYWdlID0gcm93c1BlclBhZ2U7XG4gICAgdGhpcy5lbnN1cmVWYWxpZFBhZ2UoKTtcbiAgICB0aGlzLnJvd3NQZXJQYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgcm93c1BlclBhZ2U6IHRoaXMucm93c1BlclBhZ2UsXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseURlZmF1bHRTb3J0KCkge1xuICAgIGlmICghdGhpcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5hY3RpdmVTb3J0Q29sdW1uID0gbnVsbDtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdhc2MnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChcbiAgICAgIChjb2x1bW4pID0+XG4gICAgICAgIGNvbHVtbi5pZCA9PT0gdGhpcy5kZWZhdWx0U29ydEZpZWxkSWQgfHxcbiAgICAgICAgU3RyaW5nKGNvbHVtbi5pZCkgPT09IFN0cmluZyh0aGlzLmRlZmF1bHRTb3J0RmllbGRJZClcbiAgICApO1xuXG4gICAgdGhpcy5hY3RpdmVTb3J0Q29sdW1uID0gZGVmYXVsdENvbHVtbiA/PyB0aGlzLmFjdGl2ZVNvcnRDb2x1bW47XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdGhpcy5kZWZhdWx0U29ydEFzYyA/ICdhc2MnIDogJ2Rlc2MnO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jUHJvZ3JhbW1hdGljU2VsZWN0aW9uKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3RhYmxlUm93U2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkS2V5cy5jbGVhcigpO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RhYmxlUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkS2V5cy5hZGQodGhpcy5nZXRSb3dLZXkocm93KSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZVJvd3NTaW5nbGUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdFNlbGVjdGlvblN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHN5bmNQcm9ncmFtbWF0aWNFeHBhbnNpb24oKSB7XG4gICAgaWYgKCF0aGlzLmV4cGFuZGFibGVSb3dFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXhwYW5kZWRLZXlzLmNsZWFyKCk7XG5cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLmV4cGFuZGFibGVSb3dFeHBhbmRlZChyb3cpKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kZWRLZXlzLmFkZCh0aGlzLmdldFJvd0tleShyb3cpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVtaXRTZWxlY3Rpb25TdGF0ZSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0NoYW5nZS5lbWl0KHtcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLmFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHNlbGVjdGVkQ291bnQ6IHRoaXMuc2VsZWN0ZWRDb3VudCxcbiAgICAgIHNlbGVjdGVkUm93czogdGhpcy5zZWxlY3RlZFJvd3NcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlVmFsaWRQYWdlKCkge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjbGFtcCh0aGlzLmN1cnJlbnRQYWdlLCAxLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3dLZXkocm93OiBUKSB7XG4gICAgY29uc3QgY2FuZGlkYXRlID0gcm93W3RoaXMua2V5RmllbGQgYXMga2V5b2YgVF07XG5cbiAgICBpZiAoY2FuZGlkYXRlID09IG51bGwgfHwgY2FuZGlkYXRlID09PSAnJykge1xuICAgICAgcmV0dXJuIGByb3ctJHt0aGlzLmRhdGEuaW5kZXhPZihyb3cpfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0cmluZyhjYW5kaWRhdGUpO1xuICB9XG59XG4iXX0=