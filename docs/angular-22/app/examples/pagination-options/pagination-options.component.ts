import { Component, inject } from '@angular/core';
import {
  DataTableColumn,
  DataTableLocalization,
  DataTablePaginationOptions,
  DataTableSortEvent
} from '@stackline/angular-data-table-component';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'pagination-options-example',
  templateUrl: './pagination-options.component.html',
  styleUrls: ['./pagination-options.component.css']
})
export class PaginationOptionsExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Pagination options';
  summary = 'Translate the pager texts and labels (pt-BR here) and add an All option to the rows-per-page selector.';
  orders = this.demoData.getOrders();
  pageSizes = this.demoData.getPageSizes();
  orderColumns: DataTableColumn[] = [
    { id: 'order', name: 'Pedido', selector: 'order', sortable: true, width: '130px' },
    { id: 'customer', name: 'Cliente', selector: 'customer', sortable: true, wrap: true, minWidth: '220px' },
    { id: 'status', name: 'Situação', selector: 'status', sortable: true, center: true, width: '120px' },
    { id: 'total', name: 'Total', selector: (row: any) => this.demoData.formatTotal(row), sortable: true, right: true, width: '130px' }
  ];

  // Same option names as react-data-table-component, plus the remaining pager texts.
  paginationOptions: DataTablePaginationOptions = {
    rowsPerPageText: 'Linhas por página:',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
    showingText: 'Mostrando',
    pageText: 'Página',
    firstPageText: 'Primeira',
    previousPageText: 'Anterior',
    nextPageText: 'Próxima',
    lastPageText: 'Última'
  };

  // Screen reader labels. {column} is replaced with the column name.
  localization: DataTableLocalization = {
    pagination: {
      navigationAriaLabel: 'Paginação',
      firstPageAriaLabel: 'Primeira página',
      previousPageAriaLabel: 'Página anterior',
      nextPageAriaLabel: 'Próxima página',
      lastPageAriaLabel: 'Última página',
      rowsPerPageAriaLabel: 'Linhas por página'
    },
    sort: {
      ascendingText: 'Cresc.',
      descendingText: 'Decresc.',
      unsortedText: 'Ordenar',
      sortAscendingAriaLabel: 'Ordenar {column} em ordem crescente',
      sortDescendingAriaLabel: 'Ordenar {column} em ordem decrescente',
      columnAriaLabel: 'Coluna {column}'
    }
  };

  recordSort(event: DataTableSortEvent) {
    this.record('sort', {
      column: event.column.id,
      direction: event.direction
    });
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
