System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GroupingSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("GroupingSnippets", GroupingSnippets = {
                html: "<label>\n  Group by\n  <select [value]=\"groupByField\" (change)=\"setGroupByField($event.target.value)\">\n    <option value=\"region\">Region</option>\n    <option value=\"status\">Status</option>\n    <option value=\"channel\">Channel</option>\n  </select>\n</label>\n\n<stackline-data-table\n  title=\"Grouped rows\"\n  [columns]=\"advancedColumns\"\n  [data]=\"orders\"\n  [groupBy]=\"groupByField\">\n</stackline-data-table>",
                ts: "groupByField = 'region';\n\nsetGroupByField(value: string) {\n  this.groupByField = value || 'region';\n}"
            });
        }
    };
});
