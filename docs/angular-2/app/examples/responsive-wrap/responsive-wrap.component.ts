import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'responsive-wrap-example',
  templateUrl: 'app/examples/responsive-wrap/responsive-wrap.component.html',
  styleUrls: ['app/examples/responsive-wrap/responsive-wrap.component.css']
})
export class ResponsiveWrapExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Responsive and wrapped cells';
  summary = 'Long values wrap while the responsive shell protects the layout.';
  wrappedColumns = this.demoData.getWrappedColumns();
  longTextRows = this.demoData.getLongTextRows();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.longTextRows);
  }
}
