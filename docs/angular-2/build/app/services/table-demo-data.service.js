System.register(["@angular/core", "../models/table-demo-fixtures"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, table_demo_fixtures_1, TableDemoDataService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_demo_fixtures_1_1) {
                table_demo_fixtures_1 = table_demo_fixtures_1_1;
            }
        ],
        execute: function () {
            TableDemoDataService = (function () {
                function TableDemoDataService() {
                }
                TableDemoDataService.prototype.getPageSizes = function () {
                    return table_demo_fixtures_1.pageSizes.slice();
                };
                TableDemoDataService.prototype.getStatusOptions = function () {
                    return table_demo_fixtures_1.statusOptions.slice();
                };
                TableDemoDataService.prototype.getRegionOptions = function () {
                    return table_demo_fixtures_1.regionOptions.slice();
                };
                TableDemoDataService.prototype.getVisibilityColumns = function () {
                    return table_demo_fixtures_1.visibilityColumns.slice();
                };
                TableDemoDataService.prototype.getOrders = function () {
                    return this.cloneRows(table_demo_fixtures_1.orders);
                };
                TableDemoDataService.prototype.getTickets = function () {
                    return this.cloneRows(table_demo_fixtures_1.tickets);
                };
                TableDemoDataService.prototype.getInventory = function () {
                    return this.cloneRows(table_demo_fixtures_1.inventory);
                };
                TableDemoDataService.prototype.getLockedRows = function () {
                    return this.cloneRows(table_demo_fixtures_1.lockedRows);
                };
                TableDemoDataService.prototype.getRevenue = function () {
                    return this.cloneRows(table_demo_fixtures_1.revenue);
                };
                TableDemoDataService.prototype.getLongTextRows = function () {
                    return this.cloneRows(table_demo_fixtures_1.longTextRows);
                };
                TableDemoDataService.prototype.getProducts = function (assetRoot) {
                    return [
                        { id: 1, name: 'Studio Camera', category: 'Media kit', stock: 18, owner: 'Maya', image: assetRoot + '/camera.svg' },
                        { id: 2, name: 'Audio Headphones', category: 'Support desk', stock: 7, owner: 'Theo', image: assetRoot + '/headphones.svg' },
                        { id: 3, name: 'Mechanical Keyboard', category: 'Workspace', stock: 31, owner: 'Iris', image: assetRoot + '/keyboard.svg' },
                        { id: 4, name: 'Ops Watch', category: 'Field team', stock: 12, owner: 'Noah', image: assetRoot + '/watch.svg' }
                    ];
                };
                TableDemoDataService.prototype.getOrderColumns = function () {
                    return table_demo_fixtures_1.getOrderColumns();
                };
                TableDemoDataService.prototype.getAdvancedColumns = function () {
                    return table_demo_fixtures_1.getAdvancedColumns();
                };
                TableDemoDataService.prototype.getHeaderGroupColumns = function () {
                    return table_demo_fixtures_1.getHeaderGroupColumns();
                };
                TableDemoDataService.prototype.getTicketColumns = function () {
                    return table_demo_fixtures_1.getTicketColumns();
                };
                TableDemoDataService.prototype.getInventoryColumns = function () {
                    return table_demo_fixtures_1.getInventoryColumns();
                };
                TableDemoDataService.prototype.getLockedColumns = function () {
                    return table_demo_fixtures_1.getLockedColumns();
                };
                TableDemoDataService.prototype.getRevenueColumns = function () {
                    return table_demo_fixtures_1.getRevenueColumns();
                };
                TableDemoDataService.prototype.getWrappedColumns = function () {
                    return table_demo_fixtures_1.getWrappedColumns();
                };
                TableDemoDataService.prototype.getLargeColumns = function () {
                    return table_demo_fixtures_1.getLargeColumns();
                };
                TableDemoDataService.prototype.getLargeDataColumns = function () {
                    return table_demo_fixtures_1.getLargeDataColumns();
                };
                TableDemoDataService.prototype.buildLargeRows = function () {
                    return table_demo_fixtures_1.buildLargeRows();
                };
                TableDemoDataService.prototype.buildLargePage = function (page, perPage, totalRows, sortField, sortDirection) {
                    return table_demo_fixtures_1.buildLargePage(page, perPage, totalRows, sortField, sortDirection);
                };
                TableDemoDataService.prototype.formatTotal = function (row) {
                    return table_demo_fixtures_1.formatTotal(row);
                };
                TableDemoDataService.prototype.cloneColumnVisibility = function (current, columnId, visible) {
                    return table_demo_fixtures_1.cloneColumnVisibility(current, columnId, visible);
                };
                TableDemoDataService.prototype.dataSnippet = function (value) {
                    return table_demo_fixtures_1.dataSnippet(value);
                };
                TableDemoDataService.prototype.cloneRows = function (rows) {
                    return rows.map(function (row) {
                        var copy = {};
                        var key;
                        for (key in row) {
                            if (row.hasOwnProperty(key)) {
                                copy[key] = row[key];
                            }
                        }
                        return copy;
                    });
                };
                TableDemoDataService = __decorate([
                    core_1.Injectable()
                ], TableDemoDataService);
                return TableDemoDataService;
            }());
            exports_1("TableDemoDataService", TableDemoDataService);
        }
    };
});
