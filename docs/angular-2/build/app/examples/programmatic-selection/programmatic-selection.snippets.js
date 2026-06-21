System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProgrammaticSelectionSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ProgrammaticSelectionSnippets", ProgrammaticSelectionSnippets = {
                html: "<stackline-data-table\n  title=\"High priority tickets\"\n  [columns]=\"ticketColumns\"\n  [data]=\"tickets\"\n  [selectableRows]=\"true\"\n  [selectableRowSelected]=\"isHighPriority\">\n</stackline-data-table>",
                ts: "isHighPriority(row: any) {\n  return row.priority === 'High';\n}"
            });
        }
    };
});
