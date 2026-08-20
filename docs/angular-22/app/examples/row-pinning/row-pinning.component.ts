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
  summary = 'Pin important rows to the top or bottom while keeping the rest sortable.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  topPinnedOrders: any[] = [];
  bottomPinnedOrders: any[] = [];

  ngOnInit() {
    this.topPinnedOrders = [this.orders[6]];
    this.bottomPinnedOrders = [this.orders[1]];
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
