import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'programmatic-selection-example',
  templateUrl: 'app/examples/programmatic-selection/programmatic-selection.component.html',
  styleUrls: ['app/examples/programmatic-selection/programmatic-selection.component.css']
})
export class ProgrammaticSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Programmatic selection';
  summary = 'Preselect rows from a predicate supplied by the app.';
  ticketColumns = this.demoData.getTicketColumns();
  tickets = this.demoData.getTickets();

  isHighPriority(row: any) {
    return row.priority === 'High';
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.tickets.slice(0, 3));
  }
}
