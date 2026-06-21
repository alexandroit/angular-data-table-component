System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeadlessHtmlSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("HeadlessHtmlSnippets", HeadlessHtmlSnippets = {
                html: "<section class=\"headless-board\" role=\"grid\" aria-label=\"Headless projects\">\n  <header class=\"headless-toolbar\">\n    <input\n      type=\"search\"\n      [value]=\"searchText\"\n      (input)=\"setSearch($event.target.value)\" />\n    <button type=\"button\" (click)=\"headless.toggleAllVisibleRows()\">\n      Toggle visible\n    </button>\n  </header>\n\n  <div class=\"headless-sortbar\">\n    <button\n      *ngFor=\"let column of headless.visibleColumns\"\n      type=\"button\"\n      [attr.aria-sort]=\"headless.getAriaSort(column)\"\n      (click)=\"headless.toggleSort(column)\">\n      {{ column.name }}\n    </button>\n  </div>\n\n  <article\n    *ngFor=\"let row of headless.displayedRows\"\n    role=\"row\"\n    tabindex=\"0\"\n    [class.selected]=\"headless.isRowSelected(row)\"\n    [attr.aria-selected]=\"headless.isRowSelected(row)\"\n    (click)=\"headless.toggleRowSelection(row)\">\n    <strong>{{ row.name }}</strong>\n    <span>{{ row.status }}</span>\n    <small>{{ row.owner }} \u00B7 {{ row.score }}</small>\n  </article>\n</section>",
                ts: "import { createDataTableController } from '@stackline/angular-data-table-component';\n\nngOnInit() {\n  this.headless = createDataTableController({\n    columns: this.columns,\n    data: this.rows,\n    selectableRows: true,\n    pagination: true,\n    perPage: 4\n  });\n}\n\nsetSearch(value: string) {\n  this.searchText = value || '';\n  this.headless.setGlobalFilter(this.searchText);\n}"
            });
        }
    };
});
