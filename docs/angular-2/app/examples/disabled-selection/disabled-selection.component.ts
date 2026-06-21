import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'disabled-selection-example',
  templateUrl: 'app/examples/disabled-selection/disabled-selection.component.html',
  styleUrls: ['app/examples/disabled-selection/disabled-selection.component.css']
})
export class DisabledSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Disabled selectable rows';
  summary = 'Block selection for locked rows while keeping the table interactive.';
  lockedColumns = this.demoData.getLockedColumns();
  lockedRows = this.demoData.getLockedRows();

  isLocked(row: any) {
    return !!row.locked;
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.lockedRows);
  }
}
