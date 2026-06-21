System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ServerPaginationSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ServerPaginationSnippets", ServerPaginationSnippets = {
                html: "<stackline-data-table\n  title=\"Server pagination simulation\"\n  [columns]=\"orderColumns\"\n  [data]=\"serverRows\"\n  [pagination]=\"true\"\n  [paginationServer]=\"true\"\n  [paginationTotalRows]=\"orders.length\"\n  [paginationDefaultPage]=\"serverPage\"\n  [paginationPerPage]=\"serverRowsPerPage\"\n  (pageChange)=\"changeServerPage($event)\">\n</stackline-data-table>",
                ts: "changeServerPage(event: any) {\n  this.serverPage = event.page;\n  this.updateServerRows();\n}\n\nupdateServerRows() {\n  var start = (this.serverPage - 1) * this.serverRowsPerPage;\n  this.serverRows = this.orders.slice(start, start + this.serverRowsPerPage);\n}"
            });
        }
    };
});
