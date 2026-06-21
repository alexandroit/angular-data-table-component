System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RowEventsSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("RowEventsSnippets", RowEventsSnippets = {
                html: "<stackline-data-table\n  title=\"Row events\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  (rowClicked)=\"record('rowClicked', $event)\"\n  (rowDoubleClicked)=\"record('rowDoubleClicked', $event)\"\n  (rowMouseEnter)=\"record('rowMouseEnter', $event)\">\n</stackline-data-table>",
                ts: "record(type: string, value: any) {\n  this.events.unshift(type + ': ' + JSON.stringify(value));\n}"
            });
        }
    };
});
