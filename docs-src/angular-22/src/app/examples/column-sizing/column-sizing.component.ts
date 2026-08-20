import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'column-sizing-example',
  templateUrl: './column-sizing.component.html',
  styleUrls: ['./column-sizing.component.css']
})
export class ColumnSizingExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Column sizing';
  summary = 'Control column width from a columnSizing state object.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  wideColumnSizingState: any = { order: 180, customer: 320, region: 180, total: 180 };

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
