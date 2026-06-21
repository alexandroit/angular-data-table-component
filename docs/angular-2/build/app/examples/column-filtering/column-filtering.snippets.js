System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ColumnFilteringSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ColumnFilteringSnippets", ColumnFilteringSnippets = {
                html: "<label>\n  Status combobox\n  <select [value]=\"columnStatusFilterValue\" (change)=\"setColumnStatusFilter($event.target.value)\">\n    <option *ngFor=\"let status of statusOptions\" [value]=\"status\">{{ status || 'All statuses' }}</option>\n  </select>\n</label>\n\n<stackline-data-table\n  title=\"Column filters\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [columnFilters]=\"statusColumnFilters\">\n</stackline-data-table>",
                ts: "statusColumnFilters = [{ id: 'status', value: 'Paid' }];\n\nsyncColumnFilters() {\n  var filters = [];\n  if (this.columnStatusFilterValue) filters.push({ id: 'status', value: this.columnStatusFilterValue });\n  if (this.columnRegionFilterValue) filters.push({ id: 'region', value: this.columnRegionFilterValue });\n  this.statusColumnFilters = filters;\n}"
            });
        }
    };
});
