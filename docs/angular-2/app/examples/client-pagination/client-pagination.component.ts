import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'client-pagination-example',
  templateUrl: 'app/examples/client-pagination/client-pagination.component.html',
  styleUrls: ['app/examples/client-pagination/client-pagination.component.css']
})
export class ClientPaginationExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Client pagination';
  summary = 'The component slices local data and emits page changes.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  pageSizes = this.demoData.getPageSizes();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
