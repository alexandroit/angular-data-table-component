System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ColumnOrderingSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ColumnOrderingSnippets", ColumnOrderingSnippets = {
                html: "<label>\n  Order preset\n  <select [value]=\"columnOrderPreset\" (change)=\"setColumnOrderPreset($event.target.value)\">\n    <option value=\"customer-first\">Customer first</option>\n    <option value=\"money-first\">Money first</option>\n    <option value=\"operations-first\">Operations first</option>\n  </select>\n</label>\n\n<stackline-data-table\n  title=\"Column ordering\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [columnOrder]=\"columnOrderState\">\n</stackline-data-table>",
                ts: "columnOrderState = ['customer', 'order', 'region', 'status', 'total', 'channel'];\n\nsetColumnOrderPreset(preset: string) {\n  this.columnOrderState = preset === 'money-first'\n    ? ['total', 'order', 'customer', 'region', 'status', 'channel']\n    : ['customer', 'order', 'region', 'status', 'total', 'channel'];\n}"
            });
        }
    };
});
