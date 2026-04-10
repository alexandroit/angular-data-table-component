import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import {
  ConditionalStyle,
  DataTableColumn,
  DataTableContextMessage,
  DataTableExpandEvent,
  DataTableExpandableContext,
  DataTablePageEvent,
  DataTableRowsPerPageEvent,
  DataTableSelectionState,
  DataTableSortEvent,
  DataTableSortOrder,
  DataTableThemeName
} from './types';
import { DATA_TABLE_TEMPLATE } from './angular-data-table.template';
import { clamp, resolveCellValue, sortRows, styleObjectToString, toCellText } from './utils';

@Component({
  selector: 'stackline-data-table',
  standalone: false,
  template: DATA_TABLE_TEMPLATE,
  styleUrls: ['./angular-data-table.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DataTableComponent<T extends Record<string, unknown> = Record<string, unknown>>
  implements OnChanges
{
  @Input() columns: DataTableColumn<T>[] = [];
  @Input() data: T[] = [];
  @Input() keyField = 'id';
  @Input() title = '';
  @Input() ariaLabel = '';

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
  @Input() selectableRowSelected: ((row: T) => boolean) | null = null;
  @Input() selectableRowDisabled: ((row: T) => boolean) | null = null;

  @Input() expandableRows = false;
  @Input() expandableRowsHideExpander = false;
  @Input() expandOnRowClicked = false;
  @Input() expandOnRowDoubleClicked = false;
  @Input() expandableRowDisabled: ((row: T) => boolean) | null = null;
  @Input() expandableRowExpanded: ((row: T) => boolean) | null = null;
  @Input() expandableRowTemplate: TemplateRef<DataTableExpandableContext<T>> | null = null;

  @Input() striped = false;
  @Input() highlightOnHover = false;
  @Input() pointerOnHover = false;
  @Input() dense = false;
  @Input() responsive = true;
  @Input() progressPending = false;
  @Input() noHeader = false;
  @Input() noTableHead = false;
  @Input() noContextMenu = false;
  @Input() fixedHeader = false;
  @Input() fixedHeaderScrollHeight = '420px';
  @Input() subHeader = false;
  @Input() subHeaderTemplate: TemplateRef<unknown> | null = null;
  @Input() noDataText = 'There are no records to display';
  @Input() conditionalRowStyles: ConditionalStyle<T>[] = [];
  @Input() defaultSortFieldId: string | number | null = null;
  @Input() defaultSortAsc = true;
  @Input() sortServer = false;
  @Input() theme: DataTableThemeName = 'default';
  @Input() contextMessage: DataTableContextMessage = {
    singular: 'item',
    plural: 'items',
    message: 'selected'
  };

  @Output() sortChange = new EventEmitter<DataTableSortEvent<T>>();
  @Output() selectedRowsChange = new EventEmitter<DataTableSelectionState<T>>();
  @Output() pageChange = new EventEmitter<DataTablePageEvent>();
  @Output() rowsPerPageChange = new EventEmitter<DataTableRowsPerPageEvent>();
  @Output() rowClicked = new EventEmitter<T>();
  @Output() rowDoubleClicked = new EventEmitter<T>();
  @Output() rowMouseEnter = new EventEmitter<T>();
  @Output() rowMouseLeave = new EventEmitter<T>();
  @Output() rowExpandToggled = new EventEmitter<DataTableExpandEvent<T>>();

  currentPage = 1;
  rowsPerPage = 10;
  sortDirection: DataTableSortOrder = 'asc';
  activeSortColumn: DataTableColumn<T> | null = null;

  private readonly selectedKeys = new Set<string>();
  private readonly expandedKeys = new Set<string>();

  ngOnChanges(changes: SimpleChanges) {
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

    if (
      changes['columns'] ||
      changes['defaultSortFieldId'] ||
      changes['defaultSortAsc']
    ) {
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
    const selectableRows = this.selectionScopeRows.filter(
      (row) => !this.isSelectableDisabled(row)
    );

    return (
      selectableRows.length > 0 &&
      selectableRows.every((row) => this.selectedKeys.has(this.getRowKey(row)))
    );
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

  readonly trackByColumn = (index: number, column: DataTableColumn<T>) =>
    column.id ?? column.name ?? index;

  readonly trackByRow = (index: number, row: T) =>
    this.getRowKey(row) || index;

  getCellValue(row: T, column: DataTableColumn<T>, rowIndex: number) {
    return resolveCellValue(row, column, rowIndex);
  }

  getCellText(row: T, column: DataTableColumn<T>, rowIndex: number) {
    return toCellText(this.getCellValue(row, column, rowIndex));
  }

  getCellContext(row: T, column: DataTableColumn<T>, rowIndex: number) {
    return {
      $implicit: row,
      row,
      rowIndex,
      column,
      value: this.getCellValue(row, column, rowIndex)
    };
  }

  getExpandableContext(row: T, rowIndex: number) {
    return {
      $implicit: row,
      row,
      rowIndex
    };
  }

  getHeaderStyle(column: DataTableColumn<T>) {
    return {
      width: column.width ?? null,
      minWidth: column.minWidth ?? null,
      maxWidth: column.maxWidth ?? null,
      ...column.headerStyle
    };
  }

  getCellStyle(column: DataTableColumn<T>) {
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

  getSortButtonClassName(column: DataTableColumn<T>) {
    return ['adtc-sort-button', column.sortable ? 'adtc-sortable' : '']
      .filter(Boolean)
      .join(' ');
  }

  getSortIndicatorClassName(column: DataTableColumn<T>) {
    return [
      'adtc-sort-indicator',
      this.activeSortColumn === column ? 'active' : ''
    ]
      .filter(Boolean)
      .join(' ');
  }

  getHeaderClassName(column: DataTableColumn<T>) {
    return [
      column.headerClassName || '',
      column.right ? 'adtc-align-right' : '',
      column.center ? 'adtc-align-center' : '',
      column.wrap ? 'adtc-wrap' : 'adtc-nowrap'
    ]
      .filter(Boolean)
      .join(' ');
  }

  getCellClassName(column: DataTableColumn<T>) {
    return [
      column.className || '',
      column.right ? 'adtc-align-right' : '',
      column.center ? 'adtc-align-center' : '',
      column.wrap ? 'adtc-wrap' : 'adtc-nowrap'
    ]
      .filter(Boolean)
      .join(' ');
  }

  getRowClassNames(row: T) {
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

      const className =
        typeof conditionalStyle.className === 'function'
          ? conditionalStyle.className(row)
          : conditionalStyle.className;

      if (className) {
        classNames.push(className);
      }
    }

    return classNames;
  }

  getRowClassName(row: T) {
    return this.getRowClassNames(row).join(' ');
  }

  getRowStyle(row: T) {
    return this.conditionalRowStyles.reduce<Record<string, string | number>>((acc, conditionalStyle) => {
      if (!conditionalStyle.when(row) || !conditionalStyle.style) {
        return acc;
      }

      const style =
        typeof conditionalStyle.style === 'function'
          ? conditionalStyle.style(row)
          : conditionalStyle.style;

      return {
        ...acc,
        ...style
      };
    }, {});
  }

  getHeaderStyleAttribute(column: DataTableColumn<T>) {
    return styleObjectToString(this.getHeaderStyle(column)) || null;
  }

  getCellStyleAttribute(column: DataTableColumn<T>) {
    return styleObjectToString(this.getCellStyle(column)) || null;
  }

  getRowStyleAttribute(row: T) {
    return styleObjectToString(this.getRowStyle(row)) || null;
  }

  isRowSelected(row: T) {
    return this.selectedKeys.has(this.getRowKey(row));
  }

  isRowExpanded(row: T) {
    return this.expandedKeys.has(this.getRowKey(row));
  }

  isSelectableDisabled(row: T) {
    return this.selectableRowDisabled ? this.selectableRowDisabled(row) : false;
  }

  isExpandableDisabled(row: T) {
    return this.expandableRowDisabled ? this.expandableRowDisabled(row) : false;
  }

  toggleSort(column: DataTableColumn<T>) {
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

    const rows = this.sortedRows;
    this.sortChange.emit({
      column,
      direction: this.sortDirection,
      rows
    });
  }

  toggleAllRows(checked: boolean) {
    const rows = this.selectionScopeRows.filter((row) => !this.isSelectableDisabled(row));

    if (checked) {
      for (const row of rows) {
        this.selectedKeys.add(this.getRowKey(row));
      }
    } else {
      for (const row of rows) {
        this.selectedKeys.delete(this.getRowKey(row));
      }
    }

    this.emitSelectionState();
  }

  toggleRowSelection(row: T) {
    if (!this.selectableRows || this.isSelectableDisabled(row)) {
      return;
    }

    const key = this.getRowKey(row);

    if (this.selectableRowsSingle) {
      this.selectedKeys.clear();
      this.selectedKeys.add(key);
    } else if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key);
    } else {
      this.selectedKeys.add(key);
    }

    this.emitSelectionState();
  }

  toggleRowExpansion(row: T) {
    if (!this.expandableRows || this.isExpandableDisabled(row)) {
      return;
    }

    const key = this.getRowKey(row);
    const expanded = !this.expandedKeys.has(key);

    if (expanded) {
      this.expandedKeys.add(key);
    } else {
      this.expandedKeys.delete(key);
    }

    this.rowExpandToggled.emit({ expanded, row });
  }

  handleRowClick(row: T) {
    this.rowClicked.emit(row);

    if (this.expandableRows && this.expandOnRowClicked) {
      this.toggleRowExpansion(row);
    }
  }

  handleRowDoubleClick(row: T) {
    this.rowDoubleClicked.emit(row);

    if (this.expandableRows && this.expandOnRowDoubleClicked) {
      this.toggleRowExpansion(row);
    }
  }

  handleMouseEnter(row: T) {
    this.rowMouseEnter.emit(row);
  }

  handleMouseLeave(row: T) {
    this.rowMouseLeave.emit(row);
  }

  changePage(page: number) {
    this.currentPage = clamp(page, 1, this.totalPages);
    this.pageChange.emit({
      page: this.currentPage,
      totalRows: this.totalRows
    });
  }

  changeRowsPerPage(rowsPerPage: number) {
    this.rowsPerPage = rowsPerPage;
    this.ensureValidPage();
    this.rowsPerPageChange.emit({
      rowsPerPage: this.rowsPerPage,
      currentPage: this.currentPage
    });
  }

  private applyDefaultSort() {
    if (!this.columns.length) {
      this.activeSortColumn = null;
      this.sortDirection = 'asc';
      return;
    }

    const defaultColumn = this.columns.find(
      (column) =>
        column.id === this.defaultSortFieldId ||
        String(column.id) === String(this.defaultSortFieldId)
    );

    this.activeSortColumn = defaultColumn ?? this.activeSortColumn;
    this.sortDirection = this.defaultSortAsc ? 'asc' : 'desc';
  }

  private syncProgrammaticSelection() {
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

  private syncProgrammaticExpansion() {
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

  private emitSelectionState() {
    this.selectedRowsChange.emit({
      allSelected: this.allRowsSelected,
      selectedCount: this.selectedCount,
      selectedRows: this.selectedRows
    });
  }

  private ensureValidPage() {
    this.currentPage = clamp(this.currentPage, 1, this.totalPages);
  }

  private getRowKey(row: T) {
    const candidate = row[this.keyField as keyof T];

    if (candidate == null || candidate === '') {
      return `row-${this.data.indexOf(row)}`;
    }

    return String(candidate);
  }
}
