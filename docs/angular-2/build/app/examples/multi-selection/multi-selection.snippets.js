System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MultiSelectionSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("MultiSelectionSnippets", MultiSelectionSnippets = {
                html: "<stackline-data-table\n  title=\"Multi selection\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [selectableRows]=\"true\"\n  [selectableRowsHighlight]=\"true\">\n</stackline-data-table>",
                ts: "orderColumns = getOrderColumns();\norders = orderRows;"
            });
        }
    };
});
