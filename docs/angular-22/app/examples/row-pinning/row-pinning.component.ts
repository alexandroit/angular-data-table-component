import { Component, OnInit, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'row-pinning-example',
  templateUrl: './row-pinning.component.html',
  styleUrls: ['./row-pinning.component.css']
})
export class RowPinningExampleComponent extends TableExampleBase implements OnInit {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Row pinning';
  summary = 'Pin important rows to the top or bottom while keeping the rest sortable, and keep them on every page with keepPinnedRows.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  topPinnedOrders: any[] = [];
  bottomPinnedOrders: any[] = [];
  // Off by default: pinned rows then take part in client pagination, as before 22.2.0.
  keepPinnedRows = false;

  ngOnInit() {
    this.topPinnedOrders = [this.orders[6]];
    this.bottomPinnedOrders = [this.orders[1]];
  }

  setKeepPinnedRows(keep: boolean) {
    this.keepPinnedRows = keep;
    this.record('keepPinnedRows', { keepPinnedRows: keep });
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
