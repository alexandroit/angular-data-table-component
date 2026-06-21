import { Component, AfterViewInit, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'cell-templates-example',
  templateUrl: 'app/examples/cell-templates/cell-templates.component.html',
  styleUrls: ['app/examples/cell-templates/cell-templates.component.css']
})
export class CellTemplatesExampleComponent extends TableExampleBase implements AfterViewInit {
  @ViewChild('statusCell') statusCellTemplate: TemplateRef<any>;
  @ViewChild('customerCell') customerCellTemplate: TemplateRef<any>;
  @ViewChild('totalCell') totalCellTemplate: TemplateRef<any>;

  title = 'Custom cell templates';
  summary = 'Angular TemplateRef cells for status, customer and money values.';
  orders = this.demoData.getOrders();
  templateColumns: any[] = [];

  constructor(private changeDetector: ChangeDetectorRef, protected demoData: TableDemoDataService) {
    super();
  }

  ngAfterViewInit() {
    this.templateColumns = [
      { id: 'order', name: 'Order', selector: 'order', sortable: true, width: '130px' },
      { id: 'customer', name: 'Customer', selector: 'customer', cellTemplate: this.customerCellTemplate, wrap: true, minWidth: '220px' },
      { id: 'status', name: 'Status', selector: 'status', cellTemplate: this.statusCellTemplate, center: true, width: '120px' },
      { id: 'total', name: 'Total', selector: (row: any) => this.demoData.formatTotal(row), cellTemplate: this.totalCellTemplate, right: true, width: '130px' }
    ];
    this.changeDetector.detectChanges();
  }

  formatTotal(row: any) {
    return this.demoData.formatTotal(row);
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
