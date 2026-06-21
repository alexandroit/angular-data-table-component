import { DataTableColumn, DataTableColumnFilter, DataTablePageEvent, DataTableRowsPerPageEvent, DataTableSelectionState, DataTableSortEvent, DataTableSortOrder, DataTableStateChangeEvent } from './types';
export interface HeadlessDataTableOptions {
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
export declare class HeadlessDataTableController {
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
    getAriaSort(column: DataTableColumn): "none" | "ascending" | "descending";
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
export declare function createDataTableController(options: HeadlessDataTableOptions): HeadlessDataTableController;
