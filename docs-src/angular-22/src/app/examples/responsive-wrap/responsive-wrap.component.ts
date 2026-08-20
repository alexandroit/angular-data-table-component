import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'responsive-wrap-example',
  templateUrl: './responsive-wrap.component.html',
  styleUrls: ['./responsive-wrap.component.css']
})
export class ResponsiveWrapExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Responsive and wrapped cells';
  summary = 'Long values wrap while the responsive shell protects the layout.';
  wrappedColumns = this.demoData.getWrappedColumns();
  longTextRows = this.demoData.getLongTextRows();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.longTextRows);
  }
}
