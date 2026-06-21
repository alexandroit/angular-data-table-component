System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CellTemplatesSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("CellTemplatesSnippets", CellTemplatesSnippets = {
                html: "<template #statusCell let-value=\"value\">\n  <span class=\"status-badge\">{{ value }}</span>\n</template>\n\n<stackline-data-table\n  title=\"Template cells\"\n  [columns]=\"templateColumns\"\n  [data]=\"orders\">\n</stackline-data-table>",
                ts: "@ViewChild('statusCell') statusCellTemplate: TemplateRef<any>;\n\nngAfterViewInit() {\n  this.templateColumns = [\n    { id: 'status', name: 'Status', selector: 'status', cellTemplate: this.statusCellTemplate }\n  ];\n}"
            });
        }
    };
});
