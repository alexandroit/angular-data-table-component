System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DenseSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("DenseSnippets", DenseSnippets = {
                html: "<stackline-data-table\n  title=\"Dense operations table\"\n  [columns]=\"ticketColumns\"\n  [data]=\"tickets\"\n  [dense]=\"true\">\n</stackline-data-table>",
                ts: "ticketColumns = getTicketColumns();\ntickets = ticketRows;"
            });
        }
    };
});
