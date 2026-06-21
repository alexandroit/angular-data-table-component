System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClientPaginationSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ClientPaginationSnippets", ClientPaginationSnippets = {
                html: "<stackline-data-table\n  title=\"Client pagination\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [pagination]=\"true\"\n  [paginationPerPage]=\"4\">\n</stackline-data-table>",
                ts: "orderColumns = getOrderColumns();\norders = orderRows;\npageSizes = [4, 5, 8, 10];"
            });
        }
    };
});
