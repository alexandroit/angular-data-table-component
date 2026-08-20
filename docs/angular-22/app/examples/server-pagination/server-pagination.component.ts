import { Component, OnInit, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'server-pagination-example',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.css']
})
export class ServerPaginationExampleComponent extends TableExampleBase implements OnInit {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Server pagination';
  summary = 'The app owns slicing and passes total rows to the component.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  pageSizes = this.demoData.getPageSizes();
  serverPage = 1;
  serverRowsPerPage = 4;
  serverRows: any[] = [];

  ngOnInit() {
    this.updateServerRows();
  }

  changeServerPage(event: any) {
    this.serverPage = event.page;
    this.updateServerRows();
    this.record('server page', event);
  }

  changeServerRowsPerPage(event: any) {
    this.serverRowsPerPage = event.rowsPerPage;
    this.serverPage = 1;
    this.updateServerRows();
    this.record('server rowsPerPage', event);
  }

  updateServerRows() {
    var start = (this.serverPage - 1) * this.serverRowsPerPage;
    this.serverRows = this.orders.slice(start, start + this.serverRowsPerPage);
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
