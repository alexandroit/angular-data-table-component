System.register(["./types", "./headless-data-table", "./angular-data-table.component", "./angular-data-table.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (types_1_1) {
                exportStar_1(types_1_1);
            },
            function (headless_data_table_1_1) {
                exportStar_1(headless_data_table_1_1);
            },
            function (angular_data_table_component_1_1) {
                exportStar_1(angular_data_table_component_1_1);
            },
            function (angular_data_table_module_1_1) {
                exportStar_1(angular_data_table_module_1_1);
            }
        ],
        execute: function () {
        }
    };
});
