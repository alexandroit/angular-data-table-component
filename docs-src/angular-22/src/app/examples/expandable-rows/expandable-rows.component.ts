import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'expandable-rows-example',
  templateUrl: './expandable-rows.component.html',
  styleUrls: ['./expandable-rows.component.css']
})
export class ExpandableRowsExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Expandable rows';
  summary = 'Expanded details rendered from an Angular template.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  isLargeOrder(row: any) {
    return row.total > 2000;
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
