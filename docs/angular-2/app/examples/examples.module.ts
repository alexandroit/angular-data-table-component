import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from '@stackline/angular-data-table-component';
import { ExampleShellComponent } from '../shared/example-shell.component';
import { TableDemoDataService } from '../services/table-demo-data.service';
import { SourceFileService } from '../services/source-file.service';
import { AccessibilityKeyboardExampleComponent } from './accessibility-keyboard/accessibility-keyboard.component';
import { BasicExampleComponent } from './basic/basic.component';
import { CellTemplatesExampleComponent } from './cell-templates/cell-templates.component';
import { ClientPaginationExampleComponent } from './client-pagination/client-pagination.component';
import { ColumnFilteringExampleComponent } from './column-filtering/column-filtering.component';
import { ColumnOrderingExampleComponent } from './column-ordering/column-ordering.component';
import { ColumnPinningExampleComponent } from './column-pinning/column-pinning.component';
import { ColumnSizingExampleComponent } from './column-sizing/column-sizing.component';
import { ColumnVisibilityExampleComponent } from './column-visibility/column-visibility.component';
import { ConditionalStylesExampleComponent } from './conditional-styles/conditional-styles.component';
import { DarkExampleComponent } from './dark/dark.component';
import { DenseExampleComponent } from './dense/dense.component';
import { DisabledSelectionExampleComponent } from './disabled-selection/disabled-selection.component';
import { EmptyExampleComponent } from './empty/empty.component';
import { ExpandableRowsExampleComponent } from './expandable-rows/expandable-rows.component';
import { ExpandOnClickExampleComponent } from './expand-on-click/expand-on-click.component';
import { FacetingExampleComponent } from './faceting/faceting.component';
import { FixedHeaderExampleComponent } from './fixed-header/fixed-header.component';
import { GlobalFilteringExampleComponent } from './global-filtering/global-filtering.component';
import { GroupingExampleComponent } from './grouping/grouping.component';
import { HeaderGroupsExampleComponent } from './header-groups/header-groups.component';
import { HeadlessHtmlExampleComponent } from './headless-html/headless-html.component';
import { HeaderlessExampleComponent } from './headerless/headerless.component';
import { ImageCellsExampleComponent } from './image-cells/image-cells.component';
import { KitchenSinkExampleComponent } from './kitchen-sink/kitchen-sink.component';
import { LargeDataPaginationExampleComponent } from './large-data-pagination/large-data-pagination.component';
import { LoadingExampleComponent } from './loading/loading.component';
import { MultiSelectionExampleComponent } from './multi-selection/multi-selection.component';
import { ProgrammaticSelectionExampleComponent } from './programmatic-selection/programmatic-selection.component';
import { ResponsiveWrapExampleComponent } from './responsive-wrap/responsive-wrap.component';
import { RowEventsExampleComponent } from './row-events/row-events.component';
import { RowPinningExampleComponent } from './row-pinning/row-pinning.component';
import { ServerPaginationExampleComponent } from './server-pagination/server-pagination.component';
import { SingleSelectionExampleComponent } from './single-selection/single-selection.component';
import { SortingExampleComponent } from './sorting/sorting.component';
import { VirtualRowsExampleComponent } from './virtual-rows/virtual-rows.component';
import { VisiblePageSelectionExampleComponent } from './visible-page-selection/visible-page-selection.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [
    ExampleShellComponent,
    AccessibilityKeyboardExampleComponent,
    BasicExampleComponent,
    CellTemplatesExampleComponent,
    ClientPaginationExampleComponent,
    ColumnFilteringExampleComponent,
    ColumnOrderingExampleComponent,
    ColumnPinningExampleComponent,
    ColumnSizingExampleComponent,
    ColumnVisibilityExampleComponent,
    ConditionalStylesExampleComponent,
    DarkExampleComponent,
    DenseExampleComponent,
    DisabledSelectionExampleComponent,
    EmptyExampleComponent,
    ExpandableRowsExampleComponent,
    ExpandOnClickExampleComponent,
    FacetingExampleComponent,
    FixedHeaderExampleComponent,
    GlobalFilteringExampleComponent,
    GroupingExampleComponent,
    HeaderGroupsExampleComponent,
    HeadlessHtmlExampleComponent,
    HeaderlessExampleComponent,
    ImageCellsExampleComponent,
    KitchenSinkExampleComponent,
    LargeDataPaginationExampleComponent,
    LoadingExampleComponent,
    MultiSelectionExampleComponent,
    ProgrammaticSelectionExampleComponent,
    ResponsiveWrapExampleComponent,
    RowEventsExampleComponent,
    RowPinningExampleComponent,
    ServerPaginationExampleComponent,
    SingleSelectionExampleComponent,
    SortingExampleComponent,
    VirtualRowsExampleComponent,
    VisiblePageSelectionExampleComponent
  ],
  exports: [
    AccessibilityKeyboardExampleComponent,
    BasicExampleComponent,
    CellTemplatesExampleComponent,
    ClientPaginationExampleComponent,
    ColumnFilteringExampleComponent,
    ColumnOrderingExampleComponent,
    ColumnPinningExampleComponent,
    ColumnSizingExampleComponent,
    ColumnVisibilityExampleComponent,
    ConditionalStylesExampleComponent,
    DarkExampleComponent,
    DenseExampleComponent,
    DisabledSelectionExampleComponent,
    EmptyExampleComponent,
    ExpandableRowsExampleComponent,
    ExpandOnClickExampleComponent,
    FacetingExampleComponent,
    FixedHeaderExampleComponent,
    GlobalFilteringExampleComponent,
    GroupingExampleComponent,
    HeaderGroupsExampleComponent,
    HeadlessHtmlExampleComponent,
    HeaderlessExampleComponent,
    ImageCellsExampleComponent,
    KitchenSinkExampleComponent,
    LargeDataPaginationExampleComponent,
    LoadingExampleComponent,
    MultiSelectionExampleComponent,
    ProgrammaticSelectionExampleComponent,
    ResponsiveWrapExampleComponent,
    RowEventsExampleComponent,
    RowPinningExampleComponent,
    ServerPaginationExampleComponent,
    SingleSelectionExampleComponent,
    SortingExampleComponent,
    VirtualRowsExampleComponent,
    VisiblePageSelectionExampleComponent
  ],
  providers: [
    TableDemoDataService,
    SourceFileService
  ]
})
export class ExamplesModule {}
