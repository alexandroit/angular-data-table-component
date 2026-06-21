System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeaderlessSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("HeaderlessSnippets", HeaderlessSnippets = {
                html: "<stackline-data-table\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [noHeader]=\"true\"\n  [noTableHead]=\"true\"\n  [dense]=\"true\">\n</stackline-data-table>",
                ts: "orderColumns = getOrderColumns();\norders = orderRows;"
            });
        }
    };
});
