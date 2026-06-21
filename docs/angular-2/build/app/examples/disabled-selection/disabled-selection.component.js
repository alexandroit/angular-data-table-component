System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base", "./disabled-selection.snippets"], function (exports_1, context_1) {
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
    var core_1, table_demo_data_1, table_example_base_1, disabled_selection_snippets_1, DisabledSelectionExampleComponent;
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
            function (disabled_selection_snippets_1_1) {
                disabled_selection_snippets_1 = disabled_selection_snippets_1_1;
            }
        ],
        execute: function () {
            DisabledSelectionExampleComponent = (function (_super) {
                __extends(DisabledSelectionExampleComponent, _super);
                function DisabledSelectionExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Disabled selectable rows';
                    _this.summary = 'Block selection for locked rows while keeping the table interactive.';
                    _this.lockedColumns = table_demo_data_1.getLockedColumns();
                    _this.lockedRows = table_demo_data_1.lockedRows;
                    _this.htmlSnippet = disabled_selection_snippets_1.DisabledSelectionSnippets.html;
                    _this.tsSnippet = disabled_selection_snippets_1.DisabledSelectionSnippets.ts;
                    return _this;
                }
                DisabledSelectionExampleComponent.prototype.isLocked = function (row) {
                    return !!row.locked;
                };
                DisabledSelectionExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.lockedRows);
                };
                DisabledSelectionExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'disabled-selection-example',
                        templateUrl: 'app/examples/disabled-selection/disabled-selection.component.html'
                    })
                ], DisabledSelectionExampleComponent);
                return DisabledSelectionExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("DisabledSelectionExampleComponent", DisabledSelectionExampleComponent);
        }
    };
});
