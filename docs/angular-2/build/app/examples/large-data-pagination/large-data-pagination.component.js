System.register(["@angular/core", "../../shared/table-example-base", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, table_example_base_1, table_demo_data_service_1, LargeDataPaginationExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            LargeDataPaginationExampleComponent = (function (_super) {
                __extends(LargeDataPaginationExampleComponent, _super);
                function LargeDataPaginationExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Large data pagination';
                    _this.summary = 'Server-style pagination with a large object-backed dataset and only the visible page in memory.';
                    _this.largeColumns = _this.demoData.getLargeDataColumns();
                    _this.largePage = {
                        rows: [],
                        totalRows: 10000,
                        page: 1,
                        perPage: 25,
                        loading: false
                    };
                    _this.sortField = 'id';
                    _this.sortDirection = 'asc';
                    _this.pageSizes = [10, 25, 50, 100];
                    return _this;
                }
                LargeDataPaginationExampleComponent.prototype.ngOnInit = function () {
                    this.loadPage(1, this.largePage.perPage);
                };
                LargeDataPaginationExampleComponent.prototype.loadPage = function (page, perPage) {
                    this.largePage = {
                        rows: this.demoData.buildLargePage(page, perPage, this.largePage.totalRows, this.sortField, this.sortDirection),
                        totalRows: this.largePage.totalRows,
                        page: page,
                        perPage: perPage,
                        loading: false
                    };
                    this.record('large page loaded', {
                        page: page,
                        perPage: perPage,
                        rowsInMemory: this.largePage.rows.length,
                        totalRows: this.largePage.totalRows
                    });
                };
                LargeDataPaginationExampleComponent.prototype.sortLargeData = function (event) {
                    this.sortField = event.column && event.column.id ? String(event.column.id) : 'id';
                    this.sortDirection = event.direction || 'asc';
                    this.loadPage(1, this.largePage.perPage);
                    this.record('large sort requested', {
                        sortField: this.sortField,
                        sortDirection: this.sortDirection
                    });
                };
                LargeDataPaginationExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet({
                        rows: this.largePage.rows.slice(0, 3),
                        totalRows: this.largePage.totalRows,
                        page: this.largePage.page,
                        perPage: this.largePage.perPage,
                        loading: this.largePage.loading,
                        sortField: this.sortField,
                        sortDirection: this.sortDirection
                    });
                };
                LargeDataPaginationExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'large-data-pagination-example',
                        templateUrl: 'app/examples/large-data-pagination/large-data-pagination.component.html',
                        styleUrls: ['app/examples/large-data-pagination/large-data-pagination.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], LargeDataPaginationExampleComponent);
                return LargeDataPaginationExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("LargeDataPaginationExampleComponent", LargeDataPaginationExampleComponent);
        }
    };
});
