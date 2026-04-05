"use strict";
(self["webpackChunkdocs_angular_18"] = self["webpackChunkdocs_angular_18"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _revivejs_angular_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @revivejs/angular-data-table-component */ 5304);




const _c0 = ["searchTools"];
const _c1 = ["statusCell"];
const _c2 = ["budgetCell"];
const _c3 = ["movieDetail"];
function AppComponent_div_332_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r2, " ");
  }
}
function AppComponent_ng_template_338_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_338_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Client-side filtering in the host component.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.searchTerm);
  }
}
function AppComponent_ng_template_340_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const value_r6 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.statusTone(row_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r6, " ");
  }
}
function AppComponent_ng_template_342_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "production");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.formatMoney(row_r7.budget));
  }
}
function AppComponent_ng_template_344_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49)(1, "div")(2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div")(12, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 51)(22, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.director);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r8.rating, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.formatMoney(row_r8.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.summary);
  }
}
const INSTALL_CODE = 'npm install @revivejs/angular-data-table-component';
const SETUP_CODE = `import { DataTableModule } from '@revivejs/angular-data-table-component';\n\n@NgModule({\n  imports: [BrowserModule, DataTableModule]\n})\nexport class AppModule {}`;
const BASIC_CODE = `<revive-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`;
const SELECTION_CODE = `<revive-data-table\n  [columns]="selectableColumns"\n  [data]="movies"\n  [selectableRows]="true"\n  (selectedRowsChange)="handleSelection($event)">\n</revive-data-table>`;
const EXPANSION_CODE = `<revive-data-table\n  [columns]="customColumns"\n  [data]="movies"\n  [expandableRows]="true"\n  [expandableRowTemplate]="movieDetailTemplate">\n</revive-data-table>`;
const SERVER_CODE = `<revive-data-table\n  [columns]="serverColumns"\n  [data]="serverRows"\n  [pagination]="true"\n  [paginationServer]="true"\n  [paginationTotalRows]="allTickets.length"\n  (pageChange)="handleServerPage($event)">\n</revive-data-table>`;
function stamp(message) {
  return `${new Date().toLocaleTimeString('en-US', {
    hour12: false
  })}  ${message}`;
}
function buildMovies() {
  return [{
    id: 1,
    title: 'Arrival',
    director: 'Denis Villeneuve',
    year: 2016,
    genre: 'Sci-Fi',
    rating: 8.1,
    status: 'stable',
    budget: 47000000,
    summary: 'A linguist is recruited to decode an alien language before global panic wins.'
  }, {
    id: 2,
    title: 'Moonlight',
    director: 'Barry Jenkins',
    year: 2016,
    genre: 'Drama',
    rating: 7.4,
    status: 'review',
    budget: 1500000,
    summary: 'A three-part portrait of identity, vulnerability, and adulthood.'
  }, {
    id: 3,
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    year: 2015,
    genre: 'Action',
    rating: 8.1,
    status: 'stable',
    budget: 150000000,
    summary: 'A relentless desert chase powered by practical effects and chaos.'
  }, {
    id: 4,
    title: 'Annihilation',
    director: 'Alex Garland',
    year: 2018,
    genre: 'Sci-Fi',
    rating: 6.8,
    status: 'critical',
    budget: 40000000,
    summary: 'A biologist enters a shifting zone where nature mutates beyond recognition.'
  }, {
    id: 5,
    title: 'Whiplash',
    director: 'Damien Chazelle',
    year: 2014,
    genre: 'Drama',
    rating: 8.5,
    status: 'stable',
    budget: 3300000,
    summary: 'A young drummer collides with an unforgiving mentor.'
  }, {
    id: 6,
    title: 'Everything Everywhere All at Once',
    director: 'Daniels',
    year: 2022,
    genre: 'Fantasy',
    rating: 7.8,
    status: 'review',
    budget: 25000000,
    summary: 'Multiverse absurdity, family pressure, and empathy on maximalist settings.'
  }, {
    id: 7,
    title: 'The Farewell',
    director: 'Lulu Wang',
    year: 2019,
    genre: 'Comedy',
    rating: 7.5,
    status: 'stable',
    budget: 3000000,
    summary: 'A family stages a fake wedding to say goodbye without saying goodbye.'
  }, {
    id: 8,
    title: 'Parasite',
    director: 'Bong Joon-ho',
    year: 2019,
    genre: 'Thriller',
    rating: 8.5,
    status: 'stable',
    budget: 11400000,
    summary: 'Class satire escalates into a razor-sharp thriller.'
  }, {
    id: 9,
    title: 'Aftersun',
    director: 'Charlotte Wells',
    year: 2022,
    genre: 'Drama',
    rating: 7.6,
    status: 'review',
    budget: 2000000,
    summary: 'A holiday memory shifts into a meditation on grief and perspective.'
  }, {
    id: 10,
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    year: 2023,
    genre: 'History',
    rating: 8.3,
    status: 'stable',
    budget: 100000000,
    summary: 'A dense character-driven story about ambition, fear, and consequence.'
  }, {
    id: 11,
    title: 'Past Lives',
    director: 'Celine Song',
    year: 2023,
    genre: 'Romance',
    rating: 7.9,
    status: 'stable',
    budget: 12000000,
    summary: 'Two lives stay connected across years, borders, and decisions.'
  }, {
    id: 12,
    title: 'Tenet',
    director: 'Christopher Nolan',
    year: 2020,
    genre: 'Sci-Fi',
    rating: 7.3,
    status: 'critical',
    budget: 205000000,
    summary: 'Time inversion delivers spectacle and confusion in equal measure.'
  }];
}
function buildTickets() {
  const priorities = ['low', 'medium', 'high'];
  const statuses = ['open', 'pending', 'resolved'];
  const teams = ['Platform', 'Billing', 'Delivery', 'Identity'];
  const regions = ['NA', 'EU', 'LATAM', 'APAC'];
  const agents = ['Lena', 'Marco', 'Priya', 'Jon', 'Ari', 'Sara'];
  const rows = [];
  for (let index = 0; index < 42; index += 1) {
    rows.push({
      id: index + 1,
      team: teams[index % teams.length],
      region: regions[index % regions.length],
      agent: agents[index % agents.length],
      priority: priorities[index % priorities.length],
      age: 1 + index * 3 % 24,
      status: statuses[index % statuses.length]
    });
  }
  return rows;
}
class AppComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.installCode = INSTALL_CODE;
    this.setupCode = SETUP_CODE;
    this.basicCode = BASIC_CODE;
    this.selectionCode = SELECTION_CODE;
    this.expansionCode = EXPANSION_CODE;
    this.serverCode = SERVER_CODE;
    this.movies = buildMovies();
    this.allTickets = buildTickets();
    this.logEntries = [];
    this.contextualStyles = [{
      when: row => row.status === 'critical',
      style: {
        borderLeft: '4px solid #b42318',
        background: 'rgba(180, 35, 24, 0.06)'
      }
    }, {
      when: row => row.status === 'review',
      style: {
        borderLeft: '4px solid #d26a2a',
        background: 'rgba(210, 106, 42, 0.06)'
      }
    }];
    this.basicColumns = [];
    this.sortableColumns = [];
    this.selectableColumns = [];
    this.customColumns = [];
    this.compactColumns = [];
    this.serverColumns = [];
    this.searchTerm = '';
    this.selectionSummary = 'No rows selected yet.';
    this.serverPage = 1;
    this.serverRowsPerPage = 5;
    this.serverLoading = false;
    this.serverRows = [];
  }
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
    return this.movies.filter(movie => [movie.title, movie.director, movie.genre, movie.status].join(' ').toLowerCase().includes(term));
  }
  pushLog(message) {
    this.logEntries.unshift(stamp(message));
    this.logEntries.splice(14);
  }
  clearLog() {
    this.logEntries.splice(0, this.logEntries.length);
  }
  onSearchTermChange(term) {
    this.searchTerm = term;
    this.pushLog(`Search term changed to "${term || 'all'}".`);
  }
  onSort(label, event) {
    this.pushLog(`${label}: sorted by ${String(event.column.name)} (${event.direction}).`);
  }
  onSelectionChange(state) {
    this.selectionSummary = state.selectedCount === 0 ? 'No rows selected yet.' : `${state.selectedCount} row(s) selected: ${state.selectedRows.map(row => row.title).join(', ')}.`;
    this.pushLog(`Selection updated: ${state.selectedCount} row(s).`);
  }
  onExpand(event) {
    this.pushLog(`${event.expanded ? 'Expanded' : 'Collapsed'} "${event.row.title}".`);
  }
  onPage(event) {
    this.pushLog(`Client pagination moved to page ${event.page}.`);
  }
  onRowsPerPage(event) {
    this.pushLog(`Rows per page changed to ${event.rowsPerPage}.`);
  }
  onRowClick(row) {
    this.pushLog(`Row clicked: ${row.title}.`);
  }
  onServerPage(event) {
    this.serverPage = event.page;
    this.serverLoading = true;
    this.pushLog(`Server page requested: ${event.page}.`);
    setTimeout(() => {
      this.serverLoading = false;
      this.refreshServerRows();
    }, 220);
  }
  onServerRowsPerPage(event) {
    this.serverRowsPerPage = event.rowsPerPage;
    this.serverPage = 1;
    this.serverLoading = true;
    this.pushLog(`Server page size changed to ${event.rowsPerPage}.`);
    setTimeout(() => {
      this.serverLoading = false;
      this.refreshServerRows();
    }, 220);
  }
  statusTone(status) {
    switch (status) {
      case 'stable':
        return 'stable';
      case 'review':
        return 'review';
      default:
        return 'critical';
    }
  }
  priorityTone(priority) {
    switch (priority) {
      case 'low':
        return 'low';
      case 'medium':
        return 'medium';
      default:
        return 'high';
    }
  }
  formatMoney(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  }
  refreshServerRows() {
    const start = (this.serverPage - 1) * this.serverRowsPerPage;
    this.serverRows = this.allTickets.slice(start, start + this.serverRowsPerPage);
    this.pushLog(`Server rows refreshed for page ${this.serverPage}.`);
  }
  createBasicColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      minWidth: '220px'
    }, {
      id: 'director',
      name: 'Director',
      selector: row => row.director,
      sortable: true
    }, {
      id: 'year',
      name: 'Year',
      selector: row => row.year,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  createSortableColumns() {
    return [...this.createBasicColumns(), {
      id: 'genre',
      name: 'Genre',
      selector: row => row.genre,
      sortable: true,
      width: '120px'
    }, {
      id: 'rating',
      name: 'Rating',
      selector: row => row.rating,
      sortable: true,
      right: true,
      width: '110px'
    }];
  }
  createSelectableColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '120px'
    }, {
      id: 'rating',
      name: 'Rating',
      selector: row => row.rating,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  createCustomColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      minWidth: '220px'
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '130px',
      cellTemplate: this.statusCell
    }, {
      id: 'budget',
      name: 'Budget',
      selector: row => row.budget,
      sortable: true,
      right: true,
      width: '120px',
      cellTemplate: this.budgetCell
    }, {
      id: 'summary',
      name: 'Summary',
      selector: row => row.summary,
      wrap: true
    }];
  }
  createCompactColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      minWidth: '220px'
    }, {
      id: 'genre',
      name: 'Genre',
      selector: row => row.genre,
      sortable: true,
      width: '120px'
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '120px'
    }, {
      id: 'year',
      name: 'Year',
      selector: row => row.year,
      sortable: true,
      width: '100px',
      right: true
    }];
  }
  createServerColumns() {
    return [{
      id: 'team',
      name: 'Team',
      selector: row => row.team,
      sortable: true
    }, {
      id: 'region',
      name: 'Region',
      selector: row => row.region,
      sortable: true,
      width: '100px'
    }, {
      id: 'agent',
      name: 'Agent',
      selector: row => row.agent,
      sortable: true
    }, {
      id: 'priority',
      name: 'Priority',
      selector: row => row.priority,
      sortable: true,
      width: '110px'
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '110px'
    }, {
      id: 'age',
      name: 'Age (h)',
      selector: row => row.age,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["docs-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchTools = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.statusCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.budgetCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.movieDetail = _t.first);
        }
      },
      decls: 346,
      vars: 51,
      consts: [["searchTools", ""], ["statusCell", ""], ["budgetCell", ""], ["movieDetail", ""], [1, "shell"], [1, "hero"], [1, "hero-card", "hero-main"], [1, "badge"], [1, "feature-grid"], [1, "feature"], [1, "cta-row"], ["href", "#demos", 1, "btn"], ["href", "https://github.com/alexandroit/angular-data-table-component#readme", "target", "_blank", "rel", "noreferrer", 1, "btn", "secondary"], [1, "hero-card", "hero-setup"], [1, "step"], [1, "step-num"], ["id", "demos", 1, "layout"], [1, "panels"], [1, "panel"], [1, "panel-header"], [1, "demo-grid"], [1, "demo-card"], [1, "code"], [1, "table-frame"], ["title", "Film catalog", 3, "rowClicked", "columns", "data", "pagination"], ["title", "Searchable releases", 3, "sortChange", "pageChange", "rowsPerPageChange", "columns", "data", "pagination", "subHeader", "subHeaderTemplate"], ["title", "Review queue", 3, "selectedRowsChange", "sortChange", "columns", "data", "selectableRows", "selectableRowsHighlight", "pagination"], [1, "note"], ["title", "Primary pick", 3, "selectedRowsChange", "columns", "data", "selectableRows", "selectableRowsSingle", "pagination"], ["title", "Editorial cuts", 3, "rowExpandToggled", "rowClicked", "columns", "data", "expandableRows", "expandableRowTemplate", "conditionalRowStyles", "pagination", "highlightOnHover", "pointerOnHover"], [1, "table-frame", "dark-frame"], ["title", "Compact monitoring board", "theme", "dark", "fixedHeaderScrollHeight", "280px", 3, "sortChange", "columns", "data", "pagination", "dense", "fixedHeader", "striped", "highlightOnHover"], ["title", "Support tickets", 3, "pageChange", "rowsPerPageChange", "sortChange", "columns", "data", "pagination", "paginationServer", "paginationDefaultPage", "paginationPerPage", "paginationTotalRows", "progressPending"], [1, "panel", "ref-panel"], [1, "ref-grid"], [1, "ref-card"], [1, "api-table"], [1, "log-panel"], [1, "log-controls"], [1, "ghost", "small", 3, "click"], [1, "log-list"], ["class", "log-entry", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "log-entry"], [1, "toolbar"], ["type", "search", "placeholder", "Filter by title, director, genre or status", 3, "ngModelChange", "ngModel"], [1, "toolbar-tip"], [1, "status-pill", 3, "ngClass"], [1, "metric-stack"], [1, "detail-grid"], [1, "detail-label"], [1, "detail-summary"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "section", 5)(2, "div", 6)(3, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ANGULAR 18.2 \u00B7 DATA TABLE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "@revivejs/angular-data-table-component");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " A community-style Angular data table component with sorting, row selection, expandable content, client or server pagination, conditional styles, and a demo layout that tracks the Angular release line. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Declarative columns");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Keep column definitions in TypeScript and let Angular templates handle the rich cells. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Native Angular patterns");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Custom cells and expanded content use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TemplateRef");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", not framework adapters. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9)(22, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stateful table UX");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sorting, pagination, selection, and expandable rows are available out of the box. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9)(26, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Versioned docs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " This repository follows the Angular major line with a dedicated docs build per version. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "See demos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " README ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13)(35, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Setup in 3 steps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14)(38, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div")(41, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Install");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14)(46, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div")(49, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Register the module");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14)(54, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div")(57, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Render the table");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "section", 16)(62, "div", 17)(63, "article", 18)(64, "div", 19)(65, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Core \u2014 basic usage");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Start with declarative columns and rows, then turn on the features you need with inputs instead of rebuilding the table structure. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20)(70, "section", 21)(71, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Basic table");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "A minimal setup with sorting-ready columns and client pagination.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "pre", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23)(78, "revive-data-table", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function AppComponent_Template_revive_data_table_rowClicked_78_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onRowClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "section", 21)(80, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sorting and search tools");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Keep sorting in the table and search in your component state through a sub-header template. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "pre", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23)(87, "revive-data-table", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function AppComponent_Template_revive_data_table_sortChange_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSort("Searchable table", $event));
          })("pageChange", function AppComponent_Template_revive_data_table_pageChange_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onPage($event));
          })("rowsPerPageChange", function AppComponent_Template_revive_data_table_rowsPerPageChange_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onRowsPerPage($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "article", 18)(89, "div", 19)(90, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Selection and row events");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " The component emits selection state and row interaction events in a predictable Angular shape. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 20)(95, "section", 21)(96, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Selectable rows");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Turn on multi-select and keep the selected rows summary in component state.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "pre", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 23)(103, "revive-data-table", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedRowsChange", function AppComponent_Template_revive_data_table_selectedRowsChange_103_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSelectionChange($event));
          })("sortChange", function AppComponent_Template_revive_data_table_sortChange_103_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSort("Selection table", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section", 21)(107, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Single selection mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Use radio-style selection when only one active record should be chosen.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "pre", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "[selectableRowsSingle]=\\\"true\\\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 23)(114, "revive-data-table", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedRowsChange", function AppComponent_Template_revive_data_table_selectedRowsChange_114_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSelectionChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "article", 18)(116, "div", 19)(117, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Custom cells and expandable rows");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Angular templates are first-class here. Use template refs for richer cells and expanded content instead of rebuilding the table component. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 20)(122, "section", 21)(123, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Template-driven cells");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Status pills, compact currency blocks, and wrapped summaries all stay declarative.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "pre", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 23)(130, "revive-data-table", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowExpandToggled", function AppComponent_Template_revive_data_table_rowExpandToggled_130_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onExpand($event));
          })("rowClicked", function AppComponent_Template_revive_data_table_rowClicked_130_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onRowClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "section", 21)(132, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Dark theme + dense + fixed header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " The built-in dark theme stays readable and works with dense rows and sticky headers. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "pre", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "theme=\\\"dark\\\" [dense]=\\\"true\\\" [fixedHeader]=\\\"true\\\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 30)(139, "revive-data-table", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function AppComponent_Template_revive_data_table_sortChange_139_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSort("Dark table", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "article", 18)(141, "div", 19)(142, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Server-style pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " When you set ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "paginationServer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ", the component stops slicing rows internally and lets your container load the current page from an API. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 20)(150, "section", 21)(151, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Remote page simulation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " This demo simulates a remote API by slicing data after a short delay while keeping the table footer fully interactive. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "pre", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 23)(158, "revive-data-table", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AppComponent_Template_revive_data_table_pageChange_158_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onServerPage($event));
          })("rowsPerPageChange", function AppComponent_Template_revive_data_table_rowsPerPageChange_158_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onServerRowsPerPage($event));
          })("sortChange", function AppComponent_Template_revive_data_table_sortChange_158_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSort("Server table", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "article", 33)(160, "div", 19)(161, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Quick API reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 34)(164, "div", 35)(165, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Component inputs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "table", 36)(168, "thead")(169, "tr")(170, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tbody")(175, "tr")(176, "td")(177, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "columns");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Declarative column definitions with selectors, sorting, and templates.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr")(182, "td")(183, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "data");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Row data to render.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "tr")(188, "td")(189, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "selectableRows");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Enables row selection.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tr")(194, "td")(195, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "expandableRows");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Enables expandable detail rows.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr")(200, "td")(201, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "expandableRowTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Angular template used for expanded content.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "tr")(206, "td")(207, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Turns on built-in pagination UI.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr")(212, "td")(213, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "paginationServer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Lets the container control which rows are currently loaded.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "tr")(218, "td")(219, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "conditionalRowStyles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Applies row styles when predicates match.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "tr")(224, "td")(225, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Switch between the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "default");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " themes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 35)(236, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Column capabilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "table", 36)(239, "thead")(240, "tr")(241, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Field");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tbody")(246, "tr")(247, "td")(248, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "selector");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Read values with a row function or a property key.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr")(253, "td")(254, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "format");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Return custom display values before rendering.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "tr")(259, "td")(260, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "cellTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Use an Angular template for richer cell layouts.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr")(265, "td")(266, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "sortable");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Turns on built-in sorting for that column.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "tr")(271, "td")(272, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "sortFunction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Override the comparison logic for a specific column.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 35)(277, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Outputs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "table", 36)(280, "thead")(281, "tr")(282, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Output");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "tbody")(287, "tr")(288, "td")(289, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "sortChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Fires with the current column, direction, and visible rows.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "tr")(294, "td")(295, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "selectedRowsChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Returns the selection state and selected rows array.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "tr")(300, "td")(301, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "pageChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Fires when the current page changes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "tr")(306, "td")(307, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "rowsPerPageChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Fires when the footer page size changes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "tr")(312, "td")(313, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "rowClicked");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Fires with the clicked row.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "tr")(318, "td")(319, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "rowExpandToggled");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Fires when an expandable row opens or closes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "aside", 37)(324, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Event Log");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Interact with the demos to see Angular output events and table state changes here.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 38)(329, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_329_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.clearLog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](332, AppComponent_div_332_Template, 2, 1, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "footer", 42)(334, "p")(335, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "@revivejs/angular-data-table-component");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " keeps the table API declarative and close to Angular templates, while still covering the everyday behavior people expect from a modern data grid. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](338, AppComponent_ng_template_338_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(340, AppComponent_ng_template_340_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(342, AppComponent_ng_template_342_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(344, AppComponent_ng_template_344_Template, 26, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const searchTools_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](339);
          const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](345);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.installCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.setupCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.basicCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.basicCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.basicColumns)("data", ctx.movies)("pagination", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.basicCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.sortableColumns)("data", ctx.filteredMovies)("pagination", true)("subHeader", true)("subHeaderTemplate", searchTools_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectionCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.selectableColumns)("data", ctx.movies)("selectableRows", true)("selectableRowsHighlight", true)("pagination", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectionSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.selectableColumns)("data", ctx.movies)("selectableRows", true)("selectableRowsSingle", true)("pagination", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expansionCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.customColumns)("data", ctx.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("conditionalRowStyles", ctx.contextualStyles)("pagination", true)("highlightOnHover", true)("pointerOnHover", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.compactColumns)("data", ctx.movies)("pagination", true)("dense", true)("fixedHeader", true)("striped", true)("highlightOnHover", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.serverCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.serverColumns)("data", ctx.serverRows)("pagination", true)("paginationServer", true)("paginationDefaultPage", ctx.serverPage)("paginationPerPage", ctx.serverRowsPerPage)("paginationTotalRows", ctx.allTickets.length)("progressPending", ctx.serverLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](174);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logEntries);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _revivejs_angular_data_table_component__WEBPACK_IMPORTED_MODULE_3__.DataTableComponent],
      styles: ["[_nghost-%COMP%] {\n  color: #17324d;\n  display: block;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top left, rgba(12, 115, 184, 0.14), transparent 32%),\n    radial-gradient(circle at top right, rgba(214, 90, 37, 0.18), transparent 34%),\n    #f5f7fb;\n  min-height: 100vh;\n  padding: 2rem;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", serif;\n  letter-spacing: -0.02em;\n}\n\np[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n}\n\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1.8fr) minmax(320px, 0.95fr);\n  margin: 0 auto 1.5rem;\n  max-width: 1440px;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%] {\n  backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(191, 206, 223, 0.8);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(23, 50, 77, 0.12);\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #17324d;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n  padding: 0.35rem 0.65rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4vw, 3.4rem);\n  margin: 0 0 0.85rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.note[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.6;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n}\n\n.feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #17324d;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n\n.cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #c15d3f, #9e4a31);\n  border-radius: 999px;\n  color: #fff;\n  padding: 0.72rem 1.1rem;\n  text-decoration: none;\n}\n\n.btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #17324d;\n}\n\n.hero-setup[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: auto minmax(0, 1fr);\n}\n\n.step-num[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #0c73b8;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.8rem;\n  font-weight: 700;\n  height: 1.9rem;\n  justify-content: center;\n  width: 1.9rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%] {\n  background: #13263a;\n  border-radius: 14px;\n  color: #edf4fb;\n  font-size: 0.83rem;\n  line-height: 1.6;\n  margin: 0.55rem 0 0;\n  overflow: auto;\n  padding: 0.95rem 1rem;\n  white-space: pre-wrap;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n\n.panels[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n\n.panel[_ngcontent-%COMP%] {\n  padding: 1.4rem;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n}\n\n.demo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.demo-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.demo-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n}\n\n.table-frame[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  overflow: hidden;\n}\n\n.dark-frame[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  overflow: hidden;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n}\n\n.toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #c8d5e3;\n  border-radius: 12px;\n  flex: 1 1 260px;\n  min-width: 0;\n  padding: 0.75rem 0.9rem;\n}\n\n.toolbar-tip[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.9rem;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.28rem 0.58rem;\n  text-transform: uppercase;\n}\n\n.status-pill.stable[_ngcontent-%COMP%] {\n  background: rgba(32, 128, 79, 0.12);\n  color: #17653a;\n}\n\n.status-pill.review[_ngcontent-%COMP%] {\n  background: rgba(210, 106, 42, 0.14);\n  color: #8b451b;\n}\n\n.status-pill.critical[_ngcontent-%COMP%] {\n  background: rgba(180, 35, 24, 0.14);\n  color: #8d2219;\n}\n\n.metric-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n\n.metric-stack[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #17324d;\n}\n\n.metric-stack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.78rem;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  color: #59708a;\n  display: block;\n  font-size: 0.78rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n\n.detail-summary[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.detail-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #17324d;\n  margin: 0;\n}\n\n.ref-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.ref-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.ref-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n}\n\n.api-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9e2ec;\n  padding: 0.7rem 0;\n  text-align: left;\n  vertical-align: top;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.82rem;\n}\n\n.log-panel[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  position: sticky;\n  top: 1.2rem;\n}\n\n.log-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n}\n\n.log-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0.8rem;\n}\n\n.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #d0dbe7;\n  border-radius: 999px;\n  color: #17324d;\n  cursor: pointer;\n  padding: 0.55rem 0.8rem;\n}\n\n.ghost.small[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  padding: 0.35rem 0.6rem;\n}\n\n.log-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.96);\n  border: 1px solid #d9e2ec;\n  border-radius: 12px;\n  color: #41566f;\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n  font-size: 0.76rem;\n  line-height: 1.5;\n  padding: 0.65rem 0.72rem;\n  word-break: break-word;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin: 1.5rem auto 0;\n  max-width: 1440px;\n  padding: 0 0.5rem;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.7;\n}\n\n@media (max-width: 1180px) {\n  .layout[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .log-panel[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .ref-grid[_ngcontent-%COMP%], \n   .detail-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 1rem;\n  }\n\n  .cta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFOzs7V0FHUztFQUNULGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSw4Q0FBOEM7RUFDOUMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2REFBNkQ7RUFDN0QscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7O0VBS0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0RBQWdEO0VBQ2hELGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNEQUFzRDtFQUN0RCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTs7SUFFRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7OztJQUdFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7OztJQUdFLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY29sb3I6ICMxNzMyNGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJBdmVuaXIgTmV4dFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zaGVsbCB7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgcmdiYSgxMiwgMTE1LCAxODQsIDAuMTQpLCB0cmFuc3BhcmVudCAzMiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIHJpZ2h0LCByZ2JhKDIxNCwgOTAsIDM3LCAwLjE4KSwgdHJhbnNwYXJlbnQgMzQlKSxcbiAgICAjZjVmN2ZiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG5wLFxudGQsXG50aCxcbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuY29kZSxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5oZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxLjhmcikgbWlubWF4KDMyMHB4LCAwLjk1ZnIpO1xuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XG4gIG1heC13aWR0aDogMTQ0MHB4O1xufVxuXG4uaGVyby1jYXJkLFxuLnBhbmVsLFxuLmxvZy1wYW5lbCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTEsIDIwNiwgMjIzLCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDI0cHggNjBweCByZ2JhKDIzLCA1MCwgNzcsIDAuMTIpO1xufVxuXG4uaGVyby1jYXJkIHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4uYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMTczMjRkO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNjVyZW07XG59XG5cbi5oZXJvLW1haW4gaDEge1xuICBmb250LXNpemU6IGNsYW1wKDIuNHJlbSwgNHZ3LCAzLjRyZW0pO1xuICBtYXJnaW46IDAgMCAwLjg1cmVtO1xufVxuXG4uaGVyby1tYWluIHAsXG4ucGFuZWwtaGVhZGVyIHAsXG4ubG9nLXBhbmVsIHAsXG4uZmVhdHVyZSxcbi5ub3RlIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5mZWF0dXJlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBtYXJnaW46IDEuMjVyZW0gMDtcbn1cblxuLmZlYXR1cmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTEsIDAuOTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAwLjk1cmVtIDFyZW07XG59XG5cbi5mZWF0dXJlIHN0cm9uZyB7XG4gIGNvbG9yOiAjMTczMjRkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4uY3RhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC44cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2MxNWQzZiwgIzllNGEzMSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMC43MnJlbSAxLjFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDRlMjtcbiAgY29sb3I6ICMxNzMyNGQ7XG59XG5cbi5oZXJvLXNldHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uaGVyby1zZXR1cCBoMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN0ZXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbm1heCgwLCAxZnIpO1xufVxuXG4uc3RlcC1udW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMGM3M2I4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiAxLjlyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMS45cmVtO1xufVxuXG4uaGVyby1zZXR1cCBwcmUsXG4uY29kZSB7XG4gIGJhY2tncm91bmQ6ICMxMzI2M2E7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGNvbG9yOiAjZWRmNGZiO1xuICBmb250LXNpemU6IDAuODNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMC41NXJlbSAwIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwLjk1cmVtIDFyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmxheW91dCB7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG59XG5cbi5wYW5lbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEuMjVyZW07XG59XG5cbi5wYW5lbCB7XG4gIHBhZGRpbmc6IDEuNHJlbTtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wYW5lbC1oZWFkZXIgaDIge1xuICBtYXJnaW46IDAgMCAwLjRyZW07XG59XG5cbi5kZW1vLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5cbi5kZW1vLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZGVtby1jYXJkIGgzIHtcbiAgbWFyZ2luOiAwIDAgMC40NXJlbTtcbn1cblxuLnRhYmxlLWZyYW1lIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRhcmstZnJhbWUge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjhyZW07XG59XG5cbi50b29sYmFyIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4ZDVlMztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZmxleDogMSAxIDI2MHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC45cmVtO1xufVxuXG4udG9vbGJhci10aXAge1xuICBjb2xvcjogIzU5NzA4YTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zdGF0dXMtcGlsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjI4cmVtIDAuNThyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGF0dXMtcGlsbC5zdGFibGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAxMjgsIDc5LCAwLjEyKTtcbiAgY29sb3I6ICMxNzY1M2E7XG59XG5cbi5zdGF0dXMtcGlsbC5yZXZpZXcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMCwgMTA2LCA0MiwgMC4xNCk7XG4gIGNvbG9yOiAjOGI0NTFiO1xufVxuXG4uc3RhdHVzLXBpbGwuY3JpdGljYWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMzUsIDI0LCAwLjE0KTtcbiAgY29sb3I6ICM4ZDIyMTk7XG59XG5cbi5tZXRyaWMtc3RhY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMTVyZW07XG59XG5cbi5tZXRyaWMtc3RhY2sgc3Ryb25nIHtcbiAgY29sb3I6ICMxNzMyNGQ7XG59XG5cbi5tZXRyaWMtc3RhY2sgc3BhbiB7XG4gIGNvbG9yOiAjNTk3MDhhO1xuICBmb250LXNpemU6IDAuNzhyZW07XG59XG5cbi5kZXRhaWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC45NXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4uZGV0YWlsLWxhYmVsIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kZXRhaWwtc3VtbWFyeSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbi5kZXRhaWwtc3VtbWFyeSBwIHtcbiAgY29sb3I6ICMxNzMyNGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJlZi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5yZWYtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5yZWYtY2FyZCBoNCB7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG59XG5cbi5hcGktdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwaS10YWJsZSB0aCxcbi5hcGktdGFibGUgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgcGFkZGluZzogMC43cmVtIDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hcGktdGFibGUgdGgge1xuICBjb2xvcjogIzU5NzA4YTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xufVxuXG4ubG9nLXBhbmVsIHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxLjJyZW07XG59XG5cbi5sb2ctcGFuZWwgaDIge1xuICBtYXJnaW46IDAgMCAwLjM1cmVtO1xufVxuXG4ubG9nLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG4uZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwZGJlNztcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjMTczMjRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNTVyZW0gMC44cmVtO1xufVxuXG4uZ2hvc3Quc21hbGwge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC42cmVtO1xufVxuXG4ubG9nLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNTVyZW07XG59XG5cbi5sb2ctZW50cnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTEsIDAuOTYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogIzQxNTY2ZjtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAwLjY1cmVtIDAuNzJyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW46IDEuNXJlbSBhdXRvIDA7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cblxuLmZvb3RlciBwIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTgwcHgpIHtcbiAgLmxheW91dCxcbiAgLmhlcm8ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmxvZy1wYW5lbCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gIC5yZWYtZ3JpZCxcbiAgLmRldGFpbC1ncmlkLFxuICAuZmVhdHVyZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLnNoZWxsIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmhlcm8tY2FyZCxcbiAgLnBhbmVsLFxuICAubG9nLXBhbmVsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuY3RhLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _revivejs_angular_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @revivejs/angular-data-table-component */ 5304);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _revivejs_angular_data_table_component__WEBPACK_IMPORTED_MODULE_5__.DataTableModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _revivejs_angular_data_table_component__WEBPACK_IMPORTED_MODULE_5__.DataTableModule]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(error => console.error(error));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map