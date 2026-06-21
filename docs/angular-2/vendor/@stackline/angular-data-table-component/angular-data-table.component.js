System.register(["@angular/core", "./angular-data-table.styles", "./angular-data-table.template", "./utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular_data_table_styles_1, angular_data_table_template_1, utils_1, DataTableComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular_data_table_styles_1_1) {
                angular_data_table_styles_1 = angular_data_table_styles_1_1;
            },
            function (angular_data_table_template_1_1) {
                angular_data_table_template_1 = angular_data_table_template_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            DataTableComponent = /** @class */ (function () {
                function DataTableComponent() {
                    this.columns = [];
                    this.data = [];
                    this.keyField = 'id';
                    this.title = '';
                    this.ariaLabel = '';
                    this.keyboardRows = true;
                    this.pagination = false;
                    this.paginationServer = false;
                    this.paginationDefaultPage = 1;
                    this.paginationPerPage = 10;
                    this.paginationTotalRows = 0;
                    this.paginationRowsPerPageOptions = [10, 15, 20, 25, 30];
                    this.selectableRows = false;
                    this.selectableRowsSingle = false;
                    this.selectableRowsHighlight = false;
                    this.selectableRowsNoSelectAll = false;
                    this.selectableRowsVisibleOnly = false;
                    this.clearSelectedRows = false;
                    this.selectableRowSelected = null;
                    this.selectableRowDisabled = null;
                    this.expandableRows = false;
                    this.expandableRowsHideExpander = false;
                    this.expandOnRowClicked = false;
                    this.expandOnRowDoubleClicked = false;
                    this.expandableRowDisabled = null;
                    this.expandableRowExpanded = null;
                    this.expandableRowTemplate = null;
                    this.striped = false;
                    this.highlightOnHover = false;
                    this.pointerOnHover = false;
                    this.dense = false;
                    this.responsive = true;
                    this.progressPending = false;
                    this.noHeader = false;
                    this.noTableHead = false;
                    this.fixedHeader = false;
                    this.fixedHeaderScrollHeight = '420px';
                    this.noDataText = 'There are no records to display';
                    this.conditionalRowStyles = [];
                    this.defaultSortFieldId = null;
                    this.defaultSortAsc = true;
                    this.sortServer = false;
                    this.manualSorting = false;
                    this.manualFiltering = false;
                    this.manualPagination = false;
                    this.globalFilter = '';
                    this.columnFilters = [];
                    this.hiddenColumns = [];
                    this.columnVisibility = {};
                    this.columnOrder = [];
                    this.columnPinning = { left: [], right: [] };
                    this.columnSizing = {};
                    this.groupBy = [];
                    this.grouping = [];
                    this.aggregationFns = {};
                    this.pinnedTopRows = [];
                    this.pinnedBottomRows = [];
                    this.rowPinning = null;
                    this.virtualRows = false;
                    this.virtualStartIndex = 0;
                    this.virtualRowCount = 25;
                    this.theme = 'default';
                    this.contextMessage = {
                        singular: 'item',
                        plural: 'items',
                        message: 'selected'
                    };
                    this.sortChange = new core_1.EventEmitter();
                    this.selectedRowsChange = new core_1.EventEmitter();
                    this.pageChange = new core_1.EventEmitter();
                    this.rowsPerPageChange = new core_1.EventEmitter();
                    this.rowClicked = new core_1.EventEmitter();
                    this.rowDoubleClicked = new core_1.EventEmitter();
                    this.rowMouseEnter = new core_1.EventEmitter();
                    this.rowMouseLeave = new core_1.EventEmitter();
                    this.rowExpandToggled = new core_1.EventEmitter();
                    this.globalFilterChange = new core_1.EventEmitter();
                    this.columnFiltersChange = new core_1.EventEmitter();
                    this.columnVisibilityChange = new core_1.EventEmitter();
                    this.columnOrderChange = new core_1.EventEmitter();
                    this.groupingChange = new core_1.EventEmitter();
                    this.tableStateChange = new core_1.EventEmitter();
                    this.currentPage = 1;
                    this.rowsPerPage = 10;
                    this.sortDirection = 'asc';
                    this.activeSortColumn = null;
                    this.selectedKeys = {};
                    this.expandedKeys = {};
                    this.collapsedGroupKeys = {};
                }
                DataTableComponent.prototype.ngOnChanges = function (changes) {
                    if (changes['paginationPerPage']) {
                        this.rowsPerPage = this.paginationPerPage;
                    }
                    if (changes['paginationDefaultPage']) {
                        this.currentPage = this.paginationDefaultPage;
                    }
                    if (changes['clearSelectedRows'] && !changes['clearSelectedRows'].firstChange) {
                        this.selectedKeys = {};
                        this.emitSelectionState();
                    }
                    if (changes['columns'] || changes['defaultSortFieldId'] || changes['defaultSortAsc']) {
                        this.applyDefaultSort();
                    }
                    if (changes['data'] || changes['selectableRowSelected']) {
                        this.syncProgrammaticSelection();
                    }
                    if (changes['data'] || changes['expandableRowExpanded']) {
                        this.syncProgrammaticExpansion();
                    }
                    this.ensureValidPage();
                };
                Object.defineProperty(DataTableComponent.prototype, "flatColumns", {
                    get: function () {
                        return this.flattenColumns(this.columns);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "visibleColumns", {
                    get: function () {
                        var _this = this;
                        var columns = this.flatColumns.filter(function (column) {
                            return !column.omit && _this.isColumnVisible(column);
                        });
                        var order = this.columnOrder || [];
                        var ordered = [];
                        var used = {};
                        var i;
                        var j;
                        var key;
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
                Object.defineProperty(DataTableComponent.prototype, "hasColumnGroups", {
                    get: function () {
                        var columns = this.visibleColumns;
                        var i;
                        for (i = 0; i < columns.length; i += 1) {
                            if (columns[i].group) {
                                return true;
                            }
                        }
                        return false;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "columnGroups", {
                    get: function () {
                        var groups = [];
                        var columns = this.visibleColumns;
                        var i;
                        var label;
                        var current = null;
                        for (i = 0; i < columns.length; i += 1) {
                            label = String(columns[i].group || '');
                            if (!current || current.name !== label) {
                                current = {
                                    name: label,
                                    colspan: 1
                                };
                                groups.push(current);
                            }
                            else {
                                current.colspan += 1;
                            }
                        }
                        return groups;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "shellClassName", {
                    get: function () {
                        return this.joinClasses([
                            'adtc-shell',
                            this.theme === 'dark' ? 'adtc-theme-dark' : ''
                        ]);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "wrapperClassName", {
                    get: function () {
                        return this.joinClasses([
                            'adtc-wrapper',
                            this.responsive ? 'adtc-responsive' : '',
                            this.fixedHeader ? 'adtc-fixed-header' : ''
                        ]);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "scrollClassName", {
                    get: function () {
                        return this.fixedHeader ? 'adtc-scroll' : '';
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "scrollStyle", {
                    get: function () {
                        return this.fixedHeader ? { 'max-height': this.fixedHeaderScrollHeight } : {};
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "tableAriaLabel", {
                    get: function () {
                        return this.ariaLabel || this.title || 'Data table';
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "pinnedTopDisplayRows", {
                    get: function () {
                        return this.getPinnedRows('top');
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "pinnedBottomDisplayRows", {
                    get: function () {
                        return this.getPinnedRows('bottom');
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "filteredPinnedTopRows", {
                    get: function () {
                        return this.filterPinnedRows(this.pinnedTopDisplayRows);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "filteredPinnedBottomRows", {
                    get: function () {
                        return this.filterPinnedRows(this.pinnedBottomDisplayRows);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "unpinnedRows", {
                    get: function () {
                        var pinned = {};
                        var top = this.pinnedTopDisplayRows;
                        var bottom = this.pinnedBottomDisplayRows;
                        var rows = [];
                        var i;
                        for (i = 0; i < top.length; i += 1) {
                            pinned[this.getRowKey(top[i])] = true;
                        }
                        for (i = 0; i < bottom.length; i += 1) {
                            pinned[this.getRowKey(bottom[i])] = true;
                        }
                        for (i = 0; i < this.data.length; i += 1) {
                            if (!pinned[this.getRowKey(this.data[i])]) {
                                rows.push(this.data[i]);
                            }
                        }
                        return rows;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "filteredRows", {
                    get: function () {
                        if (this.manualFiltering) {
                            return this.unpinnedRows.slice(0);
                        }
                        return this.applyFilters(this.unpinnedRows);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "sortedRows", {
                    get: function () {
                        if (this.sortServer || this.manualSorting) {
                            return this.filteredRows.slice(0);
                        }
                        return utils_1.sortRows(this.filteredRows, this.activeSortColumn, this.sortDirection);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "groupedRows", {
                    get: function () {
                        var groups = this.normalizedGrouping;
                        if (!groups.length) {
                            return this.sortedRows;
                        }
                        return this.buildGroupedRows(this.sortedRows, groups, 0, '');
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "bodyRows", {
                    get: function () {
                        var rows = [];
                        var top = this.filteredPinnedTopRows;
                        var bottom = this.filteredPinnedBottomRows;
                        var center = this.groupedRows;
                        var i;
                        for (i = 0; i < top.length; i += 1) {
                            rows.push(top[i]);
                        }
                        for (i = 0; i < center.length; i += 1) {
                            rows.push(center[i]);
                        }
                        for (i = 0; i < bottom.length; i += 1) {
                            rows.push(bottom[i]);
                        }
                        return rows;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "displayedRows", {
                    get: function () {
                        var start;
                        var rows = this.bodyRows;
                        if (this.pagination && !this.paginationServer && !this.manualPagination) {
                            start = (this.currentPage - 1) * this.rowsPerPage;
                            rows = rows.slice(start, start + this.rowsPerPage);
                        }
                        if (this.virtualRows) {
                            start = Math.max(0, this.virtualStartIndex || 0);
                            rows = rows.slice(start, start + Math.max(1, this.virtualRowCount || 25));
                        }
                        return rows;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "hasRows", {
                    get: function () {
                        return this.bodyRows.length > 0;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "totalRows", {
                    get: function () {
                        return (this.paginationServer || this.manualPagination)
                            ? this.paginationTotalRows || this.data.length
                            : this.bodyRows.length;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "totalPages", {
                    get: function () {
                        return Math.max(1, Math.ceil(Math.max(this.totalRows, 1) / this.rowsPerPage));
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "startRow", {
                    get: function () {
                        if (!this.totalRows) {
                            return 0;
                        }
                        return (this.currentPage - 1) * this.rowsPerPage + 1;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "endRow", {
                    get: function () {
                        if (!this.totalRows) {
                            return 0;
                        }
                        return Math.min(this.currentPage * this.rowsPerPage, this.totalRows);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "selectedRows", {
                    get: function () {
                        var rows = [];
                        var i;
                        for (i = 0; i < this.data.length; i += 1) {
                            if (this.selectedKeys[this.getRowKey(this.data[i])]) {
                                rows.push(this.data[i]);
                            }
                        }
                        return rows;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "selectedCount", {
                    get: function () {
                        return this.selectedRows.length;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "selectionScopeRows", {
                    get: function () {
                        return this.selectableRowsVisibleOnly
                            ? this.onlyLeafRows(this.displayedRows)
                            : this.onlyLeafRows(this.bodyRows);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "allRowsSelected", {
                    get: function () {
                        var selectableRows = this.getSelectableRows();
                        var i;
                        if (!selectableRows.length) {
                            return false;
                        }
                        for (i = 0; i < selectableRows.length; i += 1) {
                            if (!this.selectedKeys[this.getRowKey(selectableRows[i])]) {
                                return false;
                            }
                        }
                        return true;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "someRowsSelected", {
                    get: function () {
                        var selectableRows = this.getSelectableRows();
                        var selected = 0;
                        var i;
                        if (!selectableRows.length || this.allRowsSelected) {
                            return false;
                        }
                        for (i = 0; i < selectableRows.length; i += 1) {
                            if (this.selectedKeys[this.getRowKey(selectableRows[i])]) {
                                selected += 1;
                            }
                        }
                        return selected > 0;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "selectAllAriaLabel", {
                    get: function () {
                        return this.selectableRowsVisibleOnly ? 'Select all visible rows' : 'Select all rows';
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "selectAllAriaChecked", {
                    get: function () {
                        if (this.allRowsSelected) {
                            return 'true';
                        }
                        return this.someRowsSelected ? 'mixed' : 'false';
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "showContextBar", {
                    get: function () {
                        return this.selectableRows && this.selectedCount > 0;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "showPagination", {
                    get: function () {
                        return this.pagination && !this.progressPending && this.totalRows > 0;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataTableComponent.prototype, "expandedColspan", {
                    get: function () {
                        return this.visibleColumns.length +
                            (this.selectableRows ? 1 : 0) +
                            (this.expandableRows && !this.expandableRowsHideExpander ? 1 : 0);
                    },
                    enumerable: false,
                    configurable: true
                });
                DataTableComponent.prototype.getCellText = function (row, column, rowIndex) {
                    return utils_1.toCellText(utils_1.resolveCellValue(row, column, rowIndex));
                };
                DataTableComponent.prototype.getAriaSort = function (column) {
                    if (!column.sortable) {
                        return null;
                    }
                    if (this.activeSortColumn !== column) {
                        return 'none';
                    }
                    return this.sortDirection === 'asc' ? 'ascending' : 'descending';
                };
                DataTableComponent.prototype.getSortButtonAriaLabel = function (column) {
                    var name = String(column.name || column.header || this.getColumnKey(column));
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
                DataTableComponent.prototype.getRowAriaSelected = function (row) {
                    return this.selectableRows ? String(this.isRowSelected(row)) : null;
                };
                DataTableComponent.prototype.getRowTabIndex = function (row) {
                    return this.keyboardRows && this.isKeyboardInteractiveRow(row) ? 0 : null;
                };
                DataTableComponent.prototype.getRowSelectionAriaLabel = function (row, rowIndex) {
                    var action = this.selectableRowsSingle ? 'Choose' : (this.isRowSelected(row) ? 'Clear selection for' : 'Select');
                    return action + ' row ' + this.getRowAccessibleLabel(row, rowIndex);
                };
                DataTableComponent.prototype.getRowExpandAriaLabel = function (row, rowIndex) {
                    var action = this.isRowExpanded(row) ? 'Collapse details for' : 'Expand details for';
                    return action + ' row ' + this.getRowAccessibleLabel(row, rowIndex);
                };
                DataTableComponent.prototype.getExpandedRowId = function (row) {
                    return 'adtc-expanded-' + this.sanitizeId(this.getRowKey(row));
                };
                DataTableComponent.prototype.getGroupRowId = function (row) {
                    return 'adtc-group-' + this.sanitizeId(row && row.groupKey ? row.groupKey : 'group');
                };
                DataTableComponent.prototype.getGroupToggleAriaLabel = function (row) {
                    var action = this.isGroupRowExpanded(row) ? 'Collapse group' : 'Expand group';
                    return action + ' ' + row.groupLabel + ' ' + row.groupValue;
                };
                DataTableComponent.prototype.getCellContext = function (row, column, rowIndex) {
                    return {
                        $implicit: row,
                        row: row,
                        rowIndex: rowIndex,
                        column: column,
                        value: utils_1.resolveCellValue(row, column, rowIndex)
                    };
                };
                DataTableComponent.prototype.getExpandableContext = function (row, rowIndex) {
                    return {
                        $implicit: row,
                        row: row,
                        rowIndex: rowIndex
                    };
                };
                DataTableComponent.prototype.toggleSort = function (column) {
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
                    this.sortChange.emit({
                        column: column,
                        direction: this.sortDirection,
                        rows: this.sortedRows
                    });
                    this.emitTableState();
                };
                DataTableComponent.prototype.toggleAllRows = function (checked) {
                    var rows = this.getSelectableRows();
                    var i;
                    if (checked) {
                        if (this.selectableRowsSingle && rows.length) {
                            this.selectedKeys = {};
                            this.selectedKeys[this.getRowKey(rows[0])] = true;
                        }
                        else {
                            for (i = 0; i < rows.length; i += 1) {
                                this.selectedKeys[this.getRowKey(rows[i])] = true;
                            }
                        }
                    }
                    else {
                        for (i = 0; i < rows.length; i += 1) {
                            delete this.selectedKeys[this.getRowKey(rows[i])];
                        }
                    }
                    this.emitSelectionState();
                };
                DataTableComponent.prototype.toggleRowSelection = function (row) {
                    var key;
                    if (this.isSelectableDisabled(row)) {
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
                    this.emitSelectionState();
                };
                DataTableComponent.prototype.isRowSelected = function (row) {
                    return !!this.selectedKeys[this.getRowKey(row)];
                };
                DataTableComponent.prototype.isSelectableDisabled = function (row) {
                    return !!(this.selectableRowDisabled && this.selectableRowDisabled(row));
                };
                DataTableComponent.prototype.handleRowKeydown = function (event, row) {
                    if (!this.isActivationKey(event)) {
                        return;
                    }
                    if (this.isInteractiveEventTarget(event.target)) {
                        return;
                    }
                    if (!this.isKeyboardInteractiveRow(row)) {
                        return;
                    }
                    event.preventDefault();
                    if (this.selectableRows && !this.isSelectableDisabled(row)) {
                        this.toggleRowSelection(row);
                        return;
                    }
                    if (this.expandableRows && !this.isExpandableDisabled(row)) {
                        this.toggleRowExpansion(row);
                        return;
                    }
                    this.rowClicked.emit(row);
                };
                DataTableComponent.prototype.handleSortButtonKeydown = function (event, column) {
                    if (!this.isActivationKey(event)) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this.toggleSort(column);
                };
                DataTableComponent.prototype.handleExpanderKeydown = function (event, row) {
                    if (!this.isActivationKey(event)) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this.toggleRowExpansion(row);
                };
                DataTableComponent.prototype.handleGroupToggleKeydown = function (event, row) {
                    if (!this.isActivationKey(event)) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this.toggleGroupRow(row);
                };
                DataTableComponent.prototype.handleRowClick = function (row) {
                    if (this.expandableRows && this.expandOnRowClicked) {
                        this.toggleRowExpansion(row);
                    }
                    this.rowClicked.emit(row);
                };
                DataTableComponent.prototype.handleRowDoubleClick = function (row) {
                    if (this.expandableRows && this.expandOnRowDoubleClicked) {
                        this.toggleRowExpansion(row);
                    }
                    this.rowDoubleClicked.emit(row);
                };
                DataTableComponent.prototype.handleMouseEnter = function (row) {
                    this.rowMouseEnter.emit(row);
                };
                DataTableComponent.prototype.handleMouseLeave = function (row) {
                    this.rowMouseLeave.emit(row);
                };
                DataTableComponent.prototype.changePage = function (page) {
                    this.currentPage = utils_1.clamp(page, 1, this.totalPages);
                    this.pageChange.emit({
                        page: this.currentPage,
                        totalRows: this.totalRows
                    });
                    this.emitTableState();
                };
                DataTableComponent.prototype.changeRowsPerPage = function (value) {
                    this.rowsPerPage = Number(value) || this.paginationPerPage;
                    this.currentPage = 1;
                    this.rowsPerPageChange.emit({
                        rowsPerPage: this.rowsPerPage,
                        currentPage: this.currentPage
                    });
                    this.ensureValidPage();
                    this.emitTableState();
                };
                DataTableComponent.prototype.toggleRowExpansion = function (row) {
                    var key;
                    if (this.isExpandableDisabled(row)) {
                        return;
                    }
                    key = this.getRowKey(row);
                    if (this.expandedKeys[key]) {
                        delete this.expandedKeys[key];
                    }
                    else {
                        this.expandedKeys[key] = true;
                    }
                    this.rowExpandToggled.emit({
                        expanded: !!this.expandedKeys[key],
                        row: row
                    });
                };
                DataTableComponent.prototype.isRowExpanded = function (row) {
                    return !!this.expandedKeys[this.getRowKey(row)];
                };
                DataTableComponent.prototype.isExpandableDisabled = function (row) {
                    return !!(this.expandableRowDisabled && this.expandableRowDisabled(row));
                };
                DataTableComponent.prototype.isGroupRow = function (row) {
                    return !!(row && row.__adtcGroup);
                };
                DataTableComponent.prototype.isGroupRowExpanded = function (row) {
                    return !this.collapsedGroupKeys[row.groupKey];
                };
                DataTableComponent.prototype.toggleGroupRow = function (row) {
                    if (!this.isGroupRow(row)) {
                        return;
                    }
                    if (this.collapsedGroupKeys[row.groupKey]) {
                        delete this.collapsedGroupKeys[row.groupKey];
                    }
                    else {
                        this.collapsedGroupKeys[row.groupKey] = true;
                    }
                };
                DataTableComponent.prototype.setGlobalFilter = function (value) {
                    this.globalFilter = value || '';
                    this.currentPage = 1;
                    this.globalFilterChange.emit(this.globalFilter);
                    this.emitTableState();
                };
                DataTableComponent.prototype.setColumnFilter = function (columnId, value) {
                    var filters = this.getColumnFilterMap();
                    filters[String(columnId)] = value;
                    this.columnFilters = filters;
                    this.currentPage = 1;
                    this.columnFiltersChange.emit(this.columnFilters);
                    this.emitTableState();
                };
                DataTableComponent.prototype.setColumnVisibility = function (columnId, visible) {
                    var next = {};
                    var key;
                    for (key in this.columnVisibility) {
                        if (this.columnVisibility.hasOwnProperty(key)) {
                            next[key] = this.columnVisibility[key];
                        }
                    }
                    next[String(columnId)] = visible;
                    this.columnVisibility = next;
                    this.columnVisibilityChange.emit(this.columnVisibility);
                    this.emitTableState();
                };
                DataTableComponent.prototype.setColumnOrder = function (order) {
                    this.columnOrder = order || [];
                    this.columnOrderChange.emit(this.columnOrder);
                    this.emitTableState();
                };
                DataTableComponent.prototype.setGrouping = function (grouping) {
                    this.grouping = grouping || [];
                    this.groupBy = grouping || [];
                    this.groupingChange.emit(this.normalizedGrouping);
                    this.emitTableState();
                };
                DataTableComponent.prototype.getColumnUniqueValues = function (columnId) {
                    var column = this.findColumn(columnId);
                    var values = {};
                    var rows = this.filteredRows;
                    var i;
                    var value;
                    var key;
                    if (!column) {
                        return values;
                    }
                    for (i = 0; i < rows.length; i += 1) {
                        value = utils_1.resolveCellValue(rows[i], column, i);
                        key = String(value);
                        values[key] = (values[key] || 0) + 1;
                    }
                    return values;
                };
                DataTableComponent.prototype.getHeaderClassName = function (column) {
                    return this.joinClasses([
                        this.getPinnedClassName(column),
                        column.headerClassName || '',
                        column.right ? 'adtc-align-right' : '',
                        column.center ? 'adtc-align-center' : ''
                    ]);
                };
                DataTableComponent.prototype.getHeaderStyle = function (column) {
                    return this.mergeColumnSize(column, this.mergePinnedStyle(column, column.headerStyle, true));
                };
                DataTableComponent.prototype.getCellClassName = function (column) {
                    return this.joinClasses([
                        this.getPinnedClassName(column),
                        column.className || '',
                        column.right ? 'adtc-align-right' : '',
                        column.center ? 'adtc-align-center' : '',
                        column.wrap ? 'adtc-wrap' : 'adtc-nowrap'
                    ]);
                };
                DataTableComponent.prototype.getCellStyle = function (column) {
                    return this.mergeColumnSize(column, this.mergePinnedStyle(column, column.style, false));
                };
                DataTableComponent.prototype.getSortButtonClassName = function (column) {
                    return this.joinClasses([
                        'adtc-sort-button',
                        column.sortable ? 'adtc-sortable' : '',
                        column.right ? 'adtc-sort-right' : '',
                        column.center ? 'adtc-sort-center' : ''
                    ]);
                };
                DataTableComponent.prototype.getSortIndicatorClassName = function (column) {
                    return this.joinClasses([
                        'adtc-sort-indicator',
                        this.activeSortColumn === column ? 'active' : ''
                    ]);
                };
                DataTableComponent.prototype.getRowClassName = function (row) {
                    var classes = [
                        'adtc-row',
                        this.striped ? 'adtc-row-striped' : '',
                        this.dense ? 'adtc-row-dense' : '',
                        this.highlightOnHover ? 'adtc-row-hoverable' : '',
                        this.pointerOnHover ? 'adtc-row-pointer' : '',
                        this.isPinnedTopRow(row) ? 'adtc-row-pinned-top' : '',
                        this.isPinnedBottomRow(row) ? 'adtc-row-pinned-bottom' : '',
                        this.selectableRowsHighlight && this.isRowSelected(row) ? 'adtc-row-selected' : ''
                    ];
                    var i;
                    var conditional;
                    var className;
                    for (i = 0; i < this.conditionalRowStyles.length; i += 1) {
                        conditional = this.conditionalRowStyles[i];
                        if (conditional.when(row)) {
                            className = conditional.className;
                            if (typeof className === 'function') {
                                classes.push(className(row));
                            }
                            else if (className) {
                                classes.push(className);
                            }
                        }
                    }
                    return this.joinClasses(classes);
                };
                DataTableComponent.prototype.getRowStyle = function (row) {
                    var merged = {};
                    var i;
                    var conditional;
                    var style;
                    var key;
                    for (i = 0; i < this.conditionalRowStyles.length; i += 1) {
                        conditional = this.conditionalRowStyles[i];
                        if (conditional.when(row)) {
                            style = typeof conditional.style === 'function'
                                ? conditional.style(row)
                                : conditional.style;
                            for (key in style) {
                                if (style.hasOwnProperty(key)) {
                                    merged[key] = style[key];
                                }
                            }
                        }
                    }
                    return merged;
                };
                DataTableComponent.prototype.getRowKey = function (row) {
                    var key = row && row[this.keyField] !== undefined ? row[this.keyField] : this.data.indexOf(row);
                    return String(key);
                };
                DataTableComponent.prototype.getColumnKey = function (column) {
                    return String(column.id !== undefined && column.id !== null
                        ? column.id
                        : column.accessorKey || column.selector || column.name);
                };
                DataTableComponent.prototype.flattenColumns = function (columns) {
                    var output = [];
                    var i;
                    var child;
                    var j;
                    for (i = 0; i < columns.length; i += 1) {
                        if (columns[i].columns && columns[i].columns.length) {
                            for (j = 0; j < columns[i].columns.length; j += 1) {
                                child = columns[i].columns[j];
                                output.push(child.group ? child : this.withInheritedGroup(child, columns[i].header || columns[i].name));
                            }
                        }
                        else {
                            output.push(columns[i]);
                        }
                    }
                    return output;
                };
                DataTableComponent.prototype.withInheritedGroup = function (column, group) {
                    var copy = {};
                    var key;
                    for (key in column) {
                        if (column.hasOwnProperty(key)) {
                            copy[key] = column[key];
                        }
                    }
                    copy.group = group;
                    return copy;
                };
                DataTableComponent.prototype.isColumnVisible = function (column) {
                    var key = this.getColumnKey(column);
                    var i;
                    if (column.enableHiding === false) {
                        return true;
                    }
                    if (this.columnVisibility && this.columnVisibility[key] === false) {
                        return false;
                    }
                    for (i = 0; i < this.hiddenColumns.length; i += 1) {
                        if (String(this.hiddenColumns[i]) === key) {
                            return false;
                        }
                    }
                    return true;
                };
                DataTableComponent.prototype.applyFilters = function (rows) {
                    var _this = this;
                    var filtered = rows.slice(0);
                    var global = String(this.globalFilter || '').toLowerCase();
                    var columnFilters = this.getColumnFilterMap();
                    var key;
                    var column;
                    if (global) {
                        filtered = filtered.filter(function (row) { return _this.matchesGlobalFilter(row, global); });
                    }
                    for (key in columnFilters) {
                        if (columnFilters.hasOwnProperty(key) && columnFilters[key] !== null && columnFilters[key] !== undefined && columnFilters[key] !== '') {
                            column = this.findColumn(key);
                            if (column) {
                                filtered = filtered.filter(function (row) { return _this.matchesColumnFilter(row, column, columnFilters[key]); });
                            }
                        }
                    }
                    return filtered;
                };
                DataTableComponent.prototype.matchesGlobalFilter = function (row, global) {
                    var columns = this.visibleColumns;
                    var i;
                    var value;
                    for (i = 0; i < columns.length; i += 1) {
                        if (columns[i].enableGlobalFilter === false) {
                            continue;
                        }
                        value = utils_1.resolveCellValue(row, columns[i], i);
                        if (String(value === null || value === undefined ? '' : value).toLowerCase().indexOf(global) !== -1) {
                            return true;
                        }
                    }
                    return false;
                };
                DataTableComponent.prototype.matchesColumnFilter = function (row, column, filterValue) {
                    var value;
                    var text;
                    if (column.filterFn) {
                        return column.filterFn(row, filterValue, column);
                    }
                    value = utils_1.resolveCellValue(row, column, 0);
                    if (Array.isArray(filterValue)) {
                        if (filterValue.length === 2 && typeof filterValue[0] === 'number' && typeof filterValue[1] === 'number') {
                            return Number(value) >= filterValue[0] && Number(value) <= filterValue[1];
                        }
                        return filterValue.indexOf(value) !== -1;
                    }
                    text = String(value === null || value === undefined ? '' : value).toLowerCase();
                    return text.indexOf(String(filterValue).toLowerCase()) !== -1;
                };
                DataTableComponent.prototype.getColumnFilterMap = function () {
                    var map = {};
                    var filters = this.columnFilters || {};
                    var i;
                    if (Array.isArray(filters)) {
                        for (i = 0; i < filters.length; i += 1) {
                            if (filters[i] && filters[i].id !== undefined) {
                                map[String(filters[i].id)] = filters[i].value;
                            }
                        }
                        return map;
                    }
                    return filters;
                };
                DataTableComponent.prototype.findColumn = function (columnId) {
                    var columns = this.flatColumns;
                    var key = String(columnId);
                    var i;
                    for (i = 0; i < columns.length; i += 1) {
                        if (this.getColumnKey(columns[i]) === key) {
                            return columns[i];
                        }
                    }
                    return null;
                };
                Object.defineProperty(DataTableComponent.prototype, "normalizedGrouping", {
                    get: function () {
                        var source = this.grouping && (Array.isArray(this.grouping) ? this.grouping.length : this.grouping)
                            ? this.grouping
                            : this.groupBy;
                        if (Array.isArray(source)) {
                            return source;
                        }
                        return source === null || source === undefined || source === '' ? [] : [source];
                    },
                    enumerable: false,
                    configurable: true
                });
                DataTableComponent.prototype.buildGroupedRows = function (rows, groups, depth, parentKey) {
                    var column = this.findColumn(groups[depth]);
                    var buckets = {};
                    var order = [];
                    var output = [];
                    var i;
                    var value;
                    var key;
                    var groupRow;
                    var children;
                    if (!column || depth >= groups.length) {
                        return rows;
                    }
                    for (i = 0; i < rows.length; i += 1) {
                        value = utils_1.resolveCellValue(rows[i], column, i);
                        key = String(value);
                        if (!buckets[key]) {
                            buckets[key] = [];
                            order.push(key);
                        }
                        buckets[key].push(rows[i]);
                    }
                    for (i = 0; i < order.length; i += 1) {
                        key = parentKey + String(groups[depth]) + ':' + order[i];
                        groupRow = {
                            __adtcGroup: true,
                            groupKey: key,
                            groupColumn: groups[depth],
                            groupLabel: column.name || groups[depth],
                            groupValue: order[i],
                            depth: depth,
                            leafRows: buckets[order[i]]
                        };
                        output.push(groupRow);
                        if (!this.collapsedGroupKeys[key]) {
                            children = depth + 1 < groups.length
                                ? this.buildGroupedRows(buckets[order[i]], groups, depth + 1, key + '|')
                                : buckets[order[i]];
                            output = output.concat(children);
                        }
                    }
                    return output;
                };
                DataTableComponent.prototype.onlyLeafRows = function (rows) {
                    var output = [];
                    var i;
                    for (i = 0; i < rows.length; i += 1) {
                        if (!this.isGroupRow(rows[i])) {
                            output.push(rows[i]);
                        }
                    }
                    return output;
                };
                DataTableComponent.prototype.getPinnedRows = function (position) {
                    if (this.rowPinning && this.rowPinning[position]) {
                        return this.rowPinning[position] || [];
                    }
                    return position === 'top' ? this.pinnedTopRows || [] : this.pinnedBottomRows || [];
                };
                DataTableComponent.prototype.filterPinnedRows = function (rows) {
                    if (this.manualFiltering) {
                        return rows.slice(0);
                    }
                    return this.applyFilters(rows);
                };
                DataTableComponent.prototype.isPinnedTopRow = function (row) {
                    return this.rowExistsIn(row, this.pinnedTopDisplayRows);
                };
                DataTableComponent.prototype.isPinnedBottomRow = function (row) {
                    return this.rowExistsIn(row, this.pinnedBottomDisplayRows);
                };
                DataTableComponent.prototype.rowExistsIn = function (row, rows) {
                    var key = this.getRowKey(row);
                    var i;
                    for (i = 0; i < rows.length; i += 1) {
                        if (this.getRowKey(rows[i]) === key) {
                            return true;
                        }
                    }
                    return false;
                };
                DataTableComponent.prototype.getPinnedClassName = function (column) {
                    var side = this.getColumnPinSide(column);
                    return side === 'left' ? 'adtc-pinned-left' : side === 'right' ? 'adtc-pinned-right' : '';
                };
                DataTableComponent.prototype.getColumnPinSide = function (column) {
                    var key = this.getColumnKey(column);
                    var left = (this.columnPinning && this.columnPinning.left) || [];
                    var right = (this.columnPinning && this.columnPinning.right) || [];
                    var i;
                    if (column.pin === 'left' || column.pin === 'right') {
                        return column.pin;
                    }
                    for (i = 0; i < left.length; i += 1) {
                        if (String(left[i]) === key) {
                            return 'left';
                        }
                    }
                    for (i = 0; i < right.length; i += 1) {
                        if (String(right[i]) === key) {
                            return 'right';
                        }
                    }
                    return '';
                };
                DataTableComponent.prototype.mergePinnedStyle = function (column, style, header) {
                    var merged = {};
                    var key;
                    var side = this.getColumnPinSide(column);
                    var offset;
                    if (style) {
                        for (key in style) {
                            if (style.hasOwnProperty(key)) {
                                merged[key] = style[key];
                            }
                        }
                    }
                    if (side) {
                        offset = this.getPinnedOffset(column, side);
                        merged.position = 'sticky';
                        merged[side] = offset + 'px';
                        merged.zIndex = header ? 5 : 3;
                        merged.background = this.theme === 'dark' ? '#111c2d' : '#ffffff';
                    }
                    return merged;
                };
                DataTableComponent.prototype.getPinnedOffset = function (column, side) {
                    var columns = this.visibleColumns;
                    var offset = 0;
                    var i;
                    if (side === 'left') {
                        for (i = 0; i < columns.length; i += 1) {
                            if (this.getColumnKey(columns[i]) === this.getColumnKey(column)) {
                                return offset;
                            }
                            if (this.getColumnPinSide(columns[i]) === 'left') {
                                offset += this.getColumnPixelWidth(columns[i]);
                            }
                        }
                    }
                    else {
                        for (i = columns.length - 1; i >= 0; i -= 1) {
                            if (this.getColumnKey(columns[i]) === this.getColumnKey(column)) {
                                return offset;
                            }
                            if (this.getColumnPinSide(columns[i]) === 'right') {
                                offset += this.getColumnPixelWidth(columns[i]);
                            }
                        }
                    }
                    return offset;
                };
                DataTableComponent.prototype.getColumnPixelWidth = function (column) {
                    var key = this.getColumnKey(column);
                    var size = this.columnSizing && this.columnSizing[key] !== undefined ? this.columnSizing[key] : column.size || column.width;
                    var parsed;
                    if (typeof size === 'number') {
                        return size;
                    }
                    if (typeof size === 'string' && size.indexOf('px') !== -1) {
                        parsed = parseInt(size, 10);
                        return isNaN(parsed) ? 160 : parsed;
                    }
                    return 160;
                };
                DataTableComponent.prototype.getSelectableRows = function () {
                    var rows = [];
                    var source = this.selectionScopeRows;
                    var i;
                    for (i = 0; i < source.length; i += 1) {
                        if (!this.isSelectableDisabled(source[i])) {
                            rows.push(source[i]);
                        }
                    }
                    return rows;
                };
                DataTableComponent.prototype.isKeyboardInteractiveRow = function (row) {
                    if (this.selectableRows && !this.isSelectableDisabled(row)) {
                        return true;
                    }
                    if (this.expandableRows && !this.isExpandableDisabled(row)) {
                        return true;
                    }
                    return !!this.pointerOnHover;
                };
                DataTableComponent.prototype.isActivationKey = function (event) {
                    var key = event.key || '';
                    return key === 'Enter' || key === ' ' || key === 'Spacebar' || event.keyCode === 13 || event.keyCode === 32;
                };
                DataTableComponent.prototype.isInteractiveEventTarget = function (target) {
                    var node = target;
                    var tag;
                    var role;
                    while (node) {
                        tag = node.tagName ? String(node.tagName).toLowerCase() : '';
                        role = node.getAttribute ? node.getAttribute('role') : null;
                        if (tag === 'button' ||
                            tag === 'input' ||
                            tag === 'select' ||
                            tag === 'textarea' ||
                            tag === 'a' ||
                            role === 'button' ||
                            role === 'checkbox' ||
                            role === 'radio') {
                            return true;
                        }
                        node = node.parentNode;
                    }
                    return false;
                };
                DataTableComponent.prototype.getRowAccessibleLabel = function (row, rowIndex) {
                    var label = row && (row.ariaLabel || row.label || row.name || row.title);
                    var column;
                    var value;
                    if (label) {
                        return String(label);
                    }
                    column = this.getFirstReadableColumn();
                    if (column) {
                        value = this.getCellText(row, column, rowIndex);
                        if (value) {
                            return value;
                        }
                    }
                    return String(rowIndex + 1);
                };
                DataTableComponent.prototype.getFirstReadableColumn = function () {
                    var columns = this.visibleColumns;
                    var i;
                    for (i = 0; i < columns.length; i += 1) {
                        if (!columns[i].omit) {
                            return columns[i];
                        }
                    }
                    return null;
                };
                DataTableComponent.prototype.sanitizeId = function (value) {
                    return String(value || 'row').replace(/[^a-zA-Z0-9_-]/g, '-');
                };
                DataTableComponent.prototype.emitSelectionState = function () {
                    this.selectedRowsChange.emit({
                        allSelected: this.allRowsSelected,
                        selectedCount: this.selectedCount,
                        selectedRows: this.selectedRows
                    });
                };
                DataTableComponent.prototype.emitTableState = function () {
                    this.tableStateChange.emit({
                        globalFilter: this.globalFilter,
                        columnFilters: this.columnFilters,
                        columnVisibility: this.columnVisibility,
                        columnOrder: this.columnOrder,
                        groupBy: this.normalizedGrouping
                    });
                };
                DataTableComponent.prototype.syncProgrammaticSelection = function () {
                    var next = {};
                    var i;
                    if (!this.selectableRowSelected) {
                        return;
                    }
                    for (i = 0; i < this.data.length; i += 1) {
                        if (this.selectableRowSelected(this.data[i])) {
                            next[this.getRowKey(this.data[i])] = true;
                        }
                    }
                    this.selectedKeys = next;
                    this.emitSelectionState();
                };
                DataTableComponent.prototype.syncProgrammaticExpansion = function () {
                    var next = {};
                    var i;
                    if (!this.expandableRowExpanded) {
                        return;
                    }
                    for (i = 0; i < this.data.length; i += 1) {
                        if (this.expandableRowExpanded(this.data[i])) {
                            next[this.getRowKey(this.data[i])] = true;
                        }
                    }
                    this.expandedKeys = next;
                };
                DataTableComponent.prototype.applyDefaultSort = function () {
                    var i;
                    var column;
                    if (this.defaultSortFieldId === null || this.defaultSortFieldId === undefined) {
                        return;
                    }
                    for (i = 0; i < this.columns.length; i += 1) {
                        column = this.columns[i];
                        if (column.id === this.defaultSortFieldId || column.sortField === this.defaultSortFieldId) {
                            this.activeSortColumn = column;
                            this.sortDirection = this.defaultSortAsc ? 'asc' : 'desc';
                            return;
                        }
                    }
                };
                DataTableComponent.prototype.ensureValidPage = function () {
                    this.currentPage = utils_1.clamp(this.currentPage, 1, this.totalPages);
                };
                DataTableComponent.prototype.mergeColumnSize = function (column, style) {
                    var merged = {};
                    var key;
                    var sizedWidth = null;
                    if (style) {
                        for (key in style) {
                            if (style.hasOwnProperty(key)) {
                                merged[key] = style[key];
                            }
                        }
                    }
                    if (column.width) {
                        merged.width = column.width;
                    }
                    if (column.size) {
                        merged.width = column.size + 'px';
                    }
                    if (this.columnSizing && this.columnSizing[this.getColumnKey(column)] !== undefined) {
                        sizedWidth = typeof this.columnSizing[this.getColumnKey(column)] === 'number'
                            ? this.columnSizing[this.getColumnKey(column)] + 'px'
                            : this.columnSizing[this.getColumnKey(column)];
                        merged.width = sizedWidth;
                    }
                    if (column.minWidth) {
                        merged.minWidth = column.minWidth;
                    }
                    if (column.minSize) {
                        merged.minWidth = column.minSize + 'px';
                    }
                    if (column.maxWidth) {
                        merged.maxWidth = column.maxWidth;
                    }
                    if (column.maxSize) {
                        merged.maxWidth = column.maxSize + 'px';
                    }
                    if (sizedWidth) {
                        if (!merged.minWidth) {
                            merged.minWidth = sizedWidth;
                        }
                        if (!merged.maxWidth) {
                            merged.maxWidth = sizedWidth;
                        }
                    }
                    return merged;
                };
                DataTableComponent.prototype.joinClasses = function (classes) {
                    var output = [];
                    var i;
                    for (i = 0; i < classes.length; i += 1) {
                        if (classes[i]) {
                            output.push(classes[i]);
                        }
                    }
                    return output.join(' ');
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "columns", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "data", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "keyField", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "ariaLabel", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "keyboardRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "pagination", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "paginationServer", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "paginationDefaultPage", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "paginationPerPage", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "paginationTotalRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "paginationRowsPerPageOptions", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "selectableRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "selectableRowsSingle", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "selectableRowsHighlight", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "selectableRowsNoSelectAll", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "selectableRowsVisibleOnly", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "clearSelectedRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Function)
                ], DataTableComponent.prototype, "selectableRowSelected", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Function)
                ], DataTableComponent.prototype, "selectableRowDisabled", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "expandableRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "expandableRowsHideExpander", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "expandOnRowClicked", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "expandOnRowDoubleClicked", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Function)
                ], DataTableComponent.prototype, "expandableRowDisabled", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Function)
                ], DataTableComponent.prototype, "expandableRowExpanded", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "expandableRowTemplate", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "striped", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "highlightOnHover", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "pointerOnHover", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "dense", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "responsive", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "progressPending", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "noHeader", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "noTableHead", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "fixedHeader", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "fixedHeaderScrollHeight", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "noDataText", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "conditionalRowStyles", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "defaultSortFieldId", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "defaultSortAsc", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "sortServer", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "manualSorting", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "manualFiltering", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "manualPagination", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "globalFilter", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "columnFilters", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "hiddenColumns", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "columnVisibility", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "columnOrder", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "columnPinning", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "columnSizing", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "groupBy", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "grouping", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "aggregationFns", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "pinnedTopRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], DataTableComponent.prototype, "pinnedBottomRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "rowPinning", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "virtualRows", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "virtualStartIndex", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "virtualRowCount", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], DataTableComponent.prototype, "theme", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "contextMessage", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "sortChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "selectedRowsChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "pageChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "rowsPerPageChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "rowClicked", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "rowDoubleClicked", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "rowMouseEnter", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "rowMouseLeave", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "rowExpandToggled", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "globalFilterChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "columnFiltersChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "columnVisibilityChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "columnOrderChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "groupingChange", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], DataTableComponent.prototype, "tableStateChange", void 0);
                DataTableComponent = __decorate([
                    core_1.Component({
                        selector: 'stackline-data-table',
                        template: angular_data_table_template_1.DATA_TABLE_TEMPLATE,
                        styles: [angular_data_table_styles_1.DATA_TABLE_STYLES]
                    })
                ], DataTableComponent);
                return DataTableComponent;
            }());
            exports_1("DataTableComponent", DataTableComponent);
        }
    };
});
