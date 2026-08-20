import { TemplateRef } from '@angular/core';

export type DataTableSortOrder = 'asc' | 'desc';
export type DataTableThemeName = 'default' | 'dark';
export type DataTablePinningSide = 'left' | 'right';

export interface DataTableContextMessage {
  singular: string;
  plural: string;
  message: string;
}

export interface DataTableColumn {
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
  style?: { [key: string]: string | number };
  headerStyle?: { [key: string]: string | number };
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

export type DataTableAggregationName = 'sum' | 'avg' | 'count' | 'min' | 'max' | 'unique';

export interface DataTableColumnFilter {
  id: string | number;
  value: any;
}

export interface DataTableColumnPinningState {
  left?: Array<string | number>;
  right?: Array<string | number>;
}

export interface DataTableRowPinningState {
  top?: any[];
  bottom?: any[];
}

export interface DataTableStateChangeEvent {
  globalFilter: string;
  columnFilters: any;
  columnVisibility: { [key: string]: boolean };
  columnOrder: Array<string | number>;
  groupBy: Array<string | number>;
}

export interface DataTableCellContext {
  $implicit: any;
  row: any;
  rowIndex: number;
  column: DataTableColumn;
  value: any;
}

export interface DataTableExpandableContext {
  $implicit: any;
  row: any;
  rowIndex: number;
}

export interface ConditionalStyle {
  when: (row: any) => boolean;
  style?: { [key: string]: string | number } | ((row: any) => { [key: string]: string | number });
  className?: string | ((row: any) => string);
}

export interface DataTableSortEvent {
  column: DataTableColumn;
  direction: DataTableSortOrder;
  rows: any[];
}

export interface DataTableSelectionState {
  allSelected: boolean;
  selectedCount: number;
  selectedRows: any[];
}

export interface DataTablePageEvent {
  page: number;
  totalRows: number;
}

export interface DataTableRowsPerPageEvent {
  rowsPerPage: number;
  currentPage: number;
}

export interface DataTableExpandEvent {
  expanded: boolean;
  row: any;
}
