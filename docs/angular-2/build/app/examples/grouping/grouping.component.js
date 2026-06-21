System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base", "./grouping.snippets"], function (exports_1, context_1) {
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
    var core_1, table_demo_data_1, table_example_base_1, grouping_snippets_1, GroupingExampleComponent;
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
            function (grouping_snippets_1_1) {
                grouping_snippets_1 = grouping_snippets_1_1;
            }
        ],
        execute: function () {
            GroupingExampleComponent = (function (_super) {
                __extends(GroupingExampleComponent, _super);
                function GroupingExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Grouping';
                    _this.summary = 'Group rows by a column and expand or collapse each group.';
                    _this.advancedColumns = table_demo_data_1.getAdvancedColumns();
                    _this.orders = table_demo_data_1.orders;
                    _this.groupByField = 'region';
                    _this.htmlSnippet = grouping_snippets_1.GroupingSnippets.html;
                    _this.tsSnippet = grouping_snippets_1.GroupingSnippets.ts;
                    return _this;
                }
                GroupingExampleComponent.prototype.setGroupByField = function (value) {
                    this.groupByField = value || 'region';
                    this.record('group by', { field: this.groupByField });
                };
                GroupingExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.orders.slice(0, 3));
                };
                GroupingExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'grouping-example',
                        templateUrl: 'app/examples/grouping/grouping.component.html'
                    })
                ], GroupingExampleComponent);
                return GroupingExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("GroupingExampleComponent", GroupingExampleComponent);
        }
    };
});
