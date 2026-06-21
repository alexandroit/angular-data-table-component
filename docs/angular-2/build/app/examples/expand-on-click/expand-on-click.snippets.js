System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExpandOnClickSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ExpandOnClickSnippets", ExpandOnClickSnippets = {
                html: "<stackline-data-table\n  title=\"Expand on row click\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [expandableRows]=\"true\"\n  [expandableRowsHideExpander]=\"true\"\n  [expandOnRowClicked]=\"true\"\n  [expandableRowTemplate]=\"orderDetail\">\n</stackline-data-table>",
                ts: "// The row click output remains available while expansion is handled by the component."
            });
        }
    };
});
