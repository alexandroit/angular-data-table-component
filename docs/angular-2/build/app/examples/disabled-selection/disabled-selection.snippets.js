System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DisabledSelectionSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("DisabledSelectionSnippets", DisabledSelectionSnippets = {
                html: "<stackline-data-table\n  title=\"Locked rows\"\n  [columns]=\"lockedColumns\"\n  [data]=\"lockedRows\"\n  [selectableRows]=\"true\"\n  [selectableRowDisabled]=\"isLocked\">\n</stackline-data-table>",
                ts: "isLocked(row: any) {\n  return !!row.locked;\n}"
            });
        }
    };
});
