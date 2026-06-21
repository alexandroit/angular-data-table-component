System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ColumnPinningSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ColumnPinningSnippets", ColumnPinningSnippets = {
                html: "<stackline-data-table\n  title=\"Column pinning\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [columnPinning]=\"{ left: ['order'], right: ['total'] }\"\n  [columnSizing]=\"columnSizingState\">\n</stackline-data-table>",
                ts: "columnPinningState = { left: ['order'], right: ['total'] };\ncolumnSizingState = { order: 130, customer: 240, total: 130 };"
            });
        }
    };
});
