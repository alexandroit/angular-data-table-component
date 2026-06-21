import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'visible-page-selection-example',
  templateUrl: 'app/examples/visible-page-selection/visible-page-selection.component.html',
  styleUrls: ['app/examples/visible-page-selection/visible-page-selection.component.css']
})
export class VisiblePageSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Visible page selection';
  summary = 'Select all only touches the currently rendered page.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
