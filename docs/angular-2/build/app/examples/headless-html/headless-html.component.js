System.register(["@angular/core", "@stackline/angular-data-table-component", "../../shared/table-example-base", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, angular_data_table_component_1, table_example_base_1, table_demo_data_service_1, HeadlessHtmlExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular_data_table_component_1_1) {
                angular_data_table_component_1 = angular_data_table_component_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            HeadlessHtmlExampleComponent = (function (_super) {
                __extends(HeadlessHtmlExampleComponent, _super);
                function HeadlessHtmlExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Headless custom HTML';
                    _this.summary = 'Use the exported table controller while rendering every element with custom application HTML.';
                    _this.searchText = '';
                    _this.statusFilter = '';
                    _this.columns = [
                        { id: 'name', name: 'Project', selector: 'name', sortable: true },
                        { id: 'status', name: 'Status', selector: 'status', sortable: true },
                        { id: 'owner', name: 'Owner', selector: 'owner', sortable: true },
                        { id: 'score', name: 'Score', selector: 'score', sortable: true }
                    ];
                    _this.rows = [
                        { id: 1, name: 'Mobile audit', status: 'Ready', owner: 'Maya', score: 92 },
                        { id: 2, name: 'Billing export', status: 'Review', owner: 'Theo', score: 76 },
                        { id: 3, name: 'Support queue', status: 'Ready', owner: 'Iris', score: 88 },
                        { id: 4, name: 'Security report', status: 'Blocked', owner: 'Noah', score: 63 },
                        { id: 5, name: 'Warehouse sync', status: 'Ready', owner: 'Lena', score: 81 },
                        { id: 6, name: 'Invoice matching', status: 'Review', owner: 'Maya', score: 74 }
                    ];
                    return _this;
                }
                HeadlessHtmlExampleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.headless = angular_data_table_component_1.createDataTableController({
                        columns: this.columns,
                        data: this.rows,
                        selectableRows: true,
                        pagination: true,
                        perPage: 4,
                        onSelectionChange: function (event) { return _this.record('headless selection', event); },
                        onSortChange: function (event) { return _this.record('headless sort', {
                            column: event.column.id,
                            direction: event.direction
                        }); },
                        onPageChange: function (event) { return _this.record('headless page', event); },
                        onRowsPerPageChange: function (event) { return _this.record('headless rowsPerPage', event); }
                    });
                };
                HeadlessHtmlExampleComponent.prototype.setSearch = function (value) {
                    this.searchText = value || '';
                    this.headless.setGlobalFilter(this.searchText);
                    this.record('headless search', { value: this.searchText });
                };
                HeadlessHtmlExampleComponent.prototype.setStatus = function (value) {
                    this.statusFilter = value || '';
                    this.headless.setColumnFilter('status', this.statusFilter);
                    this.record('headless status', { value: this.statusFilter });
                };
                HeadlessHtmlExampleComponent.prototype.activateCard = function (event, row) {
                    if (event.keyCode !== 13 && event.keyCode !== 32) {
                        return;
                    }
                    event.preventDefault();
                    this.headless.toggleRowSelection(row);
                };
                HeadlessHtmlExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet({
                        rows: this.rows.slice(0, 3),
                        state: {
                            totalRows: this.headless ? this.headless.totalRows : this.rows.length,
                            currentPage: this.headless ? this.headless.currentPage : 1,
                            rowsPerPage: this.headless ? this.headless.rowsPerPage : 4,
                            selectedCount: this.headless ? this.headless.selectedCount : 0
                        }
                    });
                };
                HeadlessHtmlExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'headless-html-example',
                        templateUrl: 'app/examples/headless-html/headless-html.component.html',
                        styleUrls: ['app/examples/headless-html/headless-html.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], HeadlessHtmlExampleComponent);
                return HeadlessHtmlExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("HeadlessHtmlExampleComponent", HeadlessHtmlExampleComponent);
        }
    };
});
