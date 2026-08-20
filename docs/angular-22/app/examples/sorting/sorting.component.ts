import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'sorting-example',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Sortable columns';
  summary = 'Client-side sorting with a default descending sort.';
  inventoryColumns = this.demoData.getInventoryColumns();
  inventory = this.demoData.getInventory();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.inventory.slice(0, 3));
  }
}
