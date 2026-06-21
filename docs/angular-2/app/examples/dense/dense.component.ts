import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'dense-example',
  templateUrl: 'app/examples/dense/dense.component.html',
  styleUrls: ['app/examples/dense/dense.component.css']
})
export class DenseExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Dense layout';
  summary = 'Compact row height for operation-heavy screens.';
  ticketColumns = this.demoData.getTicketColumns();
  tickets = this.demoData.getTickets();

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.tickets.slice(0, 3));
  }
}
