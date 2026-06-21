System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KitchenSinkSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("KitchenSinkSnippets", KitchenSinkSnippets = {
                html: "<stackline-data-table\n  title=\"Kitchen sink\"\n  [columns]=\"headerGroupColumns\"\n  [data]=\"orders\"\n  [globalFilter]=\"kitchenGlobalFilter\"\n  [columnFilters]=\"kitchenColumnFilters\"\n  [columnVisibility]=\"kitchenColumnVisibility\"\n  [columnOrder]=\"kitchenColumnOrder\"\n  [columnPinning]=\"columnPinningState\"\n  [pinnedTopRows]=\"topPinnedOrders\"\n  [selectableRows]=\"true\"\n  [expandableRows]=\"true\"\n  [groupBy]=\"kitchenGroupBy\">\n</stackline-data-table>",
                ts: "kitchenGlobalFilter = 'paid';\nkitchenRegionFilter = 'Canada';\nkitchenColumnFilters = [{ id: 'region', value: 'Canada' }];\nkitchenColumnVisibility = { channel: false };\nkitchenColumnOrder = ['order', 'customer', 'status', 'region', 'total'];\nkitchenGroupBy = 'region';"
            });
        }
    };
});
