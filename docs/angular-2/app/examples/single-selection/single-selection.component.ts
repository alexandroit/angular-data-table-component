import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'single-selection-example',
  templateUrl: 'app/examples/single-selection/single-selection.component.html',
  styleUrls: ['app/examples/single-selection/single-selection.component.css']
})
export class SingleSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Single selection';
  summary = 'Radio-style selection for one active item.';
  ticketColumns = this.demoData.getTicketColumns();
  tickets = this.demoData.getTickets();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.tickets.slice(0, 3));
  }
}
