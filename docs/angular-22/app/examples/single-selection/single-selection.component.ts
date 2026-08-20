import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'single-selection-example',
  templateUrl: './single-selection.component.html',
  styleUrls: ['./single-selection.component.css']
})
export class SingleSelectionExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Single selection';
  summary = 'Radio-style selection for one active item.';
  ticketColumns = this.demoData.getTicketColumns();
  tickets = this.demoData.getTickets();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.tickets.slice(0, 3));
  }
}
