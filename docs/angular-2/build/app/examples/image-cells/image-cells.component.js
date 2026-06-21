System.register(["@angular/core", "../../shared/table-example-base", "../../services/table-demo-data.service"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, table_example_base_1, table_demo_data_service_1, ImageCellsExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            ImageCellsExampleComponent = (function (_super) {
                __extends(ImageCellsExampleComponent, _super);
                function ImageCellsExampleComponent(changeDetector, demoData) {
                    var _this = _super.call(this) || this;
                    _this.changeDetector = changeDetector;
                    _this.demoData = demoData;
                    _this.title = 'Image cells';
                    _this.summary = 'Product and user-media cells rendered with Angular templates and local image assets.';
                    _this.imageColumns = [];
                    _this.products = _this.demoData.getProducts('app/assets/products');
                    return _this;
                }
                ImageCellsExampleComponent.prototype.ngAfterViewInit = function () {
                    this.imageColumns = [
                        { id: 'product', name: 'Product', selector: 'name', cellTemplate: this.productCellTemplate, sortable: true, minWidth: '280px' },
                        { id: 'category', name: 'Category', selector: 'category', sortable: true, width: '180px' },
                        { id: 'owner', name: 'Owner', selector: 'owner', sortable: true, width: '140px' },
                        { id: 'stock', name: 'Stock', selector: 'stock', cellTemplate: this.stockCellTemplate, sortable: true, right: true, width: '120px' }
                    ];
                    this.changeDetector.detectChanges();
                };
                ImageCellsExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet(this.products);
                };
                __decorate([
                    core_1.ViewChild('productCell'),
                    __metadata("design:type", core_1.TemplateRef)
                ], ImageCellsExampleComponent.prototype, "productCellTemplate", void 0);
                __decorate([
                    core_1.ViewChild('stockCell'),
                    __metadata("design:type", core_1.TemplateRef)
                ], ImageCellsExampleComponent.prototype, "stockCellTemplate", void 0);
                ImageCellsExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'image-cells-example',
                        templateUrl: 'app/examples/image-cells/image-cells.component.html',
                        styleUrls: ['app/examples/image-cells/image-cells.component.css']
                    }),
                    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, table_demo_data_service_1.TableDemoDataService])
                ], ImageCellsExampleComponent);
                return ImageCellsExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ImageCellsExampleComponent", ImageCellsExampleComponent);
        }
    };
});
