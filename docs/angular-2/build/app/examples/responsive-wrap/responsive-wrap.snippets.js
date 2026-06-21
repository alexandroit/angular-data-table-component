System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ResponsiveWrapSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ResponsiveWrapSnippets", ResponsiveWrapSnippets = {
                html: "<stackline-data-table\n  title=\"Responsive wrapped content\"\n  [columns]=\"wrappedColumns\"\n  [data]=\"longTextRows\"\n  [responsive]=\"true\">\n</stackline-data-table>",
                ts: "wrappedColumns = getWrappedColumns();\nlongTextRows = rows;"
            });
        }
    };
});
