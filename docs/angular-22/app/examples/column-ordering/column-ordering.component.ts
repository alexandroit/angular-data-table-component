import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'column-ordering-example',
  templateUrl: './column-ordering.component.html',
  styleUrls: ['./column-ordering.component.css']
})
export class ColumnOrderingExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Column ordering';
  summary = 'Render columns in a controlled order without mutating the source columns.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  columnOrderPreset = 'customer-first';
  columnOrderState: any[] = ['customer', 'order', 'region', 'status', 'total', 'channel'];

  setColumnOrderPreset(preset: string) {
    this.columnOrderPreset = preset;

    if (preset === 'money-first') {
      this.columnOrderState = ['total', 'order', 'customer', 'region', 'status', 'channel'];
    } else if (preset === 'operations-first') {
      this.columnOrderState = ['status', 'channel', 'region', 'order', 'customer', 'total'];
    } else {
      this.columnOrderState = ['customer', 'order', 'region', 'status', 'total', 'channel'];
    }

    this.record('column order preset', { preset: preset, order: this.columnOrderState });
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
