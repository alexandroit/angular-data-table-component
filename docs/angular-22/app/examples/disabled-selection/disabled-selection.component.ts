import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'disabled-selection-example',
  templateUrl: './disabled-selection.component.html',
  styleUrls: ['./disabled-selection.component.css']
})
export class DisabledSelectionExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Disabled selectable rows';
  summary = 'Block selection for locked rows while keeping the table interactive.';
  lockedColumns = this.demoData.getLockedColumns();
  lockedRows = this.demoData.getLockedRows();

  isLocked(row: any) {
    return !!row.locked;
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.lockedRows);
  }
}
