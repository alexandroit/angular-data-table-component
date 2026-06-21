System.register(["@angular/core", "../../shared/table-example-base", "./expand-on-click.snippets", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, table_example_base_1, expand_on_click_snippets_1, table_demo_data_service_1, ExpandOnClickExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (expand_on_click_snippets_1_1) {
                expand_on_click_snippets_1 = expand_on_click_snippets_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            ExpandOnClickExampleComponent = (function (_super) {
                __extends(ExpandOnClickExampleComponent, _super);
                function ExpandOnClickExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Expand on row click';
                    _this.summary = 'Hide the expander and use row clicks to toggle details.';
                    _this.orderColumns = _this.demoData.getOrderColumns();
                    _this.orders = _this.demoData.getOrders();
                    _this.htmlSnippet = expand_on_click_snippets_1.ExpandOnClickSnippets.html;
                    _this.tsSnippet = expand_on_click_snippets_1.ExpandOnClickSnippets.ts;
                    return _this;
                }
                ExpandOnClickExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet(this.orders.slice(0, 3));
                };
                ExpandOnClickExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'expand-on-click-example',
                        templateUrl: 'app/examples/expand-on-click/expand-on-click.component.html',
                        styleUrls: ['app/examples/expand-on-click/expand-on-click.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], ExpandOnClickExampleComponent);
                return ExpandOnClickExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ExpandOnClickExampleComponent", ExpandOnClickExampleComponent);
        }
    };
});
