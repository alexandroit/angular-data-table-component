System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base", "./virtual-rows.snippets"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, table_demo_data_1, table_example_base_1, virtual_rows_snippets_1, VirtualRowsExampleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_demo_data_1_1) {
                table_demo_data_1 = table_demo_data_1_1;
            },
            function (table_example_base_1_1) {
                table_example_base_1 = table_example_base_1_1;
            },
            function (virtual_rows_snippets_1_1) {
                virtual_rows_snippets_1 = virtual_rows_snippets_1_1;
            }
        ],
        execute: function () {
            VirtualRowsExampleComponent = (function (_super) {
                __extends(VirtualRowsExampleComponent, _super);
                function VirtualRowsExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Virtual rows';
                    _this.summary = 'Render a window of a larger row set for heavy legacy screens.';
                    _this.largeColumns = table_demo_data_1.getLargeColumns();
                    _this.largeRows = table_demo_data_1.buildLargeRows();
                    _this.htmlSnippet = virtual_rows_snippets_1.VirtualRowsSnippets.html;
                    _this.tsSnippet = virtual_rows_snippets_1.VirtualRowsSnippets.ts;
                    return _this;
                }
                VirtualRowsExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.largeRows.slice(20, 24));
                };
                VirtualRowsExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'virtual-rows-example',
                        templateUrl: 'app/examples/virtual-rows/virtual-rows.component.html'
                    })
                ], VirtualRowsExampleComponent);
                return VirtualRowsExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("VirtualRowsExampleComponent", VirtualRowsExampleComponent);
        }
    };
});
