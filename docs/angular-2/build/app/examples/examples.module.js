System.register(["@angular/core", "@angular/common", "@stackline/angular-data-table-component", "../shared/example-shell.component", "../services/table-demo-data.service", "../services/source-file.service", "./accessibility-keyboard/accessibility-keyboard.component", "./basic/basic.component", "./cell-templates/cell-templates.component", "./client-pagination/client-pagination.component", "./column-filtering/column-filtering.component", "./column-ordering/column-ordering.component", "./column-pinning/column-pinning.component", "./column-sizing/column-sizing.component", "./column-visibility/column-visibility.component", "./conditional-styles/conditional-styles.component", "./dark/dark.component", "./dense/dense.component", "./disabled-selection/disabled-selection.component", "./empty/empty.component", "./expandable-rows/expandable-rows.component", "./expand-on-click/expand-on-click.component", "./faceting/faceting.component", "./fixed-header/fixed-header.component", "./global-filtering/global-filtering.component", "./grouping/grouping.component", "./header-groups/header-groups.component", "./headless-html/headless-html.component", "./headerless/headerless.component", "./image-cells/image-cells.component", "./kitchen-sink/kitchen-sink.component", "./large-data-pagination/large-data-pagination.component", "./loading/loading.component", "./multi-selection/multi-selection.component", "./programmatic-selection/programmatic-selection.component", "./responsive-wrap/responsive-wrap.component", "./row-events/row-events.component", "./row-pinning/row-pinning.component", "./server-pagination/server-pagination.component", "./single-selection/single-selection.component", "./sorting/sorting.component", "./virtual-rows/virtual-rows.component", "./visible-page-selection/visible-page-selection.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, angular_data_table_component_1, example_shell_component_1, table_demo_data_service_1, source_file_service_1, accessibility_keyboard_component_1, basic_component_1, cell_templates_component_1, client_pagination_component_1, column_filtering_component_1, column_ordering_component_1, column_pinning_component_1, column_sizing_component_1, column_visibility_component_1, conditional_styles_component_1, dark_component_1, dense_component_1, disabled_selection_component_1, empty_component_1, expandable_rows_component_1, expand_on_click_component_1, faceting_component_1, fixed_header_component_1, global_filtering_component_1, grouping_component_1, header_groups_component_1, headless_html_component_1, headerless_component_1, image_cells_component_1, kitchen_sink_component_1, large_data_pagination_component_1, loading_component_1, multi_selection_component_1, programmatic_selection_component_1, responsive_wrap_component_1, row_events_component_1, row_pinning_component_1, server_pagination_component_1, single_selection_component_1, sorting_component_1, virtual_rows_component_1, visible_page_selection_component_1, ExamplesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (angular_data_table_component_1_1) {
                angular_data_table_component_1 = angular_data_table_component_1_1;
            },
            function (example_shell_component_1_1) {
                example_shell_component_1 = example_shell_component_1_1;
            },
            function (table_demo_data_service_1_1) {
                table_demo_data_service_1 = table_demo_data_service_1_1;
            },
            function (source_file_service_1_1) {
                source_file_service_1 = source_file_service_1_1;
            },
            function (accessibility_keyboard_component_1_1) {
                accessibility_keyboard_component_1 = accessibility_keyboard_component_1_1;
            },
            function (basic_component_1_1) {
                basic_component_1 = basic_component_1_1;
            },
            function (cell_templates_component_1_1) {
                cell_templates_component_1 = cell_templates_component_1_1;
            },
            function (client_pagination_component_1_1) {
                client_pagination_component_1 = client_pagination_component_1_1;
            },
            function (column_filtering_component_1_1) {
                column_filtering_component_1 = column_filtering_component_1_1;
            },
            function (column_ordering_component_1_1) {
                column_ordering_component_1 = column_ordering_component_1_1;
            },
            function (column_pinning_component_1_1) {
                column_pinning_component_1 = column_pinning_component_1_1;
            },
            function (column_sizing_component_1_1) {
                column_sizing_component_1 = column_sizing_component_1_1;
            },
            function (column_visibility_component_1_1) {
                column_visibility_component_1 = column_visibility_component_1_1;
            },
            function (conditional_styles_component_1_1) {
                conditional_styles_component_1 = conditional_styles_component_1_1;
            },
            function (dark_component_1_1) {
                dark_component_1 = dark_component_1_1;
            },
            function (dense_component_1_1) {
                dense_component_1 = dense_component_1_1;
            },
            function (disabled_selection_component_1_1) {
                disabled_selection_component_1 = disabled_selection_component_1_1;
            },
            function (empty_component_1_1) {
                empty_component_1 = empty_component_1_1;
            },
            function (expandable_rows_component_1_1) {
                expandable_rows_component_1 = expandable_rows_component_1_1;
            },
            function (expand_on_click_component_1_1) {
                expand_on_click_component_1 = expand_on_click_component_1_1;
            },
            function (faceting_component_1_1) {
                faceting_component_1 = faceting_component_1_1;
            },
            function (fixed_header_component_1_1) {
                fixed_header_component_1 = fixed_header_component_1_1;
            },
            function (global_filtering_component_1_1) {
                global_filtering_component_1 = global_filtering_component_1_1;
            },
            function (grouping_component_1_1) {
                grouping_component_1 = grouping_component_1_1;
            },
            function (header_groups_component_1_1) {
                header_groups_component_1 = header_groups_component_1_1;
            },
            function (headless_html_component_1_1) {
                headless_html_component_1 = headless_html_component_1_1;
            },
            function (headerless_component_1_1) {
                headerless_component_1 = headerless_component_1_1;
            },
            function (image_cells_component_1_1) {
                image_cells_component_1 = image_cells_component_1_1;
            },
            function (kitchen_sink_component_1_1) {
                kitchen_sink_component_1 = kitchen_sink_component_1_1;
            },
            function (large_data_pagination_component_1_1) {
                large_data_pagination_component_1 = large_data_pagination_component_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            },
            function (multi_selection_component_1_1) {
                multi_selection_component_1 = multi_selection_component_1_1;
            },
            function (programmatic_selection_component_1_1) {
                programmatic_selection_component_1 = programmatic_selection_component_1_1;
            },
            function (responsive_wrap_component_1_1) {
                responsive_wrap_component_1 = responsive_wrap_component_1_1;
            },
            function (row_events_component_1_1) {
                row_events_component_1 = row_events_component_1_1;
            },
            function (row_pinning_component_1_1) {
                row_pinning_component_1 = row_pinning_component_1_1;
            },
            function (server_pagination_component_1_1) {
                server_pagination_component_1 = server_pagination_component_1_1;
            },
            function (single_selection_component_1_1) {
                single_selection_component_1 = single_selection_component_1_1;
            },
            function (sorting_component_1_1) {
                sorting_component_1 = sorting_component_1_1;
            },
            function (virtual_rows_component_1_1) {
                virtual_rows_component_1 = virtual_rows_component_1_1;
            },
            function (visible_page_selection_component_1_1) {
                visible_page_selection_component_1 = visible_page_selection_component_1_1;
            }
        ],
        execute: function () {
            ExamplesModule = (function () {
                function ExamplesModule() {
                }
                ExamplesModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            angular_data_table_component_1.DataTableModule
                        ],
                        declarations: [
                            example_shell_component_1.ExampleShellComponent,
                            accessibility_keyboard_component_1.AccessibilityKeyboardExampleComponent,
                            basic_component_1.BasicExampleComponent,
                            cell_templates_component_1.CellTemplatesExampleComponent,
                            client_pagination_component_1.ClientPaginationExampleComponent,
                            column_filtering_component_1.ColumnFilteringExampleComponent,
                            column_ordering_component_1.ColumnOrderingExampleComponent,
                            column_pinning_component_1.ColumnPinningExampleComponent,
                            column_sizing_component_1.ColumnSizingExampleComponent,
                            column_visibility_component_1.ColumnVisibilityExampleComponent,
                            conditional_styles_component_1.ConditionalStylesExampleComponent,
                            dark_component_1.DarkExampleComponent,
                            dense_component_1.DenseExampleComponent,
                            disabled_selection_component_1.DisabledSelectionExampleComponent,
                            empty_component_1.EmptyExampleComponent,
                            expandable_rows_component_1.ExpandableRowsExampleComponent,
                            expand_on_click_component_1.ExpandOnClickExampleComponent,
                            faceting_component_1.FacetingExampleComponent,
                            fixed_header_component_1.FixedHeaderExampleComponent,
                            global_filtering_component_1.GlobalFilteringExampleComponent,
                            grouping_component_1.GroupingExampleComponent,
                            header_groups_component_1.HeaderGroupsExampleComponent,
                            headless_html_component_1.HeadlessHtmlExampleComponent,
                            headerless_component_1.HeaderlessExampleComponent,
                            image_cells_component_1.ImageCellsExampleComponent,
                            kitchen_sink_component_1.KitchenSinkExampleComponent,
                            large_data_pagination_component_1.LargeDataPaginationExampleComponent,
                            loading_component_1.LoadingExampleComponent,
                            multi_selection_component_1.MultiSelectionExampleComponent,
                            programmatic_selection_component_1.ProgrammaticSelectionExampleComponent,
                            responsive_wrap_component_1.ResponsiveWrapExampleComponent,
                            row_events_component_1.RowEventsExampleComponent,
                            row_pinning_component_1.RowPinningExampleComponent,
                            server_pagination_component_1.ServerPaginationExampleComponent,
                            single_selection_component_1.SingleSelectionExampleComponent,
                            sorting_component_1.SortingExampleComponent,
                            virtual_rows_component_1.VirtualRowsExampleComponent,
                            visible_page_selection_component_1.VisiblePageSelectionExampleComponent
                        ],
                        exports: [
                            accessibility_keyboard_component_1.AccessibilityKeyboardExampleComponent,
                            basic_component_1.BasicExampleComponent,
                            cell_templates_component_1.CellTemplatesExampleComponent,
                            client_pagination_component_1.ClientPaginationExampleComponent,
                            column_filtering_component_1.ColumnFilteringExampleComponent,
                            column_ordering_component_1.ColumnOrderingExampleComponent,
                            column_pinning_component_1.ColumnPinningExampleComponent,
                            column_sizing_component_1.ColumnSizingExampleComponent,
                            column_visibility_component_1.ColumnVisibilityExampleComponent,
                            conditional_styles_component_1.ConditionalStylesExampleComponent,
                            dark_component_1.DarkExampleComponent,
                            dense_component_1.DenseExampleComponent,
                            disabled_selection_component_1.DisabledSelectionExampleComponent,
                            empty_component_1.EmptyExampleComponent,
                            expandable_rows_component_1.ExpandableRowsExampleComponent,
                            expand_on_click_component_1.ExpandOnClickExampleComponent,
                            faceting_component_1.FacetingExampleComponent,
                            fixed_header_component_1.FixedHeaderExampleComponent,
                            global_filtering_component_1.GlobalFilteringExampleComponent,
                            grouping_component_1.GroupingExampleComponent,
                            header_groups_component_1.HeaderGroupsExampleComponent,
                            headless_html_component_1.HeadlessHtmlExampleComponent,
                            headerless_component_1.HeaderlessExampleComponent,
                            image_cells_component_1.ImageCellsExampleComponent,
                            kitchen_sink_component_1.KitchenSinkExampleComponent,
                            large_data_pagination_component_1.LargeDataPaginationExampleComponent,
                            loading_component_1.LoadingExampleComponent,
                            multi_selection_component_1.MultiSelectionExampleComponent,
                            programmatic_selection_component_1.ProgrammaticSelectionExampleComponent,
                            responsive_wrap_component_1.ResponsiveWrapExampleComponent,
                            row_events_component_1.RowEventsExampleComponent,
                            row_pinning_component_1.RowPinningExampleComponent,
                            server_pagination_component_1.ServerPaginationExampleComponent,
                            single_selection_component_1.SingleSelectionExampleComponent,
                            sorting_component_1.SortingExampleComponent,
                            virtual_rows_component_1.VirtualRowsExampleComponent,
                            visible_page_selection_component_1.VisiblePageSelectionExampleComponent
                        ],
                        providers: [
                            table_demo_data_service_1.TableDemoDataService,
                            source_file_service_1.SourceFileService
                        ]
                    })
                ], ExamplesModule);
                return ExamplesModule;
            }());
            exports_1("ExamplesModule", ExamplesModule);
        }
    };
});
