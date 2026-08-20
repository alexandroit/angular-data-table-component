import * as i0 from '@angular/core';
import { TemplateRef, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as i2 from '@angular/common';

type DataTableSortOrder = 'asc' | 'desc';
type DataTableThemeName = 'default' | 'dark';
type DataTablePinningSide = 'left' | 'right';
interface DataTableContextMessage {
    singular: string;
    plural: string;
    message: string;
}
interface DataTableColumn {
    id?: string | number;
    name: string | number;
    selector?: string | ((row: any, rowIndex?: number) => any);
    accessorKey?: string;
    header?: string | number;
    group?: string | number;
    columns?: DataTableColumn[];
    sortable?: boolean;
    sortField?: string;
    sortFunction?: (a: any, b: any) => number;
    format?: (row: any, rowIndex: number) => any;
    filterFn?: (row: any, filterValue: any, column: DataTableColumn) => boolean;
    aggregationFn?: DataTableAggregationName | ((rows: any[], column: DataTableColumn) => any);
    enableHiding?: boolean;
    enableGlobalFilter?: boolean;
    enableColumnFilter?: boolean;
    cellTemplate?: TemplateRef<DataTableCellContext>;
    className?: string;
    headerClassName?: string;
    style?: {
        [key: string]: string | number;
    };
    headerStyle?: {
        [key: string]: string | number;
    };
    size?: number;
    minSize?: number;
    maxSize?: number;
    minWidth?: string;
    maxWidth?: string;
    width?: string;
    pin?: DataTablePinningSide | false;
    right?: boolean;
    center?: boolean;
    wrap?: boolean;
    omit?: boolean;
}
type DataTableAggregationName = 'sum' | 'avg' | 'count' | 'min' | 'max' | 'unique';
interface DataTableColumnFilter {
    id: string | number;
    value: any;
}
interface DataTableColumnPinningState {
    left?: Array<string | number>;
    right?: Array<string | number>;
}
interface DataTableRowPinningState {
    top?: any[];
    bottom?: any[];
}
interface DataTableStateChangeEvent {
    globalFilter: string;
    columnFilters: any;
    columnVisibility: {
        [key: string]: boolean;
    };
    columnOrder: Array<string | number>;
    groupBy: Array<string | number>;
}
interface DataTableCellContext {
    $implicit: any;
    row: any;
    rowIndex: number;
    column: DataTableColumn;
    value: any;
}
interface DataTableExpandableContext {
    $implicit: any;
    row: any;
    rowIndex: number;
}
interface ConditionalStyle {
    when: (row: any) => boolean;
    style?: {
        [key: string]: string | number;
    } | ((row: any) => {
        [key: string]: string | number;
    });
    className?: string | ((row: any) => string);
}
interface DataTableSortEvent {
    column: DataTableColumn;
    direction: DataTableSortOrder;
    rows: any[];
}
interface DataTableSelectionState {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: any[];
}
interface DataTablePageEvent {
    page: number;
    totalRows: number;
}
interface DataTableRowsPerPageEvent {
    rowsPerPage: number;
    currentPage: number;
}
interface DataTableExpandEvent {
    expanded: boolean;
    row: any;
}

interface HeadlessDataTableOptions {
    columns: DataTableColumn[];
    data: any[];
    keyField?: string;
    page?: number;
    perPage?: number;
    pagination?: boolean;
    paginationServer?: boolean;
    totalRows?: number;
    sortServer?: boolean;
    globalFilter?: string;
    columnFilters?: DataTableColumnFilter[] | {
        [key: string]: any;
    };
    columnVisibility?: {
        [key: string]: boolean;
    };
    columnOrder?: Array<string | number>;
    selectableRows?: boolean;
    selectableRowsSingle?: boolean;
    selectedKeys?: {
        [key: string]: boolean;
    };
    onSortChange?: (event: DataTableSortEvent) => void;
    onSelectionChange?: (event: DataTableSelectionState) => void;
    onPageChange?: (event: DataTablePageEvent) => void;
    onRowsPerPageChange?: (event: DataTableRowsPerPageEvent) => void;
    onStateChange?: (event: DataTableStateChangeEvent) => void;
}
declare class HeadlessDataTableController {
    columns: DataTableColumn[];
    data: any[];
    keyField: string;
    pagination: boolean;
    paginationServer: boolean;
    totalRowCount: number;
    sortServer: boolean;
    globalFilter: string;
    columnFilters: DataTableColumnFilter[] | {
        [key: string]: any;
    };
    columnVisibility: {
        [key: string]: boolean;
    };
    columnOrder: Array<string | number>;
    selectableRows: boolean;
    selectableRowsSingle: boolean;
    currentPage: number;
    rowsPerPage: number;
    sortDirection: DataTableSortOrder;
    activeSortColumn: DataTableColumn | null;
    private selectedKeys;
    private onSortChange;
    private onSelectionChange;
    private onPageChange;
    private onRowsPerPageChange;
    private onStateChange;
    constructor(options?: HeadlessDataTableOptions);
    update(options: HeadlessDataTableOptions): this;
    get flatColumns(): DataTableColumn[];
    get visibleColumns(): DataTableColumn[];
    get filteredRows(): any[];
    get sortedRows(): any[];
    get displayedRows(): any[];
    get totalRows(): number;
    get totalPages(): number;
    get startRow(): number;
    get endRow(): number;
    get selectedRows(): any[];
    get selectedCount(): number;
    get allRowsSelected(): boolean;
    get state(): DataTableStateChangeEvent;
    getColumnKey(column: DataTableColumn): string;
    getRowKey(row: any): string;
    getCellValue(row: any, column: DataTableColumn, rowIndex: number): any;
    getCellText(row: any, column: DataTableColumn, rowIndex: number): string;
    getAriaSort(column: DataTableColumn): "none" | "ascending" | "descending" | null;
    getSortButtonAriaLabel(column: DataTableColumn): string;
    isColumnVisible(column: DataTableColumn): boolean;
    isRowSelected(row: any): boolean;
    toggleSort(column: DataTableColumn): void;
    toggleRowSelection(row: any): void;
    toggleAllVisibleRows(): void;
    changePage(page: number): void;
    changeRowsPerPage(rowsPerPage: string | number): void;
    setGlobalFilter(value: string): void;
    setColumnFilter(columnId: string | number, value: any): void;
    private flattenColumns;
    private applyGlobalFilter;
    private applyColumnFilters;
    private rowPassesColumnFilters;
    private findColumn;
    private getColumnFilterMap;
    private ensureValidPage;
    private emitSelection;
    private emitState;
}
declare function createDataTableController(options: HeadlessDataTableOptions): HeadlessDataTableController;

declare class DataTableComponent implements OnChanges {
    columns: DataTableColumn[];
    data: any[];
    keyField: string;
    title: string;
    ariaLabel: string;
    keyboardRows: boolean;
    pagination: boolean;
    paginationServer: boolean;
    paginationDefaultPage: number;
    paginationPerPage: number;
    paginationTotalRows: number;
    paginationRowsPerPageOptions: number[];
    selectableRows: boolean;
    selectableRowsSingle: boolean;
    selectableRowsHighlight: boolean;
    selectableRowsNoSelectAll: boolean;
    selectableRowsVisibleOnly: boolean;
    clearSelectedRows: boolean;
    selectableRowSelected: ((row: any) => boolean) | null;
    selectableRowDisabled: ((row: any) => boolean) | null;
    expandableRows: boolean;
    expandableRowsHideExpander: boolean;
    expandOnRowClicked: boolean;
    expandOnRowDoubleClicked: boolean;
    expandableRowDisabled: ((row: any) => boolean) | null;
    expandableRowExpanded: ((row: any) => boolean) | null;
    expandableRowTemplate: any;
    striped: boolean;
    highlightOnHover: boolean;
    pointerOnHover: boolean;
    dense: boolean;
    responsive: boolean;
    progressPending: boolean;
    noHeader: boolean;
    noTableHead: boolean;
    fixedHeader: boolean;
    fixedHeaderScrollHeight: string;
    noDataText: string;
    conditionalRowStyles: ConditionalStyle[];
    defaultSortFieldId: string | number | null;
    defaultSortAsc: boolean;
    sortServer: boolean;
    manualSorting: boolean;
    manualFiltering: boolean;
    manualPagination: boolean;
    globalFilter: string;
    columnFilters: DataTableColumnFilter[] | {
        [key: string]: any;
    };
    hiddenColumns: Array<string | number>;
    columnVisibility: {
        [key: string]: boolean;
    };
    columnOrder: Array<string | number>;
    columnPinning: DataTableColumnPinningState;
    columnSizing: {
        [key: string]: number | string;
    };
    groupBy: string | number | Array<string | number>;
    grouping: string | number | Array<string | number>;
    aggregationFns: {
        [key: string]: DataTableAggregationName | ((rows: any[], column: DataTableColumn) => any);
    };
    pinnedTopRows: any[];
    pinnedBottomRows: any[];
    rowPinning: DataTableRowPinningState | null;
    virtualRows: boolean;
    virtualStartIndex: number;
    virtualRowCount: number;
    theme: DataTableThemeName;
    contextMessage: DataTableContextMessage;
    sortChange: EventEmitter<DataTableSortEvent>;
    selectedRowsChange: EventEmitter<DataTableSelectionState>;
    pageChange: EventEmitter<DataTablePageEvent>;
    rowsPerPageChange: EventEmitter<DataTableRowsPerPageEvent>;
    rowClicked: EventEmitter<any>;
    rowDoubleClicked: EventEmitter<any>;
    rowMouseEnter: EventEmitter<any>;
    rowMouseLeave: EventEmitter<any>;
    rowExpandToggled: EventEmitter<DataTableExpandEvent>;
    globalFilterChange: EventEmitter<string>;
    columnFiltersChange: EventEmitter<any>;
    columnVisibilityChange: EventEmitter<{
        [key: string]: boolean;
    }>;
    columnOrderChange: EventEmitter<(string | number)[]>;
    groupingChange: EventEmitter<(string | number)[]>;
    tableStateChange: EventEmitter<DataTableStateChangeEvent>;
    currentPage: number;
    rowsPerPage: number;
    sortDirection: DataTableSortOrder;
    activeSortColumn: DataTableColumn | null;
    private selectedKeys;
    private expandedKeys;
    private collapsedGroupKeys;
    ngOnChanges(changes: SimpleChanges): void;
    get flatColumns(): DataTableColumn[];
    get visibleColumns(): DataTableColumn[];
    get hasColumnGroups(): boolean;
    get columnGroups(): any[];
    get shellClassName(): string;
    get wrapperClassName(): string;
    get scrollClassName(): "" | "adtc-scroll";
    get scrollStyle(): {
        [key: string]: string | number;
    };
    get scrollStyleText(): string | null;
    getHeaderStyleText(column: DataTableColumn): string | null;
    getRowStyleText(row: any): string | null;
    getCellStyleText(column: DataTableColumn): string | null;
    get tableAriaLabel(): string;
    get pinnedTopDisplayRows(): any[];
    get pinnedBottomDisplayRows(): any[];
    get filteredPinnedTopRows(): any[];
    get filteredPinnedBottomRows(): any[];
    get unpinnedRows(): any[];
    get filteredRows(): any[];
    get sortedRows(): any[];
    get groupedRows(): any[];
    get bodyRows(): any[];
    get displayedRows(): any[];
    get hasRows(): boolean;
    get totalRows(): number;
    get totalPages(): number;
    get startRow(): number;
    get endRow(): number;
    get selectedRows(): any[];
    get selectedCount(): number;
    get selectionScopeRows(): any[];
    get allRowsSelected(): boolean;
    get someRowsSelected(): boolean;
    get selectAllAriaLabel(): "Select all visible rows" | "Select all rows";
    get selectAllAriaChecked(): "true" | "mixed" | "false";
    get showContextBar(): boolean;
    get showPagination(): boolean;
    get expandedColspan(): number;
    getCellText(row: any, column: DataTableColumn, rowIndex: number): string;
    getAriaSort(column: DataTableColumn): "none" | "ascending" | "descending" | null;
    getSortButtonAriaLabel(column: DataTableColumn): string;
    getRowAriaSelected(row: any): string | null;
    getRowTabIndex(row: any): 0 | null;
    getRowSelectionAriaLabel(row: any, rowIndex: number): string;
    getRowExpandAriaLabel(row: any, rowIndex: number): string;
    getExpandedRowId(row: any): string;
    getGroupRowId(row: any): string;
    getGroupToggleAriaLabel(row: any): string;
    getCellContext(row: any, column: DataTableColumn, rowIndex: number): DataTableCellContext;
    getExpandableContext(row: any, rowIndex: number): DataTableExpandableContext;
    toggleSort(column: DataTableColumn): void;
    toggleAllRows(checked: boolean): void;
    toggleRowSelection(row: any): void;
    isRowSelected(row: any): boolean;
    isSelectableDisabled(row: any): boolean;
    handleRowKeydown(event: KeyboardEvent, row: any): void;
    handleSortButtonKeydown(event: KeyboardEvent, column: DataTableColumn): void;
    handleExpanderKeydown(event: KeyboardEvent, row: any): void;
    handleGroupToggleKeydown(event: KeyboardEvent, row: any): void;
    handleRowClick(row: any): void;
    handleRowDoubleClick(row: any): void;
    handleMouseEnter(row: any): void;
    handleMouseLeave(row: any): void;
    changePage(page: number): void;
    changeRowsPerPage(value: string | number): void;
    toggleRowExpansion(row: any): void;
    isRowExpanded(row: any): boolean;
    isExpandableDisabled(row: any): boolean;
    isGroupRow(row: any): boolean;
    isGroupRowExpanded(row: any): boolean;
    toggleGroupRow(row: any): void;
    setGlobalFilter(value: string): void;
    setColumnFilter(columnId: string | number, value: any): void;
    setColumnVisibility(columnId: string | number, visible: boolean): void;
    setColumnOrder(order: Array<string | number>): void;
    setGrouping(grouping: Array<string | number>): void;
    getColumnUniqueValues(columnId: string | number): {
        [key: string]: number;
    };
    getHeaderClassName(column: DataTableColumn): string;
    getHeaderStyle(column: DataTableColumn): {
        [key: string]: string | number;
    };
    getCellClassName(column: DataTableColumn): string;
    getCellStyle(column: DataTableColumn): {
        [key: string]: string | number;
    };
    getSortButtonClassName(column: DataTableColumn): string;
    getSortIndicatorClassName(column: DataTableColumn): string;
    getRowClassName(row: any): string;
    getRowStyle(row: any): {
        [key: string]: string | number;
    };
    private getRowKey;
    private getColumnKey;
    private flattenColumns;
    private withInheritedGroup;
    private isColumnVisible;
    private applyFilters;
    private matchesGlobalFilter;
    private matchesColumnFilter;
    private getColumnFilterMap;
    private findColumn;
    private get normalizedGrouping();
    private buildGroupedRows;
    private onlyLeafRows;
    private getPinnedRows;
    private filterPinnedRows;
    private isPinnedTopRow;
    private isPinnedBottomRow;
    private rowExistsIn;
    private getPinnedClassName;
    private getColumnPinSide;
    private mergePinnedStyle;
    private getPinnedOffset;
    private getColumnPixelWidth;
    private getSelectableRows;
    private isKeyboardInteractiveRow;
    private isActivationKey;
    private isInteractiveEventTarget;
    private getRowAccessibleLabel;
    private getFirstReadableColumn;
    private sanitizeId;
    private emitSelectionState;
    private emitTableState;
    private syncProgrammaticSelection;
    private syncProgrammaticExpansion;
    private applyDefaultSort;
    private ensureValidPage;
    private mergeColumnSize;
    private joinClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTableComponent, "stackline-data-table", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; "keyField": { "alias": "keyField"; "required": false; }; "title": { "alias": "title"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "keyboardRows": { "alias": "keyboardRows"; "required": false; }; "pagination": { "alias": "pagination"; "required": false; }; "paginationServer": { "alias": "paginationServer"; "required": false; }; "paginationDefaultPage": { "alias": "paginationDefaultPage"; "required": false; }; "paginationPerPage": { "alias": "paginationPerPage"; "required": false; }; "paginationTotalRows": { "alias": "paginationTotalRows"; "required": false; }; "paginationRowsPerPageOptions": { "alias": "paginationRowsPerPageOptions"; "required": false; }; "selectableRows": { "alias": "selectableRows"; "required": false; }; "selectableRowsSingle": { "alias": "selectableRowsSingle"; "required": false; }; "selectableRowsHighlight": { "alias": "selectableRowsHighlight"; "required": false; }; "selectableRowsNoSelectAll": { "alias": "selectableRowsNoSelectAll"; "required": false; }; "selectableRowsVisibleOnly": { "alias": "selectableRowsVisibleOnly"; "required": false; }; "clearSelectedRows": { "alias": "clearSelectedRows"; "required": false; }; "selectableRowSelected": { "alias": "selectableRowSelected"; "required": false; }; "selectableRowDisabled": { "alias": "selectableRowDisabled"; "required": false; }; "expandableRows": { "alias": "expandableRows"; "required": false; }; "expandableRowsHideExpander": { "alias": "expandableRowsHideExpander"; "required": false; }; "expandOnRowClicked": { "alias": "expandOnRowClicked"; "required": false; }; "expandOnRowDoubleClicked": { "alias": "expandOnRowDoubleClicked"; "required": false; }; "expandableRowDisabled": { "alias": "expandableRowDisabled"; "required": false; }; "expandableRowExpanded": { "alias": "expandableRowExpanded"; "required": false; }; "expandableRowTemplate": { "alias": "expandableRowTemplate"; "required": false; }; "striped": { "alias": "striped"; "required": false; }; "highlightOnHover": { "alias": "highlightOnHover"; "required": false; }; "pointerOnHover": { "alias": "pointerOnHover"; "required": false; }; "dense": { "alias": "dense"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "progressPending": { "alias": "progressPending"; "required": false; }; "noHeader": { "alias": "noHeader"; "required": false; }; "noTableHead": { "alias": "noTableHead"; "required": false; }; "fixedHeader": { "alias": "fixedHeader"; "required": false; }; "fixedHeaderScrollHeight": { "alias": "fixedHeaderScrollHeight"; "required": false; }; "noDataText": { "alias": "noDataText"; "required": false; }; "conditionalRowStyles": { "alias": "conditionalRowStyles"; "required": false; }; "defaultSortFieldId": { "alias": "defaultSortFieldId"; "required": false; }; "defaultSortAsc": { "alias": "defaultSortAsc"; "required": false; }; "sortServer": { "alias": "sortServer"; "required": false; }; "manualSorting": { "alias": "manualSorting"; "required": false; }; "manualFiltering": { "alias": "manualFiltering"; "required": false; }; "manualPagination": { "alias": "manualPagination"; "required": false; }; "globalFilter": { "alias": "globalFilter"; "required": false; }; "columnFilters": { "alias": "columnFilters"; "required": false; }; "hiddenColumns": { "alias": "hiddenColumns"; "required": false; }; "columnVisibility": { "alias": "columnVisibility"; "required": false; }; "columnOrder": { "alias": "columnOrder"; "required": false; }; "columnPinning": { "alias": "columnPinning"; "required": false; }; "columnSizing": { "alias": "columnSizing"; "required": false; }; "groupBy": { "alias": "groupBy"; "required": false; }; "grouping": { "alias": "grouping"; "required": false; }; "aggregationFns": { "alias": "aggregationFns"; "required": false; }; "pinnedTopRows": { "alias": "pinnedTopRows"; "required": false; }; "pinnedBottomRows": { "alias": "pinnedBottomRows"; "required": false; }; "rowPinning": { "alias": "rowPinning"; "required": false; }; "virtualRows": { "alias": "virtualRows"; "required": false; }; "virtualStartIndex": { "alias": "virtualStartIndex"; "required": false; }; "virtualRowCount": { "alias": "virtualRowCount"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "contextMessage": { "alias": "contextMessage"; "required": false; }; }, { "sortChange": "sortChange"; "selectedRowsChange": "selectedRowsChange"; "pageChange": "pageChange"; "rowsPerPageChange": "rowsPerPageChange"; "rowClicked": "rowClicked"; "rowDoubleClicked": "rowDoubleClicked"; "rowMouseEnter": "rowMouseEnter"; "rowMouseLeave": "rowMouseLeave"; "rowExpandToggled": "rowExpandToggled"; "globalFilterChange": "globalFilterChange"; "columnFiltersChange": "columnFiltersChange"; "columnVisibilityChange": "columnVisibilityChange"; "columnOrderChange": "columnOrderChange"; "groupingChange": "groupingChange"; "tableStateChange": "tableStateChange"; }, never, never, false, never>;
}

declare class DataTableModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DataTableModule, [typeof DataTableComponent], [typeof i2.CommonModule], [typeof DataTableComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DataTableModule>;
}

export { DataTableComponent, DataTableModule, HeadlessDataTableController, createDataTableController };
export type { ConditionalStyle, DataTableAggregationName, DataTableCellContext, DataTableColumn, DataTableColumnFilter, DataTableColumnPinningState, DataTableContextMessage, DataTableExpandEvent, DataTableExpandableContext, DataTablePageEvent, DataTablePinningSide, DataTableRowPinningState, DataTableRowsPerPageEvent, DataTableSelectionState, DataTableSortEvent, DataTableSortOrder, DataTableStateChangeEvent, DataTableThemeName, HeadlessDataTableOptions };
