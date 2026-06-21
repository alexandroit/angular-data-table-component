System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FixedHeaderSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("FixedHeaderSnippets", FixedHeaderSnippets = {
                html: "<stackline-data-table\n  title=\"Fixed header revenue\"\n  [columns]=\"revenueColumns\"\n  [data]=\"revenue\"\n  [fixedHeader]=\"true\"\n  fixedHeaderScrollHeight=\"320px\">\n</stackline-data-table>",
                ts: "revenueColumns = getRevenueColumns();\nrevenue = revenueRows;"
            });
        }
    };
});
