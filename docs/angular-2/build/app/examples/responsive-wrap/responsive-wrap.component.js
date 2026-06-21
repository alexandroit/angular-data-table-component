System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base", "./responsive-wrap.snippets"], function (exports_1, context_1) {
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
    var core_1, table_demo_data_1, table_example_base_1, responsive_wrap_snippets_1, ResponsiveWrapExampleComponent;
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
            function (responsive_wrap_snippets_1_1) {
                responsive_wrap_snippets_1 = responsive_wrap_snippets_1_1;
            }
        ],
        execute: function () {
            ResponsiveWrapExampleComponent = (function (_super) {
                __extends(ResponsiveWrapExampleComponent, _super);
                function ResponsiveWrapExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Responsive and wrapped cells';
                    _this.summary = 'Long values wrap while the responsive shell protects the layout.';
                    _this.wrappedColumns = table_demo_data_1.getWrappedColumns();
                    _this.longTextRows = table_demo_data_1.longTextRows;
                    _this.htmlSnippet = responsive_wrap_snippets_1.ResponsiveWrapSnippets.html;
                    _this.tsSnippet = responsive_wrap_snippets_1.ResponsiveWrapSnippets.ts;
                    return _this;
                }
                ResponsiveWrapExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.longTextRows);
                };
                ResponsiveWrapExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'responsive-wrap-example',
                        templateUrl: 'app/examples/responsive-wrap/responsive-wrap.component.html'
                    })
                ], ResponsiveWrapExampleComponent);
                return ResponsiveWrapExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ResponsiveWrapExampleComponent", ResponsiveWrapExampleComponent);
        }
    };
});
