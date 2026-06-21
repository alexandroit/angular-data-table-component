import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
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
  DataTablePageEvent,
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
import { clamp, resolveCellValue, sortRows, toCellText } from './utils';

@Component({
  selector: 'stackline-data-table',
  template: DATA_TABLE_TEMPLATE,
  styles: [DATA_TABLE_STYLES]
})
export class DataTableComponent implements OnChanges {
  @Input() columns: DataTableColumn[] = [];
  @Input() data: any[] = [];
  @Input() keyField = 'id';
  @Input() title = '';
  @Input() ariaLabel = '';
  @Input() keyboardRows = true;

  @Input() pagination = false;
  @Input() paginationServer = false;
  @Input() paginationDefaultPage = 1;
  @Input() paginationPerPage = 10;
  @Input() paginationTotalRows = 0;
  @Input() paginationRowsPerPageOptions: number[] = [10, 15, 20, 25, 30];

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
  @Input() conditionalRowStyles: ConditionalStyle[] = [];
  @Input() defaultSortFieldId: string | number | null = null;
  @Input() defaultSortAsc = true;
  @Input() sortServer = false;
  @Input() manualSorting = false;
  @Input() manualFiltering = false;
  @Input() manualPagination = false;
  @Input() globalFilter = '';
  @Input() columnFilters: DataTableColumnFilter[] | { [key: string]: any } = [];
  @Input() hiddenColumns: Array<string | number> = [];
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
  @Input() contextMessage: DataTableContextMessage = {
    singular: 'item',
    plural: 'items',
    message: 'selected'
  };

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

  private selectedKeys: { [key: string]: boolean } = {};
  private expandedKeys: { [key: string]: boolean } = {};
  private collapsedGroupKeys: { [key: string]: boolean } = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['paginationPerPage']) {
      this.rowsPerPage = this.paginationPerPage;
    }

    if (changes['paginationDefaultPage']) {
      this.currentPage = this.paginationDefaultPage;
    }

    if (changes['clearSelectedRows'] && !changes['clearSelectedRows'].firstChange) {
      this.selectedKeys = {};
      this.emitSelectionState();
    }

    if (changes['columns'] || changes['defaultSortFieldId'] || changes['defaultSortAsc']) {
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

  get flatColumns() {
    return this.flattenColumns(this.columns);
  }

  get visibleColumns() {
    var columns = this.flatColumns.filter((column: DataTableColumn) => {
      return !column.omit && this.isColumnVisible(column);
    });
    var order = this.columnOrder || [];
    var ordered: DataTableColumn[] = [];
    var used: { [key: string]: boolean } = {};
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
  }

  get hasColumnGroups() {
    var columns = this.visibleColumns;
    var i: number;

    for (i = 0; i < columns.length; i += 1) {
      if (columns[i].group) {
        return true;
      }
    }

    return false;
  }

  get columnGroups() {
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

  get scrollStyle() {
    return this.fixedHeader ? { 'max-height': this.fixedHeaderScrollHeight } : {};
  }

  get tableAriaLabel() {
    return this.ariaLabel || this.title || 'Data table';
  }

  get pinnedTopDisplayRows() {
    return this.getPinnedRows('top');
  }

  get pinnedBottomDisplayRows() {
    return this.getPinnedRows('bottom');
  }

  get filteredPinnedTopRows() {
    return this.filterPinnedRows(this.pinnedTopDisplayRows);
  }

  get filteredPinnedBottomRows() {
    return this.filterPinnedRows(this.pinnedBottomDisplayRows);
  }

  get unpinnedRows() {
    var pinned: { [key: string]: boolean } = {};
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
  }

  get filteredRows() {
    if (this.manualFiltering) {
      return this.unpinnedRows.slice(0);
    }

    return this.applyFilters(this.unpinnedRows);
  }

  get sortedRows() {
    if (this.sortServer || this.manualSorting) {
      return this.filteredRows.slice(0);
    }

    return sortRows(this.filteredRows, this.activeSortColumn, this.sortDirection);
  }

  get groupedRows() {
    var groups = this.normalizedGrouping;

    if (!groups.length) {
      return this.sortedRows;
    }

    return this.buildGroupedRows(this.sortedRows, groups, 0, '');
  }

  get bodyRows() {
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
  }

  get displayedRows() {
    var start: number;
    var rows = this.bodyRows;

    if (this.pagination && !this.paginationServer && !this.manualPagination) {
      start = (this.currentPage - 1) * this.rowsPerPage;
      rows = rows.slice(start, start + this.rowsPerPage);
    }

    if (this.virtualRows) {
      start = Math.max(0, this.virtualStartIndex || 0);
      rows = rows.slice(start, start + Math.max(1, this.virtualRowCount || 25));
    }

    return rows;
  }

  get hasRows() {
    return this.bodyRows.length > 0;
  }

  get totalRows() {
    return (this.paginationServer || this.manualPagination)
      ? this.paginationTotalRows || this.data.length
      : this.bodyRows.length;
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
    var rows: any[] = [];
    var i: number;

    for (i = 0; i < this.data.length; i += 1) {
      if (this.selectedKeys[this.getRowKey(this.data[i])]) {
        rows.push(this.data[i]);
      }
    }

    return rows;
  }

  get selectedCount() {
    return this.selectedRows.length;
  }

  get selectionScopeRows() {
    return this.selectableRowsVisibleOnly
      ? this.onlyLeafRows(this.displayedRows)
      : this.onlyLeafRows(this.bodyRows);
  }

  get allRowsSelected() {
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
  }

  get someRowsSelected() {
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
  }

  get selectAllAriaLabel() {
    return this.selectableRowsVisibleOnly ? 'Select all visible rows' : 'Select all rows';
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

    if (!column.sortable) {
      return name + ' column';
    }

    if (this.activeSortColumn !== column) {
      return 'Sort ' + name + ' ascending';
    }

    return this.sortDirection === 'asc'
      ? 'Sort ' + name + ' descending'
      : 'Sort ' + name + ' ascending';
  }

  getRowAriaSelected(row: any) {
    return this.selectableRows ? String(this.isRowSelected(row)) : null;
  }

  getRowTabIndex(row: any) {
    return this.keyboardRows && this.isKeyboardInteractiveRow(row) ? 0 : null;
  }

  getRowSelectionAriaLabel(row: any, rowIndex: number) {
    var action = this.selectableRowsSingle ? 'Choose' : (this.isRowSelected(row) ? 'Clear selection for' : 'Select');
    return action + ' row ' + this.getRowAccessibleLabel(row, rowIndex);
  }

  getRowExpandAriaLabel(row: any, rowIndex: number) {
    var action = this.isRowExpanded(row) ? 'Collapse details for' : 'Expand details for';
    return action + ' row ' + this.getRowAccessibleLabel(row, rowIndex);
  }

  getExpandedRowId(row: any) {
    return 'adtc-expanded-' + this.sanitizeId(this.getRowKey(row));
  }

  getGroupRowId(row: any) {
    return 'adtc-group-' + this.sanitizeId(row && row.groupKey ? row.groupKey : 'group');
  }

  getGroupToggleAriaLabel(row: any) {
    var action = this.isGroupRowExpanded(row) ? 'Collapse group' : 'Expand group';
    return action + ' ' + row.groupLabel + ' ' + row.groupValue;
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
    this.sortChange.emit({
      column: column,
      direction: this.sortDirection,
      rows: this.sortedRows
    });
    this.emitTableState();
  }

  toggleAllRows(checked: boolean) {
    var rows = this.getSelectableRows();
    var i: number;

    if (checked) {
      if (this.selectableRowsSingle && rows.length) {
        this.selectedKeys = {};
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
  }

  toggleRowSelection(row: any) {
    var key: string;

    if (this.isSelectableDisabled(row)) {
      return;
    }

    key = this.getRowKey(row);

    if (this.selectableRowsSingle) {
      this.selectedKeys = {};
      this.selectedKeys[key] = true;
    } else if (this.selectedKeys[key]) {
      delete this.selectedKeys[key];
    } else {
      this.selectedKeys[key] = true;
    }

    this.emitSelectionState();
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
    this.currentPage = clamp(page, 1, this.totalPages);
    this.pageChange.emit({
      page: this.currentPage,
      totalRows: this.totalRows
    });
    this.emitTableState();
  }

  changeRowsPerPage(value: string | number) {
    this.rowsPerPage = Number(value) || this.paginationPerPage;
    this.currentPage = 1;
    this.rowsPerPageChange.emit({
      rowsPerPage: this.rowsPerPage,
      currentPage: this.currentPage
    });
    this.ensureValidPage();
    this.emitTableState();
  }

  toggleRowExpansion(row: any) {
    var key: string;

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
    if (!this.isGroupRow(row)) {
      return;
    }

    if (this.collapsedGroupKeys[row.groupKey]) {
      delete this.collapsedGroupKeys[row.groupKey];
    } else {
      this.collapsedGroupKeys[row.groupKey] = true;
    }
  }

  setGlobalFilter(value: string) {
    this.globalFilter = value || '';
    this.currentPage = 1;
    this.globalFilterChange.emit(this.globalFilter);
    this.emitTableState();
  }

  setColumnFilter(columnId: string | number, value: any) {
    var filters = this.getColumnFilterMap();
    filters[String(columnId)] = value;
    this.columnFilters = filters;
    this.currentPage = 1;
    this.columnFiltersChange.emit(this.columnFilters);
    this.emitTableState();
  }

  setColumnVisibility(columnId: string | number, visible: boolean) {
    var next: { [key: string]: boolean } = {};
    var key: string;

    for (key in this.columnVisibility) {
      if (this.columnVisibility.hasOwnProperty(key)) {
        next[key] = this.columnVisibility[key];
      }
    }

    next[String(columnId)] = visible;
    this.columnVisibility = next;
    this.columnVisibilityChange.emit(this.columnVisibility);
    this.emitTableState();
  }

  setColumnOrder(order: Array<string | number>) {
    this.columnOrder = order || [];
    this.columnOrderChange.emit(this.columnOrder);
    this.emitTableState();
  }

  setGrouping(grouping: Array<string | number>) {
    this.grouping = grouping || [];
    this.groupBy = grouping || [];
    this.groupingChange.emit(this.normalizedGrouping);
    this.emitTableState();
  }

  getColumnUniqueValues(columnId: string | number) {
    var column = this.findColumn(columnId);
    var values: { [key: string]: number } = {};
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
    var merged: { [key: string]: string | number } = {};
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
          if (style.hasOwnProperty(key)) {
            merged[key] = style[key];
          }
        }
      }
    }

    return merged;
  }

  private getRowKey(row: any) {
    var key = row && row[this.keyField] !== undefined ? row[this.keyField] : this.data.indexOf(row);
    return String(key);
  }

  private getColumnKey(column: DataTableColumn) {
    return String(column.id !== undefined && column.id !== null
      ? column.id
      : column.accessorKey || column.selector || column.name);
  }

  private flattenColumns(columns: DataTableColumn[]) {
    var output: DataTableColumn[] = [];
    var i: number;
    var child: DataTableColumn;
    var j: number;

    for (i = 0; i < columns.length; i += 1) {
      if (columns[i].columns && columns[i].columns!.length) {
        for (j = 0; j < columns[i].columns!.length; j += 1) {
          child = columns[i].columns![j];
          output.push(child.group ? child : this.withInheritedGroup(child, columns[i].header || columns[i].name));
        }
      } else {
        output.push(columns[i]);
      }
    }

    return output;
  }

  private withInheritedGroup(column: DataTableColumn, group: string | number | undefined) {
    var copy: any = {};
    var key: string;

    for (key in column) {
      if ((column as any).hasOwnProperty(key)) {
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

    if (this.columnVisibility && this.columnVisibility[key] === false) {
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

    if (global) {
      filtered = filtered.filter((row: any) => this.matchesGlobalFilter(row, global));
    }

    for (key in columnFilters) {
      if (columnFilters.hasOwnProperty(key) && columnFilters[key] !== null && columnFilters[key] !== undefined && columnFilters[key] !== '') {
        column = this.findColumn(key);
        if (column) {
          filtered = filtered.filter((row: any) => this.matchesColumnFilter(row, column as DataTableColumn, columnFilters[key]));
        }
      }
    }

    return filtered;
  }

  private matchesGlobalFilter(row: any, global: string) {
    var columns = this.visibleColumns;
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
    var map: { [key: string]: any } = {};
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

    return filters;
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

  private buildGroupedRows(rows: any[], groups: Array<string | number>, depth: number, parentKey: string) {
    var column = this.findColumn(groups[depth]);
    var buckets: { [key: string]: any[] } = {};
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
      groupRow = {
        __adtcGroup: true,
        groupKey: key,
        groupColumn: groups[depth],
        groupLabel: column.name || groups[depth],
        groupValue: order[i],
        depth: depth,
        leafRows: buckets[order[i]]
      };
      output.push(groupRow);
      if (!this.collapsedGroupKeys[key]) {
        children = depth + 1 < groups.length
          ? this.buildGroupedRows(buckets[order[i]], groups, depth + 1, key + '|')
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
    var merged: { [key: string]: string | number } = {};
    var key: string;
    var side = this.getColumnPinSide(column);
    var offset: number;

    if (style) {
      for (key in style) {
        if (style.hasOwnProperty(key)) {
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
    var size = this.columnSizing && this.columnSizing[key] !== undefined ? this.columnSizing[key] : column.size || column.width;
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
    this.selectedRowsChange.emit({
      allSelected: this.allRowsSelected,
      selectedCount: this.selectedCount,
      selectedRows: this.selectedRows
    });
  }

  private emitTableState() {
    this.tableStateChange.emit({
      globalFilter: this.globalFilter,
      columnFilters: this.columnFilters,
      columnVisibility: this.columnVisibility,
      columnOrder: this.columnOrder,
      groupBy: this.normalizedGrouping
    });
  }

  private syncProgrammaticSelection() {
    var next: { [key: string]: boolean } = {};
    var i: number;

    if (!this.selectableRowSelected) {
      return;
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
    var next: { [key: string]: boolean } = {};
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

  private applyDefaultSort() {
    var i: number;
    var column: DataTableColumn;

    if (this.defaultSortFieldId === null || this.defaultSortFieldId === undefined) {
      return;
    }

    for (i = 0; i < this.columns.length; i += 1) {
      column = this.columns[i];
      if (column.id === this.defaultSortFieldId || column.sortField === this.defaultSortFieldId) {
        this.activeSortColumn = column;
        this.sortDirection = this.defaultSortAsc ? 'asc' : 'desc';
        return;
      }
    }
  }

  private ensureValidPage() {
    this.currentPage = clamp(this.currentPage, 1, this.totalPages);
  }

  private mergeColumnSize(column: DataTableColumn, style?: { [key: string]: string | number }) {
    var merged: { [key: string]: string | number } = {};
    var key: string;
    var sizedWidth: string | null = null;

    if (style) {
      for (key in style) {
        if (style.hasOwnProperty(key)) {
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

    if (this.columnSizing && this.columnSizing[this.getColumnKey(column)] !== undefined) {
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
