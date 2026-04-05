import { TemplateRef } from '@angular/core';
export type Primitive = string | number | boolean | null | undefined;
export type DataTableSortOrder = 'asc' | 'desc';
export type DataTableThemeName = 'default' | 'dark';
export type DataTableSelector<T> = keyof T | ((row: T, rowIndex?: number) => unknown);
export type DataTableFormatter<T> = (row: T, rowIndex: number) => unknown;
export interface DataTableContextMessage {
    singular: string;
    plural: string;
    message: string;
}
export interface DataTableCellContext<T> {
    $implicit: T;
    row: T;
    rowIndex: number;
    column: DataTableColumn<T>;
    value: unknown;
}
export interface DataTableExpandableContext<T> {
    $implicit: T;
    row: T;
    rowIndex: number;
}
export interface ConditionalStyle<T> {
    when: (row: T) => boolean;
    style?: Record<string, string | number> | ((row: T) => Record<string, string | number>);
    className?: string | ((row: T) => string);
}
export interface DataTableColumn<T> {
    id?: string | number;
    name: string | number;
    selector?: DataTableSelector<T>;
    sortable?: boolean;
    sortField?: string;
    sortFunction?: (a: T, b: T) => number;
    format?: DataTableFormatter<T>;
    cellTemplate?: TemplateRef<DataTableCellContext<T>>;
    className?: string;
    headerClassName?: string;
    style?: Record<string, string | number>;
    headerStyle?: Record<string, string | number>;
    minWidth?: string;
    maxWidth?: string;
    width?: string;
    right?: boolean;
    center?: boolean;
    wrap?: boolean;
    omit?: boolean;
}
export interface DataTableSortEvent<T> {
    column: DataTableColumn<T>;
    direction: DataTableSortOrder;
    rows: T[];
}
export interface DataTableSelectionState<T> {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: T[];
}
export interface DataTablePageEvent {
    page: number;
    totalRows: number;
}
export interface DataTableRowsPerPageEvent {
    rowsPerPage: number;
    currentPage: number;
}
export interface DataTableExpandEvent<T> {
    expanded: boolean;
    row: T;
}
