import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'header-groups-example',
  templateUrl: 'app/examples/header-groups/header-groups.component.html',
  styleUrls: ['app/examples/header-groups/header-groups.component.css']
})
export class HeaderGroupsExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Header groups';
  summary = 'Use nested column definitions to render grouped headers.';
  headerGroupColumns = this.demoData.getHeaderGroupColumns();
  orders = this.demoData.getOrders();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
