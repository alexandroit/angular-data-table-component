System.register(["@angular/common", "@angular/core", "./angular-data-table.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var common_1, core_1, angular_data_table_component_1, DataTableModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular_data_table_component_1_1) {
                angular_data_table_component_1 = angular_data_table_component_1_1;
            }
        ],
        execute: function () {
            DataTableModule = /** @class */ (function () {
                function DataTableModule() {
                }
                DataTableModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule],
                        declarations: [angular_data_table_component_1.DataTableComponent],
                        exports: [angular_data_table_component_1.DataTableComponent]
                    })
                ], DataTableModule);
                return DataTableModule;
            }());
            exports_1("DataTableModule", DataTableModule);
        }
    };
});
