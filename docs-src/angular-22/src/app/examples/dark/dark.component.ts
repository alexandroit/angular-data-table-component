import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'dark-example',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css']
})
export class DarkExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Dark theme';
  summary = 'Use the built-in dark theme while preserving the same table behavior.';
  revenueColumns = this.demoData.getRevenueColumns();
  revenue = this.demoData.getRevenue();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.revenue.slice(0, 3));
  }
}
