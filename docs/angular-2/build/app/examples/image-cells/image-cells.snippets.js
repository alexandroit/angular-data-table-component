System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ImageCellsSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("ImageCellsSnippets", ImageCellsSnippets = {
                html: "<template #productCell let-row=\"row\">\n  <span class=\"product-cell\">\n    <img [src]=\"row.image\" [alt]=\"row.name\" />\n    <span>\n      <strong>{{ row.name }}</strong>\n      <small>{{ row.category }}</small>\n    </span>\n  </span>\n</template>\n\n<stackline-data-table\n  title=\"Product media table\"\n  [columns]=\"imageColumns\"\n  [data]=\"products\">\n</stackline-data-table>",
                ts: "@ViewChild('productCell') productCellTemplate: TemplateRef<any>;\n\nngAfterViewInit() {\n  this.imageColumns = [\n    { id: 'product', name: 'Product', selector: 'name', cellTemplate: this.productCellTemplate },\n    { id: 'owner', name: 'Owner', selector: 'owner' },\n    { id: 'stock', name: 'Stock', selector: 'stock', right: true }\n  ];\n}"
            });
        }
    };
});
