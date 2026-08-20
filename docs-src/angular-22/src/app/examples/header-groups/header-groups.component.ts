import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'header-groups-example',
  templateUrl: './header-groups.component.html',
  styleUrls: ['./header-groups.component.css']
})
export class HeaderGroupsExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Header groups';
  summary = 'Use nested column definitions to render grouped headers.';
  headerGroupColumns = this.demoData.getHeaderGroupColumns();
  orders = this.demoData.getOrders();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
