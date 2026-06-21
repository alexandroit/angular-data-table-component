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
    var core_1, table_demo_data_1, table_example_base_1, FixedHeaderExampleComponent;
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
            FixedHeaderExampleComponent = (function (_super) {
                __extends(FixedHeaderExampleComponent, _super);
                function FixedHeaderExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Fixed header';
                    _this.summary = 'Scrollable table body with sticky header support.';
                    _this.revenueColumns = table_demo_data_1.getRevenueColumns();
                    _this.revenue = table_demo_data_1.revenue;
                    _this.htmlSnippet = "<stackline-data-table\n  title=\"Fixed header revenue\"\n  [columns]=\"revenueColumns\"\n  [data]=\"revenue\"\n  [fixedHeader]=\"true\"\n  fixedHeaderScrollHeight=\"320px\">\n</stackline-data-table>";
                    _this.tsSnippet = "revenueColumns = getRevenueColumns();\nrevenue = revenueRows;";
                    return _this;
                }
                FixedHeaderExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.revenue.slice(0, 3));
                };
                FixedHeaderExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'fixed-header-example',
                        templateUrl: 'app/examples/fixed-header/fixed-header.component.html'
                    })
                ], FixedHeaderExampleComponent);
                return FixedHeaderExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("FixedHeaderExampleComponent", FixedHeaderExampleComponent);
        }
    };
});
