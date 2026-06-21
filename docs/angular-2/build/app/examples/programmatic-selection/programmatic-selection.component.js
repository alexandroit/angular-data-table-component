System.register(["@angular/core", "../../shared/table-demo-data", "../../shared/table-example-base", "./programmatic-selection.snippets"], function (exports_1, context_1) {
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
    var core_1, table_demo_data_1, table_example_base_1, programmatic_selection_snippets_1, ProgrammaticSelectionExampleComponent;
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
            function (programmatic_selection_snippets_1_1) {
                programmatic_selection_snippets_1 = programmatic_selection_snippets_1_1;
            }
        ],
        execute: function () {
            ProgrammaticSelectionExampleComponent = (function (_super) {
                __extends(ProgrammaticSelectionExampleComponent, _super);
                function ProgrammaticSelectionExampleComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.title = 'Programmatic selection';
                    _this.summary = 'Preselect rows from a predicate supplied by the app.';
                    _this.ticketColumns = table_demo_data_1.getTicketColumns();
                    _this.tickets = table_demo_data_1.tickets;
                    _this.htmlSnippet = programmatic_selection_snippets_1.ProgrammaticSelectionSnippets.html;
                    _this.tsSnippet = programmatic_selection_snippets_1.ProgrammaticSelectionSnippets.ts;
                    return _this;
                }
                ProgrammaticSelectionExampleComponent.prototype.isHighPriority = function (row) {
                    return row.priority === 'High';
                };
                ProgrammaticSelectionExampleComponent.prototype.getDataSnippet = function () {
                    return table_demo_data_1.dataSnippet(this.tickets.slice(0, 3));
                };
                ProgrammaticSelectionExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'programmatic-selection-example',
                        templateUrl: 'app/examples/programmatic-selection/programmatic-selection.component.html'
                    })
                ], ProgrammaticSelectionExampleComponent);
                return ProgrammaticSelectionExampleComponent;
            }(table_example_base_1.TableExampleBase));
            exports_1("ProgrammaticSelectionExampleComponent", ProgrammaticSelectionExampleComponent);
        }
    };
});
