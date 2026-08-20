import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'column-pinning-example',
  templateUrl: './column-pinning.component.html',
  styleUrls: ['./column-pinning.component.css']
})
export class ColumnPinningExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Column pinning';
  summary = 'Sticky left and right columns for wide admin grids.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  columnPinningState: any = { left: ['order'], right: ['total'] };
  columnSizingState: any = { order: 130, customer: 240, total: 130 };

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
