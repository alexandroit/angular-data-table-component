System.register(["@angular/core", "../../shared/table-example-base", "./faceting.snippets", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, table_example_base_1, faceting_snippets_1, table_demo_data_service_1, FacetingExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (faceting_snippets_1_1) {
                faceting_snippets_1 = faceting_snippets_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            FacetingExampleComponent = (function (_super) {
                __extends(FacetingExampleComponent, _super);
                function FacetingExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Faceted values';
                    _this.summary = 'Read unique value counts from the component after filtering.';
                    _this.advancedColumns = _this.demoData.getAdvancedColumns();
                    _this.orders = _this.demoData.getOrders();
                    _this.statusOptions = _this.demoData.getStatusOptions();
                    _this.facetFilterText = '';
                    _this.facetStatusFilterValue = '';
                    _this.facetColumnFilters = [];
                    _this.htmlSnippet = faceting_snippets_1.FacetingSnippets.html;
                    _this.tsSnippet = faceting_snippets_1.FacetingSnippets.ts;
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
                    return this.demoData.dataSnippet(this.orders.slice(0, 3));
                };
                FacetingExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'faceting-example',
                        templateUrl: 'app/examples/faceting/faceting.component.html',
                        styleUrls: ['app/examples/faceting/faceting.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], FacetingExampleComponent);
                return FacetingExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("FacetingExampleComponent", FacetingExampleComponent);
        }
    };
});
