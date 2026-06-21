import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'row-events-example',
  templateUrl: 'app/examples/row-events/row-events.component.html',
  styleUrls: ['app/examples/row-events/row-events.component.css']
})
export class RowEventsExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Row events';
  summary = 'Click, double click, mouse enter and mouse leave outputs.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
