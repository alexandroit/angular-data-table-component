System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasicSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("BasicSnippets", BasicSnippets = {
                html: "<stackline-data-table\n  title=\"Orders\"\n  ariaLabel=\"Orders table\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [pagination]=\"true\"\n  [paginationPerPage]=\"5\"\n  [paginationRowsPerPageOptions]=\"pageSizes\"\n  [selectableRows]=\"true\"\n  [selectableRowsHighlight]=\"true\"\n  [striped]=\"true\"\n  [highlightOnHover]=\"true\"\n  [pointerOnHover]=\"true\"\n  defaultSortFieldId=\"order\">\n</stackline-data-table>",
                ts: "orderColumns = getOrderColumns();\norders = orderRows;\npageSizes = [4, 5, 8, 10];"
            });
        }
    };
});
