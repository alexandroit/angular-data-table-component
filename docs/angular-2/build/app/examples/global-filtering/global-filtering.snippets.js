System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GlobalFilteringSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("GlobalFilteringSnippets", GlobalFilteringSnippets = {
                html: "<label>\n  Global search\n  <input\n    type=\"search\"\n    [value]=\"globalFilterText\"\n    (input)=\"setGlobalFilter($event.target.value)\" />\n</label>\n\n<stackline-data-table\n  title=\"Global filtering\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [globalFilter]=\"globalFilterText\">\n</stackline-data-table>",
                ts: "globalFilterText = 'canada';\n\nsetGlobalFilter(value: string) {\n  this.globalFilterText = value || '';\n}"
            });
        }
    };
});
