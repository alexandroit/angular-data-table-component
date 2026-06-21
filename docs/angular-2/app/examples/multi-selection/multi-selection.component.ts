import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'multi-selection-example',
  templateUrl: 'app/examples/multi-selection/multi-selection.component.html',
  styleUrls: ['app/examples/multi-selection/multi-selection.component.css']
})
export class MultiSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Multi selection';
  summary = 'Checkbox row selection with selected-row highlighting.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
