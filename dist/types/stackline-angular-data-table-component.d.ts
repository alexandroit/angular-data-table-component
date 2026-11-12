import * as i0 from "@angular/core";
import { AfterViewChecked, DoCheck, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from "@angular/core";
import * as i2 from "@angular/common";
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
  columnVisibility: {
    [key: string]: boolean;
  };
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
  style?: {
    [key: string]: string | number;
  } | ((row: any) => {
    [key: string]: string | number;
  });
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
  /** Report pages the controller changes on its own (sort, filter, clamping) through onPageChange. Default false. */
  paginationEmitOnReset?: boolean;
  /** With client pagination, a new globalFilter or columnFilters value in update() goes to page 1. Default false. */
  paginationResetOnFilterChange?: boolean;
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
  paginationEmitOnReset: boolean;
  paginationResetOnFilterChange: boolean;
  currentPage: number;
  rowsPerPage: number;
  sortDirection: DataTableSortOrder;
  activeSortColumn: DataTableColumn | null;
  private selectedKeys;
  private hasSeenRows;
  private pageOption;
  private optionsApplied;
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
  private emitPageChange;
  private emitPageReset;
  private emitSelection;
  private emitState;
}
export declare function createDataTableController(options: HeadlessDataTableOptions): HeadlessDataTableController;
export declare class DataTableComponent implements OnChanges, DoCheck, AfterViewChecked {
  columns: DataTableColumn[];
  data: any[];
  keyField: string;
  title: string;
  ariaLabel: string;
  keyboardRows: boolean;
  /**
   * Row identity for the body loop. `(index, row) => row.id` keeps the DOM rows when a refresh
   * (for example an HttpClient reload) returns new objects. Null keeps identity tracking.
   */
  trackBy: ((index: number, row: any) => any) | null;
  pagination: boolean;
  paginationServer: boolean;
  paginationDefaultPage: number;
  paginationPerPage: number;
  paginationTotalRows: number;
  paginationRowsPerPageOptions: number[];
  paginationHideRowsPerPage: boolean;
  /** Pager texts, `noRowsPerPage` and the "All" option, as in react-data-table-component. */
  paginationComponentOptions: DataTablePaginationOptions | null;
  /** Every change after the first goes back to `paginationDefaultPage` and emits `pageChange`. */
  paginationResetDefaultPage: boolean;
  /** Null keeps the selection keys on server page and sort changes; an object applies its rules. */
  paginationServerOptions: DataTablePaginationServerOptions | null;
  /** Replaces the content of `div.adtc-pagination`. */
  paginationTemplate: TemplateRef<DataTablePaginationContext> | null;
  /** Opt-in: pinned rows stay on every page; client pagination pages and counts the other rows. */
  keepPinnedRows: boolean;
  /** Opt-in: the pager stays mounted while `progressPending` is true, for server page loads. */
  persistPagination: boolean;
  /** Opt-in: with client pagination, a new `globalFilter` or `columnFilters` input goes to page 1. */
  paginationResetOnFilterChange: boolean;
  /** Opt-in: emit `pageChange` when the table changes the page on its own (sort, filter, clamping). */
  paginationEmitOnReset: boolean;
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
  /** Texts and accessible names; every default is the English text of earlier releases. */
  localization: DataTableLocalization | null;
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
  readonly rowTrackBy: (index: number, row: any) => any;
  private selectedKeys;
  private expandedKeys;
  private collapsedGroupKeys;
  private hasSeenRows;
  private renderPass;
  private derivedDepth;
  private derivedCache;
  private derivedInputs;
  private loadingHeight;
  private rowsBlock?;
  private columnCopies;
  private groupRowsByKey;
  private selectedRowCache;
  private readonly pagerChangePage;
  private readonly pagerChangeRowsPerPage;
  ngOnChanges(changes: SimpleChanges): void;
  ngDoCheck(): void;
  ngAfterViewChecked(): void;
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
  /** A text from `localization` (group '' for top-level keys), else the default English text. */
  localize(group: '' | 'pagination' | 'expandable' | 'sort' | 'selection' | 'grouping', key: string): string;
  /** A value from `paginationComponentOptions`, else its default. */
  paginationOption<K extends keyof DataTablePaginationOptions>(key: K): Required<DataTablePaginationOptions>[K];
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
  get rowsPerPageOptions(): number[];
  /** The option text: the "All" text for the last option (`last`) when it is shown, else the size. */
  getRowsPerPageOptionLabel(size: number, last?: boolean): string | number;
  get paginationContext(): DataTablePaginationContext;
  getRowAriaIndex(rowIndex: number): number;
  get ariaRowCount(): number;
  get selectedRows(): any[];
  get selectedCount(): number;
  get selectionScopeRows(): any[];
  get allRowsSelected(): boolean;
  get someRowsSelected(): boolean;
  /** The English label of earlier releases; the rendered label is `getSelectAllAriaLabel()`, which applies `localization`. */
  get selectAllAriaLabel(): 'Select all visible rows' | 'Select all rows';
  getSelectAllAriaLabel(): string;
  get selectAllAriaChecked(): "true" | "mixed" | "false";
  get showContextBar(): boolean;
  get showPagination(): boolean;
  get showPersistentPagination(): boolean;
  get loadingStyleText(): string | null;
  /**
   * Names the pager's navigation landmark: `localization.pagination.navigationAriaLabel`, default
   * '{table} pagination'. Null, and no landmark, for a table without `ariaLabel` or `title` and no
   * explicit label, because several unnamed landmarks on one page would share one name.
   */
  get paginationAriaLabel(): string | null;
  get expandedColspan(): number;
  getCellText(row: any, column: DataTableColumn, rowIndex: number): string;
  getAriaSort(column: DataTableColumn): "none" | "ascending" | "descending" | null;
  getSortButtonAriaLabel(column: DataTableColumn): string;
  getSortIndicatorText(column: DataTableColumn): string;
  getRowAriaSelected(row: any): string | null;
  getRowTabIndex(row: any): 0 | null;
  getRowSelectionAriaLabel(row: any, rowIndex: number): string;
  getRowExpandAriaLabel(row: any, rowIndex: number): string;
  getExpandedRowId(row: any): string;
  getGroupRowId(row: any): string;
  getGroupToggleAriaLabel(row: any): string;
  getGroupRowCountText(row: any): string;
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
  keepPagerFocus(event: Event): void;
  private ignoreKeyRepeat;
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
  private getDataIndex;
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
  private emitPageChange;
  private emitPageReset;
  private get isClientPaginated();
  private get keepsPinnedRows();
  private get headerRowCount();
  private get allRowsOptionValue();
  private get detailRowsBefore();
  private get persistsSelectedRows();
  private clearServerSelection;
  private syncProgrammaticSelection;
  private syncProgrammaticExpansion;
  private applyDefaultSort;
  private ensureValidPage;
  private derivedValue;
  private invalidateDerivedState;
  private mergeColumnSize;
  private joinClasses;
  static ɵfac: i0.ɵɵFactoryDeclaration<DataTableComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<DataTableComponent, "stackline-data-table", never, {
    "columns": {
      "alias": "columns";
      "required": false;
    };
    "data": {
      "alias": "data";
      "required": false;
    };
    "keyField": {
      "alias": "keyField";
      "required": false;
    };
    "title": {
      "alias": "title";
      "required": false;
    };
    "ariaLabel": {
      "alias": "ariaLabel";
      "required": false;
    };
    "keyboardRows": {
      "alias": "keyboardRows";
      "required": false;
    };
    "trackBy": {
      "alias": "trackBy";
      "required": false;
    };
    "pagination": {
      "alias": "pagination";
      "required": false;
    };
    "paginationServer": {
      "alias": "paginationServer";
      "required": false;
    };
    "paginationDefaultPage": {
      "alias": "paginationDefaultPage";
      "required": false;
    };
    "paginationPerPage": {
      "alias": "paginationPerPage";
      "required": false;
    };
    "paginationTotalRows": {
      "alias": "paginationTotalRows";
      "required": false;
    };
    "paginationRowsPerPageOptions": {
      "alias": "paginationRowsPerPageOptions";
      "required": false;
    };
    "paginationHideRowsPerPage": {
      "alias": "paginationHideRowsPerPage";
      "required": false;
    };
    "paginationComponentOptions": {
      "alias": "paginationComponentOptions";
      "required": false;
    };
    "paginationResetDefaultPage": {
      "alias": "paginationResetDefaultPage";
      "required": false;
    };
    "paginationServerOptions": {
      "alias": "paginationServerOptions";
      "required": false;
    };
    "paginationTemplate": {
      "alias": "paginationTemplate";
      "required": false;
    };
    "keepPinnedRows": {
      "alias": "keepPinnedRows";
      "required": false;
    };
    "persistPagination": {
      "alias": "persistPagination";
      "required": false;
    };
    "paginationResetOnFilterChange": {
      "alias": "paginationResetOnFilterChange";
      "required": false;
    };
    "paginationEmitOnReset": {
      "alias": "paginationEmitOnReset";
      "required": false;
    };
    "selectableRows": {
      "alias": "selectableRows";
      "required": false;
    };
    "selectableRowsSingle": {
      "alias": "selectableRowsSingle";
      "required": false;
    };
    "selectableRowsHighlight": {
      "alias": "selectableRowsHighlight";
      "required": false;
    };
    "selectableRowsNoSelectAll": {
      "alias": "selectableRowsNoSelectAll";
      "required": false;
    };
    "selectableRowsVisibleOnly": {
      "alias": "selectableRowsVisibleOnly";
      "required": false;
    };
    "clearSelectedRows": {
      "alias": "clearSelectedRows";
      "required": false;
    };
    "selectableRowSelected": {
      "alias": "selectableRowSelected";
      "required": false;
    };
    "selectableRowDisabled": {
      "alias": "selectableRowDisabled";
      "required": false;
    };
    "expandableRows": {
      "alias": "expandableRows";
      "required": false;
    };
    "expandableRowsHideExpander": {
      "alias": "expandableRowsHideExpander";
      "required": false;
    };
    "expandOnRowClicked": {
      "alias": "expandOnRowClicked";
      "required": false;
    };
    "expandOnRowDoubleClicked": {
      "alias": "expandOnRowDoubleClicked";
      "required": false;
    };
    "expandableRowDisabled": {
      "alias": "expandableRowDisabled";
      "required": false;
    };
    "expandableRowExpanded": {
      "alias": "expandableRowExpanded";
      "required": false;
    };
    "expandableRowTemplate": {
      "alias": "expandableRowTemplate";
      "required": false;
    };
    "striped": {
      "alias": "striped";
      "required": false;
    };
    "highlightOnHover": {
      "alias": "highlightOnHover";
      "required": false;
    };
    "pointerOnHover": {
      "alias": "pointerOnHover";
      "required": false;
    };
    "dense": {
      "alias": "dense";
      "required": false;
    };
    "responsive": {
      "alias": "responsive";
      "required": false;
    };
    "progressPending": {
      "alias": "progressPending";
      "required": false;
    };
    "noHeader": {
      "alias": "noHeader";
      "required": false;
    };
    "noTableHead": {
      "alias": "noTableHead";
      "required": false;
    };
    "fixedHeader": {
      "alias": "fixedHeader";
      "required": false;
    };
    "fixedHeaderScrollHeight": {
      "alias": "fixedHeaderScrollHeight";
      "required": false;
    };
    "noDataText": {
      "alias": "noDataText";
      "required": false;
    };
    "conditionalRowStyles": {
      "alias": "conditionalRowStyles";
      "required": false;
    };
    "defaultSortFieldId": {
      "alias": "defaultSortFieldId";
      "required": false;
    };
    "defaultSortAsc": {
      "alias": "defaultSortAsc";
      "required": false;
    };
    "sortServer": {
      "alias": "sortServer";
      "required": false;
    };
    "manualSorting": {
      "alias": "manualSorting";
      "required": false;
    };
    "manualFiltering": {
      "alias": "manualFiltering";
      "required": false;
    };
    "manualPagination": {
      "alias": "manualPagination";
      "required": false;
    };
    "globalFilter": {
      "alias": "globalFilter";
      "required": false;
    };
    "columnFilters": {
      "alias": "columnFilters";
      "required": false;
    };
    "hiddenColumns": {
      "alias": "hiddenColumns";
      "required": false;
    };
    "columnVisibility": {
      "alias": "columnVisibility";
      "required": false;
    };
    "columnOrder": {
      "alias": "columnOrder";
      "required": false;
    };
    "columnPinning": {
      "alias": "columnPinning";
      "required": false;
    };
    "columnSizing": {
      "alias": "columnSizing";
      "required": false;
    };
    "groupBy": {
      "alias": "groupBy";
      "required": false;
    };
    "grouping": {
      "alias": "grouping";
      "required": false;
    };
    "aggregationFns": {
      "alias": "aggregationFns";
      "required": false;
    };
    "pinnedTopRows": {
      "alias": "pinnedTopRows";
      "required": false;
    };
    "pinnedBottomRows": {
      "alias": "pinnedBottomRows";
      "required": false;
    };
    "rowPinning": {
      "alias": "rowPinning";
      "required": false;
    };
    "virtualRows": {
      "alias": "virtualRows";
      "required": false;
    };
    "virtualStartIndex": {
      "alias": "virtualStartIndex";
      "required": false;
    };
    "virtualRowCount": {
      "alias": "virtualRowCount";
      "required": false;
    };
    "theme": {
      "alias": "theme";
      "required": false;
    };
    "contextMessage": {
      "alias": "contextMessage";
      "required": false;
    };
    "localization": {
      "alias": "localization";
      "required": false;
    };
  }, {
    "sortChange": "sortChange";
    "selectedRowsChange": "selectedRowsChange";
    "pageChange": "pageChange";
    "rowsPerPageChange": "rowsPerPageChange";
    "rowClicked": "rowClicked";
    "rowDoubleClicked": "rowDoubleClicked";
    "rowMouseEnter": "rowMouseEnter";
    "rowMouseLeave": "rowMouseLeave";
    "rowExpandToggled": "rowExpandToggled";
    "globalFilterChange": "globalFilterChange";
    "columnFiltersChange": "columnFiltersChange";
    "columnVisibilityChange": "columnVisibilityChange";
    "columnOrderChange": "columnOrderChange";
    "groupingChange": "groupingChange";
    "tableStateChange": "tableStateChange";
  }, never, never, false, never>;
  static ngAcceptInputType_columns: DataTableColumn[] | null | undefined;
  static ngAcceptInputType_data: any[] | null | undefined;
  static ngAcceptInputType_conditionalRowStyles: ConditionalStyle[] | null | undefined;
  static ngAcceptInputType_hiddenColumns: Array<string | number> | null | undefined;
  static ngAcceptInputType_contextMessage: DataTableContextMessage | null | undefined;
}
export declare class DataTableModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<DataTableModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<DataTableModule, [typeof DataTableComponent], [typeof i2.CommonModule], [typeof DataTableComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<DataTableModule>;
}