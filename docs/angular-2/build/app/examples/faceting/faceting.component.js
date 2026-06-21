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
    var core_1, table_demo_data_1, table_example_base_1, FacetingExampleComponent;
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
            FacetingExampleComponent = (function (_super) {
                __extends(FacetingExampleComponent, _super);
                function FacetingExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Faceted values';
                    _this.summary = 'Read unique value counts from the component after filtering.';
                    _this.advancedColumns = table_demo_data_1.getAdvancedColumns();
                    _this.orders = table_demo_data_1.orders;
                    _this.statusOptions = table_demo_data_1.statusOptions;
                    _this.facetFilterText = '';
                    _this.facetStatusFilterValue = '';
                    _this.facetColumnFilters = [];
                    _this.htmlSnippet = "<stackline-data-table\n  #facetedTable\n  title=\"Faceted values\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [globalFilter]=\"facetFilterText\"\n  [columnFilters]=\"facetColumnFilters\">\n</stackline-data-table>\n\n{{ getFacetSummary(facetedTable, 'status') }}";
                    _this.tsSnippet = "getFacetSummary(table: any, columnId: string) {\n  return JSON.stringify(table.getColumnUniqueValues(columnId), null, 2);\n}";
                    return _this;
                }
                FacetingExampleComponent.prototype.setFacetFilter = function (value) {
                    this.facetFilterText = value || '';
                    this.record('facet search', { value: this.facetFilterText });
                };
                FacetingExampleComponent.prototype.setFacetStatusFilter = function (value) {
                    this.facetStatusFilterValue = value || '';
                    this.facetColumnFilters = this.facetStatusFilterValue ? [{ id: 'status', value: this.facetStatusFilterValue }] : [];
                    this.record('facet status', this.facetColumnFilters);
                };
                FacetingExampleComponent.prototype.getFacetSummary = function (table, columnId) {
                    var facets = table && table.getColumnUniqueValues ? table.getColumnUniqueValues(columnId) : {};
                    return JSON.stringify(facets, null, 2);
                };
                FacetingExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.orders.slice(0, 3));
                };
                FacetingExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'faceting-example',
                        templateUrl: 'app/examples/faceting/faceting.component.html'
                    })
                ], FacetingExampleComponent);
                return FacetingExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("FacetingExampleComponent", FacetingExampleComponent);
        }
    };
});
