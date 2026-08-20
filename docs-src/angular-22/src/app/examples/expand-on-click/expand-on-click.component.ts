import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'expand-on-click-example',
  templateUrl: './expand-on-click.component.html',
  styleUrls: ['./expand-on-click.component.css']
})
export class ExpandOnClickExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Expand on row click';
  summary = 'Hide the expander and use row clicks to toggle details.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
