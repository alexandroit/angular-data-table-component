System.register(["@angular/core", "../../shared/table-example-base", "./server-pagination.snippets", "../../services/table-demo-data.service"], function (exports_1, context_1) {
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
    var core_1, table_example_base_1, server_pagination_snippets_1, table_demo_data_service_1, ServerPaginationExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (server_pagination_snippets_1_1) {
                server_pagination_snippets_1 = server_pagination_snippets_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            }
        ],
        execute: function () {
            ServerPaginationExampleComponent = (function (_super) {
                __extends(ServerPaginationExampleComponent, _super);
                function ServerPaginationExampleComponent(demoData) {
                    var _this = _super.call(this) || this;
                    _this.demoData = demoData;
                    _this.title = 'Server pagination';
                    _this.summary = 'The app owns slicing and passes total rows to the component.';
                    _this.orderColumns = _this.demoData.getOrderColumns();
                    _this.orders = _this.demoData.getOrders();
                    _this.pageSizes = _this.demoData.getPageSizes();
                    _this.serverPage = 1;
                    _this.serverRowsPerPage = 4;
                    _this.serverRows = [];
                    _this.htmlSnippet = server_pagination_snippets_1.ServerPaginationSnippets.html;
                    _this.tsSnippet = server_pagination_snippets_1.ServerPaginationSnippets.ts;
                    return _this;
                }
                ServerPaginationExampleComponent.prototype.ngOnInit = function () {
                    this.updateServerRows();
                };
                ServerPaginationExampleComponent.prototype.changeServerPage = function (event) {
                    this.serverPage = event.page;
                    this.updateServerRows();
                    this.record('server page', event);
                };
                ServerPaginationExampleComponent.prototype.changeServerRowsPerPage = function (event) {
                    this.serverRowsPerPage = event.rowsPerPage;
                    this.serverPage = 1;
                    this.updateServerRows();
                    this.record('server rowsPerPage', event);
                };
                ServerPaginationExampleComponent.prototype.updateServerRows = function () {
                    var start = (this.serverPage - 1) * this.serverRowsPerPage;
                    this.serverRows = this.orders.slice(start, start + this.serverRowsPerPage);
                };
                ServerPaginationExampleComponent.prototype.getDataSnippet = function () {
                    return this.demoData.dataSnippet(this.orders.slice(0, 3));
                };
                ServerPaginationExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'server-pagination-example',
                        templateUrl: 'app/examples/server-pagination/server-pagination.component.html',
                        styleUrls: ['app/examples/server-pagination/server-pagination.component.css']
                    }),
                    __metadata("design:paramtypes", [table_demo_data_service_1.TableDemoDataService])
                ], ServerPaginationExampleComponent);
                return ServerPaginationExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ServerPaginationExampleComponent", ServerPaginationExampleComponent);
        }
    };
});
