System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LargeDataPaginationSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("LargeDataPaginationSnippets", LargeDataPaginationSnippets = {
                html: "<stackline-data-table\n  title=\"Large dataset\"\n  [columns]=\"largeColumns\"\n  [data]=\"largePage.rows\"\n  [pagination]=\"true\"\n  [paginationServer]=\"true\"\n  [paginationTotalRows]=\"largePage.totalRows\"\n  [paginationDefaultPage]=\"largePage.page\"\n  [paginationPerPage]=\"largePage.perPage\"\n  [paginationRowsPerPageOptions]=\"pageSizes\"\n  [sortServer]=\"true\"\n  [progressPending]=\"largePage.loading\"\n  (pageChange)=\"loadPage($event.page, largePage.perPage)\"\n  (rowsPerPageChange)=\"loadPage(1, $event.rowsPerPage)\"\n  (sortChange)=\"sortLargeData($event)\">\n</stackline-data-table>",
                ts: "largePage = {\n  rows: [],\n  totalRows: 10000,\n  page: 1,\n  perPage: 25,\n  loading: false\n};\nsortField = 'id';\nsortDirection = 'asc';\n\nloadPage(page: number, perPage: number) {\n  this.largePage = {\n    rows: fetchRowsFromApi(page, perPage, this.sortField, this.sortDirection),\n    totalRows: 10000,\n    page: page,\n    perPage: perPage,\n    loading: false\n  };\n}\n\nsortLargeData(event: any) {\n  this.sortField = event.column.id;\n  this.sortDirection = event.direction;\n  this.loadPage(1, this.largePage.perPage);\n}"
            });
        }
    };
});
