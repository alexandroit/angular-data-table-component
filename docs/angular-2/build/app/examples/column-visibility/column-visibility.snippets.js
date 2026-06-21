System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ColumnVisibilitySnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ColumnVisibilitySnippets", ColumnVisibilitySnippets = {
                html: "<label *ngFor=\"let column of visibilityColumns\">\n  <input\n    type=\"checkbox\"\n    [checked]=\"isDemoColumnVisible(column.id)\"\n    (change)=\"setDemoColumnVisible(column.id, $event.target.checked)\" />\n  {{ column.label }}\n</label>\n\n<stackline-data-table\n  title=\"Column visibility\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [columnVisibility]=\"columnVisibilityState\">\n</stackline-data-table>",
                ts: "columnVisibilityState = { channel: false };\n\nsetDemoColumnVisible(columnId: string, visible: boolean) {\n  this.columnVisibilityState = cloneColumnVisibility(this.columnVisibilityState, columnId, visible);\n}"
            });
        }
    };
});
