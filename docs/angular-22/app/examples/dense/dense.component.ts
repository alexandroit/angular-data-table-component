import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'dense-example',
  templateUrl: './dense.component.html',
  styleUrls: ['./dense.component.css']
})
export class DenseExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Dense layout';
  summary = 'Compact row height for operation-heavy screens.';
  ticketColumns = this.demoData.getTicketColumns();
  tickets = this.demoData.getTickets();

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.tickets.slice(0, 3));
  }
}
