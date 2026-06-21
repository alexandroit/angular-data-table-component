export interface ExampleMenuItem {
  order: string;
  id: string;
  title: string;
  summary: string;
}

export var EXAMPLE_MENU: ExampleMenuItem[] = [
  { order: '01', id: 'basic', title: 'Basic usage', summary: 'Sorting, pagination, hover states and multi-row selection in one table.' },
  { order: '02', id: 'sorting', title: 'Sortable columns', summary: 'Client-side sorting with a default descending sort.' },
  { order: '03', id: 'multi-selection', title: 'Multi selection', summary: 'Checkbox row selection with selected-row highlighting.' },
  { order: '04', id: 'single-selection', title: 'Single selection', summary: 'Radio-style selection for one active item.' },
  { order: '05', id: 'programmatic-selection', title: 'Programmatic selection', summary: 'Preselect rows from a predicate supplied by the app.' },
  { order: '06', id: 'disabled-selection', title: 'Disabled selectable rows', summary: 'Block selection for locked rows while keeping the table interactive.' },
  { order: '07', id: 'client-pagination', title: 'Client pagination', summary: 'The component slices local data and emits page changes.' },
  { order: '08', id: 'server-pagination', title: 'Server pagination', summary: 'The app owns slicing and passes total rows to the component.' },
  { order: '09', id: 'visible-page-selection', title: 'Visible page selection', summary: 'Select all only touches the currently rendered page.' },
  { order: '10', id: 'fixed-header', title: 'Fixed header', summary: 'Scrollable table body with sticky header support.' },
  { order: '11', id: 'conditional-styles', title: 'Conditional styles', summary: 'Apply row classes or styles from row data.' },
  { order: '12', id: 'cell-templates', title: 'Custom cell templates', summary: 'Angular TemplateRef cells for status, customer and money values.' },
  { order: '13', id: 'expandable-rows', title: 'Expandable rows', summary: 'Expanded details rendered from an Angular template.' },
  { order: '14', id: 'expand-on-click', title: 'Expand on row click', summary: 'Hide the expander and use row clicks to toggle details.' },
  { order: '15', id: 'row-events', title: 'Row events', summary: 'Click, double click, mouse enter and mouse leave outputs.' },
  { order: '16', id: 'dense', title: 'Dense layout', summary: 'Compact row height for operation-heavy screens.' },
  { order: '17', id: 'dark', title: 'Dark theme', summary: 'The legacy line keeps the same theme input.' },
  { order: '18', id: 'loading', title: 'Loading state', summary: 'Progress state for async data loading.' },
  { order: '19', id: 'empty', title: 'Empty state', summary: 'Custom empty message when there are no rows.' },
  { order: '20', id: 'headerless', title: 'Headerless table', summary: 'No title and no table head for compact embedded lists.' },
  { order: '21', id: 'responsive-wrap', title: 'Responsive and wrapped cells', summary: 'Long values wrap while the responsive shell protects the layout.' },
  { order: '22', id: 'global-filtering', title: 'Global filtering', summary: 'Filter across visible columns with a controlled globalFilter input.' },
  { order: '23', id: 'column-filtering', title: 'Column filtering', summary: 'Filter individual columns with TanStack-style id/value filter state.' },
  { order: '24', id: 'column-visibility', title: 'Column visibility', summary: 'Hide or show columns with columnVisibility and hiddenColumns compatibility.' },
  { order: '25', id: 'column-ordering', title: 'Column ordering', summary: 'Render columns in a controlled order without mutating the source columns.' },
  { order: '26', id: 'column-pinning', title: 'Column pinning', summary: 'Sticky left and right columns for wide admin grids.' },
  { order: '27', id: 'row-pinning', title: 'Row pinning', summary: 'Pin important rows to the top or bottom while keeping the rest sortable.' },
  { order: '28', id: 'grouping', title: 'Grouping', summary: 'Group rows by a column and expand or collapse each group.' },
  { order: '29', id: 'header-groups', title: 'Header groups', summary: 'Use nested column definitions to render grouped headers.' },
  { order: '30', id: 'faceting', title: 'Faceted values', summary: 'Read unique value counts from the component after filtering.' },
  { order: '31', id: 'column-sizing', title: 'Column sizing', summary: 'Control column width from a columnSizing state object.' },
  { order: '32', id: 'virtual-rows', title: 'Virtual rows', summary: 'Render a window of a larger row set for heavy legacy screens.' },
  { order: '33', id: 'kitchen-sink', title: 'Kitchen sink', summary: 'Filtering, visibility, ordering, pinning, grouping, selection, expansion and pagination together.' },
  { order: '34', id: 'accessibility-keyboard', title: 'Accessibility and keyboard', summary: 'ARIA sort, labels, selected state, expanded state and row keyboard activation.' },
  { order: '35', id: 'large-data-pagination', title: 'Large data pagination', summary: 'Server-style pagination with a large object-backed dataset and only the visible page in memory.' },
  { order: '36', id: 'image-cells', title: 'Image cells', summary: 'Product and user-media cells rendered with Angular templates and local image assets.' },
  { order: '37', id: 'headless-html', title: 'Headless custom HTML', summary: 'Use the exported table controller while rendering every element with custom application HTML.' }
];
