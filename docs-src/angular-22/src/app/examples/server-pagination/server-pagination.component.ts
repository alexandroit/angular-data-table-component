import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  DataTablePaginationServerOptions,
  DataTableSelectionState,
  DataTableSortEvent
} from '@stackline/angular-data-table-component';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'server-pagination-example',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.css']
})
export class ServerPaginationExampleComponent extends TableExampleBase implements OnInit, OnDestroy {
  protected demoData = inject(TableDemoDataService);
  private changeDetector = inject(ChangeDetectorRef);
  constructor() {
    super();
  }

  title = 'Server pagination';
  summary = 'The app owns slicing and sorting, passes total rows, and keeps the pager on screen while a page loads.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  pageSizes = this.demoData.getPageSizes();
  serverPage = 1;
  serverRowsPerPage = 4;
  serverRows: any[] = [];
  sortField = 'order';
  sortDirection = 'asc';
  loading = false;
  // react-data-table-component semantics: keep selected rows across pages, clear them on sort.
  serverOptions: DataTablePaginationServerOptions = {
    persistSelectedOnPageChange: true,
    persistSelectedOnSort: false
  };
  private loadTimer: any = null;

  ngOnInit() {
    this.updateServerRows();
  }

  ngOnDestroy() {
    clearTimeout(this.loadTimer);
  }

  changeServerSort(event: DataTableSortEvent) {
    this.sortField = String(event.column.id);
    this.sortDirection = event.direction;
    // The table is back on page 1. The sorted rows replace the page at once, so the header
    // stays mounted and keeps keyboard focus; only page changes show the loading state.
    this.serverPage = 1;
    this.updateServerRows();
    this.record('server sort', {
      column: event.column.id,
      direction: event.direction
    });
  }

  changeServerPage(event: any) {
    // After a sort on a later page, paginationEmitOnReset reports page 1, which the sort already loaded.
    if (event.page !== this.serverPage) {
      this.serverPage = event.page;
      this.loadServerRows();
    }
    this.record('server page', event);
  }

  changeServerRowsPerPage(event: any) {
    this.serverRowsPerPage = event.rowsPerPage;
    this.serverPage = 1;
    this.loadServerRows();
    this.record('server rowsPerPage', event);
  }

  recordSelection(event: DataTableSelectionState) {
    this.record('server selection', {
      selectedCount: event.selectedCount,
      orders: event.selectedRows.map((row: any) => row.order)
    });
  }

  setServerOption(option: 'persistSelectedOnPageChange' | 'persistSelectedOnSort', enabled: boolean) {
    this.serverOptions = { ...this.serverOptions, [option]: enabled };
    this.record('paginationServerOptions', this.serverOptions);
  }

  // Simulates a request. persistPagination keeps the pager mounted while it runs.
  loadServerRows() {
    this.loading = true;
    clearTimeout(this.loadTimer);
    this.loadTimer = setTimeout(() => {
      this.updateServerRows();
      this.loading = false;
      // Timer callbacks do not schedule change detection in a zoneless application.
      this.changeDetector.markForCheck();
    }, 400);
  }

  updateServerRows() {
    var field = this.sortField;
    var direction = this.sortDirection === 'desc' ? -1 : 1;
    var start = (this.serverPage - 1) * this.serverRowsPerPage;
    var sorted = this.orders.slice().sort(function (a: any, b: any) {
      return a[field] === b[field] ? 0 : (a[field] > b[field] ? direction : -direction);
    });

    this.serverRows = sorted.slice(start, start + this.serverRowsPerPage);
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
