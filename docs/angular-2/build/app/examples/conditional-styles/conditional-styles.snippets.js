System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConditionalStylesSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ConditionalStylesSnippets", ConditionalStylesSnippets = {
                html: "<stackline-data-table\n  title=\"Inventory risk\"\n  [columns]=\"inventoryColumns\"\n  [data]=\"inventory\"\n  [conditionalRowStyles]=\"inventoryStyles\">\n</stackline-data-table>",
                ts: "inventoryStyles = [{\n  when: function(row) { return row.stock < 10; },\n  className: 'row-warning'\n}];"
            });
        }
    };
});
