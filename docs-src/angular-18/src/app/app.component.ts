import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  DataTableCellContext,
  ConditionalStyle,
  DataTableColumn,
  DataTableExpandEvent,
  DataTableExpandableContext,
  DataTablePageEvent,
  DataTableRowsPerPageEvent,
  DataTableSelectionState,
  DataTableSortEvent
} from '@revivejs/angular-data-table-component';

type Movie = {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  rating: number;
  status: 'stable' | 'review' | 'critical';
  budget: number;
  summary: string;
};

type Ticket = {
  id: number;
  team: string;
  region: string;
  agent: string;
  priority: 'low' | 'medium' | 'high';
  age: number;
  status: 'open' | 'pending' | 'resolved';
};

const INSTALL_CODE = 'npm install @revivejs/angular-data-table-component';

const SETUP_CODE = `import { DataTableModule } from '@revivejs/angular-data-table-component';\n\n@NgModule({\n  imports: [BrowserModule, DataTableModule]\n})\nexport class AppModule {}`;

const BASIC_CODE = `<revive-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`;

const SELECTION_CODE = `<revive-data-table\n  [columns]="selectableColumns"\n  [data]="movies"\n  [selectableRows]="true"\n  (selectedRowsChange)="handleSelection($event)">\n</revive-data-table>`;

const EXPANSION_CODE = `<revive-data-table\n  [columns]="customColumns"\n  [data]="movies"\n  [expandableRows]="true"\n  [expandableRowTemplate]="movieDetailTemplate">\n</revive-data-table>`;

const SERVER_CODE = `<revive-data-table\n  [columns]="serverColumns"\n  [data]="serverRows"\n  [pagination]="true"\n  [paginationServer]="true"\n  [paginationTotalRows]="allTickets.length"\n  (pageChange)="handleServerPage($event)">\n</revive-data-table>`;

function stamp(message: string) {
  return `${new Date().toLocaleTimeString('en-US', { hour12: false })}  ${message}`;
}

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
  const priorities: Ticket['priority'][] = ['low', 'medium', 'high'];
  const statuses: Ticket['status'][] = ['open', 'pending', 'resolved'];
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

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('searchTools', { static: true }) searchTools!: TemplateRef<unknown>;
  @ViewChild('statusCell', { static: true }) statusCell!: TemplateRef<DataTableCellContext<Movie>>;
  @ViewChild('budgetCell', { static: true }) budgetCell!: TemplateRef<DataTableCellContext<Movie>>;
  @ViewChild('movieDetail', { static: true }) movieDetail!: TemplateRef<DataTableExpandableContext<Movie>>;

  readonly installCode = INSTALL_CODE;
  readonly setupCode = SETUP_CODE;
  readonly basicCode = BASIC_CODE;
  readonly selectionCode = SELECTION_CODE;
  readonly expansionCode = EXPANSION_CODE;
  readonly serverCode = SERVER_CODE;

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

  basicColumns: DataTableColumn<Movie>[] = [];
  sortableColumns: DataTableColumn<Movie>[] = [];
  selectableColumns: DataTableColumn<Movie>[] = [];
  customColumns: DataTableColumn<Movie>[] = [];
  compactColumns: DataTableColumn<Movie>[] = [];
  serverColumns: DataTableColumn<Ticket>[] = [];

  searchTerm = '';
  selectionSummary = 'No rows selected yet.';

  serverPage = 1;
  serverRowsPerPage = 5;
  serverLoading = false;
  serverRows: Ticket[] = [];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.basicColumns = this.createBasicColumns();
    this.sortableColumns = this.createSortableColumns();
    this.selectableColumns = this.createSelectableColumns();
    this.customColumns = this.createCustomColumns();
    this.compactColumns = this.createCompactColumns();
    this.serverColumns = this.createServerColumns();
    this.refreshServerRows();

    this.pushLog('Demo loaded successfully.');
    this.changeDetectorRef.detectChanges();
  }

  get filteredMovies() {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.movies;
    }

    return this.movies.filter((movie) =>
      [movie.title, movie.director, movie.genre, movie.status]
        .join(' ')
        .toLowerCase()
        .includes(term)
    );
  }

  pushLog(message: string) {
    this.logEntries.unshift(stamp(message));
    this.logEntries.splice(14);
  }

  clearLog() {
    this.logEntries.splice(0, this.logEntries.length);
  }

  onSearchTermChange(term: string) {
    this.searchTerm = term;
    this.pushLog(`Search term changed to "${term || 'all'}".`);
  }

  onSort(label: string, event: DataTableSortEvent<Movie | Ticket>) {
    this.pushLog(`${label}: sorted by ${String(event.column.name)} (${event.direction}).`);
  }

  onSelectionChange(state: DataTableSelectionState<Movie>) {
    this.selectionSummary =
      state.selectedCount === 0
        ? 'No rows selected yet.'
        : `${state.selectedCount} row(s) selected: ${state.selectedRows
            .map((row) => row.title)
            .join(', ')}.`;

    this.pushLog(`Selection updated: ${state.selectedCount} row(s).`);
  }

  onExpand(event: DataTableExpandEvent<Movie>) {
    this.pushLog(`${event.expanded ? 'Expanded' : 'Collapsed'} "${event.row.title}".`);
  }

  onPage(event: DataTablePageEvent) {
    this.pushLog(`Client pagination moved to page ${event.page}.`);
  }

  onRowsPerPage(event: DataTableRowsPerPageEvent) {
    this.pushLog(`Rows per page changed to ${event.rowsPerPage}.`);
  }

  onRowClick(row: Movie) {
    this.pushLog(`Row clicked: ${row.title}.`);
  }

  onServerPage(event: DataTablePageEvent) {
    this.serverPage = event.page;
    this.serverLoading = true;
    this.pushLog(`Server page requested: ${event.page}.`);

    setTimeout(() => {
      this.serverLoading = false;
      this.refreshServerRows();
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
    }, 220);
  }

  statusTone(status: Movie['status']) {
    switch (status) {
      case 'stable':
        return 'stable';
      case 'review':
        return 'review';
      default:
        return 'critical';
    }
  }

  priorityTone(priority: Ticket['priority']) {
    switch (priority) {
      case 'low':
        return 'low';
      case 'medium':
        return 'medium';
      default:
        return 'high';
    }
  }

  formatMoney(value: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  }

  private refreshServerRows() {
    const start = (this.serverPage - 1) * this.serverRowsPerPage;
    this.serverRows = this.allTickets.slice(start, start + this.serverRowsPerPage);
    this.pushLog(`Server rows refreshed for page ${this.serverPage}.`);
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

  private createSelectableColumns(): DataTableColumn<Movie>[] {
    return [
      {
        id: 'title',
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        wrap: true
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
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
        width: '120px',
        cellTemplate: this.budgetCell
      },
      {
        id: 'summary',
        name: 'Summary',
        selector: (row) => row.summary,
        wrap: true
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
        id: 'genre',
        name: 'Genre',
        selector: (row) => row.genre,
        sortable: true,
        width: '120px'
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '120px'
      },
      {
        id: 'year',
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
        width: '100px',
        right: true
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
        sortable: true,
        width: '100px'
      },
      {
        id: 'agent',
        name: 'Agent',
        selector: (row) => row.agent,
        sortable: true
      },
      {
        id: 'priority',
        name: 'Priority',
        selector: (row) => row.priority,
        sortable: true,
        width: '110px'
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        width: '110px'
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
