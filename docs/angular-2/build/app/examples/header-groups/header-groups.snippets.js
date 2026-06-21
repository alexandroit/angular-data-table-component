System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeaderGroupsSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("HeaderGroupsSnippets", HeaderGroupsSnippets = {
                html: "<stackline-data-table\n  title=\"Header groups\"\n  [columns]=\"headerGroupColumns\"\n  [data]=\"orders\">\n</stackline-data-table>",
                ts: "headerGroupColumns = [\n  { name: 'Order', columns: [{ id: 'order', name: 'Order', selector: 'order' }] },\n  { name: 'Customer', columns: [{ id: 'customer', name: 'Customer', selector: 'customer' }] }\n];"
            });
        }
    };
});
