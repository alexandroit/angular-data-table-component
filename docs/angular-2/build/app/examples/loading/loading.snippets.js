System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoadingSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("LoadingSnippets", LoadingSnippets = {
                html: "<stackline-data-table\n  title=\"Loading state\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [progressPending]=\"true\">\n</stackline-data-table>",
                ts: "progressPending = true;"
            });
        }
    };
});
