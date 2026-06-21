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
    var core_1, table_demo_data_1, table_example_base_1, RowPinningExampleComponent;
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
            RowPinningExampleComponent = (function (_super) {
                __extends(RowPinningExampleComponent, _super);
                function RowPinningExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Row pinning';
                    _this.summary = 'Pin important rows to the top or bottom while keeping the rest sortable.';
                    _this.advancedColumns = table_demo_data_1.getAdvancedColumns();
                    _this.orders = table_demo_data_1.orders;
                    _this.topPinnedOrders = [];
                    _this.bottomPinnedOrders = [];
                    _this.htmlSnippet = "<stackline-data-table\n  title=\"Row pinning\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [pinnedTopRows]=\"topPinnedOrders\"\n  [pinnedBottomRows]=\"bottomPinnedOrders\">\n</stackline-data-table>";
                    _this.tsSnippet = "topPinnedOrders = [orders[6]];\nbottomPinnedOrders = [orders[1]];";
                    return _this;
                }
                RowPinningExampleComponent.prototype.ngOnInit = function () {
                    this.topPinnedOrders = [this.orders[6]];
                    this.bottomPinnedOrders = [this.orders[1]];
                };
                RowPinningExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.orders.slice(0, 3));
                };
                RowPinningExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'row-pinning-example',
                        templateUrl: 'app/examples/row-pinning/row-pinning.component.html'
                    })
                ], RowPinningExampleComponent);
                return RowPinningExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("RowPinningExampleComponent", RowPinningExampleComponent);
        }
    };
});
