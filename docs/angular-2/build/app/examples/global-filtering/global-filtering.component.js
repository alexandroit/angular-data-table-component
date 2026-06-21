System.register(["@angular/core", "../../shared/table-example-base", "./global-filtering.snippets", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, table_example_base_1, global_filtering_snippets_1, table_demo_data_service_1, GlobalFilteringExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (global_filtering_snippets_1_1) {
                global_filtering_snippets_1 = global_filtering_snippets_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            GlobalFilteringExampleComponent = (function (_super) {
                __extends(GlobalFilteringExampleComponent, _super);
                function GlobalFilteringExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Global filtering';
                    _this.summary = 'Filter across visible columns with a controlled globalFilter input.';
                    _this.advancedColumns = _this.demoData.getAdvancedColumns();
                    _this.orders = _this.demoData.getOrders();
                    _this.globalFilterText = 'canada';
                    _this.htmlSnippet = global_filtering_snippets_1.GlobalFilteringSnippets.html;
                    _this.tsSnippet = global_filtering_snippets_1.GlobalFilteringSnippets.ts;
                    return _this;
                }
                GlobalFilteringExampleComponent.prototype.setGlobalFilter = function (value) {
                    this.globalFilterText = value || '';
                    this.record('global filter', { value: this.globalFilterText });
                };
                GlobalFilteringExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet(this.orders.slice(0, 3));
                };
                GlobalFilteringExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'global-filtering-example',
                        templateUrl: 'app/examples/global-filtering/global-filtering.component.html',
                        styleUrls: ['app/examples/global-filtering/global-filtering.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], GlobalFilteringExampleComponent);
                return GlobalFilteringExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("GlobalFilteringExampleComponent", GlobalFilteringExampleComponent);
        }
    };
});
