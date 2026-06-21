System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FacetingSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("FacetingSnippets", FacetingSnippets = {
                html: "<stackline-data-table\n  #facetedTable\n  title=\"Faceted values\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [globalFilter]=\"facetFilterText\"\n  [columnFilters]=\"facetColumnFilters\">\n</stackline-data-table>\n\n{{ getFacetSummary(facetedTable, 'status') }}",
                ts: "getFacetSummary(table: any, columnId: string) {\n  return JSON.stringify(table.getColumnUniqueValues(columnId), null, 2);\n}"
            });
        }
    };
});
