import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'accessibility-keyboard-example',
  templateUrl: 'app/examples/accessibility-keyboard/accessibility-keyboard.component.html',
  styleUrls: ['app/examples/accessibility-keyboard/accessibility-keyboard.component.css']
})
export class AccessibilityKeyboardExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Accessibility and keyboard';
  summary = 'ARIA sort, labels, selected state, expanded state and row keyboard activation.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
