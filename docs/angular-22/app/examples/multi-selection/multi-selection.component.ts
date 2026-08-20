import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'multi-selection-example',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.css']
})
export class MultiSelectionExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Multi selection';
  summary = 'Checkbox row selection with selected-row highlighting.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
