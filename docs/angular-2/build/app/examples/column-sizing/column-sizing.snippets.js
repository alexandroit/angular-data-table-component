System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ColumnSizingSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ColumnSizingSnippets", ColumnSizingSnippets = {
                html: "<stackline-data-table\n  title=\"Column sizing\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [columnSizing]=\"wideColumnSizingState\">\n</stackline-data-table>",
                ts: "wideColumnSizingState = { order: 180, customer: 320, region: 180, total: 180 };"
            });
        }
    };
});
