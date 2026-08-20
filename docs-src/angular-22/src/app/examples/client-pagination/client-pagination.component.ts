import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'client-pagination-example',
  templateUrl: './client-pagination.component.html',
  styleUrls: ['./client-pagination.component.css']
})
export class ClientPaginationExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Client pagination';
  summary = 'The component slices local data and emits page changes.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  pageSizes = this.demoData.getPageSizes();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
