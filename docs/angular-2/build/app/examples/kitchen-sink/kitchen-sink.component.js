System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base", "./kitchen-sink.snippets"], function (exports_1, context_1) {
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
    var core_1, table_demo_data_1, table_example_base_1, kitchen_sink_snippets_1, KitchenSinkExampleComponent;
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
            },
            function (kitchen_sink_snippets_1_1) {
                kitchen_sink_snippets_1 = kitchen_sink_snippets_1_1;
            }
        ],
        execute: function () {
            KitchenSinkExampleComponent = (function (_super) {
                __extends(KitchenSinkExampleComponent, _super);
                function KitchenSinkExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Kitchen sink';
                    _this.summary = 'Filtering, visibility, ordering, pinning, grouping, selection, expansion and pagination together.';
                    _this.headerGroupColumns = table_demo_data_1.getHeaderGroupColumns();
                    _this.orders = table_demo_data_1.orders;
                    _this.regionOptions = table_demo_data_1.regionOptions;
                    _this.statusOptions = table_demo_data_1.statusOptions;
                    _this.kitchenGlobalFilter = 'paid';
                    _this.kitchenRegionFilter = 'Canada';
                    _this.kitchenStatusFilter = '';
                    _this.kitchenGroupBy = 'region';
                    _this.kitchenColumnFilters = [{ id: 'region', value: 'Canada' }];
                    _this.kitchenColumnVisibility = { channel: false };
                    _this.kitchenColumnOrder = ['order', 'customer', 'status', 'region', 'total'];
                    _this.columnPinningState = { left: ['order'], right: ['total'] };
                    _this.columnSizingState = { order: 130, customer: 240, total: 130 };
                    _this.topPinnedOrders = [];
                    _this.htmlSnippet = kitchen_sink_snippets_1.KitchenSinkSnippets.html;
                    _this.tsSnippet = kitchen_sink_snippets_1.KitchenSinkSnippets.ts;
                    return _this;
                }
                KitchenSinkExampleComponent.prototype.ngOnInit = function () {
                    this.topPinnedOrders = [this.orders[6]];
                };
                KitchenSinkExampleComponent.prototype.setKitchenGlobalFilter = function (value) {
                    this.kitchenGlobalFilter = value || '';
                    this.record('kitchen search', { value: this.kitchenGlobalFilter });
                };
                KitchenSinkExampleComponent.prototype.setKitchenRegionFilter = function (value) {
                    this.kitchenRegionFilter = value || '';
                    this.syncKitchenFilters();
                };
                KitchenSinkExampleComponent.prototype.setKitchenStatusFilter = function (value) {
                    this.kitchenStatusFilter = value || '';
                    this.syncKitchenFilters();
                };
                KitchenSinkExampleComponent.prototype.setKitchenGroupBy = function (value) {
                    this.kitchenGroupBy = value || 'region';
                    this.record('kitchen group by', { field: this.kitchenGroupBy });
                };
                KitchenSinkExampleComponent.prototype.isKitchenColumnVisible = function (columnId) {
                    return this.kitchenColumnVisibility[columnId] !== false;
                };
                KitchenSinkExampleComponent.prototype.setKitchenColumnVisible = function (columnId, visible) {
                    this.kitchenColumnVisibility = table_demo_data_1.cloneColumnVisibility(this.kitchenColumnVisibility, columnId, visible);
                    this.record('kitchen visibility', this.kitchenColumnVisibility);
                };
                KitchenSinkExampleComponent.prototype.syncKitchenFilters = function () {
                    var filters = [];
                    if (this.kitchenRegionFilter) {
                        filters.push({ id: 'region', value: this.kitchenRegionFilter });
                    }
                    if (this.kitchenStatusFilter) {
                        filters.push({ id: 'status', value: this.kitchenStatusFilter });
                    }
                    this.kitchenColumnFilters = filters;
                    this.record('kitchen filters', filters);
                };
                KitchenSinkExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.orders.slice(0, 3));
                };
                KitchenSinkExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'kitchen-sink-example',
                        templateUrl: 'app/examples/kitchen-sink/kitchen-sink.component.html'
                    })
                ], KitchenSinkExampleComponent);
                return KitchenSinkExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("KitchenSinkExampleComponent", KitchenSinkExampleComponent);
        }
    };
});
