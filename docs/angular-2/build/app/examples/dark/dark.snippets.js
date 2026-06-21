System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DarkSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("DarkSnippets", DarkSnippets = {
                html: "<stackline-data-table\n  title=\"Dark theme\"\n  theme=\"dark\"\n  [columns]=\"revenueColumns\"\n  [data]=\"revenue\"\n  [pagination]=\"true\">\n</stackline-data-table>",
                ts: "revenueColumns = getRevenueColumns();\nrevenue = revenueRows;"
            });
        }
    };
});
