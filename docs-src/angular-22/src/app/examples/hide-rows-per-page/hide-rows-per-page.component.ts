import { Component, inject } from '@angular/core';
import { DataTablePaginationOptions } from '@stackline/angular-data-table-component';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'hide-rows-per-page-example',
  templateUrl: './hide-rows-per-page.component.html',
  styleUrls: ['./hide-rows-per-page.component.css']
})
export class HideRowsPerPageExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Hide rows-per-page selector';
  summary = 'Hide the rows-per-page selector with paginationHideRowsPerPage or paginationComponentOptions.noRowsPerPage.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  hideRowsPerPage = true;
  // noRowsPerPage is the react-data-table-component name for the same switch.
  paginationOptions: DataTablePaginationOptions = { noRowsPerPage: true };

  setHideRowsPerPage(hidden: boolean) {
    this.hideRowsPerPage = hidden;
    this.record('paginationHideRowsPerPage', { hidden: hidden });
  }

  setNoRowsPerPage(hidden: boolean) {
    // Pass a new object so the table receives a new input value.
    this.paginationOptions = { noRowsPerPage: hidden };
    this.record('paginationComponentOptions', this.paginationOptions);
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
