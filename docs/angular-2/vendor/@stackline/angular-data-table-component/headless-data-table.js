System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1, HeadlessDataTableController;
    var __moduleName = context_1 && context_1.id;
    function createDataTableController(options) {
        return new HeadlessDataTableController(options);
    }
    exports_1("createDataTableController", createDataTableController);
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            HeadlessDataTableController = /** @class */ (function () {
                function HeadlessDataTableController(options) {
                    this.columns = [];
                    this.data = [];
                    this.keyField = 'id';
                    this.pagination = false;
                    this.paginationServer = false;
                    this.totalRowCount = 0;
                    this.sortServer = false;
                    this.globalFilter = '';
                    this.columnFilters = [];
                    this.columnVisibility = {};
                    this.columnOrder = [];
                    this.selectableRows = false;
                    this.selectableRowsSingle = false;
                    this.currentPage = 1;
                    this.rowsPerPage = 10;
                    this.sortDirection = 'asc';
                    this.activeSortColumn = null;
                    this.selectedKeys = {};
                    this.onSortChange = null;
                    this.onSelectionChange = null;
                    this.onPageChange = null;
                    this.onRowsPerPageChange = null;
                    this.onStateChange = null;
                    this.update(options || { columns: [], data: [] });
                }
                HeadlessDataTableController.prototype.update = function (options) {
                    this.columns = options.columns || [];
                    this.data = options.data || [];
                    this.keyField = options.keyField || this.keyField || 'id';
                    this.pagination = !!options.pagination;
                    this.paginationServer = !!options.paginationServer;
                    this.totalRowCount = Number(options.totalRows || 0);
                    this.sortServer = !!options.sortServer;
                    this.globalFilter = options.globalFilter || '';
                    this.columnFilters = options.columnFilters || [];
                    this.columnVisibility = options.columnVisibility || {};
                    this.columnOrder = options.columnOrder || [];
                    this.selectableRows = !!options.selectableRows;
                    this.selectableRowsSingle = !!options.selectableRowsSingle;
                    this.currentPage = options.page || this.currentPage || 1;
                    this.rowsPerPage = options.perPage || this.rowsPerPage || 10;
                    this.onSortChange = options.onSortChange || null;
                    this.onSelectionChange = options.onSelectionChange || null;
                    this.onPageChange = options.onPageChange || null;
                    this.onRowsPerPageChange = options.onRowsPerPageChange || null;
                    this.onStateChange = options.onStateChange || null;
                    if (options.selectedKeys) {
                        this.selectedKeys = options.selectedKeys;
                    }
                    this.ensureValidPage();
                    return this;
                };
                Object.defineProperty(HeadlessDataTableController.prototype, "flatColumns", {
                    get: function () {
                        return this.flattenColumns(this.columns);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "visibleColumns", {
                    get: function () {
                        var _this = this;
                        var columns = this.flatColumns.filter(function (column) {
                            return !column.omit && _this.isColumnVisible(column);
                        });
                        var order = this.columnOrder || [];
                        var ordered = [];
                        var used = {};
                        var key;
                        var i;
                        var j;
                        for (i = 0; i < order.length; i += 1) {
                            key = String(order[i]);
                            for (j = 0; j < columns.length; j += 1) {
                                if (!used[this.getColumnKey(columns[j])] && this.getColumnKey(columns[j]) === key) {
                                    ordered.push(columns[j]);
                                    used[key] = true;
                                    break;
                                }
                            }
                        }
                        for (i = 0; i < columns.length; i += 1) {
                            key = this.getColumnKey(columns[i]);
                            if (!used[key]) {
                                ordered.push(columns[i]);
                            }
                        }
                        return ordered;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "filteredRows", {
                    get: function () {
                        var rows = this.applyGlobalFilter(this.data);
                        return this.applyColumnFilters(rows);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "sortedRows", {
                    get: function () {
                        if (this.sortServer) {
                            return this.filteredRows.slice(0);
                        }
                        return utils_1.sortRows(this.filteredRows, this.activeSortColumn, this.sortDirection);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "displayedRows", {
                    get: function () {
                        var rows = this.sortedRows;
                        var start;
                        if (this.pagination && !this.paginationServer) {
                            start = (this.currentPage - 1) * this.rowsPerPage;
                            return rows.slice(start, start + this.rowsPerPage);
                        }
                        return rows;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "totalRows", {
                    get: function () {
                        return this.paginationServer ? (this.totalRowCount || this.data.length) : this.filteredRows.length;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "totalPages", {
                    get: function () {
                        return Math.max(1, Math.ceil(Math.max(this.totalRows, 1) / this.rowsPerPage));
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "startRow", {
                    get: function () {
                        if (!this.totalRows) {
                            return 0;
                        }
                        return (this.currentPage - 1) * this.rowsPerPage + 1;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "endRow", {
                    get: function () {
                        if (!this.totalRows) {
                            return 0;
                        }
                        return Math.min(this.currentPage * this.rowsPerPage, this.totalRows);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "selectedRows", {
                    get: function () {
                        var rows = [];
                        var i;
                        for (i = 0; i < this.data.length; i += 1) {
                            if (this.isRowSelected(this.data[i])) {
                                rows.push(this.data[i]);
                            }
                        }
                        return rows;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "selectedCount", {
                    get: function () {
                        return this.selectedRows.length;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "allRowsSelected", {
                    get: function () {
                        var rows = this.displayedRows;
                        var i;
                        if (!rows.length) {
                            return false;
                        }
                        for (i = 0; i < rows.length; i += 1) {
                            if (!this.isRowSelected(rows[i])) {
                                return false;
                            }
                        }
                        return true;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HeadlessDataTableController.prototype, "state", {
                    get: function () {
                        return {
                            globalFilter: this.globalFilter,
                            columnFilters: this.columnFilters,
                            columnVisibility: this.columnVisibility,
                            columnOrder: this.columnOrder,
                            groupBy: []
                        };
                    },
                    enumerable: false,
                    configurable: true
                });
                HeadlessDataTableController.prototype.getColumnKey = function (column) {
                    return String(column.id !== undefined && column.id !== null ? column.id : column.name);
                };
                HeadlessDataTableController.prototype.getRowKey = function (row) {
                    if (row && row[this.keyField] !== undefined && row[this.keyField] !== null) {
                        return String(row[this.keyField]);
                    }
                    return String(this.data.indexOf(row));
                };
                HeadlessDataTableController.prototype.getCellValue = function (row, column, rowIndex) {
                    return utils_1.resolveCellValue(row, column, rowIndex);
                };
                HeadlessDataTableController.prototype.getCellText = function (row, column, rowIndex) {
                    return utils_1.toCellText(this.getCellValue(row, column, rowIndex));
                };
                HeadlessDataTableController.prototype.getAriaSort = function (column) {
                    if (!column.sortable) {
                        return null;
                    }
                    if (this.activeSortColumn !== column) {
                        return 'none';
                    }
                    return this.sortDirection === 'asc' ? 'ascending' : 'descending';
                };
                HeadlessDataTableController.prototype.getSortButtonAriaLabel = function (column) {
                    var name = String(column.name || this.getColumnKey(column));
                    if (!column.sortable) {
                        return name + ' column';
                    }
                    if (this.activeSortColumn !== column) {
                        return 'Sort ' + name + ' ascending';
                    }
                    return this.sortDirection === 'asc'
                        ? 'Sort ' + name + ' descending'
                        : 'Sort ' + name + ' ascending';
                };
                HeadlessDataTableController.prototype.isColumnVisible = function (column) {
                    var key = this.getColumnKey(column);
                    return this.columnVisibility[key] !== false;
                };
                HeadlessDataTableController.prototype.isRowSelected = function (row) {
                    return !!this.selectedKeys[this.getRowKey(row)];
                };
                HeadlessDataTableController.prototype.toggleSort = function (column) {
                    if (!column.sortable) {
                        return;
                    }
                    if (this.activeSortColumn === column) {
                        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                    }
                    else {
                        this.activeSortColumn = column;
                        this.sortDirection = 'asc';
                    }
                    this.currentPage = 1;
                    if (this.onSortChange) {
                        this.onSortChange({
                            column: column,
                            direction: this.sortDirection,
                            rows: this.sortedRows
                        });
                    }
                    this.emitState();
                };
                HeadlessDataTableController.prototype.toggleRowSelection = function (row) {
                    var key;
                    if (!this.selectableRows) {
                        return;
                    }
                    key = this.getRowKey(row);
                    if (this.selectableRowsSingle) {
                        this.selectedKeys = {};
                        this.selectedKeys[key] = true;
                    }
                    else if (this.selectedKeys[key]) {
                        delete this.selectedKeys[key];
                    }
                    else {
                        this.selectedKeys[key] = true;
                    }
                    this.emitSelection();
                };
                HeadlessDataTableController.prototype.toggleAllVisibleRows = function () {
                    var rows = this.displayedRows;
                    var shouldSelect = !this.allRowsSelected;
                    var i;
                    if (!this.selectableRows) {
                        return;
                    }
                    if (this.selectableRowsSingle) {
                        this.selectedKeys = {};
                        if (shouldSelect && rows.length) {
                            this.selectedKeys[this.getRowKey(rows[0])] = true;
                        }
                    }
                    else {
                        for (i = 0; i < rows.length; i += 1) {
                            if (shouldSelect) {
                                this.selectedKeys[this.getRowKey(rows[i])] = true;
                            }
                            else {
                                delete this.selectedKeys[this.getRowKey(rows[i])];
                            }
                        }
                    }
                    this.emitSelection();
                };
                HeadlessDataTableController.prototype.changePage = function (page) {
                    this.currentPage = utils_1.clamp(page, 1, this.totalPages);
                    if (this.onPageChange) {
                        this.onPageChange({
                            page: this.currentPage,
                            totalRows: this.totalRows
                        });
                    }
                    this.emitState();
                };
                HeadlessDataTableController.prototype.changeRowsPerPage = function (rowsPerPage) {
                    this.rowsPerPage = Number(rowsPerPage) || this.rowsPerPage;
                    this.currentPage = 1;
                    if (this.onRowsPerPageChange) {
                        this.onRowsPerPageChange({
                            rowsPerPage: this.rowsPerPage,
                            currentPage: this.currentPage
                        });
                    }
                    this.emitState();
                };
                HeadlessDataTableController.prototype.setGlobalFilter = function (value) {
                    this.globalFilter = value || '';
                    this.currentPage = 1;
                    this.ensureValidPage();
                    this.emitState();
                };
                HeadlessDataTableController.prototype.setColumnFilter = function (columnId, value) {
                    var filters = this.getColumnFilterMap();
                    filters[String(columnId)] = value;
                    this.columnFilters = filters;
                    this.currentPage = 1;
                    this.ensureValidPage();
                    this.emitState();
                };
                HeadlessDataTableController.prototype.flattenColumns = function (columns) {
                    var output = [];
                    var i;
                    var nested;
                    var j;
                    for (i = 0; i < columns.length; i += 1) {
                        if (columns[i].columns && columns[i].columns.length) {
                            nested = this.flattenColumns(columns[i].columns);
                            for (j = 0; j < nested.length; j += 1) {
                                output.push(nested[j]);
                            }
                        }
                        else {
                            output.push(columns[i]);
                        }
                    }
                    return output;
                };
                HeadlessDataTableController.prototype.applyGlobalFilter = function (rows) {
                    var value = (this.globalFilter || '').toLowerCase();
                    var columns = this.visibleColumns;
                    var output = [];
                    var i;
                    var j;
                    if (!value) {
                        return rows.slice(0);
                    }
                    for (i = 0; i < rows.length; i += 1) {
                        for (j = 0; j < columns.length; j += 1) {
                            if (this.getCellText(rows[i], columns[j], i).toLowerCase().indexOf(value) !== -1) {
                                output.push(rows[i]);
                                break;
                            }
                        }
                    }
                    return output;
                };
                HeadlessDataTableController.prototype.applyColumnFilters = function (rows) {
                    var filters = this.getColumnFilterMap();
                    var keys = [];
                    var key;
                    var output = [];
                    var columns = this.visibleColumns;
                    var column;
                    var i;
                    for (key in filters) {
                        if (filters.hasOwnProperty(key) && filters[key] !== null && filters[key] !== undefined && filters[key] !== '') {
                            keys.push(key);
                        }
                    }
                    if (!keys.length) {
                        return rows.slice(0);
                    }
                    for (i = 0; i < rows.length; i += 1) {
                        if (this.rowPassesColumnFilters(rows[i], i, keys, filters, columns)) {
                            output.push(rows[i]);
                        }
                    }
                    return output;
                };
                HeadlessDataTableController.prototype.rowPassesColumnFilters = function (row, rowIndex, keys, filters, columns) {
                    var i;
                    var column;
                    var value;
                    for (i = 0; i < keys.length; i += 1) {
                        column = this.findColumn(keys[i], columns);
                        if (!column) {
                            continue;
                        }
                        value = filters[keys[i]];
                        if (column.filterFn) {
                            if (!column.filterFn(row, value, column)) {
                                return false;
                            }
                        }
                        else if (this.getCellText(row, column, rowIndex).toLowerCase().indexOf(String(value).toLowerCase()) === -1) {
                            return false;
                        }
                    }
                    return true;
                };
                HeadlessDataTableController.prototype.findColumn = function (columnId, columns) {
                    var key = String(columnId);
                    var i;
                    for (i = 0; i < columns.length; i += 1) {
                        if (this.getColumnKey(columns[i]) === key) {
                            return columns[i];
                        }
                    }
                    return null;
                };
                HeadlessDataTableController.prototype.getColumnFilterMap = function () {
                    var output = {};
                    var filters = this.columnFilters || [];
                    var i;
                    if (filters.length !== undefined) {
                        for (i = 0; i < filters.length; i += 1) {
                            output[String(filters[i].id)] = filters[i].value;
                        }
                        return output;
                    }
                    for (var key in filters) {
                        if (filters.hasOwnProperty(key)) {
                            output[key] = filters[key];
                        }
                    }
                    return output;
                };
                HeadlessDataTableController.prototype.ensureValidPage = function () {
                    this.currentPage = utils_1.clamp(this.currentPage || 1, 1, this.totalPages);
                };
                HeadlessDataTableController.prototype.emitSelection = function () {
                    if (this.onSelectionChange) {
                        this.onSelectionChange({
                            allSelected: this.allRowsSelected,
                            selectedCount: this.selectedCount,
                            selectedRows: this.selectedRows
                        });
                    }
                };
                HeadlessDataTableController.prototype.emitState = function () {
                    if (this.onStateChange) {
                        this.onStateChange(this.state);
                    }
                };
                return HeadlessDataTableController;
            }());
            exports_1("HeadlessDataTableController", HeadlessDataTableController);
        }
    };
});
