import { Injectable } from '@angular/core';
import {
  buildLargePage,
  buildLargeRows,
  cloneColumnVisibility,
  dataSnippet,
  formatTotal,
  getAdvancedColumns,
  getHeaderGroupColumns,
  getInventoryColumns,
  getLargeColumns,
  getLargeDataColumns,
  getLockedColumns,
  getOrderColumns,
  getRevenueColumns,
  getTicketColumns,
  getWrappedColumns,
  inventory,
  lockedRows,
  longTextRows,
  orders,
  pageSizes,
  regionOptions,
  revenue,
  statusOptions,
  tickets,
  visibilityColumns
} from '../models/table-demo-fixtures';
import { ProductRow } from '../models/table-demo.models';

@Injectable()
export class TableDemoDataService {
  getPageSizes() {
    return pageSizes.slice();
  }

  getStatusOptions() {
    return statusOptions.slice();
  }

  getRegionOptions() {
    return regionOptions.slice();
  }

  getVisibilityColumns() {
    return visibilityColumns.slice();
  }

  getOrders() {
    return this.cloneRows(orders);
  }

  getTickets() {
    return this.cloneRows(tickets);
  }

  getInventory() {
    return this.cloneRows(inventory);
  }

  getLockedRows() {
    return this.cloneRows(lockedRows);
  }

  getRevenue() {
    return this.cloneRows(revenue);
  }

  getLongTextRows() {
    return this.cloneRows(longTextRows);
  }

  getProducts(assetRoot: string): ProductRow[] {
    return [
      { id: 1, name: 'Studio Camera', category: 'Media kit', stock: 18, owner: 'Maya', image: assetRoot + '/camera.svg' },
      { id: 2, name: 'Audio Headphones', category: 'Support desk', stock: 7, owner: 'Theo', image: assetRoot + '/headphones.svg' },
      { id: 3, name: 'Mechanical Keyboard', category: 'Workspace', stock: 31, owner: 'Iris', image: assetRoot + '/keyboard.svg' },
      { id: 4, name: 'Ops Watch', category: 'Field team', stock: 12, owner: 'Noah', image: assetRoot + '/watch.svg' }
    ];
  }

  getOrderColumns() {
    return getOrderColumns();
  }

  getAdvancedColumns() {
    return getAdvancedColumns();
  }

  getHeaderGroupColumns() {
    return getHeaderGroupColumns();
  }

  getTicketColumns() {
    return getTicketColumns();
  }

  getInventoryColumns() {
    return getInventoryColumns();
  }

  getLockedColumns() {
    return getLockedColumns();
  }

  getRevenueColumns() {
    return getRevenueColumns();
  }

  getWrappedColumns() {
    return getWrappedColumns();
  }

  getLargeColumns() {
    return getLargeColumns();
  }

  getLargeDataColumns() {
    return getLargeDataColumns();
  }

  buildLargeRows() {
    return buildLargeRows();
  }

  buildLargePage(page: number, perPage: number, totalRows: number, sortField?: string, sortDirection?: string) {
    return buildLargePage(page, perPage, totalRows, sortField, sortDirection);
  }

  formatTotal(row: any) {
    return formatTotal(row);
  }

  cloneColumnVisibility(current: any, columnId: string, visible: boolean) {
    return cloneColumnVisibility(current, columnId, visible);
  }

  dataSnippet(value: any) {
    return dataSnippet(value);
  }

  private cloneRows(rows: any[]) {
    return rows.map(function (row) {
      var copy: any = {};
      var key: string;

      for (key in row) {
        if (row.hasOwnProperty(key)) {
          copy[key] = row[key];
        }
      }

      return copy;
    });
  }
}
