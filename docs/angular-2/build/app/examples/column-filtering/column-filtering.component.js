System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, table_demo_data_1, table_example_base_1, ColumnFilteringExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_demo_data_1_1) {
                table_demo_data_1 = table_demo_data_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            }
        ],
        execute: function () {
            ColumnFilteringExampleComponent = (function (_super) {
                __extends(ColumnFilteringExampleComponent, _super);
                function ColumnFilteringExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Column filtering';
                    _this.summary = 'Filter individual columns with TanStack-style id/value filter state.';
                    _this.advancedColumns = table_demo_data_1.getAdvancedColumns();
                    _this.orders = table_demo_data_1.orders;
                    _this.statusOptions = table_demo_data_1.statusOptions;
                    _this.regionOptions = table_demo_data_1.regionOptions;
                    _this.columnStatusFilterValue = 'Paid';
                    _this.columnRegionFilterValue = '';
                    _this.statusColumnFilters = [{ id: 'status', value: 'Paid' }];
                    _this.htmlSnippet = "<label>\n  Status combobox\n  <select [value]=\"columnStatusFilterValue\" (change)=\"setColumnStatusFilter($event.target.value)\">\n    <option *ngFor=\"let status of statusOptions\" [value]=\"status\">{{ status || 'All statuses' }}</option>\n  </select>\n</label>\n\n<stackline-data-table\n  title=\"Column filters\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [columnFilters]=\"statusColumnFilters\">\n</stackline-data-table>";
                    _this.tsSnippet = "statusColumnFilters = [{ id: 'status', value: 'Paid' }];\n\nsyncColumnFilters() {\n  var filters = [];\n  if (this.columnStatusFilterValue) filters.push({ id: 'status', value: this.columnStatusFilterValue });\n  if (this.columnRegionFilterValue) filters.push({ id: 'region', value: this.columnRegionFilterValue });\n  this.statusColumnFilters = filters;\n}";
                    return _this;
                }
                ColumnFilteringExampleComponent.prototype.setColumnStatusFilter = function (value) {
                    this.columnStatusFilterValue = value || '';
                    this.syncColumnFilters();
                };
                ColumnFilteringExampleComponent.prototype.setColumnRegionFilter = function (value) {
                    this.columnRegionFilterValue = value || '';
                    this.syncColumnFilters();
                };
                ColumnFilteringExampleComponent.prototype.clearColumnFilters = function () {
                    this.columnStatusFilterValue = '';
                    this.columnRegionFilterValue = '';
                    this.syncColumnFilters();
                };
                ColumnFilteringExampleComponent.prototype.syncColumnFilters = function () {
                    var filters = [];
                    if (this.columnStatusFilterValue) {
                        filters.push({ id: 'status', value: this.columnStatusFilterValue });
                    }
                    if (this.columnRegionFilterValue) {
                        filters.push({ id: 'region', value: this.columnRegionFilterValue });
                    }
                    this.statusColumnFilters = filters;
                    this.record('column filters', filters);
                };
                ColumnFilteringExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.orders.slice(0, 3));
                };
                ColumnFilteringExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'column-filtering-example',
                        templateUrl: 'app/examples/column-filtering/column-filtering.component.html'
                    })
                ], ColumnFilteringExampleComponent);
                return ColumnFilteringExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ColumnFilteringExampleComponent", ColumnFilteringExampleComponent);
        }
    };
});
