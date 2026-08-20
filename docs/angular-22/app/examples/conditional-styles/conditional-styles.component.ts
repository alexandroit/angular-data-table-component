import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'conditional-styles-example',
  templateUrl: './conditional-styles.component.html',
  styleUrls: ['./conditional-styles.component.css']
})
export class ConditionalStylesExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Conditional styles';
  summary = 'Apply row classes or styles from row data.';
  inventoryColumns = this.demoData.getInventoryColumns();
  inventory = this.demoData.getInventory();
  inventoryStyles = [
    {
      when: function(row: any) {
        return row.stock < 10;
      },
      className: 'row-warning'
    }
  ];

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.inventory.slice(0, 3));
  }
}
