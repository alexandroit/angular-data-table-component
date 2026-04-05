import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  ConditionalStyle,
  DataTableCellContext,
  DataTableColumn,
  DataTableContextMessage,
  DataTableExpandEvent,
  DataTableExpandableContext,
  DataTablePageEvent,
  DataTableRowsPerPageEvent,
  DataTableSelectionState,
  DataTableSortEvent,
  DataTableSortOrder
} from '@revivejs/angular-data-table-component';
import { ANGULAR_LINE, DOCS_PATH, PACKAGE_LINE } from './docs-meta';

type MovieStatus = 'stable' | 'review' | 'critical';
type TicketPriority = 'low' | 'medium' | 'high';
type TicketStatus = 'open' | 'pending' | 'resolved';

type Movie = {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  rating: number;
  status: MovieStatus;
  budget: number;
  summary: string;
};

type Ticket = {
  id: number;
  team: string;
  region: string;
  agent: string;
  priority: TicketPriority;
  age: number;
  status: TicketStatus;
};

type DemoDefinition = {
  id: string;
  category: string;
  title: string;
  summary: string;
  code: string;
};

type DemoGroup = {
  title: string;
  demos: DemoDefinition[];
};

type KitchenSettings = {
  selectableRows: boolean;
  selectableRowsSingle: boolean;
  selectableRowsNoSelectAll: boolean;
  selectableRowsVisibleOnly: boolean;
  selectableRowsHighlight: boolean;
  expandableRows: boolean;
  expandOnRowClicked: boolean;
  expandOnRowDoubleClicked: boolean;
  expandableRowsHideExpander: boolean;
  pagination: boolean;
  striped: boolean;
  highlightOnHover: boolean;
  pointerOnHover: boolean;
  dense: boolean;
  responsive: boolean;
  fixedHeader: boolean;
  subHeader: boolean;
  noHeader: boolean;
  noTableHead: boolean;
  noContextMenu: boolean;
  progressPending: boolean;
};

type KitchenSettingToggle = {
  key: keyof KitchenSettings;
  label: string;
};

const INSTALL_CODE = 'npm install @revivejs/angular-data-table-component';

const SETUP_CODE = `import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { DataTableModule } from '@revivejs/angular-data-table-component';\n\n@NgModule({\n  imports: [BrowserModule, DataTableModule]\n})\nexport class AppModule {}`;

const RENDER_CODE = `<revive-data-table\n  [columns]="columns"\n  [data]="rows"\n  [pagination]="true">\n</revive-data-table>`;

const DEMO_GROUPS: DemoGroup[] = [
  {
    title: 'Getting Started',
    demos: [
      {
        id: 'kitchen-sink',
        category: 'Getting Started',
        title: 'Kitchen Sink',
        summary:
          'Toggle the main table behaviors together and validate how selection, expansion, pagination, headers, and hover states compose in Angular.',
        code:
          `<revive-data-table\n  [columns]="kitchenColumns"\n  [data]="kitchenRows"\n  [selectableRows]="kitchenSettings.selectableRows"\n  [expandableRows]="kitchenSettings.expandableRows"\n  [pagination]="kitchenSettings.pagination">\n</revive-data-table>`
      }
    ]
  },
  {
    title: 'Examples',
    demos: [
      {
        id: 'basic-table',
        category: 'Examples',
        title: 'Basic Table',
        summary: 'Start with a plain set of declarative columns and turn on pagination with no adapters.',
        code:
          `<revive-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`
      },
      {
        id: 'filtering',
        category: 'Examples',
        title: 'Filtering with Subheader',
        summary:
          'Keep search state in the Angular component while the table handles pagination and sorting.',
        code:
          `<revive-data-table\n  [columns]="sortableColumns"\n  [data]="filteredMovies"\n  [pagination]="true"\n  [subHeader]="true"\n  [subHeaderTemplate]="filterTools">\n</revive-data-table>`
      }
    ]
  },
  {
    title: 'Sorting',
    demos: [
      {
        id: 'sorting-basic',
        category: 'Sorting',
        title: 'Basic',
        summary: 'Built-in sorting covers the common case with simple selectors.',
        code:
          `<revive-data-table\n  [columns]="sortableColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`
      },
      {
        id: 'sorting-default',
        category: 'Sorting',
        title: 'Default Sort',
        summary: 'Use a column id and direction to set the default ordering for the first render.',
        code:
          `[defaultSortFieldId]="'rating'"\n[defaultSortAsc]="false"`
      },
      {
        id: 'sorting-custom',
        category: 'Sorting',
        title: 'Custom Sort',
        summary: 'Override one column with custom comparison logic when the domain needs special ordering.',
        code:
          `{\n  id: 'title',\n  name: 'Title',\n  selector: row => row.title,\n  sortable: true,\n  sortFunction: (left, right) => normalizeTitle(left.title).localeCompare(normalizeTitle(right.title))\n}`
      },
      {
        id: 'sorting-server',
        category: 'Sorting',
        title: 'Server Sort',
        summary: 'Enable server-style sorting and update the rows in the host component after the event fires.',
        code:
          `<revive-data-table\n  [columns]="sortableColumns"\n  [data]="remoteSortRows"\n  [sortServer]="true"\n  [progressPending]="remoteSortLoading"\n  (sortChange)="onRemoteSort($event)">\n</revive-data-table>`
      }
    ]
  },
  {
    title: 'Pagination',
    demos: [
      {
        id: 'pagination-basic',
        category: 'Pagination',
        title: 'Basic',
        summary: 'Client-side pagination keeps longer datasets readable with no extra host code.',
        code:
          `<revive-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`
      },
      {
        id: 'pagination-options',
        category: 'Pagination',
        title: 'Rows Per Page Options',
        summary: 'Use custom page-size options and a different default page size.',
        code:
          `[paginationPerPage]="5"\n[paginationRowsPerPageOptions]="[5, 8, 12]"`
      },
      {
        id: 'pagination-remote',
        category: 'Pagination',
        title: 'Remote',
        summary:
          'Simulate a remote API by slicing rows in the container after page and page-size events.',
        code:
          `<revive-data-table\n  [columns]="serverColumns"\n  [data]="serverRows"\n  [pagination]="true"\n  [paginationServer]="true"\n  [paginationTotalRows]="allTickets.length"\n  (pageChange)="onServerPage($event)">\n</revive-data-table>`
      },
      {
        id: 'fixed-header',
        category: 'Pagination',
        title: 'Fixed Header',
        summary: 'Keep headers visible while the table body scrolls inside a constrained viewport.',
        code:
          `[fixedHeader]="true"\nfixedHeaderScrollHeight="280px"`
      }
    ]
  },
  {
    title: 'Selectable',
    demos: [
      {
        id: 'selectable-basic',
        category: 'Selectable',
        title: 'Basic',
        summary: 'Selection state is emitted in a plain Angular shape with selected rows and counts.',
        code:
          `<revive-data-table\n  [columns]="selectionColumns"\n  [data]="movies"\n  [selectableRows]="true"\n  (selectedRowsChange)="onBasicSelectionChange($event)">\n</revive-data-table>`
      },
      {
        id: 'selectable-single',
        category: 'Selectable',
        title: 'Single Selection',
        summary: 'Use radio-style selection when only one active record should be chosen.',
        code:
          `[selectableRows]="true"\n[selectableRowsSingle]="true"`
      },
      {
        id: 'selectable-preselected',
        category: 'Selectable',
        title: 'Pre Selected',
        summary: 'Programmatically preselect rows based on host-defined rules.',
        code:
          `[selectableRowSelected]="isPreselectedMovie"`
      },
      {
        id: 'selectable-predisabled',
        category: 'Selectable',
        title: 'Pre Disabled',
        summary: 'Disable unavailable rows without removing them from the dataset.',
        code:
          `[selectableRowDisabled]="isSelectionDisabled"`
      },
      {
        id: 'selectable-visible-only',
        category: 'Selectable',
        title: 'Visible Page Only',
        summary: 'Limit select-all behavior to the current paginated view.',
        code:
          `[selectableRowsVisibleOnly]="true"`
      },
      {
        id: 'selectable-manage',
        category: 'Selectable',
        title: 'Manage Selections',
        summary: 'Use host-level buttons to clear or delete the selected rows without changing the component API.',
        code:
          `[clearSelectedRows]="managedClearSelection"\n(selectedRowsChange)="onManagedSelectionChange($event)"`
      },
      {
        id: 'selectable-context-message',
        category: 'Selectable',
        title: 'Custom Context Message',
        summary: 'Tune the selection context bar wording to match the product voice.',
        code:
          `[contextMessage]="reviewContextMessage"`
      }
    ]
  },
  {
    title: 'Expandable',
    demos: [
      {
        id: 'expandable-basic',
        category: 'Expandable',
        title: 'Basic',
        summary: 'Template-driven expanded content keeps the main row layout compact.',
        code:
          `<revive-data-table\n  [columns]="customColumns"\n  [data]="movies"\n  [expandableRows]="true"\n  [expandableRowTemplate]="movieDetail">\n</revive-data-table>`
      },
      {
        id: 'expandable-row-click',
        category: 'Expandable',
        title: 'Expand On Row Click',
        summary: 'Open detail rows from the row itself instead of the expander control.',
        code:
          `[expandOnRowClicked]="true"`
      },
      {
        id: 'expandable-preexpanded',
        category: 'Expandable',
        title: 'Pre Expanded',
        summary: 'Start with one or more rows already expanded.',
        code:
          `[expandableRowExpanded]="isPreExpandedMovie"`
      },
      {
        id: 'expandable-predisabled',
        category: 'Expandable',
        title: 'Pre Disabled',
        summary: 'Prevent expansion for rows that do not have extra content available.',
        code:
          `[expandableRowDisabled]="isExpansionDisabled"`
      },
      {
        id: 'expandable-hide-expander',
        category: 'Expandable',
        title: 'Hide Expander',
        summary: 'Rely on row click and remove the dedicated expander column.',
        code:
          `[expandableRowsHideExpander]="true"\n[expandOnRowClicked]="true"`
      }
    ]
  },
  {
    title: 'Columns',
    demos: [
      {
        id: 'columns-template-cells',
        category: 'Columns',
        title: 'Template Cells',
        summary: 'Use Angular templates for richer status, budget, and detail rendering.',
        code:
          `{\n  id: 'status',\n  name: 'Status',\n  selector: row => row.status,\n  cellTemplate: statusCell\n}`
      },
      {
        id: 'columns-formatters',
        category: 'Columns',
        title: 'Formatters',
        summary: 'Use `format` when a column only needs transformed text instead of a full template.',
        code:
          `{\n  id: 'budgetSummary',\n  name: 'Budget summary',\n  format: row => \`\${formatMoney(row.budget)} • \${row.genre}\`\n}`
      },
      {
        id: 'columns-omit',
        category: 'Columns',
        title: 'Omit',
        summary: 'Hide a column from one table configuration while keeping the base dataset the same.',
        code:
          `{\n  id: 'director',\n  name: 'Director',\n  selector: row => row.director,\n  omit: true\n}`
      },
      {
        id: 'columns-omit-dynamic',
        category: 'Columns',
        title: 'Omit Dynamically',
        summary: 'Toggle a column on and off from Angular state without rebuilding the table shell.',
        code:
          `toggleDirectorColumn() {\n  this.hideDirectorColumn = !this.hideDirectorColumn;\n}`
      },
      {
        id: 'columns-alignment',
        category: 'Columns',
        title: 'Alignment and Wrap',
        summary: 'Mix wrapped, centered, and right-aligned columns in one declarative column list.',
        code:
          `{\n  name: 'Budget',\n  selector: row => row.budget,\n  right: true,\n  width: '130px'\n}`
      }
    ]
  },
  {
    title: 'Conditional Rows',
    demos: [
      {
        id: 'conditional-rows',
        category: 'Conditional Rows',
        title: 'Status Tones',
        summary: 'Use row-level conditional styles to flag records that need attention.',
        code:
          `[conditionalRowStyles]="contextualStyles"`
      }
    ]
  },
  {
    title: 'Loading & States',
    demos: [
      {
        id: 'loading-pending',
        category: 'Loading & States',
        title: 'Progress Pending',
        summary: 'Keep the table shell in place while rows are being fetched or recomputed.',
        code:
          `[progressPending]="loadingPending"`
      },
      {
        id: 'loading-empty',
        category: 'Loading & States',
        title: 'Empty State',
        summary: 'Customize the text shown when there are no rows to render.',
        code:
          `[data]="[]"\nnoDataText="No archived releases found."`
      }
    ]
  },
  {
    title: 'Theming',
    demos: [
      {
        id: 'theme-dark',
        category: 'Theming',
        title: 'Dark Theme',
        summary: 'Switch to the built-in dark theme without changing your Angular templates.',
        code:
          `theme="dark"`
      },
      {
        id: 'theme-dense',
        category: 'Theming',
        title: 'Dense and Striped',
        summary: 'Combine compact rows, stripes, and hover affordances for denser operational views.',
        code:
          `[dense]="true"\n[striped]="true"\n[highlightOnHover]="true"`
      }
    ]
  },
  {
    title: 'Headers',
    demos: [
      {
        id: 'headers-subheader',
        category: 'Headers',
        title: 'Subheader Tools',
        summary: 'Mount Angular controls above the table via a `TemplateRef` subheader.',
        code:
          `[subHeader]="true"\n[subHeaderTemplate]="filterTools"`
      },
      {
        id: 'headers-no-header',
        category: 'Headers',
        title: 'No Header',
        summary: 'Hide the title bar while keeping the body and footer intact.',
        code:
          `[noHeader]="true"`
      },
      {
        id: 'headers-no-table-head',
        category: 'Headers',
        title: 'No Table Head',
        summary: 'Hide the table head when you need a list-style presentation.',
        code:
          `[noTableHead]="true"`
      }
    ]
  }
];

const KITCHEN_TOGGLES: KitchenSettingToggle[] = [
  { key: 'selectableRows', label: 'Selectable rows' },
  { key: 'selectableRowsSingle', label: 'Single selection' },
  { key: 'selectableRowsNoSelectAll', label: 'Hide select all' },
  { key: 'selectableRowsVisibleOnly', label: 'Visible page only' },
  { key: 'selectableRowsHighlight', label: 'Selection highlight' },
  { key: 'expandableRows', label: 'Expandable rows' },
  { key: 'expandOnRowClicked', label: 'Expand on row click' },
  { key: 'expandOnRowDoubleClicked', label: 'Expand on double click' },
  { key: 'expandableRowsHideExpander', label: 'Hide expander' },
  { key: 'pagination', label: 'Pagination' },
  { key: 'striped', label: 'Striped' },
  { key: 'highlightOnHover', label: 'Highlight on hover' },
  { key: 'pointerOnHover', label: 'Pointer on hover' },
  { key: 'dense', label: 'Dense' },
  { key: 'responsive', label: 'Responsive' },
  { key: 'fixedHeader', label: 'Fixed header' },
  { key: 'subHeader', label: 'Subheader' },
  { key: 'noHeader', label: 'No header' },
  { key: 'noTableHead', label: 'No table head' },
  { key: 'noContextMenu', label: 'No context bar' },
  { key: 'progressPending', label: 'Progress pending' }
];

function buildMovies(): Movie[] {
  return [
    {
      id: 1,
      title: 'Arrival',
      director: 'Denis Villeneuve',
      year: 2016,
      genre: 'Sci-Fi',
      rating: 8.1,
      status: 'stable',
      budget: 47000000,
      summary: 'A linguist is recruited to decode an alien language before global panic wins.'
    },
    {
      id: 2,
      title: 'Moonlight',
      director: 'Barry Jenkins',
      year: 2016,
      genre: 'Drama',
      rating: 7.4,
      status: 'review',
      budget: 1500000,
      summary: 'A three-part portrait of identity, vulnerability, and adulthood.'
    },
    {
      id: 3,
      title: 'Mad Max: Fury Road',
      director: 'George Miller',
      year: 2015,
      genre: 'Action',
      rating: 8.1,
      status: 'stable',
      budget: 150000000,
      summary: 'A relentless desert chase powered by practical effects and chaos.'
    },
    {
      id: 4,
      title: 'Annihilation',
      director: 'Alex Garland',
      year: 2018,
      genre: 'Sci-Fi',
      rating: 6.8,
      status: 'critical',
      budget: 40000000,
      summary: 'A biologist enters a shifting zone where nature mutates beyond recognition.'
    },
    {
      id: 5,
      title: 'Whiplash',
      director: 'Damien Chazelle',
      year: 2014,
      genre: 'Drama',
      rating: 8.5,
      status: 'stable',
      budget: 3300000,
      summary: 'A young drummer collides with an unforgiving mentor.'
    },
    {
      id: 6,
      title: 'Everything Everywhere All at Once',
      director: 'Daniels',
      year: 2022,
      genre: 'Fantasy',
      rating: 7.8,
      status: 'review',
      budget: 25000000,
      summary: 'Multiverse absurdity, family pressure, and empathy on maximalist settings.'
    },
    {
      id: 7,
      title: 'The Farewell',
      director: 'Lulu Wang',
      year: 2019,
      genre: 'Comedy',
      rating: 7.5,
      status: 'stable',
      budget: 3000000,
      summary: 'A family stages a fake wedding to say goodbye without saying goodbye.'
    },
    {
      id: 8,
      title: 'Parasite',
      director: 'Bong Joon-ho',
      year: 2019,
      genre: 'Thriller',
      rating: 8.5,
      status: 'stable',
      budget: 11400000,
      summary: 'Class satire escalates into a razor-sharp thriller.'
    },
    {
      id: 9,
      title: 'Aftersun',
      director: 'Charlotte Wells',
      year: 2022,
      genre: 'Drama',
      rating: 7.6,
      status: 'review',
      budget: 2000000,
      summary: 'A holiday memory shifts into a meditation on grief and perspective.'
    },
    {
      id: 10,
      title: 'Oppenheimer',
      director: 'Christopher Nolan',
      year: 2023,
      genre: 'History',
      rating: 8.3,
      status: 'stable',
      budget: 100000000,
      summary: 'A dense character-driven story about ambition, fear, and consequence.'
    },
    {
      id: 11,
      title: 'Past Lives',
      director: 'Celine Song',
      year: 2023,
      genre: 'Romance',
      rating: 7.9,
      status: 'stable',
      budget: 12000000,
      summary: 'Two lives stay connected across years, borders, and decisions.'
    },
    {
      id: 12,
      title: 'Tenet',
      director: 'Christopher Nolan',
      year: 2020,
      genre: 'Sci-Fi',
      rating: 7.3,
      status: 'critical',
      budget: 205000000,
      summary: 'Time inversion delivers spectacle and confusion in equal measure.'
    }
  ];
}

function buildTickets(): Ticket[] {
  const priorities: TicketPriority[] = ['low', 'medium', 'high'];
  const statuses: TicketStatus[] = ['open', 'pending', 'resolved'];
  const teams = ['Platform', 'Billing', 'Delivery', 'Identity'];
  const regions = ['NA', 'EU', 'LATAM', 'APAC'];
  const agents = ['Lena', 'Marco', 'Priya', 'Jon', 'Ari', 'Sara'];
  const rows: Ticket[] = [];

  for (let index = 0; index < 42; index += 1) {
    rows.push({
      id: index + 1,
      team: teams[index % teams.length],
      region: regions[index % regions.length],
      agent: agents[index % agents.length],
      priority: priorities[index % priorities.length],
      age: 1 + (index * 3) % 24,
      status: statuses[index % statuses.length]
    });
  }

  return rows;
}

function stamp(message: string) {
  return `${new Date().toLocaleTimeString('en-US', { hour12: false })}  ${message}`;
}

function normalizeTitle(value: string) {
  return value.replace(/^(a|an|the)\s+/i, '').toLowerCase();
}

function toSortValue<T>(row: T, selector: DataTableColumn<T>['selector'], rowIndex: number) {
  if (!selector) {
    return null;
  }

  if (typeof selector === 'function') {
    return selector(row, rowIndex);
  }

  return (row as Record<string, unknown>)[selector as string];
}

function compareSortValues(left: unknown, right: unknown) {
  if (left == null && right == null) {
    return 0;
  }

  if (left == null) {
    return -1;
  }

  if (right == null) {
    return 1;
  }

  if (typeof left === 'number' && typeof right === 'number') {
    return left - right;
  }

  return String(left).localeCompare(String(right), undefined, {
    numeric: true,
    sensitivity: 'base'
  });
}

function sortRowsByEvent<T>(rows: T[], event: DataTableSortEvent<T>) {
  const directionMultiplier = event.direction === 'asc' ? 1 : -1;

  return [...rows].sort((left, right) => {
    if (event.column.sortFunction) {
      return event.column.sortFunction(left, right) * directionMultiplier;
    }

    const leftValue = toSortValue(left, event.column.selector, rows.indexOf(left));
    const rightValue = toSortValue(right, event.column.selector, rows.indexOf(right));

    return compareSortValues(leftValue, rightValue) * directionMultiplier;
  });
}

@Component({
  selector: 'docs-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('kitchenTools', { static: true }) kitchenTools!: TemplateRef<unknown>;
  @ViewChild('filterTools', { static: true }) filterTools!: TemplateRef<unknown>;
  @ViewChild('statusCell', { static: true }) statusCell!: TemplateRef<DataTableCellContext<Movie>>;
  @ViewChild('budgetCell', { static: true }) budgetCell!: TemplateRef<DataTableCellContext<Movie>>;
  @ViewChild('ticketPriorityCell', { static: true }) ticketPriorityCell!: TemplateRef<DataTableCellContext<Ticket>>;
  @ViewChild('ticketStatusCell', { static: true }) ticketStatusCell!: TemplateRef<DataTableCellContext<Ticket>>;
  @ViewChild('movieDetail', { static: true }) movieDetail!: TemplateRef<DataTableExpandableContext<Movie>>;

  readonly angularLine = ANGULAR_LINE;
  readonly packageLine = PACKAGE_LINE;
  readonly docsPath = DOCS_PATH;
  readonly installCode = INSTALL_CODE;
  readonly setupCode = SETUP_CODE;
  readonly renderCode = RENDER_CODE;
  readonly demoGroups = DEMO_GROUPS;
  readonly kitchenToggles = KITCHEN_TOGGLES;
  readonly movies = buildMovies();
  readonly allTickets = buildTickets();
  readonly logEntries: string[] = [];

  readonly contextualStyles: ConditionalStyle<Movie>[] = [
    {
      when: (row) => row.status === 'critical',
      style: {
        borderLeft: '4px solid #b42318',
        background: 'rgba(180, 35, 24, 0.06)'
      }
    },
    {
      when: (row) => row.status === 'review',
      style: {
        borderLeft: '4px solid #d26a2a',
        background: 'rgba(210, 106, 42, 0.06)'
      }
    }
  ];

  readonly reviewContextMessage: DataTableContextMessage = {
    singular: 'movie',
    plural: 'movies',
    message: 'queued for review'
  };

  selectedDemoId = 'kitchen-sink';
  kitchenSearchTerm = '';
  filterSearchTerm = '';

  kitchenSettings: KitchenSettings = {
    selectableRows: true,
    selectableRowsSingle: false,
    selectableRowsNoSelectAll: false,
    selectableRowsVisibleOnly: false,
    selectableRowsHighlight: true,
    expandableRows: true,
    expandOnRowClicked: false,
    expandOnRowDoubleClicked: false,
    expandableRowsHideExpander: false,
    pagination: true,
    striped: false,
    highlightOnHover: true,
    pointerOnHover: true,
    dense: false,
    responsive: true,
    fixedHeader: false,
    subHeader: true,
    noHeader: false,
    noTableHead: false,
    noContextMenu: false,
    progressPending: false
  };

  kitchenColumns: DataTableColumn<Movie>[] = [];
  basicColumns: DataTableColumn<Movie>[] = [];
  sortableColumns: DataTableColumn<Movie>[] = [];
  defaultSortColumns: DataTableColumn<Movie>[] = [];
  customSortColumns: DataTableColumn<Movie>[] = [];
  selectionColumns: DataTableColumn<Movie>[] = [];
  selectionStatusColumns: DataTableColumn<Movie>[] = [];
  customColumns: DataTableColumn<Movie>[] = [];
  formatterColumns: DataTableColumn<Movie>[] = [];
  omitColumns: DataTableColumn<Movie>[] = [];
  alignmentColumns: DataTableColumn<Movie>[] = [];
  compactColumns: DataTableColumn<Movie>[] = [];
  serverColumns: DataTableColumn<Ticket>[] = [];

  hideDirectorColumn = false;

  basicSelectionSummary = 'No rows selected yet.';
  singleSelectionSummary = 'No primary record selected.';
  visibleSelectionSummary = 'Visible-page selection is empty.';
  managedSelectionSummary = 'Use the table selection to stage delete or clear actions.';
  managedSelectedRows: Movie[] = [];
  managedRows: Movie[] = [];
  managedClearSelection = false;

  remoteSortRows: Movie[] = [];
  remoteSortLoading = false;

  serverPage = 1;
  serverRowsPerPage = 5;
  serverLoading = false;
  serverRows: Ticket[] = [];

  loadingRows: Movie[] = [];
  loadingPending = true;
  customLoadingRows: Ticket[] = [];
  customLoadingPending = true;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.kitchenColumns = this.createKitchenColumns();
    this.basicColumns = this.createBasicColumns();
    this.sortableColumns = this.createSortableColumns();
    this.defaultSortColumns = this.createDefaultSortColumns();
    this.customSortColumns = this.createCustomSortColumns();
    this.selectionColumns = this.createSelectionColumns();
    this.selectionStatusColumns = this.createSelectionStatusColumns();
    this.customColumns = this.createCustomColumns();
    this.formatterColumns = this.createFormatterColumns();
    this.omitColumns = this.createOmitColumns();
    this.alignmentColumns = this.createAlignmentColumns();
    this.compactColumns = this.createCompactColumns();
    this.serverColumns = this.createServerColumns();

    this.managedRows = [...this.movies];
    this.remoteSortRows = [...this.movies];
    this.refreshServerRows(false);
    this.restartLoadingDemo(false);
    this.restartCustomLoadingDemo(false);

    this.pushLog('Demo loaded successfully.');
    this.changeDetectorRef.detectChanges();
  }

  get selectedDemo() {
    for (const group of this.demoGroups) {
      const found = group.demos.find((demo) => demo.id === this.selectedDemoId);
      if (found) {
        return found;
      }
    }

    return this.demoGroups[0].demos[0];
  }

  get kitchenRows() {
    const term = this.kitchenSearchTerm.trim().toLowerCase();
    if (!term) {
      return this.movies;
    }

    return this.movies.filter((movie) =>
      [movie.title, movie.director, movie.genre, movie.status, movie.summary]
        .join(' ')
        .toLowerCase()
        .includes(term)
    );
  }

  get filteredMovies() {
    const term = this.filterSearchTerm.trim().toLowerCase();
    if (!term) {
      return this.movies;
    }

    return this.movies.filter((movie) =>
      [movie.title, movie.director, movie.genre, movie.status, movie.summary]
        .join(' ')
        .toLowerCase()
        .includes(term)
    );
  }

  get dynamicOmitColumns() {
    return [
      this.sortableColumns[0],
      {
        ...this.sortableColumns[1],
        omit: this.hideDirectorColumn
      },
      this.sortableColumns[2],
      this.sortableColumns[3]
    ];
  }

  trackByGroup(index: number, group: DemoGroup) {
    return `${group.title}-${index}`;
  }

  trackByDemo(index: number, demo: DemoDefinition) {
    return demo.id || index;
  }

  selectDemo(demoId: string) {
    this.selectedDemoId = demoId;
    this.pushLog(`Opened demo: ${this.selectedDemo.category} / ${this.selectedDemo.title}.`);
  }

  pushLog(message: string) {
    this.logEntries.unshift(stamp(message));
    this.logEntries.splice(14);
  }

  clearLog() {
    this.logEntries.splice(0, this.logEntries.length);
  }

  toggleKitchenSetting(key: keyof KitchenSettings) {
    this.kitchenSettings = {
      ...this.kitchenSettings,
      [key]: !this.kitchenSettings[key]
    };

    this.pushLog(`Kitchen Sink: ${key} ${this.kitchenSettings[key] ? 'enabled' : 'disabled'}.`);
  }

  onKitchenSearchTermChange(term: string) {
    this.kitchenSearchTerm = term;
    this.pushLog(`Kitchen Sink search: ${term || 'cleared'}.`);
  }

  onFilterSearchTermChange(term: string) {
    this.filterSearchTerm = term;
    this.pushLog(`Filter query: ${term || 'cleared'}.`);
  }

  onSort(label: string, event: DataTableSortEvent<Movie | Ticket>) {
    this.pushLog(`${label}: sorted by ${String(event.column.name)} (${event.direction}).`);
  }

  onRemoteSort(event: DataTableSortEvent<Movie>) {
    this.remoteSortLoading = true;
    this.pushLog(`Remote sort requested: ${String(event.column.name)} (${event.direction}).`);

    setTimeout(() => {
      this.remoteSortRows = sortRowsByEvent(this.remoteSortRows, event);
      this.remoteSortLoading = false;
      this.pushLog(`Remote sort applied for ${String(event.column.name)}.`);
      this.changeDetectorRef.detectChanges();
    }, 220);
  }

  onBasicSelectionChange(state: DataTableSelectionState<Movie>) {
    this.basicSelectionSummary =
      state.selectedCount === 0
        ? 'No rows selected yet.'
        : `${state.selectedCount} row(s) selected: ${state.selectedRows.map((row) => row.title).join(', ')}.`;

    this.pushLog(`Basic selection changed: ${state.selectedCount} row(s).`);
  }

  onSingleSelectionChange(state: DataTableSelectionState<Movie>) {
    this.singleSelectionSummary =
      state.selectedCount === 0
        ? 'No primary record selected.'
        : `Primary record: ${state.selectedRows[0].title}.`;

    this.pushLog(`Single selection changed: ${state.selectedCount} row(s).`);
  }

  onVisibleSelectionChange(state: DataTableSelectionState<Movie>) {
    this.visibleSelectionSummary =
      state.selectedCount === 0
        ? 'Visible-page selection is empty.'
        : `${state.selectedCount} visible row(s) selected.`;

    this.pushLog(`Visible-page selection changed: ${state.selectedCount} row(s).`);
  }

  onManagedSelectionChange(state: DataTableSelectionState<Movie>) {
    this.managedSelectedRows = state.selectedRows;
    this.managedSelectionSummary =
      state.selectedCount === 0
        ? 'Use the table selection to stage delete or clear actions.'
        : `${state.selectedCount} row(s) staged: ${state.selectedRows.map((row) => row.title).join(', ')}.`;

    this.pushLog(`Managed selection changed: ${state.selectedCount} row(s).`);
  }

  clearManagedSelection() {
    this.managedClearSelection = !this.managedClearSelection;
    this.managedSelectedRows = [];
    this.managedSelectionSummary = 'Selection cleared from the host component.';
    this.pushLog('Managed selection cleared.');
  }

  deleteManagedSelection() {
    if (!this.managedSelectedRows.length) {
      return;
    }

    const selectedIds = new Set(this.managedSelectedRows.map((row) => row.id));
    this.managedRows = this.managedRows.filter((row) => !selectedIds.has(row.id));
    this.managedClearSelection = !this.managedClearSelection;
    this.managedSelectionSummary = 'Selected rows deleted from the host data source.';
    this.managedSelectedRows = [];
    this.pushLog('Managed rows deleted from the host data source.');
  }

  onExpand(label: string, event: DataTableExpandEvent<Movie>) {
    this.pushLog(`${label}: ${event.expanded ? 'expanded' : 'collapsed'} "${event.row.title}".`);
  }

  onRowClick(label: string, row: Movie) {
    this.pushLog(`${label}: row clicked "${row.title}".`);
  }

  onPage(label: string, event: DataTablePageEvent) {
    this.pushLog(`${label}: moved to page ${event.page}.`);
  }

  onRowsPerPage(label: string, event: DataTableRowsPerPageEvent) {
    this.pushLog(`${label}: rows per page ${event.rowsPerPage}.`);
  }

  onServerPage(event: DataTablePageEvent) {
    this.serverPage = event.page;
    this.serverLoading = true;
    this.pushLog(`Server page requested: ${event.page}.`);

    setTimeout(() => {
      this.serverLoading = false;
      this.refreshServerRows();
      this.changeDetectorRef.detectChanges();
    }, 220);
  }

  onServerRowsPerPage(event: DataTableRowsPerPageEvent) {
    this.serverRowsPerPage = event.rowsPerPage;
    this.serverPage = 1;
    this.serverLoading = true;
    this.pushLog(`Server page size changed to ${event.rowsPerPage}.`);

    setTimeout(() => {
      this.serverLoading = false;
      this.refreshServerRows();
      this.changeDetectorRef.detectChanges();
    }, 220);
  }

  restartLoadingDemo(log = true) {
    this.loadingPending = true;
    this.loadingRows = [];

    if (log) {
      this.pushLog('Restarted loading pending demo.');
    }

    setTimeout(() => {
      this.loadingRows = this.movies.slice(0, 8);
      this.loadingPending = false;
      this.pushLog('Loading pending demo resolved.');
      this.changeDetectorRef.detectChanges();
    }, 1200);
  }

  restartCustomLoadingDemo(log = true) {
    this.customLoadingPending = true;
    this.customLoadingRows = [];

    if (log) {
      this.pushLog('Restarted custom loading demo.');
    }

    setTimeout(() => {
      this.customLoadingRows = this.allTickets.slice(0, 8);
      this.customLoadingPending = false;
      this.pushLog('Custom loading demo resolved.');
      this.changeDetectorRef.detectChanges();
    }, 1500);
  }

  toggleDirectorColumn() {
    this.hideDirectorColumn = !this.hideDirectorColumn;
    this.pushLog(`Dynamic omit: director column ${this.hideDirectorColumn ? 'hidden' : 'shown'}.`);
  }

  statusTone(status: MovieStatus) {
    return status;
  }

  priorityTone(priority: TicketPriority) {
    return priority;
  }

  ticketStatusTone(status: TicketStatus) {
    return status;
  }

  isPreselectedMovie = (row: Movie) => row.rating >= 8.3;
  isSelectionDisabled = (row: Movie) => row.status === 'critical';
  isPreExpandedMovie = (row: Movie) => row.id === 1;
  isExpansionDisabled = (row: Movie) => row.year < 2000;

  formatMoney(value: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  }

  formatRating(value: number) {
    return `${value.toFixed(1)}/10`;
  }

  private refreshServerRows(log = true) {
    const start = (this.serverPage - 1) * this.serverRowsPerPage;
    this.serverRows = this.allTickets.slice(start, start + this.serverRowsPerPage);

    if (log) {
      this.pushLog(`Server rows refreshed for page ${this.serverPage}.`);
    }
  }

  private createKitchenColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true,
        minWidth: '220px'
      },
      {
        id: 'director',
        name: 'Director',
        selector: (row) => row.director,
        sortable: true,
        wrap: true,
        minWidth: '180px'
      },
      {
        id: 'year',
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
        right: true,
        width: '90px'
      },
      {
        id: 'rating',
        name: 'Rating',
        selector: (row) => row.rating,
        sortable: true,
        right: true,
        width: '100px'
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '120px',
        cellTemplate: this.statusCell
      }
    ];
  }

  private createBasicColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true,
        minWidth: '220px'
      },
      {
        id: 'director',
        name: 'Director',
        selector: (row) => row.director,
        sortable: true,
        minWidth: '180px'
      },
      {
        id: 'year',
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
        right: true,
        width: '100px'
      }
    ];
  }

  private createSortableColumns(): DataTableColumn<Movie>[] {
    return [
      ...this.createBasicColumns(),
      {
        id: 'genre',
        name: 'Genre',
        selector: (row) => row.genre,
        sortable: true,
        width: '120px'
      },
      {
        id: 'rating',
        name: 'Rating',
        selector: (row) => row.rating,
        sortable: true,
        right: true,
        width: '110px'
      }
    ];
  }

  private createDefaultSortColumns(): DataTableColumn<Movie>[] {
    return [
      ...this.createSortableColumns(),
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '120px',
        cellTemplate: this.statusCell
      }
    ];
  }

  private createCustomSortColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true,
        sortFunction: (left, right) => normalizeTitle(left.title).localeCompare(normalizeTitle(right.title))
      },
      {
        id: 'director',
        name: 'Director',
        selector: (row) => row.director,
        sortable: true
      },
      {
        id: 'year',
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
        right: true,
        width: '100px'
      }
    ];
  }

  private createSelectionColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true
      },
      {
        id: 'genre',
        name: 'Genre',
        selector: (row) => row.genre,
        sortable: true,
        width: '120px'
      },
      {
        id: 'rating',
        name: 'Rating',
        selector: (row) => row.rating,
        sortable: true,
        right: true,
        width: '100px'
      }
    ];
  }

  private createSelectionStatusColumns(): DataTableColumn<Movie>[] {
    return [
      this.createSelectionColumns()[0],
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '120px',
        cellTemplate: this.statusCell
      },
      this.createSelectionColumns()[2]
    ];
  }

  private createCustomColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true,
        minWidth: '220px'
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '130px',
        cellTemplate: this.statusCell
      },
      {
        id: 'budget',
        name: 'Budget',
        selector: (row) => row.budget,
        sortable: true,
        right: true,
        width: '130px',
        cellTemplate: this.budgetCell
      },
      {
        id: 'summary',
        name: 'Summary',
        selector: (row) => row.summary,
        wrap: true,
        minWidth: '280px'
      }
    ];
  }

  private createFormatterColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Release',
        selector: (row) => row.title,
        sortable: true,
        format: (row) => `${row.title} (${row.year})`,
        wrap: true,
        minWidth: '240px'
      },
      {
        id: 'budgetSummary',
        name: 'Budget summary',
        sortable: true,
        selector: (row) => row.budget,
        format: (row) => `${this.formatMoney(row.budget)} • ${row.genre}`,
        wrap: true,
        minWidth: '180px'
      },
      {
        id: 'rating',
        name: 'Rating snapshot',
        selector: (row) => row.rating,
        sortable: true,
        format: (row) => `${this.formatRating(row.rating)} • ${row.status}`,
        right: true,
        width: '150px'
      }
    ];
  }

  private createOmitColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true
      },
      {
        id: 'director',
        name: 'Director',
        selector: (row) => row.director,
        sortable: true,
        omit: true
      },
      {
        id: 'year',
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
        right: true,
        width: '100px'
      },
      {
        id: 'genre',
        name: 'Genre',
        selector: (row) => row.genre,
        sortable: true
      }
    ];
  }

  private createAlignmentColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Wrapped title',
        selector: (row) => `${row.title} — ${row.summary}`,
        sortable: true,
        wrap: true,
        minWidth: '320px'
      },
      {
        id: 'genre',
        name: 'Genre',
        selector: (row) => row.genre,
        sortable: true,
        center: true,
        width: '140px'
      },
      {
        id: 'budget',
        name: 'Budget',
        selector: (row) => row.budget,
        sortable: true,
        right: true,
        width: '130px',
        format: (row) => this.formatMoney(row.budget)
      }
    ];
  }

  private createCompactColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true,
        minWidth: '220px'
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '120px',
        cellTemplate: this.statusCell
      },
      {
        id: 'rating',
        name: 'Rating',
        selector: (row) => row.rating,
        sortable: true,
        right: true,
        width: '100px'
      }
    ];
  }

  private createServerColumns(): DataTableColumn<Ticket>[] {
    return [
      {
        id: 'team',
        name: 'Team',
        selector: (row) => row.team,
        sortable: true
      },
      {
        id: 'region',
        name: 'Region',
        selector: (row) => row.region,
        sortable: true
      },
      {
        id: 'agent',
        name: 'Agent',
        selector: (row) => row.agent,
        sortable: true,
        minWidth: '140px'
      },
      {
        id: 'priority',
        name: 'Priority',
        selector: (row) => row.priority,
        sortable: true,
        width: '120px',
        cellTemplate: this.ticketPriorityCell
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '120px',
        cellTemplate: this.ticketStatusCell
      },
      {
        id: 'age',
        name: 'Age (h)',
        selector: (row) => row.age,
        sortable: true,
        right: true,
        width: '100px'
      }
    ];
  }
}
