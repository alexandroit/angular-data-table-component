System.register(["@angular/core", "../../shared/table-example-base", "./basic.snippets", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, table_example_base_1, basic_snippets_1, table_demo_data_service_1, BasicExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (basic_snippets_1_1) {
                basic_snippets_1 = basic_snippets_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            BasicExampleComponent = (function (_super) {
                __extends(BasicExampleComponent, _super);
                function BasicExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Basic usage';
                    _this.summary = 'Sorting, pagination, hover states and multi-row selection in one table.';
                    _this.orderColumns = _this.demoData.getOrderColumns();
                    _this.orders = _this.demoData.getOrders();
                    _this.pageSizes = _this.demoData.getPageSizes();
                    _this.htmlSnippet = basic_snippets_1.BasicSnippets.html;
                    _this.tsSnippet = basic_snippets_1.BasicSnippets.ts;
                    return _this;
                }
                BasicExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet(this.orders.slice(0, 3));
                };
                BasicExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'basic-example',
                        templateUrl: 'app/examples/basic/basic.component.html',
                        styleUrls: ['app/examples/basic/basic.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], BasicExampleComponent);
                return BasicExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("BasicExampleComponent", BasicExampleComponent);
        }
    };
});
