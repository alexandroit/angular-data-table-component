import { Component, AfterViewInit, ChangeDetectorRef, TemplateRef, ViewChild, inject } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'image-cells-example',
  templateUrl: './image-cells.component.html',
  styleUrls: ['./image-cells.component.css']
})
export class ImageCellsExampleComponent extends TableExampleBase implements AfterViewInit {
  protected demoData = inject(TableDemoDataService);
  @ViewChild('productCell', { static: true }) productCellTemplate!: TemplateRef<any>;
  @ViewChild('stockCell', { static: true }) stockCellTemplate!: TemplateRef<any>;

  title = 'Image cells';
  summary = 'Product and user-media cells rendered with Angular templates and local image assets.';
  imageColumns: any[] = [];
  products = this.demoData.getProducts('app/assets/products');

  constructor(private changeDetector: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit() {
    this.imageColumns = [
      { id: 'product', name: 'Product', selector: 'name', cellTemplate: this.productCellTemplate, sortable: true, minWidth: '280px' },
      { id: 'category', name: 'Category', selector: 'category', sortable: true, width: '180px' },
      { id: 'owner', name: 'Owner', selector: 'owner', sortable: true, width: '140px' },
      { id: 'stock', name: 'Stock', selector: 'stock', cellTemplate: this.stockCellTemplate, sortable: true, right: true, width: '120px' }
    ];
    this.changeDetector.detectChanges();
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet(this.products);
  }
}
