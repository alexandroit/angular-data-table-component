import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'async-pipe-stream-example',
  templateUrl: './async-pipe-stream.component.html',
  styleUrls: ['./async-pipe-stream.component.css']
})
export class AsyncPipeStreamExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  private streamSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    super();
    this.currentRows = this.demoData.getTickets();
    this.streamSubject.next(this.currentRows);
  }

  title = 'Async pipe stream';
  summary = 'Bind a BehaviorSubject through the async pipe for push-style dashboards.';
  ticketColumns = this.demoData.getTicketColumns();
  rows$: Observable<any[]> = this.streamSubject.asObservable();
  currentRows: any[] = [];
  sequence = 1;

  pushPriorityTicket() {
    this.sequence += 1;
    this.currentRows = [{
      ticket: 'T-45' + this.sequence,
      subject: 'Realtime queue update ' + this.sequence,
      priority: this.sequence % 2 === 0 ? 'High' : 'Normal',
      owner: this.sequence % 2 === 0 ? 'Maya' : 'Theo'
    }].concat(this.currentRows).slice(0, 8);

    this.streamSubject.next(this.currentRows);
    this.record('stream pushed', {
      rows: this.currentRows.length,
      firstTicket: this.currentRows[0].ticket
    });
  }

  resetStream() {
    this.currentRows = this.demoData.getTickets();
    this.streamSubject.next(this.currentRows);
    this.record('stream reset', {
      rows: this.currentRows.length
    });
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet({
      stream: 'BehaviorSubject<any[]>',
      rows: this.currentRows.slice(0, 3)
    } as any);
  }
}
