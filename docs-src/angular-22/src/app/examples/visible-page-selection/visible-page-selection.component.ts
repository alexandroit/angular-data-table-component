import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'visible-page-selection-example',
  templateUrl: './visible-page-selection.component.html',
  styleUrls: ['./visible-page-selection.component.css']
})
export class VisiblePageSelectionExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Visible page selection';
  summary = 'Select all only touches the currently rendered page.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
