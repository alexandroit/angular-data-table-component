import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'programmatic-selection-example',
  templateUrl: './programmatic-selection.component.html',
  styleUrls: ['./programmatic-selection.component.css']
})
export class ProgrammaticSelectionExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Programmatic selection';
  summary = 'Preselect rows from a predicate supplied by the app.';
  ticketColumns = this.demoData.getTicketColumns();
  tickets = this.demoData.getTickets();

  isHighPriority(row: any) {
    return row.priority === 'High';
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.tickets.slice(0, 3));
  }
}
