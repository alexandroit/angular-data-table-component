System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base", "./expandable-rows.snippets"], function (exports_1, context_1) {
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
    var core_1, table_demo_data_1, table_example_base_1, expandable_rows_snippets_1, ExpandableRowsExampleComponent;
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
            function (expandable_rows_snippets_1_1) {
                expandable_rows_snippets_1 = expandable_rows_snippets_1_1;
            }
        ],
        execute: function () {
            ExpandableRowsExampleComponent = (function (_super) {
                __extends(ExpandableRowsExampleComponent, _super);
                function ExpandableRowsExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Expandable rows';
                    _this.summary = 'Expanded details rendered from an Angular template.';
                    _this.orderColumns = table_demo_data_1.getOrderColumns();
                    _this.orders = table_demo_data_1.orders;
                    _this.htmlSnippet = expandable_rows_snippets_1.ExpandableRowsSnippets.html;
                    _this.tsSnippet = expandable_rows_snippets_1.ExpandableRowsSnippets.ts;
                    return _this;
                }
                ExpandableRowsExampleComponent.prototype.isLargeOrder = function (row) {
                    return row.total > 2000;
                };
                ExpandableRowsExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.orders.slice(0, 3));
                };
                ExpandableRowsExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'expandable-rows-example',
                        templateUrl: 'app/examples/expandable-rows/expandable-rows.component.html'
                    })
                ], ExpandableRowsExampleComponent);
                return ExpandableRowsExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ExpandableRowsExampleComponent", ExpandableRowsExampleComponent);
        }
    };
});
