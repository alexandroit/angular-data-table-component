import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'column-sizing-example',
  templateUrl: 'app/examples/column-sizing/column-sizing.component.html',
  styleUrls: ['app/examples/column-sizing/column-sizing.component.css']
})
export class ColumnSizingExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Column sizing';
  summary = 'Control column width from a columnSizing state object.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  wideColumnSizingState: any = { order: 180, customer: 320, region: 180, total: 180 };

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
