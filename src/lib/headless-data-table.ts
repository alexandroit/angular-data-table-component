import {
  DataTableColumn,
  DataTableColumnFilter,
  DataTablePageEvent,
  DataTableRowsPerPageEvent,
  DataTableSelectionState,
  DataTableSortEvent,
  DataTableSortOrder,
  DataTableStateChangeEvent
} from './types';
import {
  clamp,
  copySafeDictionary,
  createSafeDictionary,
  hasOwnKey,
  resolveCellValue,
  sortRows,
  toCellText
} from './utils';

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
  columnFilters?: DataTableColumnFilter[] | { [key: string]: any };
  columnVisibility?: { [key: string]: boolean };
  columnOrder?: Array<string | number>;
  selectableRows?: boolean;
  selectableRowsSingle?: boolean;
  selectedKeys?: { [key: string]: boolean };
  onSortChange?: (event: DataTableSortEvent) => void;
  onSelectionChange?: (event: DataTableSelectionState) => void;
  onPageChange?: (event: DataTablePageEvent) => void;
  onRowsPerPageChange?: (event: DataTableRowsPerPageEvent) => void;
  onStateChange?: (event: DataTableStateChangeEvent) => void;
}

export class HeadlessDataTableController {
  columns: DataTableColumn[] = [];
  data: any[] = [];
  keyField = 'id';
  pagination = false;
  paginationServer = false;
  totalRowCount = 0;
  sortServer = false;
  globalFilter = '';
  columnFilters: DataTableColumnFilter[] | { [key: string]: any } = [];
  columnVisibility: { [key: string]: boolean } = {};
  columnOrder: Array<string | number> = [];
  selectableRows = false;
  selectableRowsSingle = false;
  currentPage = 1;
  rowsPerPage = 10;
  sortDirection: DataTableSortOrder = 'asc';
  activeSortColumn: DataTableColumn | null = null;

  private selectedKeys = createSafeDictionary<boolean>();
  private onSortChange: ((event: DataTableSortEvent) => void) | null = null;
  private onSelectionChange: ((event: DataTableSelectionState) => void) | null = null;
  private onPageChange: ((event: DataTablePageEvent) => void) | null = null;
  private onRowsPerPageChange: ((event: DataTableRowsPerPageEvent) => void) | null = null;
  private onStateChange: ((event: DataTableStateChangeEvent) => void) | null = null;

  constructor(options?: HeadlessDataTableOptions) {
    this.update(options || { columns: [], data: [] });
  }

  update(options: HeadlessDataTableOptions) {
    this.columns = options.columns || [];
    this.data = options.data || [];
    this.keyField = options.keyField || this.keyField || 'id';
    this.pagination = !!options.pagination;
    this.paginationServer = !!options.paginationServer;
    this.totalRowCount = Number(options.totalRows || 0);
    this.sortServer = !!options.sortServer;
    this.globalFilter = options.globalFilter || '';
    this.columnFilters = options.columnFilters || [];
    this.columnVisibility = options.columnVisibility || {};
    this.columnOrder = options.columnOrder || [];
    this.selectableRows = !!options.selectableRows;
    this.selectableRowsSingle = !!options.selectableRowsSingle;
    this.currentPage = options.page || this.currentPage || 1;
    this.rowsPerPage = options.perPage || this.rowsPerPage || 10;
    this.onSortChange = options.onSortChange || null;
    this.onSelectionChange = options.onSelectionChange || null;
    this.onPageChange = options.onPageChange || null;
    this.onRowsPerPageChange = options.onRowsPerPageChange || null;
    this.onStateChange = options.onStateChange || null;

    if (options.selectedKeys) {
      this.selectedKeys = copySafeDictionary(options.selectedKeys);
    }

    this.ensureValidPage();
    return this;
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
    var used = createSafeDictionary<boolean>();
    var key: string;
    var i: number;
    var j: number;

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

  get filteredRows() {
    var rows = this.applyGlobalFilter(this.data);
    return this.applyColumnFilters(rows);
  }

  get sortedRows() {
    if (this.sortServer) {
      return this.filteredRows.slice(0);
    }

    return sortRows(this.filteredRows, this.activeSortColumn, this.sortDirection);
  }

  get displayedRows() {
    var rows = this.sortedRows;
    var start: number;

    if (this.pagination && !this.paginationServer) {
      start = (this.currentPage - 1) * this.rowsPerPage;
      return rows.slice(start, start + this.rowsPerPage);
    }

    return rows;
  }

  get totalRows() {
    return this.paginationServer ? (this.totalRowCount || this.data.length) : this.filteredRows.length;
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
      if (this.isRowSelected(this.data[i])) {
        rows.push(this.data[i]);
      }
    }

    return rows;
  }

  get selectedCount() {
    return this.selectedRows.length;
  }

  get allRowsSelected() {
    var rows = this.displayedRows;
    var i: number;

    if (!rows.length) {
      return false;
    }

    for (i = 0; i < rows.length; i += 1) {
      if (!this.isRowSelected(rows[i])) {
        return false;
      }
    }

    return true;
  }

  get state(): DataTableStateChangeEvent {
    return {
      globalFilter: this.globalFilter,
      columnFilters: this.columnFilters,
      columnVisibility: this.columnVisibility,
      columnOrder: this.columnOrder,
      groupBy: []
    };
  }

  getColumnKey(column: DataTableColumn) {
    return String(column.id !== undefined && column.id !== null ? column.id : column.name);
  }

  getRowKey(row: any) {
    if (row && row[this.keyField] !== undefined && row[this.keyField] !== null) {
      return String(row[this.keyField]);
    }

    return String(this.data.indexOf(row));
  }

  getCellValue(row: any, column: DataTableColumn, rowIndex: number) {
    return resolveCellValue(row, column, rowIndex);
  }

  getCellText(row: any, column: DataTableColumn, rowIndex: number) {
    return toCellText(this.getCellValue(row, column, rowIndex));
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
    var name = String(column.name || this.getColumnKey(column));

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

  isColumnVisible(column: DataTableColumn) {
    var key = this.getColumnKey(column);
    return !hasOwnKey(this.columnVisibility, key) || this.columnVisibility[key] !== false;
  }

  isRowSelected(row: any) {
    return !!this.selectedKeys[this.getRowKey(row)];
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

    if (this.onSortChange) {
      this.onSortChange({
        column: column,
        direction: this.sortDirection,
        rows: this.sortedRows
      });
    }

    this.emitState();
  }

  toggleRowSelection(row: any) {
    var key: string;

    if (!this.selectableRows) {
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

    this.emitSelection();
  }

  toggleAllVisibleRows() {
    var rows = this.displayedRows;
    var shouldSelect = !this.allRowsSelected;
    var i: number;

    if (!this.selectableRows) {
      return;
    }

    if (this.selectableRowsSingle) {
      this.selectedKeys = createSafeDictionary<boolean>();
      if (shouldSelect && rows.length) {
        this.selectedKeys[this.getRowKey(rows[0])] = true;
      }
    } else {
      for (i = 0; i < rows.length; i += 1) {
        if (shouldSelect) {
          this.selectedKeys[this.getRowKey(rows[i])] = true;
        } else {
          delete this.selectedKeys[this.getRowKey(rows[i])];
        }
      }
    }

    this.emitSelection();
  }

  changePage(page: number) {
    this.currentPage = clamp(page, 1, this.totalPages);

    if (this.onPageChange) {
      this.onPageChange({
        page: this.currentPage,
        totalRows: this.totalRows
      });
    }

    this.emitState();
  }

  changeRowsPerPage(rowsPerPage: string | number) {
    this.rowsPerPage = Number(rowsPerPage) || this.rowsPerPage;
    this.currentPage = 1;

    if (this.onRowsPerPageChange) {
      this.onRowsPerPageChange({
        rowsPerPage: this.rowsPerPage,
        currentPage: this.currentPage
      });
    }

    this.emitState();
  }

  setGlobalFilter(value: string) {
    this.globalFilter = value || '';
    this.currentPage = 1;
    this.ensureValidPage();
    this.emitState();
  }

  setColumnFilter(columnId: string | number, value: any) {
    var filters = this.getColumnFilterMap();
    filters[String(columnId)] = value;
    this.columnFilters = filters;
    this.currentPage = 1;
    this.ensureValidPage();
    this.emitState();
  }

  private flattenColumns(columns: DataTableColumn[]) {
    var output: DataTableColumn[] = [];
    var i: number;
    var nested: DataTableColumn[];
    var j: number;

    for (i = 0; i < columns.length; i += 1) {
      var column = columns[i];
      var childColumns = column.columns || [];

      if (childColumns.length) {
        nested = this.flattenColumns(childColumns);
        for (j = 0; j < nested.length; j += 1) {
          output.push(nested[j]);
        }
      } else {
        output.push(column);
      }
    }

    return output;
  }

  private applyGlobalFilter(rows: any[]) {
    var value = (this.globalFilter || '').toLowerCase();
    var columns = this.visibleColumns;
    var output: any[] = [];
    var i: number;
    var j: number;

    if (!value) {
      return rows.slice(0);
    }

    for (i = 0; i < rows.length; i += 1) {
      for (j = 0; j < columns.length; j += 1) {
        if (this.getCellText(rows[i], columns[j], i).toLowerCase().indexOf(value) !== -1) {
          output.push(rows[i]);
          break;
        }
      }
    }

    return output;
  }

  private applyColumnFilters(rows: any[]) {
    var filters = this.getColumnFilterMap();
    var keys: string[] = [];
    var key: string;
    var output: any[] = [];
    var columns = this.visibleColumns;
    var column: DataTableColumn | null;
    var i: number;

    for (key in filters) {
      if (hasOwnKey(filters, key) && filters[key] !== null && filters[key] !== undefined && filters[key] !== '') {
        keys.push(key);
      }
    }

    if (!keys.length) {
      return rows.slice(0);
    }

    for (i = 0; i < rows.length; i += 1) {
      if (this.rowPassesColumnFilters(rows[i], i, keys, filters, columns)) {
        output.push(rows[i]);
      }
    }

    return output;
  }

  private rowPassesColumnFilters(row: any, rowIndex: number, keys: string[], filters: any, columns: DataTableColumn[]) {
    var i: number;
    var column: DataTableColumn | null;
    var value: any;

    for (i = 0; i < keys.length; i += 1) {
      column = this.findColumn(keys[i], columns);

      if (!column) {
        continue;
      }

      value = filters[keys[i]];

      if (column.filterFn) {
        if (!column.filterFn(row, value, column)) {
          return false;
        }
      } else if (this.getCellText(row, column, rowIndex).toLowerCase().indexOf(String(value).toLowerCase()) === -1) {
        return false;
      }
    }

    return true;
  }

  private findColumn(columnId: string | number, columns: DataTableColumn[]) {
    var key = String(columnId);
    var i: number;

    for (i = 0; i < columns.length; i += 1) {
      if (this.getColumnKey(columns[i]) === key) {
        return columns[i];
      }
    }

    return null;
  }

  private getColumnFilterMap() {
    var output = createSafeDictionary<any>();
    var filters: any = this.columnFilters || [];
    var i: number;

    if (filters.length !== undefined) {
      for (i = 0; i < filters.length; i += 1) {
        output[String(filters[i].id)] = filters[i].value;
      }
      return output;
    }

    for (var key in filters) {
      if (hasOwnKey(filters, key)) {
        output[key] = filters[key];
      }
    }

    return output;
  }

  private ensureValidPage() {
    this.currentPage = clamp(this.currentPage || 1, 1, this.totalPages);
  }

  private emitSelection() {
    if (this.onSelectionChange) {
      this.onSelectionChange({
        allSelected: this.allRowsSelected,
        selectedCount: this.selectedCount,
        selectedRows: this.selectedRows
      });
    }
  }

  private emitState() {
    if (this.onStateChange) {
      this.onStateChange(this.state);
    }
  }
}

export function createDataTableController(options: HeadlessDataTableOptions) {
  return new HeadlessDataTableController(options);
}
