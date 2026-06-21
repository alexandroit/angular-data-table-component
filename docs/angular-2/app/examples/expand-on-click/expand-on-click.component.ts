import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'expand-on-click-example',
  templateUrl: 'app/examples/expand-on-click/expand-on-click.component.html',
  styleUrls: ['app/examples/expand-on-click/expand-on-click.component.css']
})
export class ExpandOnClickExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Expand on row click';
  summary = 'Hide the expander and use row clicks to toggle details.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
