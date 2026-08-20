import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'row-events-example',
  templateUrl: './row-events.component.html',
  styleUrls: ['./row-events.component.css']
})
export class RowEventsExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Row events';
  summary = 'Click, double click, mouse enter and mouse leave outputs.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
