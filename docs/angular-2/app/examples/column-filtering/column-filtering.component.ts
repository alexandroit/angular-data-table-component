import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'column-filtering-example',
  templateUrl: 'app/examples/column-filtering/column-filtering.component.html',
  styleUrls: ['app/examples/column-filtering/column-filtering.component.css']
})
export class ColumnFilteringExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Column filtering';
  summary = 'Filter individual columns with TanStack-style id/value filter state.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  statusOptions = this.demoData.getStatusOptions();
  regionOptions = this.demoData.getRegionOptions();
  columnStatusFilterValue = 'Paid';
  columnRegionFilterValue = '';
  statusColumnFilters = [{ id: 'status', value: 'Paid' }];

  setColumnStatusFilter(value: string) {
    this.columnStatusFilterValue = value || '';
    this.syncColumnFilters();
  }

  setColumnRegionFilter(value: string) {
    this.columnRegionFilterValue = value || '';
    this.syncColumnFilters();
  }

  clearColumnFilters() {
    this.columnStatusFilterValue = '';
    this.columnRegionFilterValue = '';
    this.syncColumnFilters();
  }

  syncColumnFilters() {
    var filters: any[] = [];

    if (this.columnStatusFilterValue) {
      filters.push({ id: 'status', value: this.columnStatusFilterValue });
    }

    if (this.columnRegionFilterValue) {
      filters.push({ id: 'region', value: this.columnRegionFilterValue });
    }

    this.statusColumnFilters = filters;
    this.record('column filters', filters);
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
