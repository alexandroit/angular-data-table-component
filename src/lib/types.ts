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
  page?: number;
  rowsPerPage?: number;
  sortColumnId?: string | number | null;
  sortDirection?: DataTableSortOrder;
}

/** Pager texts and switches. Option names follow react-data-table-component. */
export interface DataTablePaginationOptions {
  /** Hides the rows-per-page selector, like `paginationHideRowsPerPage`. */
  noRowsPerPage?: boolean;
  /** Default 'Rows:'. */
  rowsPerPageText?: string;
  /** Default 'of', in both "Showing 1-10 of 23" and "Page 1 of 3". */
  rangeSeparatorText?: string;
  /** Adds a last "All" option whose value is the total row count. Default false. */
  selectAllRowsItem?: boolean;
  /** Default 'All'. */
  selectAllRowsItemText?: string;
  /** Default 'Showing'. */
  showingText?: string;
  /** Default 'Page'. */
  pageText?: string;
  /** Default 'First'. */
  firstPageText?: string;
  /** Default 'Prev'. */
  previousPageText?: string;
  /** Default 'Next'. */
  nextPageText?: string;
  /** Default 'Last'. */
  lastPageText?: string;
}

/**
 * Texts and accessible names. Every default is the English text of earlier releases.
 * Placeholders are replaced literally: {column}, {row}, {count}, {label}, {value} and {table}.
 */
export interface DataTableLocalization {
  pagination?: {
    /**
     * Names the pager's navigation landmark; {table} is the table's accessible name. Default
     * '{table} pagination', used when the table has an `ariaLabel` or a `title`. Without either,
     * and without this label, the pager is not a landmark. An empty string removes the landmark.
     */
    navigationAriaLabel?: string;
    /** Default none: the button text stays the accessible name. */
    firstPageAriaLabel?: string;
    /** Default none. */
    previousPageAriaLabel?: string;
    /** Default none. */
    nextPageAriaLabel?: string;
    /** Default none. */
    lastPageAriaLabel?: string;
    /** Default none: the label text names the select. */
    rowsPerPageAriaLabel?: string;
  };
  expandable?: {
    /** Default 'Expand details for row {row}'. */
    expandRowAriaLabel?: string;
    /** Default 'Collapse details for row {row}'. */
    collapseRowAriaLabel?: string;
  };
  /** Default 'Loading...'. */
  loadingText?: string;
  /** Used when `ariaLabel` and `title` are empty. Default 'Data table'. */
  tableAriaLabel?: string;
  sort?: {
    /** Default 'Asc'. */
    ascendingText?: string;
    /** Default 'Desc'. */
    descendingText?: string;
    /** Default 'Sort'. */
    unsortedText?: string;
    /** Default 'Sort {column} ascending'. */
    sortAscendingAriaLabel?: string;
    /** Default 'Sort {column} descending'. */
    sortDescendingAriaLabel?: string;
    /** Non-sortable headers. Default '{column} column'. */
    columnAriaLabel?: string;
  };
  selection?: {
    /** Default 'Select all rows'. */
    selectAllRowsAriaLabel?: string;
    /** Default 'Select all visible rows'. */
    selectAllVisibleRowsAriaLabel?: string;
    /** Default 'Select row {row}'. */
    selectRowAriaLabel?: string;
    /** Default 'Clear selection for row {row}'. */
    deselectRowAriaLabel?: string;
    /** Single selection. Default 'Choose row {row}'. */
    chooseRowAriaLabel?: string;
  };
  grouping?: {
    /** Default '{count} rows'. */
    rowCountText?: string;
    /** Default 'Expand group {label} {value}'. */
    expandGroupAriaLabel?: string;
    /** Default 'Collapse group {label} {value}'. */
    collapseGroupAriaLabel?: string;
  };
}

/** Selection rules for server pagination. Names follow react-data-table-component. */
export interface DataTablePaginationServerOptions {
  /** Keep the selection when the sort changes. Default false: it is cleared. */
  persistSelectedOnSort?: boolean;
  /** Keep the selection, and the selected rows of other pages, on page changes. Default false: it is cleared. */
  persistSelectedOnPageChange?: boolean;
}

/** Context of `paginationTemplate`. */
export interface DataTablePaginationContext {
  $implicit: DataTablePaginationContext;
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  /** The total row count. */
  rowCount: number;
  startRow: number;
  endRow: number;
  /** Sorted page sizes. With `selectAllRowsItem`, the last entry is the total row count. */
  rowsPerPageOptions: number[];
  changePage: (page: number) => void;
  changeRowsPerPage: (size: string | number) => void;
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
