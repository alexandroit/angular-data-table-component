System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base"], function (exports_1, context_1) {
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
    var core_1, table_demo_data_1, table_example_base_1, AccessibilityKeyboardExampleComponent;
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
            }
        ],
        execute: function () {
            AccessibilityKeyboardExampleComponent = (function (_super) {
                __extends(AccessibilityKeyboardExampleComponent, _super);
                function AccessibilityKeyboardExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Accessibility and keyboard';
                    _this.summary = 'ARIA sort, labels, selected state, expanded state and row keyboard activation.';
                    _this.orderColumns = table_demo_data_1.getOrderColumns();
                    _this.orders = table_demo_data_1.orders;
                    _this.htmlSnippet = "<stackline-data-table\n  title=\"Accessibility keyboard contract\"\n  ariaLabel=\"Accessibility keyboard orders\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [selectableRows]=\"true\"\n  [selectableRowsHighlight]=\"true\"\n  [expandableRows]=\"true\"\n  [expandableRowTemplate]=\"orderDetail\"\n  [keyboardRows]=\"true\"\n  [pagination]=\"true\"\n  [paginationPerPage]=\"5\">\n</stackline-data-table>";
                    _this.tsSnippet = "// Native inputs/buttons keep their own keyboard behavior.\n// When a data row receives focus, Enter or Space activates the row:\n// selectable rows toggle selection, expandable rows toggle details.\n// Headers expose aria-sort and selection controls expose aria-checked.\nkeyboardRows = true;";
                    return _this;
                }
                AccessibilityKeyboardExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.orders.slice(0, 3));
                };
                AccessibilityKeyboardExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'accessibility-keyboard-example',
                        templateUrl: 'app/examples/accessibility-keyboard/accessibility-keyboard.component.html'
                    })
                ], AccessibilityKeyboardExampleComponent);
                return AccessibilityKeyboardExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("AccessibilityKeyboardExampleComponent", AccessibilityKeyboardExampleComponent);
        }
    };
});
