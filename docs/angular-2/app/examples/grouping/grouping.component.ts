import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'grouping-example',
  templateUrl: 'app/examples/grouping/grouping.component.html',
  styleUrls: ['app/examples/grouping/grouping.component.css']
})
export class GroupingExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Grouping';
  summary = 'Group rows by a column and expand or collapse each group.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  groupByField = 'region';

  setGroupByField(value: string) {
    this.groupByField = value || 'region';
    this.record('group by', { field: this.groupByField });
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
