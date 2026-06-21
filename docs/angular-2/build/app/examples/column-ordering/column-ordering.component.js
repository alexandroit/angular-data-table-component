System.register(["@angular/core", "../../shared/table-example-base", "./column-ordering.snippets", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, table_example_base_1, column_ordering_snippets_1, table_demo_data_service_1, ColumnOrderingExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (column_ordering_snippets_1_1) {
                column_ordering_snippets_1 = column_ordering_snippets_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            ColumnOrderingExampleComponent = (function (_super) {
                __extends(ColumnOrderingExampleComponent, _super);
                function ColumnOrderingExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Column ordering';
                    _this.summary = 'Render columns in a controlled order without mutating the source columns.';
                    _this.advancedColumns = _this.demoData.getAdvancedColumns();
                    _this.orders = _this.demoData.getOrders();
                    _this.columnOrderPreset = 'customer-first';
                    _this.columnOrderState = ['customer', 'order', 'region', 'status', 'total', 'channel'];
                    _this.htmlSnippet = column_ordering_snippets_1.ColumnOrderingSnippets.html;
                    _this.tsSnippet = column_ordering_snippets_1.ColumnOrderingSnippets.ts;
                    return _this;
                }
                ColumnOrderingExampleComponent.prototype.setColumnOrderPreset = function (preset) {
                    this.columnOrderPreset = preset;
                    if (preset === 'money-first') {
                        this.columnOrderState = ['total', 'order', 'customer', 'region', 'status', 'channel'];
                    }
                    else if (preset === 'operations-first') {
                        this.columnOrderState = ['status', 'channel', 'region', 'order', 'customer', 'total'];
                    }
                    else {
                        this.columnOrderState = ['customer', 'order', 'region', 'status', 'total', 'channel'];
                    }
                    this.record('column order preset', { preset: preset, order: this.columnOrderState });
                };
                ColumnOrderingExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet(this.orders.slice(0, 3));
                };
                ColumnOrderingExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'column-ordering-example',
                        templateUrl: 'app/examples/column-ordering/column-ordering.component.html',
                        styleUrls: ['app/examples/column-ordering/column-ordering.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], ColumnOrderingExampleComponent);
                return ColumnOrderingExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ColumnOrderingExampleComponent", ColumnOrderingExampleComponent);
        }
    };
});
