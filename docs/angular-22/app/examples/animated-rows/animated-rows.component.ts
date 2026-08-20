import { Component, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'animated-rows-example',
  templateUrl: './animated-rows.component.html',
  styleUrls: ['./animated-rows.component.css']
})
export class AnimatedRowsExampleComponent extends TableExampleBase {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'CSS animated rows';
  summary = 'Use CSS transitions around immutable table refreshes without the deprecated Angular animations package.';
  orderColumns = this.demoData.getAdvancedColumns();
  baseRows = this.demoData.getOrders();
  orders = this.baseRows.slice(0, 6);
  refreshToken = 1;

  rotateRows() {
    var first = this.orders.shift();

    if (first) {
      this.orders = this.orders.concat([first]);
    } else {
      this.orders = this.baseRows.slice(0, 6);
    }

    this.refreshToken += 1;
    this.record('animated rows refreshed', {
      firstOrder: this.orders[0] && this.orders[0].order ? this.orders[0].order : null,
      refreshToken: this.refreshToken
    });
  }

  highlightReviews() {
    this.orders = this.baseRows.filter(function (row) {
      return row.status === 'Review' || row.status === 'Pending';
    });
    this.refreshToken += 1;
    this.record('animated filter applied', {
      rows: this.orders.length
    });
  }

  resetRows() {
    this.orders = this.baseRows.slice(0, 6);
    this.refreshToken += 1;
    this.record('animated rows reset', {
      rows: this.orders.length
    });
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet({
      refreshToken: this.refreshToken,
      rows: this.orders.slice(0, 3)
    } as any);
  }
}
