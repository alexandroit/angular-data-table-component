System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var VirtualRowsSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("VirtualRowsSnippets", VirtualRowsSnippets = {
                html: "<stackline-data-table\n  title=\"Virtual rows\"\n  [columns]=\"largeColumns\"\n  [data]=\"largeRows\"\n  [virtualRows]=\"true\"\n  [virtualStartIndex]=\"20\"\n  [virtualRowCount]=\"12\">\n</stackline-data-table>",
                ts: "largeRows = buildLargeRows();\nvirtualStartIndex = 20;\nvirtualRowCount = 12;"
            });
        }
    };
});
