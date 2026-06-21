import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'virtual-rows-example',
  templateUrl: 'app/examples/virtual-rows/virtual-rows.component.html',
  styleUrls: ['app/examples/virtual-rows/virtual-rows.component.css']
})
export class VirtualRowsExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Virtual rows';
  summary = 'Render a window of a larger row set for heavy legacy screens.';
  largeColumns = this.demoData.getLargeColumns();
  largeRows = this.demoData.buildLargeRows();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.largeRows.slice(20, 24));
  }
}
