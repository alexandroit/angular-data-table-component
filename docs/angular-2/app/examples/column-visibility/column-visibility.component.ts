import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'column-visibility-example',
  templateUrl: 'app/examples/column-visibility/column-visibility.component.html',
  styleUrls: ['app/examples/column-visibility/column-visibility.component.css']
})
export class ColumnVisibilityExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
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

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
