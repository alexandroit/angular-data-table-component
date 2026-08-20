import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'virtual-rows-example',
  templateUrl: './virtual-rows.component.html',
  styleUrls: ['./virtual-rows.component.css']
})
export class VirtualRowsExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Virtual rows';
  summary = 'Render a controlled window from a larger row set.';
  largeColumns = this.demoData.getLargeColumns();
  largeRows = this.demoData.buildLargeRows();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.largeRows.slice(20, 24));
  }
}
