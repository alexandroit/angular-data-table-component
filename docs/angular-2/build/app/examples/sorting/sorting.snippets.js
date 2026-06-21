System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SortingSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("SortingSnippets", SortingSnippets = {
                html: "<stackline-data-table\n  title=\"Sortable inventory\"\n  [columns]=\"inventoryColumns\"\n  [data]=\"inventory\"\n  defaultSortFieldId=\"stock\"\n  [defaultSortAsc]=\"false\"\n  [striped]=\"true\"\n  [highlightOnHover]=\"true\">\n</stackline-data-table>",
                ts: "inventoryColumns = [\n  { id: 'sku', name: 'SKU', selector: 'sku', sortable: true },\n  { id: 'stock', name: 'Stock', selector: 'stock', sortable: true, right: true }\n];"
            });
        }
    };
});
