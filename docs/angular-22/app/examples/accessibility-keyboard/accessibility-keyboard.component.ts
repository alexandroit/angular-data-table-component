import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'accessibility-keyboard-example',
  templateUrl: './accessibility-keyboard.component.html',
  styleUrls: ['./accessibility-keyboard.component.css']
})
export class AccessibilityKeyboardExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Accessibility and keyboard';
  summary = 'ARIA sort, labels, selected state, expanded state and row keyboard activation.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
