import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'faceting-example',
  templateUrl: 'app/examples/faceting/faceting.component.html',
  styleUrls: ['app/examples/faceting/faceting.component.css']
})
export class FacetingExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Faceted values';
  summary = 'Read unique value counts from the component after filtering.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  statusOptions = this.demoData.getStatusOptions();
  facetFilterText = '';
  facetStatusFilterValue = '';
  facetColumnFilters: any[] = [];

  setFacetFilter(value: string) {
    this.facetFilterText = value || '';
    this.record('facet search', { value: this.facetFilterText });
  }

  setFacetStatusFilter(value: string) {
    this.facetStatusFilterValue = value || '';
    this.facetColumnFilters = this.facetStatusFilterValue ? [{ id: 'status', value: this.facetStatusFilterValue }] : [];
    this.record('facet status', this.facetColumnFilters);
  }

  getFacetSummary(table: any, columnId: string) {
    var facets = table && table.getColumnUniqueValues ? table.getColumnUniqueValues(columnId) : {};
    return JSON.stringify(facets, null, 2);
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
