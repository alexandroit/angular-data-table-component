System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RowPinningSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("RowPinningSnippets", RowPinningSnippets = {
                html: "<stackline-data-table\n  title=\"Row pinning\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [pinnedTopRows]=\"topPinnedOrders\"\n  [pinnedBottomRows]=\"bottomPinnedOrders\">\n</stackline-data-table>",
                ts: "topPinnedOrders = [orders[6]];\nbottomPinnedOrders = [orders[1]];"
            });
        }
    };
});
