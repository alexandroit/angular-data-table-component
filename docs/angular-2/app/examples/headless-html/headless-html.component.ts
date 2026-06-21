import { Component, OnInit } from '@angular/core';
import { createDataTableController, DataTableColumn, HeadlessDataTableController } from '@stackline/angular-data-table-component';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'headless-html-example',
  templateUrl: 'app/examples/headless-html/headless-html.component.html',
  styleUrls: ['app/examples/headless-html/headless-html.component.css']
})
export class HeadlessHtmlExampleComponent extends TableExampleBase implements OnInit {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Headless custom HTML';
  summary = 'Use the exported table controller while rendering every element with custom application HTML.';
  searchText = '';
  statusFilter = '';
  headless: HeadlessDataTableController;
  columns: DataTableColumn[] = [
    { id: 'name', name: 'Project', selector: 'name', sortable: true },
    { id: 'status', name: 'Status', selector: 'status', sortable: true },
    { id: 'owner', name: 'Owner', selector: 'owner', sortable: true },
    { id: 'score', name: 'Score', selector: 'score', sortable: true }
  ];
  rows = [
    { id: 1, name: 'Mobile audit', status: 'Ready', owner: 'Maya', score: 92 },
    { id: 2, name: 'Billing export', status: 'Review', owner: 'Theo', score: 76 },
    { id: 3, name: 'Support queue', status: 'Ready', owner: 'Iris', score: 88 },
    { id: 4, name: 'Security report', status: 'Blocked', owner: 'Noah', score: 63 },
    { id: 5, name: 'Warehouse sync', status: 'Ready', owner: 'Lena', score: 81 },
    { id: 6, name: 'Invoice matching', status: 'Review', owner: 'Maya', score: 74 }
  ];

  ngOnInit() {
    this.headless = createDataTableController({
      columns: this.columns,
      data: this.rows,
      selectableRows: true,
      pagination: true,
      perPage: 4,
      onSelectionChange: (event: any) => this.record('headless selection', event),
      onSortChange: (event: any) => this.record('headless sort', {
        column: event.column.id,
        direction: event.direction
      }),
      onPageChange: (event: any) => this.record('headless page', event),
      onRowsPerPageChange: (event: any) => this.record('headless rowsPerPage', event)
    });
  }

  setSearch(value: string) {
    this.searchText = value || '';
    this.headless.setGlobalFilter(this.searchText);
    this.record('headless search', { value: this.searchText });
  }

  setStatus(value: string) {
    this.statusFilter = value || '';
    this.headless.setColumnFilter('status', this.statusFilter);
    this.record('headless status', { value: this.statusFilter });
  }

  activateCard(event: KeyboardEvent, row: any) {
    if (event.keyCode !== 13 && event.keyCode !== 32) {
      return;
    }

    event.preventDefault();
    this.headless.toggleRowSelection(row);
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet({
      rows: this.rows.slice(0, 3),
      state: {
        totalRows: this.headless ? this.headless.totalRows : this.rows.length,
        currentPage: this.headless ? this.headless.currentPage : 1,
        rowsPerPage: this.headless ? this.headless.rowsPerPage : 4,
        selectedCount: this.headless ? this.headless.selectedCount : 0
      }
    } as any);
  }
}
