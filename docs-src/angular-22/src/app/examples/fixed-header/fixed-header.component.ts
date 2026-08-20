import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'fixed-header-example',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.css']
})
export class FixedHeaderExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Fixed header';
  summary = 'Scrollable table body with sticky header support.';
  revenueColumns = this.demoData.getRevenueColumns();
  revenue = this.demoData.getRevenue();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.revenue.slice(0, 3));
  }
}
