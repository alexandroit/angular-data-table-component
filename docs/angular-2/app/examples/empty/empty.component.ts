import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'empty-example',
  templateUrl: 'app/examples/empty/empty.component.html',
  styleUrls: ['app/examples/empty/empty.component.css']
})
export class EmptyExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Empty state';
  summary = 'Custom empty message when there are no rows.';
  orderColumns = this.demoData.getOrderColumns();
  emptyRows: any[] = [];

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.emptyRows);
  }
}
