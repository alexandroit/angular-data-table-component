System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var VisiblePageSelectionSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("VisiblePageSelectionSnippets", VisiblePageSelectionSnippets = {
                html: "<stackline-data-table\n  title=\"Visible page selection\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [pagination]=\"true\"\n  [selectableRows]=\"true\"\n  [selectableRowsVisibleOnly]=\"true\">\n</stackline-data-table>",
                ts: "orderColumns = getOrderColumns();\norders = orderRows;"
            });
        }
    };
});
