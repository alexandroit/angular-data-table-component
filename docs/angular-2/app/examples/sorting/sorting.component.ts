import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'sorting-example',
  templateUrl: 'app/examples/sorting/sorting.component.html',
  styleUrls: ['app/examples/sorting/sorting.component.css']
})
export class SortingExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Sortable columns';
  summary = 'Client-side sorting with a default descending sort.';
  inventoryColumns = this.demoData.getInventoryColumns();
  inventory = this.demoData.getInventory();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.inventory.slice(0, 3));
  }
}
