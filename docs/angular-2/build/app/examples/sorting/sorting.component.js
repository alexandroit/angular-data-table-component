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
    var core_1, table_demo_data_1, table_example_base_1, SortingExampleComponent;
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
            SortingExampleComponent = (function (_super) {
                __extends(SortingExampleComponent, _super);
                function SortingExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Sortable columns';
                    _this.summary = 'Client-side sorting with a default descending sort.';
                    _this.inventoryColumns = table_demo_data_1.getInventoryColumns();
                    _this.inventory = table_demo_data_1.inventory;
                    _this.htmlSnippet = "<stackline-data-table\n  title=\"Sortable inventory\"\n  [columns]=\"inventoryColumns\"\n  [data]=\"inventory\"\n  defaultSortFieldId=\"stock\"\n  [defaultSortAsc]=\"false\"\n  [striped]=\"true\"\n  [highlightOnHover]=\"true\">\n</stackline-data-table>";
                    _this.tsSnippet = "inventoryColumns = [\n  { id: 'sku', name: 'SKU', selector: 'sku', sortable: true },\n  { id: 'stock', name: 'Stock', selector: 'stock', sortable: true, right: true }\n];";
                    return _this;
                }
                SortingExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.inventory.slice(0, 3));
                };
                SortingExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'sorting-example',
                        templateUrl: 'app/examples/sorting/sorting.component.html'
                    })
                ], SortingExampleComponent);
                return SortingExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("SortingExampleComponent", SortingExampleComponent);
        }
    };
});
