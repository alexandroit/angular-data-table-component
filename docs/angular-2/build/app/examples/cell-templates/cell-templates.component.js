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
    var core_1, table_example_base_1, table_demo_data_service_1, CellTemplatesExampleComponent;
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
            CellTemplatesExampleComponent = (function (_super) {
                __extends(CellTemplatesExampleComponent, _super);
                function CellTemplatesExampleComponent(changeDetector, demoData) {
                    var _this = _super.call(this) || this;
                    _this.changeDetector = changeDetector;
                    _this.demoData = demoData;
                    _this.title = 'Custom cell templates';
                    _this.summary = 'Angular TemplateRef cells for status, customer and money values.';
                    _this.orders = _this.demoData.getOrders();
                    _this.templateColumns = [];
                    return _this;
                }
                CellTemplatesExampleComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.templateColumns = [
                        { id: 'order', name: 'Order', selector: 'order', sortable: true, width: '130px' },
                        { id: 'customer', name: 'Customer', selector: 'customer', cellTemplate: this.customerCellTemplate, wrap: true, minWidth: '220px' },
                        { id: 'status', name: 'Status', selector: 'status', cellTemplate: this.statusCellTemplate, center: true, width: '120px' },
                        { id: 'total', name: 'Total', selector: function (row) { return _this.demoData.formatTotal(row); }, cellTemplate: this.totalCellTemplate, right: true, width: '130px' }
                    ];
                    this.changeDetector.detectChanges();
                };
                CellTemplatesExampleComponent.prototype.formatTotal = function (row) {
                    return this.demoData.formatTotal(row);
                };
                CellTemplatesExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet(this.orders.slice(0, 3));
                };
                __decorate([
                    core_1.ViewChild('statusCell'),
                    __metadata("design:type", core_1.TemplateRef)
                ], CellTemplatesExampleComponent.prototype, "statusCellTemplate", void 0);
                __decorate([
                    core_1.ViewChild('customerCell'),
                    __metadata("design:type", core_1.TemplateRef)
                ], CellTemplatesExampleComponent.prototype, "customerCellTemplate", void 0);
                __decorate([
                    core_1.ViewChild('totalCell'),
                    __metadata("design:type", core_1.TemplateRef)
                ], CellTemplatesExampleComponent.prototype, "totalCellTemplate", void 0);
                CellTemplatesExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'cell-templates-example',
                        templateUrl: 'app/examples/cell-templates/cell-templates.component.html',
                        styleUrls: ['app/examples/cell-templates/cell-templates.component.css']
                    }),
                    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, table_demo_data_service_1.TableDemoDataService])
                ], CellTemplatesExampleComponent);
                return CellTemplatesExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("CellTemplatesExampleComponent", CellTemplatesExampleComponent);
        }
    };
});
