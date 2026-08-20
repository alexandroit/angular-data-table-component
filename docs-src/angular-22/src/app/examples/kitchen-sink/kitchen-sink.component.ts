import { Component, OnInit, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'kitchen-sink-example',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.css']
})
export class KitchenSinkExampleComponent extends TableExampleBase implements OnInit {
  protected demoData = inject(TableDemoDataService);
  constructor() {
    super();
  }

  title = 'Kitchen sink';
  summary = 'Filtering, visibility, ordering, pinning, grouping, selection, expansion and pagination together.';
  headerGroupColumns = this.demoData.getHeaderGroupColumns();
  orders = this.demoData.getOrders();
  regionOptions = this.demoData.getRegionOptions();
  statusOptions = this.demoData.getStatusOptions();
  kitchenGlobalFilter = 'paid';
  kitchenRegionFilter = 'Canada';
  kitchenStatusFilter = '';
  kitchenGroupBy = 'region';
  kitchenColumnFilters = [{ id: 'region', value: 'Canada' }];
  kitchenColumnVisibility: any = { channel: false };
  kitchenColumnOrder: any[] = ['order', 'customer', 'status', 'region', 'total'];
  columnPinningState: any = { left: ['order'], right: ['total'] };
  columnSizingState: any = { order: 130, customer: 240, total: 130 };
  topPinnedOrders: any[] = [];

  ngOnInit() {
    this.topPinnedOrders = [this.orders[6]];
  }

  setKitchenGlobalFilter(value: string) {
    this.kitchenGlobalFilter = value || '';
    this.record('kitchen search', { value: this.kitchenGlobalFilter });
  }

  setKitchenRegionFilter(value: string) {
    this.kitchenRegionFilter = value || '';
    this.syncKitchenFilters();
  }

  setKitchenStatusFilter(value: string) {
    this.kitchenStatusFilter = value || '';
    this.syncKitchenFilters();
  }

  setKitchenGroupBy(value: string) {
    this.kitchenGroupBy = value || 'region';
    this.record('kitchen group by', { field: this.kitchenGroupBy });
  }

  isKitchenColumnVisible(columnId: string) {
    return this.kitchenColumnVisibility[columnId] !== false;
  }

  setKitchenColumnVisible(columnId: string, visible: boolean) {
    this.kitchenColumnVisibility = this.demoData.cloneColumnVisibility(this.kitchenColumnVisibility, columnId, visible);
    this.record('kitchen visibility', this.kitchenColumnVisibility);
  }

  syncKitchenFilters() {
    var filters: any[] = [];

    if (this.kitchenRegionFilter) {
      filters.push({ id: 'region', value: this.kitchenRegionFilter });
    }

    if (this.kitchenStatusFilter) {
      filters.push({ id: 'status', value: this.kitchenStatusFilter });
    }

    this.kitchenColumnFilters = filters;
    this.record('kitchen filters', filters);
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
