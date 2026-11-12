import { Component, inject } from '@angular/core';
import { DataTablePaginationContext } from '@stackline/angular-data-table-component';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'custom-pagination-template-example',
  templateUrl: './custom-pagination-template.component.html',
  styleUrls: ['./custom-pagination-template.component.css']
})
export class CustomPaginationTemplateExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Custom pagination template';
  summary = 'Replace the pager content with an Angular template; the context carries the page state and the changePage and changeRowsPerPage actions.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  pageSizes = this.demoData.getPageSizes();

  getPageNumbers(totalPages: number) {
    var pages: number[] = [];
    var page: number;

    for (page = 1; page <= totalPages; page += 1) {
      pages.push(page);
    }

    return pages;
  }

  // The current page's button does nothing, so a held Enter on it changes nothing.
  selectPage(pager: DataTablePaginationContext, page: number) {
    if (page !== pager.currentPage) {
      pager.changePage(page);
    }
  }

  // The template owns focus: Previous and Next disable themselves at either end, so focus
  // then moves to the current page's button instead of falling back to the page body.
  step(pager: DataTablePaginationContext, page: number, event: Event) {
    var container = (event.currentTarget as HTMLElement).closest('.custom-pager');

    pager.changePage(page);
    setTimeout(() => {
      var active = document.activeElement as HTMLButtonElement | null;

      if (container && (!active || active === document.body || active.disabled)) {
        (container.querySelector('[aria-current="page"]') as HTMLElement | null)?.focus();
      }
    });
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
