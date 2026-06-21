import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'dark-example',
  templateUrl: 'app/examples/dark/dark.component.html',
  styleUrls: ['app/examples/dark/dark.component.css']
})
export class DarkExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Dark theme';
  summary = 'The legacy line keeps the same theme input.';
  revenueColumns = this.demoData.getRevenueColumns();
  revenue = this.demoData.getRevenue();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.revenue.slice(0, 3));
  }
}
