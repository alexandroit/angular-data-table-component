System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmptySnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("EmptySnippets", EmptySnippets = {
                html: "<stackline-data-table\n  title=\"Empty project list\"\n  [columns]=\"orderColumns\"\n  [data]=\"emptyRows\"\n  noDataText=\"No projects were found\">\n</stackline-data-table>",
                ts: "emptyRows = [];"
            });
        }
    };
});
