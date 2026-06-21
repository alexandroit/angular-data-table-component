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
    var core_1, table_demo_data_1, table_example_base_1, ConditionalStylesExampleComponent;
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
            ConditionalStylesExampleComponent = (function (_super) {
                __extends(ConditionalStylesExampleComponent, _super);
                function ConditionalStylesExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Conditional styles';
                    _this.summary = 'Apply row classes or styles from row data.';
                    _this.inventoryColumns = table_demo_data_1.getInventoryColumns();
                    _this.inventory = table_demo_data_1.inventory;
                    _this.inventoryStyles = [
                        {
                            when: function (row) {
                                return row.stock < 10;
                            },
                            className: 'row-warning'
                        }
                    ];
                    _this.htmlSnippet = "<stackline-data-table\n  title=\"Inventory risk\"\n  [columns]=\"inventoryColumns\"\n  [data]=\"inventory\"\n  [conditionalRowStyles]=\"inventoryStyles\">\n</stackline-data-table>";
                    _this.tsSnippet = "inventoryStyles = [{\n  when: function(row) { return row.stock < 10; },\n  className: 'row-warning'\n}];";
                    return _this;
                }
                ConditionalStylesExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.inventory.slice(0, 3));
                };
                ConditionalStylesExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'conditional-styles-example',
                        templateUrl: 'app/examples/conditional-styles/conditional-styles.component.html'
                    })
                ], ConditionalStylesExampleComponent);
                return ConditionalStylesExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ConditionalStylesExampleComponent", ConditionalStylesExampleComponent);
        }
    };
});
