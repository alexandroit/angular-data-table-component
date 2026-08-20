import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'empty-example',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Empty state';
  summary = 'Custom empty message when there are no rows.';
  orderColumns = this.demoData.getOrderColumns();
  emptyRows: any[] = [];

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.emptyRows);
  }
}
