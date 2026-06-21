System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExpandableRowsSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ExpandableRowsSnippets", ExpandableRowsSnippets = {
                html: "<template #orderDetail let-row=\"row\">\n  <div>{{ row.customer }} - {{ row.notes }}</div>\n</template>\n\n<stackline-data-table\n  title=\"Expandable order details\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [expandableRows]=\"true\"\n  [expandableRowTemplate]=\"orderDetail\">\n</stackline-data-table>",
                ts: "isLargeOrder(row: any) {\n  return row.total > 2000;\n}"
            });
        }
    };
});
