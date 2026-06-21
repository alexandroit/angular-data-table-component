import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'expandable-rows-example',
  templateUrl: 'app/examples/expandable-rows/expandable-rows.component.html',
  styleUrls: ['app/examples/expandable-rows/expandable-rows.component.css']
})
export class ExpandableRowsExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Expandable rows';
  summary = 'Expanded details rendered from an Angular template.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  isLargeOrder(row: any) {
    return row.total > 2000;
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
