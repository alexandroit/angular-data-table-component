import { Component, OnInit } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

interface LargePageState {
  rows: any[];
  totalRows: number;
  page: number;
  perPage: number;
  loading: boolean;
}

@Component({
  selector: 'large-data-pagination-example',
  templateUrl: 'app/examples/large-data-pagination/large-data-pagination.component.html',
  styleUrls: ['app/examples/large-data-pagination/large-data-pagination.component.css']
})
export class LargeDataPaginationExampleComponent extends TableExampleBase implements OnInit {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Large data pagination';
  summary = 'Server-style pagination with a large object-backed dataset and only the visible page in memory.';
  largeColumns = this.demoData.getLargeDataColumns();
  largePage: LargePageState = {
    rows: [],
    totalRows: 10000,
    page: 1,
    perPage: 25,
    loading: false
  };
  sortField = 'id';
  sortDirection = 'asc';
  pageSizes = [10, 25, 50, 100];

  ngOnInit() {
    this.loadPage(1, this.largePage.perPage);
  }

  loadPage(page: number, perPage: number) {
    this.largePage = {
      rows: this.demoData.buildLargePage(page, perPage, this.largePage.totalRows, this.sortField, this.sortDirection),
      totalRows: this.largePage.totalRows,
      page: page,
      perPage: perPage,
      loading: false
    };
    this.record('large page loaded', {
      page: page,
      perPage: perPage,
      rowsInMemory: this.largePage.rows.length,
      totalRows: this.largePage.totalRows
    });
  }

  sortLargeData(event: any) {
    this.sortField = event.column && event.column.id ? String(event.column.id) : 'id';
    this.sortDirection = event.direction || 'asc';
    this.loadPage(1, this.largePage.perPage);
    this.record('large sort requested', {
      sortField: this.sortField,
      sortDirection: this.sortDirection
    });
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet({
      rows: this.largePage.rows.slice(0, 3),
      totalRows: this.largePage.totalRows,
      page: this.largePage.page,
      perPage: this.largePage.perPage,
      loading: this.largePage.loading,
      sortField: this.sortField,
      sortDirection: this.sortDirection
    } as any);
  }
}
