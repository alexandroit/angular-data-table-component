import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  ConditionalStyle,
  DataTableAggregationName,
  DataTableColumn,
  DataTableColumnFilter,
  DataTableColumnPinningState,
  DataTableContextMessage,
  DataTableExpandEvent,
  DataTableExpandableContext,
  DataTableLocalization,
  DataTablePageEvent,
  DataTablePaginationContext,
  DataTablePaginationOptions,
  DataTablePaginationServerOptions,
  DataTableRowPinningState,
  DataTableRowsPerPageEvent,
  DataTableCellContext,
  DataTableSelectionState,
  DataTableSortEvent,
  DataTableSortOrder,
  DataTableStateChangeEvent,
  DataTableThemeName
} from './types';
import { DATA_TABLE_STYLES } from './angular-data-table.styles';
import { DATA_TABLE_TEMPLATE } from './angular-data-table.template';
import {
  clamp,
  columnStateId,
  copySafeDictionary,
  createSafeDictionary,
  fillPlaceholders,
  hasOwnKey,
  resolveCellValue,
  sortRows,
  styleObjectToString,
  toCellText,
  toPage,
  toPageSize
} from './utils';

// The texts of earlier releases; inputs override them key by key.
const DEFAULT_PAGINATION_OPTIONS: Required<DataTablePaginationOptions> = {
  noRowsPerPage: false,
  rowsPerPageText: 'Rows:',
  rangeSeparatorText: 'of',
  selectAllRowsItem: false,
  selectAllRowsItemText: 'All',
  showingText: 'Showing',
  pageText: 'Page',
  firstPageText: 'First',
  previousPageText: 'Prev',
  nextPageText: 'Next',
  lastPageText: 'Last'
};

const DEFAULT_LOCALIZATION: { [key: string]: any } = {
  pagination: {
    navigationAriaLabel: '{table} pagination'
  },
  expandable: {
    expandRowAriaLabel: 'Expand details for row {row}',
    collapseRowAriaLabel: 'Collapse details for row {row}'
  },
  loadingText: 'Loading...',
  tableAriaLabel: 'Data table',
  sort: {
    ascendingText: 'Asc',
    descendingText: 'Desc',
    unsortedText: 'Sort',
    sortAscendingAriaLabel: 'Sort {column} ascending',
    sortDescendingAriaLabel: 'Sort {column} descending',
    columnAriaLabel: '{column} column'
  },
  selection: {
    selectAllRowsAriaLabel: 'Select all rows',
    selectAllVisibleRowsAriaLabel: 'Select all visible rows',
    selectRowAriaLabel: 'Select row {row}',
    deselectRowAriaLabel: 'Clear selection for row {row}',
    chooseRowAriaLabel: 'Choose row {row}'
  },
  grouping: {
    rowCountText: '{count} rows',
    expandGroupAriaLabel: 'Expand group {label} {value}',
    collapseGroupAriaLabel: 'Collapse group {label} {value}'
  }
};

const DEFAULT_CONTEXT_MESSAGE: DataTableContextMessage = {
  singular: 'item',
  plural: 'items',
  message: 'selected'
};

@Component({
  standalone: false,
  selector: 'stackline-data-table',
  template: DATA_TABLE_TEMPLATE,
  styles: [DATA_TABLE_STYLES],
  // Angular 22 defaults to OnPush; public methods and in-place data edits need the eager check every earlier line had.
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DataTableComponent implements OnChanges, DoCheck, AfterViewChecked {
  // null and undefined, such as `rows$ | async` before its first value, mean an empty list.
  @Input({ transform: (value: DataTableColumn[] | null | undefined) => value ?? [] }) columns: DataTableColumn[] = [];
  @Input({ transform: (value: any[] | null | undefined) => value ?? [] }) data: any[] = [];
  @Input() keyField = 'id';
  @Input() title = '';
  @Input() ariaLabel = '';
  @Input() keyboardRows = true;
  /**
   * Row identity for the body loop. `(index, row) => row.id` keeps the DOM rows when a refresh
   * (for example an HttpClient reload) returns new objects. Null keeps identity tracking.
   */
  @Input() trackBy: ((index: number, row: any) => any) | null = null;

  @Input() pagination = false;
  @Input() paginationServer = false;
  @Input() paginationDefaultPage = 1;
  @Input() paginationPerPage = 10;
  @Input() paginationTotalRows = 0;
  @Input() paginationRowsPerPageOptions: number[] = [10, 15, 20, 25, 30];
  @Input() paginationHideRowsPerPage = false;
  /** Pager texts, `noRowsPerPage` and the "All" option, as in react-data-table-component. */
  @Input() paginationComponentOptions: DataTablePaginationOptions | null = {};
  /** Every change after the first goes back to `paginationDefaultPage` and emits `pageChange`. */
  @Input() paginationResetDefaultPage = false;
  /** Null keeps the selection keys on server page and sort changes; an object applies its rules. */
  @Input() paginationServerOptions: DataTablePaginationServerOptions | null = null;
  /** Replaces the content of `div.adtc-pagination`. */
  @Input() paginationTemplate: TemplateRef<DataTablePaginationContext> | null = null;
  /** Opt-in: pinned rows stay on every page; client pagination pages and counts the other rows. */
  @Input() keepPinnedRows = false;
  /** Opt-in: the pager stays mounted while `progressPending` is true, for server page loads. */
  @Input() persistPagination = false;
  /** Opt-in: with client pagination, a new `globalFilter` or `columnFilters` input goes to page 1. */
  @Input() paginationResetOnFilterChange = false;
  /** Opt-in: emit `pageChange` when the table changes the page on its own (sort, filter, clamping). */
  @Input() paginationEmitOnReset = false;

  @Input() selectableRows = false;
  @Input() selectableRowsSingle = false;
  @Input() selectableRowsHighlight = false;
  @Input() selectableRowsNoSelectAll = false;
  @Input() selectableRowsVisibleOnly = false;
  @Input() clearSelectedRows = false;
  @Input() selectableRowSelected: ((row: any) => boolean) | null = null;
  @Input() selectableRowDisabled: ((row: any) => boolean) | null = null;

  @Input() expandableRows = false;
  @Input() expandableRowsHideExpander = false;
  @Input() expandOnRowClicked = false;
  @Input() expandOnRowDoubleClicked = false;
  @Input() expandableRowDisabled: ((row: any) => boolean) | null = null;
  @Input() expandableRowExpanded: ((row: any) => boolean) | null = null;
  @Input() expandableRowTemplate: any = null;

  @Input() striped = false;
  @Input() highlightOnHover = false;
  @Input() pointerOnHover = false;
  @Input() dense = false;
  @Input() responsive = true;
  @Input() progressPending = false;
  @Input() noHeader = false;
  @Input() noTableHead = false;
  @Input() fixedHeader = false;
  @Input() fixedHeaderScrollHeight = '420px';
  @Input() noDataText = 'There are no records to display';
  @Input({ transform: (value: ConditionalStyle[] | null | undefined) => value ?? [] }) conditionalRowStyles: ConditionalStyle[] = [];
  @Input() defaultSortFieldId: string | number | null = null;
  @Input() defaultSortAsc = true;
  @Input() sortServer = false;
  @Input() manualSorting = false;
  @Input() manualFiltering = false;
  @Input() manualPagination = false;
  @Input() globalFilter = '';
  @Input() columnFilters: DataTableColumnFilter[] | { [key: string]: any } = [];
  @Input({ transform: (value: Array<string | number> | null | undefined) => value ?? [] }) hiddenColumns: Array<string | number> = [];
  @Input() columnVisibility: { [key: string]: boolean } = {};
  @Input() columnOrder: Array<string | number> = [];
  @Input() columnPinning: DataTableColumnPinningState = { left: [], right: [] };
  @Input() columnSizing: { [key: string]: number | string } = {};
  @Input() groupBy: string | number | Array<string | number> = [];
  @Input() grouping: string | number | Array<string | number> = [];
  @Input() aggregationFns: { [key: string]: DataTableAggregationName | ((rows: any[], column: DataTableColumn) => any) } = {};
  @Input() pinnedTopRows: any[] = [];
  @Input() pinnedBottomRows: any[] = [];
  @Input() rowPinning: DataTableRowPinningState | null = null;
  @Input() virtualRows = false;
  @Input() virtualStartIndex = 0;
  @Input() virtualRowCount = 25;
  @Input() theme: DataTableThemeName = 'default';
  @Input({ transform: (value: DataTableContextMessage | null | undefined) => value ?? { ...DEFAULT_CONTEXT_MESSAGE } })
  contextMessage: DataTableContextMessage = { ...DEFAULT_CONTEXT_MESSAGE };
  /** Texts and accessible names; every default is the English text of earlier releases. */
  @Input() localization: DataTableLocalization | null = {};

  @Output() sortChange = new EventEmitter<DataTableSortEvent>();
  @Output() selectedRowsChange = new EventEmitter<DataTableSelectionState>();
  @Output() pageChange = new EventEmitter<DataTablePageEvent>();
  @Output() rowsPerPageChange = new EventEmitter<DataTableRowsPerPageEvent>();
  @Output() rowClicked = new EventEmitter<any>();
  @Output() rowDoubleClicked = new EventEmitter<any>();
  @Output() rowMouseEnter = new EventEmitter<any>();
  @Output() rowMouseLeave = new EventEmitter<any>();
  @Output() rowExpandToggled = new EventEmitter<DataTableExpandEvent>();
  @Output() globalFilterChange = new EventEmitter<string>();
  @Output() columnFiltersChange = new EventEmitter<any>();
  @Output() columnVisibilityChange = new EventEmitter<{ [key: string]: boolean }>();
  @Output() columnOrderChange = new EventEmitter<Array<string | number>>();
  @Output() groupingChange = new EventEmitter<Array<string | number>>();
  @Output() tableStateChange = new EventEmitter<DataTableStateChangeEvent>();

  currentPage = 1;
  rowsPerPage = 10;
  sortDirection: DataTableSortOrder = 'asc';
  activeSortColumn: DataTableColumn | null = null;

  // Bound once to NgForOf: data rows keep identity tracking unless trackBy is set.
  readonly rowTrackBy = (index: number, row: any) => {
    if (this.isGroupRow(row)) {
      return 'group:' + row.groupKey;
    }

    return this.trackBy ? this.trackBy(index, row) : row;
  };

  private selectedKeys = createSafeDictionary<boolean>();
  private expandedKeys = createSafeDictionary<boolean>();
  private collapsedGroupKeys = createSafeDictionary<boolean>();
  private hasSeenRows = false;
  // True from ngDoCheck to ngAfterViewChecked: only the table's own render pass reuses derived values.
  private renderPass = false;
  private derivedDepth = 0;
  private derivedCache = createSafeDictionary<any>();
  private derivedInputs: any[] | null = null;
  // persistPagination: the loading block keeps the height of the rows it replaces.
  private loadingHeight = 0;
  @ViewChild('adtcRows') private rowsBlock?: ElementRef<HTMLElement>;
  private columnCopies = new WeakMap<DataTableColumn, DataTableColumn>();
  private groupRowsByKey = createSafeDictionary<any>();
  // Selected rows by key, in selection order, while server pages keep the selection (paginationServerOptions).
  private selectedRowCache = new Map<string, any>();
  private readonly pagerChangePage = (page: number) => this.changePage(page);
  private readonly pagerChangeRowsPerPage = (size: string | number) => this.changeRowsPerPage(size);

  ngOnChanges(changes: SimpleChanges) {
    var pageBefore = this.currentPage;
    var later = (name: string) => !!changes[name] && !changes[name].firstChange;
    var resetToDefault = later('paginationResetDefaultPage');
    var emitPage = resetToDefault;
    var cleared: boolean;

    this.invalidateDerivedState();

    if (changes['paginationPerPage']) {
      this.rowsPerPage = toPageSize(this.paginationPerPage, toPageSize(this.rowsPerPage, 10));
    }

    if (changes['paginationDefaultPage'] || resetToDefault) {
      this.currentPage = toPage(this.paginationDefaultPage, 1);
      this.hasSeenRows = false;
    }

    if (this.paginationResetOnFilterChange && this.isClientPaginated && (later('globalFilter') || later('columnFilters'))) {
      this.currentPage = 1;
      emitPage = emitPage || this.paginationEmitOnReset;
    }

    if (changes['clearSelectedRows'] && !changes['clearSelectedRows'].firstChange) {
      this.selectedKeys = createSafeDictionary<boolean>();
      this.selectedRowCache.clear();
      this.emitSelectionState();
    }

    if (changes['columns'] || changes['defaultSortFieldId'] || changes['defaultSortAsc']) {
      if (!this.applyDefaultSort() && changes['columns'] && this.activeSortColumn) {
        this.activeSortColumn = this.findColumn(this.getColumnKey(this.activeSortColumn)) || this.activeSortColumn;
      }
    }

    if (changes['data'] || changes['selectableRowSelected']) {
      this.syncProgrammaticSelection();
    }

    if (changes['data'] || changes['expandableRowExpanded']) {
      this.syncProgrammaticExpansion();
    }

    if (this.ensureValidPage() && this.paginationEmitOnReset) {
      emitPage = true;
    }

    this.invalidateDerivedState();

    if (emitPage && this.currentPage !== pageBefore) {
      cleared = resetToDefault && this.clearServerSelection('persistSelectedOnPageChange');
      this.emitPageChange();
      if (cleared) {
        this.emitSelectionState();
      }
    }
  }

  ngDoCheck() {
    this.invalidateDerivedState();
    this.renderPass = true;

    // Measured while the rows are still rendered, before the loading block replaces them.
    if (this.persistPagination && this.progressPending && this.rowsBlock) {
      this.loadingHeight = this.rowsBlock.nativeElement.offsetHeight || 0;
    }

    // Nothing paged shows while loading, and ngOnChanges clamps when loading ends.
    if (!this.progressPending && this.ensureValidPage() && this.paginationEmitOnReset) {
      this.emitPageChange();
      // The handler may have edited rows in place.
      this.invalidateDerivedState();
    }
  }

  ngAfterViewChecked() {
    // Reads between render passes (parent bindings, event handlers, programmatic code) are fresh again.
    this.renderPass = false;
  }

  get flatColumns() {
    return this.derivedValue('flatColumns', () => this.flattenColumns(this.columns));
  }

  get visibleColumns() {
    return this.derivedValue('visibleColumns', () => {
      var columns = this.flatColumns.filter((column: DataTableColumn) => {
        return !column.omit && this.isColumnVisible(column);
      });
      var order = this.columnOrder || [];
      var ordered: DataTableColumn[] = [];
      var used = createSafeDictionary<boolean>();
      var i: number;
      var j: number;
      var key: string;

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
    });
  }

  get hasColumnGroups() {
    return this.derivedValue('hasColumnGroups', () => {
      var columns = this.visibleColumns;
      var i: number;

      for (i = 0; i < columns.length; i += 1) {
        if (columns[i].group) {
          return true;
        }
      }

      return false;
    });
  }

  get columnGroups() {
    return this.derivedValue('columnGroups', () => {
      var groups: any[] = [];
      var columns = this.visibleColumns;
      var i: number;
      var label: string;
      var current: any = null;

      for (i = 0; i < columns.length; i += 1) {
        label = String(columns[i].group || '');
        if (!current || current.name !== label) {
          current = {
            name: label,
            colspan: 1
          };
          groups.push(current);
        } else {
          current.colspan += 1;
        }
      }

      return groups;
    });
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

  get scrollStyle(): { [key: string]: string | number } {
    if (!this.fixedHeader) {
      return {};
    }

    return { 'max-height': this.fixedHeaderScrollHeight };
  }

  get scrollStyleText() {
    return styleObjectToString(this.scrollStyle) || null;
  }

  getHeaderStyleText(column: DataTableColumn) {
    return styleObjectToString(this.getHeaderStyle(column)) || null;
  }

  getRowStyleText(row: any) {
    return styleObjectToString(this.getRowStyle(row)) || null;
  }

  getCellStyleText(column: DataTableColumn) {
    return styleObjectToString(this.getCellStyle(column)) || null;
  }

  get tableAriaLabel() {
    return this.ariaLabel || this.title || this.localize('', 'tableAriaLabel');
  }

  /** A text from `localization` (group '' for top-level keys), else the default English text. */
  localize(group: '' | 'pagination' | 'expandable' | 'sort' | 'selection' | 'grouping', key: string): string {
    var source: any = this.localization || {};
    var fallback: any = DEFAULT_LOCALIZATION;
    var value: any;

    if (group) {
      source = source[group] || {};
      fallback = fallback[group];
    }

    value = source[key];
    return value === undefined || value === null ? fallback[key] : value;
  }

  /** A value from `paginationComponentOptions`, else its default. */
  paginationOption<K extends keyof DataTablePaginationOptions>(key: K): Required<DataTablePaginationOptions>[K] {
    var value = this.paginationComponentOptions ? this.paginationComponentOptions[key] : undefined;
    return value === undefined || value === null ? DEFAULT_PAGINATION_OPTIONS[key] : value as Required<DataTablePaginationOptions>[K];
  }

  get pinnedTopDisplayRows() {
    return this.derivedValue('pinnedTopDisplayRows', () => this.getPinnedRows('top'));
  }

  get pinnedBottomDisplayRows() {
    return this.derivedValue('pinnedBottomDisplayRows', () => this.getPinnedRows('bottom'));
  }

  get filteredPinnedTopRows() {
    return this.derivedValue('filteredPinnedTopRows', () => this.filterPinnedRows(this.pinnedTopDisplayRows));
  }

  get filteredPinnedBottomRows() {
    return this.derivedValue('filteredPinnedBottomRows', () => this.filterPinnedRows(this.pinnedBottomDisplayRows));
  }

  get unpinnedRows() {
    return this.derivedValue('unpinnedRows', () => {
      var pinned = createSafeDictionary<boolean>();
      var top = this.pinnedTopDisplayRows;
      var bottom = this.pinnedBottomDisplayRows;
      var rows: any[] = [];
      var i: number;

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
    });
  }

  get filteredRows() {
    return this.derivedValue('filteredRows', () => {
      if (this.manualFiltering) {
        return this.unpinnedRows.slice(0);
      }

      return this.applyFilters(this.unpinnedRows);
    });
  }

  get sortedRows() {
    return this.derivedValue('sortedRows', () => {
      if (this.sortServer || this.manualSorting) {
        return this.filteredRows.slice(0);
      }

      return sortRows(this.filteredRows, this.activeSortColumn, this.sortDirection);
    });
  }

  get groupedRows() {
    return this.derivedValue('groupedRows', () => {
      var groups = this.normalizedGrouping;
      var previous = this.groupRowsByKey;

      this.groupRowsByKey = createSafeDictionary<any>();

      if (!groups.length) {
        return this.sortedRows;
      }

      return this.buildGroupedRows(this.sortedRows, groups, 0, '', previous);
    });
  }

  get bodyRows() {
    return this.derivedValue('bodyRows', () => {
      var rows: any[] = [];
      var top = this.filteredPinnedTopRows;
      var bottom = this.filteredPinnedBottomRows;
      var center = this.groupedRows;
      var i: number;

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
    });
  }

  get displayedRows() {
    return this.derivedValue('displayedRows', () => {
      var start: number;
      var rows = this.bodyRows;

      if (this.isClientPaginated) {
        start = (this.currentPage - 1) * this.rowsPerPage;
        rows = this.keepPinnedRows
          ? this.filteredPinnedTopRows.concat(this.groupedRows.slice(start, start + this.rowsPerPage), this.filteredPinnedBottomRows)
          : rows.slice(start, start + this.rowsPerPage);
      }

      if (this.virtualRows) {
        start = Math.max(0, this.virtualStartIndex || 0);
        rows = rows.slice(start, start + Math.max(1, this.virtualRowCount || 25));
      }

      return rows;
    });
  }

  get hasRows() {
    return this.derivedValue('hasRows', () => this.bodyRows.length > 0);
  }

  get totalRows() {
    return this.derivedValue('totalRows', () => {
      if (this.paginationServer || this.manualPagination) {
        return this.paginationTotalRows || this.data.length;
      }

      // Pinned rows kept on every page are not paged, so they are not counted.
      return this.keepPinnedRows && this.pagination ? this.groupedRows.length : this.bodyRows.length;
    });
  }

  get totalPages() {
    return this.derivedValue('totalPages', () => Math.max(1, Math.ceil(Math.max(this.totalRows, 1) / this.rowsPerPage)));
  }

  get startRow() {
    return this.derivedValue('startRow', () => {
      if (!this.totalRows) {
        return 0;
      }

      return (this.currentPage - 1) * this.rowsPerPage + 1;
    });
  }

  get endRow() {
    return this.derivedValue('endRow', () => {
      if (!this.totalRows) {
        return 0;
      }

      return Math.min(this.currentPage * this.rowsPerPage, this.totalRows);
    });
  }

  // With selectAllRowsItem, the last option is the total row count, shown as the "All" option.
  get rowsPerPageOptions() {
    var source = (this.paginationRowsPerPageOptions || []).concat(this.rowsPerPage);
    var all = this.allRowsOptionValue;
    var options: number[] = [];
    var size: number;
    var i: number;

    for (i = 0; i < source.length; i += 1) {
      size = toPageSize(source[i], 0);
      // Configured sizes always stay; the current size (last) is not added again when "All" stands for it.
      if (size && options.indexOf(size) === -1 && (i < source.length - 1 || size !== all)) {
        options.push(size);
      }
    }

    options.sort((left: number, right: number) => left - right);
    return all ? options.concat(all) : options;
  }

  /** The option text: the "All" text for the last option (`last`) when it is shown, else the size. */
  getRowsPerPageOptionLabel(size: number, last?: boolean): string | number {
    var all = this.allRowsOptionValue;
    return all && (last === undefined ? size === all : last) ? this.paginationOption('selectAllRowsItemText') : size;
  }

  get paginationContext(): DataTablePaginationContext {
    var context = {
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      rowsPerPage: this.rowsPerPage,
      rowCount: Number(this.totalRows),
      startRow: this.startRow,
      endRow: this.endRow,
      rowsPerPageOptions: this.rowsPerPageOptions,
      changePage: this.pagerChangePage,
      changeRowsPerPage: this.pagerChangeRowsPerPage
    } as DataTablePaginationContext;

    context.$implicit = context;
    return context;
  }

  // The 1-based position of a displayed row among all rows, header rows and expanded detail rows included.
  // An expanded row's detail row is the next position.
  getRowAriaIndex(rowIndex: number) {
    var index = rowIndex + (this.virtualRows ? Math.max(0, this.virtualStartIndex || 0) : 0);
    var start = this.pagination ? (this.currentPage - 1) * this.rowsPerPage : 0;
    var details = this.detailRowsBefore;
    var top: number;
    var pageRows: number;

    if (this.keepsPinnedRows) {
      top = this.filteredPinnedTopRows.length;
      pageRows = Math.max(0, Math.min(this.rowsPerPage, this.groupedRows.length - start));
      if (index >= top) {
        index += index < top + pageRows ? start : this.groupedRows.length - pageRows;
      }
    } else {
      index += start;
    }

    // Server pages hold only their own rows: their detail rows count from the page start.
    return this.headerRowCount + index + 1 + (details ? details[this.isClientPaginated ? index : index - start] || 0 : 0);
  }

  get ariaRowCount() {
    var details = this.detailRowsBefore;

    return this.headerRowCount + (this.keepsPinnedRows ? this.bodyRows.length : Number(this.totalRows)) +
      (details ? details[details.length - 1] : 0);
  }

  get selectedRows() {
    return this.derivedValue('selectedRows', () => {
      var rows: any[] = [];
      var persist = this.persistsSelectedRows;
      var key: string;
      var i: number;

      for (i = 0; i < this.data.length; i += 1) {
        key = this.getRowKey(this.data[i]);
        if (this.selectedKeys[key]) {
          if (persist) {
            this.selectedRowCache.set(key, this.data[i]);
          } else {
            rows.push(this.data[i]);
          }
        }
      }

      if (persist) {
        // Rows selected on other server pages stay, in selection order.
        this.selectedRowCache.forEach((row: any, cachedKey: string) => {
          if (this.selectedKeys[cachedKey]) {
            rows.push(row);
          } else {
            this.selectedRowCache.delete(cachedKey);
          }
        });
      }

      return rows;
    });
  }

  get selectedCount() {
    return this.derivedValue('selectedCount', () => this.selectedRows.length);
  }

  get selectionScopeRows() {
    return this.derivedValue('selectionScopeRows', () => {
      return this.selectableRowsVisibleOnly
        ? this.onlyLeafRows(this.displayedRows)
        : this.onlyLeafRows(this.bodyRows);
    });
  }

  get allRowsSelected() {
    return this.derivedValue('allRowsSelected', () => {
      var selectableRows = this.getSelectableRows();
      var i: number;

      if (!selectableRows.length) {
        return false;
      }

      for (i = 0; i < selectableRows.length; i += 1) {
        if (!this.selectedKeys[this.getRowKey(selectableRows[i])]) {
          return false;
        }
      }

      return true;
    });
  }

  get someRowsSelected() {
    return this.derivedValue('someRowsSelected', () => {
      var selectableRows = this.getSelectableRows();
      var selected = 0;
      var i: number;

      if (!selectableRows.length || this.allRowsSelected) {
        return false;
      }

      for (i = 0; i < selectableRows.length; i += 1) {
        if (this.selectedKeys[this.getRowKey(selectableRows[i])]) {
          selected += 1;
        }
      }

      return selected > 0;
    });
  }

  /** The English label of earlier releases; the rendered label is `getSelectAllAriaLabel()`, which applies `localization`. */
  get selectAllAriaLabel(): 'Select all visible rows' | 'Select all rows' {
    return this.selectableRowsVisibleOnly ? 'Select all visible rows' : 'Select all rows';
  }

  getSelectAllAriaLabel(): string {
    return this.localize('selection', this.selectableRowsVisibleOnly ? 'selectAllVisibleRowsAriaLabel' : 'selectAllRowsAriaLabel');
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

  // persistPagination renders the pager after the table container, where it survives progressPending.
  get showPersistentPagination() {
    return this.persistPagination && this.pagination && this.totalRows > 0 && (this.progressPending || this.hasRows);
  }

  // persistPagination: the loading block keeps the height of the rows it replaces, so the pager stays in place.
  get loadingStyleText() {
    return this.persistPagination && this.loadingHeight ? 'min-height: ' + this.loadingHeight + 'px; box-sizing: border-box' : null;
  }

  /**
   * Names the pager's navigation landmark: `localization.pagination.navigationAriaLabel`, default
   * '{table} pagination'. Null, and no landmark, for a table without `ariaLabel` or `title` and no
   * explicit label, because several unnamed landmarks on one page would share one name.
   */
  get paginationAriaLabel(): string | null {
    var texts: any = this.localization && this.localization.pagination;
    var explicit = !!texts && texts.navigationAriaLabel !== undefined && texts.navigationAriaLabel !== null;

    if (!explicit && !this.ariaLabel && !this.title) {
      return null;
    }

    return fillPlaceholders(this.localize('pagination', 'navigationAriaLabel'), { table: this.tableAriaLabel }) || null;
  }

  get expandedColspan() {
    return this.visibleColumns.length +
      (this.selectableRows ? 1 : 0) +
      (this.expandableRows && !this.expandableRowsHideExpander ? 1 : 0);
  }

  getCellText(row: any, column: DataTableColumn, rowIndex: number) {
    return toCellText(resolveCellValue(row, column, rowIndex));
  }

  getAriaSort(column: DataTableColumn) {
    if (!column.sortable) {
      return null;
    }

    if (this.activeSortColumn !== column) {
      return 'none';
    }

    return this.sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  getSortButtonAriaLabel(column: DataTableColumn) {
    var name = String(column.name || column.header || this.getColumnKey(column));
    var key = !column.sortable
      ? 'columnAriaLabel'
      : this.activeSortColumn === column && this.sortDirection === 'asc' ? 'sortDescendingAriaLabel' : 'sortAscendingAriaLabel';

    return fillPlaceholders(this.localize('sort', key), { column: name });
  }

  getSortIndicatorText(column: DataTableColumn) {
    if (this.activeSortColumn !== column) {
      return this.localize('sort', 'unsortedText');
    }

    return this.localize('sort', this.sortDirection === 'asc' ? 'ascendingText' : 'descendingText');
  }

  getRowAriaSelected(row: any) {
    return this.selectableRows ? String(this.isRowSelected(row)) : null;
  }

  getRowTabIndex(row: any) {
    return this.keyboardRows && this.isKeyboardInteractiveRow(row) ? 0 : null;
  }

  getRowSelectionAriaLabel(row: any, rowIndex: number) {
    var key = this.selectableRowsSingle ? 'chooseRowAriaLabel' : (this.isRowSelected(row) ? 'deselectRowAriaLabel' : 'selectRowAriaLabel');
    return fillPlaceholders(this.localize('selection', key), { row: this.getRowAccessibleLabel(row, rowIndex) });
  }

  getRowExpandAriaLabel(row: any, rowIndex: number) {
    var key = this.isRowExpanded(row) ? 'collapseRowAriaLabel' : 'expandRowAriaLabel';
    return fillPlaceholders(this.localize('expandable', key), { row: this.getRowAccessibleLabel(row, rowIndex) });
  }

  getExpandedRowId(row: any) {
    return 'adtc-expanded-' + this.sanitizeId(this.getRowKey(row));
  }

  getGroupRowId(row: any) {
    return 'adtc-group-' + this.sanitizeId(row && row.groupKey ? row.groupKey : 'group');
  }

  getGroupToggleAriaLabel(row: any) {
    var key = this.isGroupRowExpanded(row) ? 'collapseGroupAriaLabel' : 'expandGroupAriaLabel';
    return fillPlaceholders(this.localize('grouping', key), { label: row.groupLabel, value: row.groupValue });
  }

  getGroupRowCountText(row: any) {
    return fillPlaceholders(this.localize('grouping', 'rowCountText'), { count: row.leafRows.length });
  }

  getCellContext(row: any, column: DataTableColumn, rowIndex: number): DataTableCellContext {
    return {
      $implicit: row,
      row: row,
      rowIndex: rowIndex,
      column: column,
      value: resolveCellValue(row, column, rowIndex)
    };
  }

  getExpandableContext(row: any, rowIndex: number): DataTableExpandableContext {
    return {
      $implicit: row,
      row: row,
      rowIndex: rowIndex
    };
  }

  toggleSort(column: DataTableColumn) {
    var previousPage = this.currentPage;
    var cleared: boolean;

    this.invalidateDerivedState();

    if (!column.sortable) {
      return;
    }

    if (this.activeSortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.activeSortColumn = column;
      this.sortDirection = 'asc';
    }

    this.currentPage = 1;
    cleared = this.clearServerSelection('persistSelectedOnSort');
    this.sortChange.emit({
      column: column,
      direction: this.sortDirection,
      rows: this.sortedRows
    });
    this.emitPageReset(previousPage);
    if (cleared) {
      this.emitSelectionState();
    }
    this.emitTableState();
    this.invalidateDerivedState();
  }

  toggleAllRows(checked: boolean) {
    var rows: any[];
    var i: number;

    this.invalidateDerivedState();
    rows = this.getSelectableRows();

    if (checked) {
      if (this.selectableRowsSingle && rows.length) {
        this.selectedKeys = createSafeDictionary<boolean>();
        this.selectedKeys[this.getRowKey(rows[0])] = true;
      } else {
        for (i = 0; i < rows.length; i += 1) {
          this.selectedKeys[this.getRowKey(rows[i])] = true;
        }
      }
    } else {
      for (i = 0; i < rows.length; i += 1) {
        delete this.selectedKeys[this.getRowKey(rows[i])];
      }
    }

    this.emitSelectionState();
    this.invalidateDerivedState();
  }

  toggleRowSelection(row: any) {
    var key: string;

    this.invalidateDerivedState();

    if (this.isSelectableDisabled(row)) {
      return;
    }

    key = this.getRowKey(row);

    if (this.selectableRowsSingle) {
      this.selectedKeys = createSafeDictionary<boolean>();
      this.selectedKeys[key] = true;
    } else if (this.selectedKeys[key]) {
      delete this.selectedKeys[key];
    } else {
      this.selectedKeys[key] = true;
    }

    this.emitSelectionState();
    this.invalidateDerivedState();
  }

  isRowSelected(row: any) {
    return !!this.selectedKeys[this.getRowKey(row)];
  }

  isSelectableDisabled(row: any) {
    return !!(this.selectableRowDisabled && this.selectableRowDisabled(row));
  }

  handleRowKeydown(event: KeyboardEvent, row: any) {
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

  handleSortButtonKeydown(event: KeyboardEvent, column: DataTableColumn) {
    if (!this.isActivationKey(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.toggleSort(column);
  }

  handleExpanderKeydown(event: KeyboardEvent, row: any) {
    if (!this.isActivationKey(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.toggleRowExpansion(row);
  }

  handleGroupToggleKeydown(event: KeyboardEvent, row: any) {
    if (!this.isActivationKey(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.toggleGroupRow(row);
  }

  handleRowClick(row: any) {
    if (this.expandableRows && this.expandOnRowClicked) {
      this.toggleRowExpansion(row);
    }

    this.rowClicked.emit(row);
  }

  handleRowDoubleClick(row: any) {
    if (this.expandableRows && this.expandOnRowDoubleClicked) {
      this.toggleRowExpansion(row);
    }

    this.rowDoubleClicked.emit(row);
  }

  handleMouseEnter(row: any) {
    this.rowMouseEnter.emit(row);
  }

  handleMouseLeave(row: any) {
    this.rowMouseLeave.emit(row);
  }

  changePage(page: number) {
    var previousPage = this.currentPage;
    var cleared: boolean;

    this.invalidateDerivedState();
    this.currentPage = clamp(toPage(page, 1), 1, this.totalPages);
    cleared = this.currentPage !== previousPage && this.clearServerSelection('persistSelectedOnPageChange');
    this.emitPageChange();
    if (cleared) {
      this.emitSelectionState();
    }
    this.emitTableState();
    this.invalidateDerivedState();
  }

  // A pager button that the click disabled (first or last page) hands focus to the nearest enabled one on the other side.
  keepPagerFocus(event: Event) {
    var button: any = event && event.currentTarget;
    var doc = button && button.ownerDocument;

    // Only a rendered button has a document; there is nothing to do elsewhere.
    if (!doc) {
      return;
    }

    // After change detection has updated the disabled states.
    setTimeout(() => {
      var buttons: any[] = button.parentNode ? Array.prototype.slice.call(button.parentNode.querySelectorAll('button')) : [];
      var index = buttons.indexOf(button);
      var step = index < buttons.length / 2 ? 1 : -1;
      var i: number;

      if (!button.disabled || index === -1 || (doc.activeElement && doc.activeElement !== button && doc.activeElement !== doc.body)) {
        return;
      }

      for (i = index + step; i >= 0 && i < buttons.length; i += step) {
        if (!buttons[i].disabled) {
          buttons[i].focus();
          this.ignoreKeyRepeat(buttons[i]);
          return;
        }
      }
    }, 0);
  }

  // A held Enter keeps repeating on the button that now has focus. Its repeats are ignored until the
  // key is released, or holding Enter would bounce between the first and the last page.
  private ignoreKeyRepeat(button: any) {
    var guard = (event: any) => {
      if (event.type === 'keydown' && event.repeat) {
        event.preventDefault();
        return;
      }

      button.removeEventListener('keydown', guard);
      button.removeEventListener('keyup', guard);
      button.removeEventListener('blur', guard);
    };

    button.addEventListener('keydown', guard);
    button.addEventListener('keyup', guard);
    button.addEventListener('blur', guard);
  }

  changeRowsPerPage(value: string | number) {
    this.invalidateDerivedState();
    this.rowsPerPage = toPageSize(value, toPageSize(this.paginationPerPage, 10));
    this.currentPage = 1;
    this.rowsPerPageChange.emit({
      rowsPerPage: this.rowsPerPage,
      currentPage: this.currentPage
    });
    this.ensureValidPage();
    this.emitTableState();
    this.invalidateDerivedState();
  }

  toggleRowExpansion(row: any) {
    var key: string;

    this.invalidateDerivedState();

    if (this.isExpandableDisabled(row)) {
      return;
    }

    key = this.getRowKey(row);

    if (this.expandedKeys[key]) {
      delete this.expandedKeys[key];
    } else {
      this.expandedKeys[key] = true;
    }

    this.rowExpandToggled.emit({
      expanded: !!this.expandedKeys[key],
      row: row
    });
    this.invalidateDerivedState();
  }

  isRowExpanded(row: any) {
    return !!this.expandedKeys[this.getRowKey(row)];
  }

  isExpandableDisabled(row: any) {
    return !!(this.expandableRowDisabled && this.expandableRowDisabled(row));
  }

  isGroupRow(row: any) {
    return !!(row && row.__adtcGroup);
  }

  isGroupRowExpanded(row: any) {
    return !this.collapsedGroupKeys[row.groupKey];
  }

  toggleGroupRow(row: any) {
    this.invalidateDerivedState();

    if (!this.isGroupRow(row)) {
      return;
    }

    if (this.collapsedGroupKeys[row.groupKey]) {
      delete this.collapsedGroupKeys[row.groupKey];
    } else {
      this.collapsedGroupKeys[row.groupKey] = true;
    }

    this.invalidateDerivedState();
  }

  setGlobalFilter(value: string) {
    var previousPage = this.currentPage;

    this.invalidateDerivedState();
    this.globalFilter = value || '';
    this.currentPage = 1;
    this.globalFilterChange.emit(this.globalFilter);
    this.emitPageReset(previousPage);
    this.emitTableState();
    this.invalidateDerivedState();
  }

  setColumnFilter(columnId: string | number, value: any) {
    var filters = this.getColumnFilterMap();
    var previousPage = this.currentPage;

    this.invalidateDerivedState();
    filters[String(columnId)] = value;
    this.columnFilters = filters;
    this.currentPage = 1;
    this.columnFiltersChange.emit(this.columnFilters);
    this.emitPageReset(previousPage);
    this.emitTableState();
    this.invalidateDerivedState();
  }

  setColumnVisibility(columnId: string | number, visible: boolean) {
    var next = copySafeDictionary(this.columnVisibility);

    this.invalidateDerivedState();
    next[String(columnId)] = visible;
    this.columnVisibility = next;
    this.columnVisibilityChange.emit(this.columnVisibility);
    this.emitTableState();
    this.invalidateDerivedState();
  }

  setColumnOrder(order: Array<string | number>) {
    this.invalidateDerivedState();
    this.columnOrder = order || [];
    this.columnOrderChange.emit(this.columnOrder);
    this.emitTableState();
    this.invalidateDerivedState();
  }

  setGrouping(grouping: Array<string | number>) {
    this.invalidateDerivedState();
    this.grouping = grouping || [];
    this.groupBy = grouping || [];
    this.groupingChange.emit(this.normalizedGrouping);
    this.emitTableState();
    this.invalidateDerivedState();
  }

  getColumnUniqueValues(columnId: string | number) {
    var column = this.findColumn(columnId);
    var values = createSafeDictionary<number>();
    var rows = this.filteredRows;
    var i: number;
    var value: any;
    var key: string;

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

  getHeaderClassName(column: DataTableColumn) {
    return this.joinClasses([
      this.getPinnedClassName(column),
      column.headerClassName || '',
      column.right ? 'adtc-align-right' : '',
      column.center ? 'adtc-align-center' : ''
    ]);
  }

  getHeaderStyle(column: DataTableColumn) {
    return this.mergeColumnSize(column, this.mergePinnedStyle(column, column.headerStyle, true));
  }

  getCellClassName(column: DataTableColumn) {
    return this.joinClasses([
      this.getPinnedClassName(column),
      column.className || '',
      column.right ? 'adtc-align-right' : '',
      column.center ? 'adtc-align-center' : '',
      column.wrap ? 'adtc-wrap' : 'adtc-nowrap'
    ]);
  }

  getCellStyle(column: DataTableColumn) {
    return this.mergeColumnSize(column, this.mergePinnedStyle(column, column.style, false));
  }

  getSortButtonClassName(column: DataTableColumn) {
    return this.joinClasses([
      'adtc-sort-button',
      column.sortable ? 'adtc-sortable' : '',
      column.right ? 'adtc-sort-right' : '',
      column.center ? 'adtc-sort-center' : ''
    ]);
  }

  getSortIndicatorClassName(column: DataTableColumn) {
    return this.joinClasses([
      'adtc-sort-indicator',
      this.activeSortColumn === column ? 'active' : ''
    ]);
  }

  getRowClassName(row: any) {
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
    var i: number;
    var conditional: ConditionalStyle;
    var className: string | ((row: any) => string) | undefined;

    for (i = 0; i < this.conditionalRowStyles.length; i += 1) {
      conditional = this.conditionalRowStyles[i];
      if (conditional.when(row)) {
        className = conditional.className;
        if (typeof className === 'function') {
          classes.push(className(row));
        } else if (className) {
          classes.push(className);
        }
      }
    }

    return this.joinClasses(classes);
  }

  getRowStyle(row: any) {
    var merged = createSafeDictionary<string | number>();
    var i: number;
    var conditional: ConditionalStyle;
    var style: any;
    var key: string;

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

  private getRowKey(row: any) {
    var key = row && row[this.keyField] !== undefined ? row[this.keyField] : this.getDataIndex(row);
    return String(key);
  }

  // Same result as this.data.indexOf(row), without a linear scan per call.
  private getDataIndex(row: any) {
    var index: number | undefined;

    // A single lookup between render passes scans, as before, instead of building the index.
    if (!this.renderPass && !this.derivedDepth) {
      return this.data.indexOf(row);
    }

    index = this.derivedValue('dataIndex', () => {
      var indexes = new Map<any, number>();
      var i: number;

      // Backwards, so the first occurrence wins.
      for (i = this.data.length - 1; i >= 0; i -= 1) {
        indexes.set(this.data[i], i);
      }

      return indexes;
    }).get(row);

    // indexOf never finds NaN; Map does.
    return index === undefined || row !== row ? -1 : index;
  }

  private getColumnKey(column: DataTableColumn) {
    return String(column.id !== undefined && column.id !== null
      ? column.id
      : column.accessorKey || column.selector || column.name);
  }

  private flattenColumns(columns: DataTableColumn[]) {
    var output: DataTableColumn[] = [];
    var copied = new Set<DataTableColumn>();
    var i: number;
    var child: DataTableColumn;
    var j: number;

    for (i = 0; i < columns.length; i += 1) {
      if (columns[i].columns && columns[i].columns!.length) {
        for (j = 0; j < columns[i].columns!.length; j += 1) {
          child = columns[i].columns![j];
          output.push(child.group ? child : this.withInheritedGroup(child, columns[i].header || columns[i].name, copied));
        }
      } else {
        output.push(columns[i]);
      }
    }

    return output;
  }

  // One stable copy per child keeps activeSortColumn === column true; its fields are refreshed on every flatten.
  private withInheritedGroup(column: DataTableColumn, group: string | number | undefined, copied: Set<DataTableColumn>) {
    var copy: any = this.columnCopies.get(column);
    var key: string;

    // A child listed twice in one pass gets its own copy, as before.
    if (!copy || copied.has(column)) {
      copy = createSafeDictionary<any>();
      if (!copied.has(column)) {
        this.columnCopies.set(column, copy);
      }
    }

    copied.add(column);

    for (key in copy) {
      if (!hasOwnKey(column, key)) {
        delete copy[key];
      }
    }

    for (key in column) {
      if (hasOwnKey(column, key)) {
        copy[key] = (column as any)[key];
      }
    }

    copy.group = group;
    return copy as DataTableColumn;
  }

  private isColumnVisible(column: DataTableColumn) {
    var key = this.getColumnKey(column);
    var i: number;

    if (column.enableHiding === false) {
      return true;
    }

    if (
      this.columnVisibility &&
      hasOwnKey(this.columnVisibility, key) &&
      this.columnVisibility[key] === false
    ) {
      return false;
    }

    for (i = 0; i < this.hiddenColumns.length; i += 1) {
      if (String(this.hiddenColumns[i]) === key) {
        return false;
      }
    }

    return true;
  }

  private applyFilters(rows: any[]) {
    var filtered = rows.slice(0);
    var global = String(this.globalFilter || '').toLowerCase();
    var columnFilters = this.getColumnFilterMap();
    var key: string;
    var column: DataTableColumn | null;
    var columns: DataTableColumn[];

    if (global) {
      columns = this.visibleColumns;
      filtered = filtered.filter((row: any) => this.matchesGlobalFilter(row, global, columns));
    }

    for (key in columnFilters) {
      if (hasOwnKey(columnFilters, key) && columnFilters[key] !== null && columnFilters[key] !== undefined && columnFilters[key] !== '') {
        column = this.findColumn(key);
        if (column) {
          filtered = filtered.filter((row: any) => this.matchesColumnFilter(row, column as DataTableColumn, columnFilters[key]));
        }
      }
    }

    return filtered;
  }

  private matchesGlobalFilter(row: any, global: string, columns: DataTableColumn[]) {
    var i: number;
    var value: any;

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

  private matchesColumnFilter(row: any, column: DataTableColumn, filterValue: any) {
    var value: any;
    var text: string;

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

  private getColumnFilterMap() {
    var map = createSafeDictionary<any>();
    var filters: any = this.columnFilters || {};
    var i: number;

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

  private findColumn(columnId: string | number) {
    var columns = this.flatColumns;
    var key = String(columnId);
    var i: number;

    for (i = 0; i < columns.length; i += 1) {
      if (this.getColumnKey(columns[i]) === key) {
        return columns[i];
      }
    }

    return null;
  }

  private get normalizedGrouping() {
    var source: any = this.grouping && (Array.isArray(this.grouping) ? this.grouping.length : this.grouping)
      ? this.grouping
      : this.groupBy;

    if (Array.isArray(source)) {
      return source;
    }

    return source === null || source === undefined || source === '' ? [] : [source];
  }

  private buildGroupedRows(rows: any[], groups: Array<string | number>, depth: number, parentKey: string, previous: { [key: string]: any }) {
    var column = this.findColumn(groups[depth]);
    var buckets = createSafeDictionary<any[]>();
    var order: string[] = [];
    var output: any[] = [];
    var i: number;
    var value: any;
    var key: string;
    var groupRow: any;
    var children: any[];

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
      // Reuse the object by key so NgForOf keeps the group row's DOM.
      groupRow = previous[key] || {
        __adtcGroup: true,
        groupKey: key
      };
      groupRow.groupColumn = groups[depth];
      groupRow.groupLabel = column.name || groups[depth];
      groupRow.groupValue = order[i];
      groupRow.depth = depth;
      groupRow.leafRows = buckets[order[i]];
      this.groupRowsByKey[key] = groupRow;
      output.push(groupRow);
      if (!this.collapsedGroupKeys[key]) {
        children = depth + 1 < groups.length
          ? this.buildGroupedRows(buckets[order[i]], groups, depth + 1, key + '|', previous)
          : buckets[order[i]];
        output = output.concat(children);
      }
    }

    return output;
  }

  private onlyLeafRows(rows: any[]) {
    var output: any[] = [];
    var i: number;

    for (i = 0; i < rows.length; i += 1) {
      if (!this.isGroupRow(rows[i])) {
        output.push(rows[i]);
      }
    }

    return output;
  }

  private getPinnedRows(position: 'top' | 'bottom') {
    if (this.rowPinning && this.rowPinning[position]) {
      return this.rowPinning[position] || [];
    }

    return position === 'top' ? this.pinnedTopRows || [] : this.pinnedBottomRows || [];
  }

  private filterPinnedRows(rows: any[]) {
    if (this.manualFiltering) {
      return rows.slice(0);
    }

    return this.applyFilters(rows);
  }

  private isPinnedTopRow(row: any) {
    return this.rowExistsIn(row, this.pinnedTopDisplayRows);
  }

  private isPinnedBottomRow(row: any) {
    return this.rowExistsIn(row, this.pinnedBottomDisplayRows);
  }

  private rowExistsIn(row: any, rows: any[]) {
    var key = this.getRowKey(row);
    var i: number;

    for (i = 0; i < rows.length; i += 1) {
      if (this.getRowKey(rows[i]) === key) {
        return true;
      }
    }

    return false;
  }

  private getPinnedClassName(column: DataTableColumn) {
    var side = this.getColumnPinSide(column);
    return side === 'left' ? 'adtc-pinned-left' : side === 'right' ? 'adtc-pinned-right' : '';
  }

  private getColumnPinSide(column: DataTableColumn) {
    var key = this.getColumnKey(column);
    var left = (this.columnPinning && this.columnPinning.left) || [];
    var right = (this.columnPinning && this.columnPinning.right) || [];
    var i: number;

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

  private mergePinnedStyle(column: DataTableColumn, style: { [key: string]: string | number } | undefined, header: boolean) {
    var merged = createSafeDictionary<string | number>();
    var key: string;
    var side = this.getColumnPinSide(column);
    var offset: number;

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

  private getPinnedOffset(column: DataTableColumn, side: string) {
    var columns = this.visibleColumns;
    var offset = 0;
    var i: number;

    if (side === 'left') {
      for (i = 0; i < columns.length; i += 1) {
        if (this.getColumnKey(columns[i]) === this.getColumnKey(column)) {
          return offset;
        }
        if (this.getColumnPinSide(columns[i]) === 'left') {
          offset += this.getColumnPixelWidth(columns[i]);
        }
      }
    } else {
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

  private getColumnPixelWidth(column: DataTableColumn) {
    var key = this.getColumnKey(column);
    var size = this.columnSizing && hasOwnKey(this.columnSizing, key)
      ? this.columnSizing[key]
      : column.size || column.width;
    var parsed: number;

    if (typeof size === 'number') {
      return size;
    }

    if (typeof size === 'string' && size.indexOf('px') !== -1) {
      parsed = parseInt(size, 10);
      return isNaN(parsed) ? 160 : parsed;
    }

    return 160;
  }

  private getSelectableRows() {
    var rows: any[] = [];
    var source = this.selectionScopeRows;
    var i: number;

    for (i = 0; i < source.length; i += 1) {
      if (!this.isSelectableDisabled(source[i])) {
        rows.push(source[i]);
      }
    }

    return rows;
  }

  private isKeyboardInteractiveRow(row: any) {
    if (this.selectableRows && !this.isSelectableDisabled(row)) {
      return true;
    }

    if (this.expandableRows && !this.isExpandableDisabled(row)) {
      return true;
    }

    return !!this.pointerOnHover;
  }

  private isActivationKey(event: KeyboardEvent) {
    var key = event.key || '';
    return key === 'Enter' || key === ' ' || key === 'Spacebar' || event.keyCode === 13 || event.keyCode === 32;
  }

  private isInteractiveEventTarget(target: any) {
    var node = target;
    var tag: string;
    var role: string | null;

    while (node) {
      tag = node.tagName ? String(node.tagName).toLowerCase() : '';
      role = node.getAttribute ? node.getAttribute('role') : null;

      if (
        tag === 'button' ||
        tag === 'input' ||
        tag === 'select' ||
        tag === 'textarea' ||
        tag === 'a' ||
        role === 'button' ||
        role === 'checkbox' ||
        role === 'radio'
      ) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }

  private getRowAccessibleLabel(row: any, rowIndex: number) {
    var label = row && (row.ariaLabel || row.label || row.name || row.title);
    var column: DataTableColumn | null;
    var value: string;

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

  private getFirstReadableColumn() {
    var columns = this.visibleColumns;
    var i: number;

    for (i = 0; i < columns.length; i += 1) {
      if (!columns[i].omit) {
        return columns[i];
      }
    }

    return null;
  }

  private sanitizeId(value: string) {
    return String(value || 'row').replace(/[^a-zA-Z0-9_-]/g, '-');
  }

  private emitSelectionState() {
    // Callers may have changed selectedKeys in place.
    this.invalidateDerivedState();
    this.selectedRowsChange.emit({
      allSelected: this.allRowsSelected,
      selectedCount: this.selectedCount,
      selectedRows: this.selectedRows
    });
  }

  private emitTableState() {
    var column = this.activeSortColumn;

    this.tableStateChange.emit({
      globalFilter: this.globalFilter,
      columnFilters: this.columnFilters,
      columnVisibility: this.columnVisibility,
      columnOrder: this.columnOrder,
      groupBy: this.normalizedGrouping,
      page: this.currentPage,
      rowsPerPage: this.rowsPerPage,
      sortColumnId: column ? columnStateId(column) : null,
      sortDirection: this.sortDirection
    });
  }

  private emitPageChange() {
    this.pageChange.emit({
      page: this.currentPage,
      totalRows: this.totalRows
    });
  }

  // paginationEmitOnReset: report a page the table changed on its own.
  private emitPageReset(previousPage: number) {
    if (this.paginationEmitOnReset && this.currentPage !== previousPage) {
      this.emitPageChange();
    }
  }

  private get isClientPaginated() {
    return this.pagination && !this.paginationServer && !this.manualPagination;
  }

  private get keepsPinnedRows() {
    return this.keepPinnedRows && this.isClientPaginated;
  }

  private get headerRowCount() {
    return this.noTableHead ? 0 : (this.hasColumnGroups ? 2 : 1);
  }

  // The value of the "All" rows-per-page option, or 0 when it is not shown.
  private get allRowsOptionValue() {
    // paginationTotalRows may arrive as a string (non-strict templates, header values).
    return this.paginationOption('selectAllRowsItem') ? toPageSize(this.totalRows, 0) : 0;
  }

  // Expanded detail rows before each body row; the last entry is their total. Null when none render.
  private get detailRowsBefore(): number[] | null {
    return this.derivedValue('detailRowsBefore', () => {
      var rows: any[];
      var counts = [0];
      var i: number;

      if (!this.expandableRows || !this.expandableRowTemplate || !Object.keys(this.expandedKeys).length) {
        return null;
      }

      rows = this.bodyRows;
      for (i = 0; i < rows.length; i += 1) {
        counts.push(counts[i] + (!this.isGroupRow(rows[i]) && this.isRowExpanded(rows[i]) ? 1 : 0));
      }

      return counts;
    });
  }

  private get persistsSelectedRows() {
    return !!(this.paginationServer && this.paginationServerOptions && this.paginationServerOptions.persistSelectedOnPageChange === true);
  }

  // Server pagination with paginationServerOptions: page and sort changes clear the selection unless the option keeps it.
  private clearServerSelection(keep: keyof DataTablePaginationServerOptions) {
    var options = this.paginationServerOptions;

    if (!this.paginationServer || !options || options[keep] === true || !Object.keys(this.selectedKeys).length) {
      return false;
    }

    this.selectedKeys = createSafeDictionary<boolean>();
    this.selectedRowCache.clear();
    return true;
  }

  private syncProgrammaticSelection() {
    var next = createSafeDictionary<boolean>();
    var current = createSafeDictionary<boolean>();
    var key: string;
    var i: number;

    if (!this.selectableRowSelected) {
      return;
    }

    if (this.persistsSelectedRows) {
      // Selections from other server pages are kept; the predicate decides for the rows of this page.
      for (i = 0; i < this.data.length; i += 1) {
        current[this.getRowKey(this.data[i])] = true;
      }
      for (key in this.selectedKeys) {
        if (!current[key]) {
          next[key] = true;
        }
      }
    }

    for (i = 0; i < this.data.length; i += 1) {
      if (this.selectableRowSelected(this.data[i])) {
        next[this.getRowKey(this.data[i])] = true;
      }
    }

    this.selectedKeys = next;
    this.emitSelectionState();
  }

  private syncProgrammaticExpansion() {
    var next = createSafeDictionary<boolean>();
    var i: number;

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

  // Returns true when the default sort was applied. Nested child columns are searched too.
  private applyDefaultSort() {
    var columns = this.flatColumns;
    var i: number;
    var column: DataTableColumn;

    if (this.defaultSortFieldId === null || this.defaultSortFieldId === undefined) {
      return false;
    }

    for (i = 0; i < columns.length; i += 1) {
      column = columns[i];
      if (column.id === this.defaultSortFieldId || column.sortField === this.defaultSortFieldId) {
        this.activeSortColumn = column;
        this.sortDirection = this.defaultSortAsc ? 'asc' : 'desc';
        return true;
      }
    }

    return false;
  }

  // Returns true when the page was clamped.
  private ensureValidPage() {
    var previousPage = this.currentPage;

    // The default page waits until rows first exist (server data may arrive later); then clamp as before.
    this.hasSeenRows = this.hasSeenRows || this.totalRows > 0;

    if (this.hasSeenRows) {
      this.currentPage = clamp(this.currentPage, 1, this.totalPages);
    }

    return !Object.is(previousPage, this.currentPage);
  }

  // During the table's render pass (ngDoCheck to ngAfterViewChecked), derived getters are computed at
  // most once per generation. A generation ends when a method mutates state, on ngOnChanges and
  // ngDoCheck, or when any value below changes identity. Between render passes every read starts a
  // new generation, so it sees in-place edits as earlier releases did; it only shares the values it
  // computes on the way.
  private derivedValue<T>(name: string, compute: () => T): T {
    var inputs: any[];
    var previous: any[] | null;
    var i: number;

    if (!this.renderPass && !this.derivedDepth) {
      this.derivedInputs = null;
    }

    inputs = [
      this.data, this.data ? this.data.length : 0, this.columns, this.keyField, this.globalFilter,
      this.columnFilters, this.columnVisibility, this.hiddenColumns, this.columnOrder, this.groupBy,
      this.grouping, this.pinnedTopRows, this.pinnedBottomRows, this.rowPinning,
      this.rowPinning && this.rowPinning.top, this.rowPinning && this.rowPinning.bottom,
      this.manualFiltering, this.manualSorting, this.manualPagination, this.sortServer,
      this.pagination, this.paginationServer, this.paginationTotalRows, this.virtualRows,
      this.virtualStartIndex, this.virtualRowCount, this.selectableRowsVisibleOnly,
      this.selectableRowDisabled, this.currentPage, this.rowsPerPage, this.activeSortColumn,
      this.sortDirection, this.selectedKeys, this.keepPinnedRows, this.paginationServerOptions,
      this.expandableRows, this.expandableRowTemplate, this.expandedKeys
    ];
    previous = this.derivedInputs;

    for (i = 0; previous && i < inputs.length; i += 1) {
      if (!Object.is(inputs[i], previous[i])) {
        previous = null;
      }
    }

    if (!previous) {
      this.derivedCache = createSafeDictionary<any>();
      this.derivedInputs = inputs;
    }

    if (!(name in this.derivedCache)) {
      this.derivedDepth += 1;
      try {
        this.derivedCache[name] = compute();
      } finally {
        this.derivedDepth -= 1;
      }
    }

    return this.derivedCache[name];
  }

  private invalidateDerivedState() {
    this.derivedInputs = null;
  }

  private mergeColumnSize(column: DataTableColumn, style?: { [key: string]: string | number }) {
    var merged = createSafeDictionary<string | number>();
    var key: string;
    var sizedWidth: string | null = null;

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
        : this.columnSizing[this.getColumnKey(column)] as string;
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

  private joinClasses(classes: string[]) {
    var output: string[] = [];
    var i: number;

    for (i = 0; i < classes.length; i += 1) {
      if (classes[i]) {
        output.push(classes[i]);
      }
    }

    return output.join(' ');
  }
}
