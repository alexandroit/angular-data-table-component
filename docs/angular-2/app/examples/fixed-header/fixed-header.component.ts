import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'fixed-header-example',
  templateUrl: 'app/examples/fixed-header/fixed-header.component.html',
  styleUrls: ['app/examples/fixed-header/fixed-header.component.css']
})
export class FixedHeaderExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Fixed header';
  summary = 'Scrollable table body with sticky header support.';
  revenueColumns = this.demoData.getRevenueColumns();
  revenue = this.demoData.getRevenue();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.revenue.slice(0, 3));
  }
}
