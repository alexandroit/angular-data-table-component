import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'column-visibility-example',
  templateUrl: './column-visibility.component.html',
  styleUrls: ['./column-visibility.component.css']
})
export class ColumnVisibilityExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Column visibility';
  summary = 'Hide or show columns with columnVisibility and hiddenColumns compatibility.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  visibilityColumns = this.demoData.getVisibilityColumns();
  columnVisibilityState: any = { channel: false };

  isDemoColumnVisible(columnId: string) {
    return this.columnVisibilityState[columnId] !== false;
  }

  setDemoColumnVisible(columnId: string, visible: boolean) {
    this.columnVisibilityState = this.demoData.cloneColumnVisibility(this.columnVisibilityState, columnId, visible);
    this.record('column visibility', this.columnVisibilityState);
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
