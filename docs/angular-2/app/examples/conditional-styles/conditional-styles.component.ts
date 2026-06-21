import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'conditional-styles-example',
  templateUrl: 'app/examples/conditional-styles/conditional-styles.component.html',
  styleUrls: ['app/examples/conditional-styles/conditional-styles.component.css']
})
export class ConditionalStylesExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
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

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.inventory.slice(0, 3));
  }
}
