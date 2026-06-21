System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SingleSelectionSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("SingleSelectionSnippets", SingleSelectionSnippets = {
                html: "<stackline-data-table\n  title=\"Support queue\"\n  [columns]=\"ticketColumns\"\n  [data]=\"tickets\"\n  [selectableRows]=\"true\"\n  [selectableRowsSingle]=\"true\"\n  keyField=\"ticket\">\n</stackline-data-table>",
                ts: "ticketColumns = getTicketColumns();\ntickets = ticketRows;"
            });
        }
    };
});
