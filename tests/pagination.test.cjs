const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { pathToFileURL } = require('node:url');

const bundlePath = path.resolve(__dirname, '../dist/fesm2022/stackline-angular-data-table-component.mjs');
const apiPromise = import('@angular/compiler').then(() => import(pathToFileURL(bundlePath).href));

const columns = [
  { id: 'name', name: 'Name', selector: 'name', sortable: true },
  { id: 'team', name: 'Team', selector: 'team' },
  { id: 'code', name: 'Code', selector: 'code' }
];

function makeRows(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Person ${index + 1}`,
    team: ['Red', 'Blue', 'Green'][index % 3],
    code: index % 2 ? 'zz' : 'yy'
  }));
}

function createTable(DataTableComponent, rows, inputs = {}) {
  const table = new DataTableComponent();
  table.columns = columns;
  table.data = rows;
  table.pagination = true;
  Object.assign(table, inputs);
  table.ngOnChanges(Object.fromEntries(['columns', 'data', ...Object.keys(inputs)].map((key) => [key, {}])));
  table.ngDoCheck();
  return table;
}

function recordEvents(table) {
  const events = [];
  for (const name of ['pageChange', 'rowsPerPageChange', 'tableStateChange']) {
    table[name].subscribe((event) => events.push({ name, event }));
  }
  return events;
}

test('page sizes from inputs and events are normalized', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(23), { paginationPerPage: '5' });

  assert.equal(table.rowsPerPage, 5);
  table.changePage(2);
  assert.deepEqual(table.displayedRows.map((row) => row.id), [6, 7, 8, 9, 10], 'a string size is not concatenated');
  assert.equal(table.totalPages, 5);

  for (const invalid of [0, -5, 'abc', null, NaN, Infinity]) {
    table.paginationPerPage = invalid;
    table.ngOnChanges({ paginationPerPage: {} });
    assert.equal(table.rowsPerPage, 5, `the previous valid size is kept for ${String(invalid)}`);
  }

  table.paginationPerPage = 7.9;
  table.ngOnChanges({ paginationPerPage: {} });
  assert.equal(table.rowsPerPage, 7);
  assert.equal(createTable(DataTableComponent, makeRows(3), { paginationPerPage: 0 }).rowsPerPage, 10);

  const events = recordEvents(table);
  table.paginationPerPage = 10;
  table.changeRowsPerPage('5');
  assert.equal(table.rowsPerPage, 5);
  assert.deepEqual(events[0], { name: 'rowsPerPageChange', event: { rowsPerPage: 5, currentPage: 1 } });
  for (const invalid of [0, -3, 'x']) {
    table.changeRowsPerPage(invalid);
    assert.equal(table.rowsPerPage, 10, `paginationPerPage is the fallback for ${String(invalid)}`);
    assert.ok(Number.isFinite(table.totalPages));
  }
});

test('pages from inputs and changePage are normalized', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(45), { paginationDefaultPage: '3' });

  assert.equal(table.currentPage, 3);
  assert.equal(table.startRow, 21);

  table.paginationDefaultPage = 0;
  table.ngOnChanges({ paginationDefaultPage: {} });
  assert.equal(table.currentPage, 1);

  for (const [page, expected] of [['2', 2], [2.6, 2], [NaN, 1], [-4, 1], ['abc', 1], [99, 5], [Infinity, 5]]) {
    table.changePage(page);
    assert.equal(table.currentPage, expected, `changePage(${String(page)})`);
  }

  table.paginationDefaultPage = Infinity;
  table.ngOnChanges({ paginationDefaultPage: {} });
  assert.equal(table.currentPage, 5, 'Infinity still means the last page');
});

test('the default page survives until rows exist, then clamps as before', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, [], { paginationDefaultPage: 3 });
  const events = recordEvents(table);

  assert.equal(table.currentPage, 3, 'kept while there are no rows');

  table.data = makeRows(45);
  table.ngOnChanges({ data: {} });
  table.ngDoCheck();
  assert.equal(table.currentPage, 3);
  assert.equal(table.startRow, 21);

  table.data = [];
  table.ngOnChanges({ data: {} });
  assert.equal(table.currentPage, 1, 'a later shrink to no rows still resets to page 1');

  table.paginationDefaultPage = 4;
  table.ngOnChanges({ paginationDefaultPage: {} });
  table.ngDoCheck();
  assert.equal(table.currentPage, 4, 'a new default page waits for rows again');

  table.data = makeRows(15);
  table.ngOnChanges({ data: {} });
  assert.equal(table.currentPage, 2, 'once rows exist the page is clamped');
  assert.deepEqual(events, [], 'nothing is emitted');

  const server = createTable(DataTableComponent, [], { paginationServer: true, paginationDefaultPage: 5 });
  assert.equal(server.currentPage, 5);
  server.data = makeRows(10);
  server.paginationTotalRows = 100;
  server.ngOnChanges({ data: {}, paginationTotalRows: {} });
  server.ngDoCheck();
  assert.equal(server.currentPage, 5);
  assert.equal(server.startRow, 41);
});

test('ngDoCheck clamps the page after internal shrinks without emitting events', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(24), { paginationPerPage: 8 });
  const events = recordEvents(table);

  table.changePage(3);
  events.length = 0;
  table.data.splice(12);
  assert.equal(table.startRow, 17, 'stale until the next change-detection pass');
  table.ngDoCheck();
  assert.deepEqual([table.currentPage, table.startRow, table.endRow, table.totalRows, table.totalPages], [2, 9, 12, 12, 2]);

  table.globalFilter = 'zz';
  table.changePage(1);
  table.data.push(...makeRows(30).slice(12));
  table.ngDoCheck();
  table.changePage(2);
  events.length = 0;
  table.setColumnVisibility('code', false);
  table.ngDoCheck();
  assert.equal(table.totalRows, 0);
  assert.equal(table.currentPage, 1);

  const grouped = createTable(DataTableComponent, makeRows(30));
  grouped.setGrouping(['team']);
  for (const row of grouped.bodyRows.filter((item) => grouped.isGroupRow(item))) {
    grouped.toggleGroupRow(row);
  }
  grouped.setGrouping([]);
  grouped.changePage(3);
  const groupedEvents = recordEvents(grouped);
  grouped.setGrouping(['team']);
  grouped.ngDoCheck();
  assert.equal(grouped.totalRows, 3);
  assert.equal(grouped.currentPage, 1);

  assert.deepEqual(events.filter((entry) => entry.name !== 'tableStateChange'), []);
  assert.deepEqual(groupedEvents.filter((entry) => entry.name !== 'tableStateChange'), []);
  assert.equal(groupedEvents.length, 1, 'only setGrouping emits its own state event');
});

test('the rows-per-page select lists the current size and marks it selected', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(10), { paginationPerPage: 5 });

  assert.deepEqual(table.rowsPerPageOptions, [5, 10, 15, 20, 25, 30]);
  table.changeRowsPerPage(10);
  assert.deepEqual(table.rowsPerPageOptions, [10, 15, 20, 25, 30]);

  table.paginationRowsPerPageOptions = [30, '10', 10, 0, -5, 'x', 20.7];
  table.rowsPerPage = 7;
  assert.deepEqual(table.rowsPerPageOptions, [7, 10, 20, 30]);
  table.paginationRowsPerPageOptions = null;
  assert.deepEqual(table.rowsPerPageOptions, [7]);

  const bundle = fs.readFileSync(bundlePath, 'utf8');
  assert.match(bundle, /<select \[value\]=\\?"rowsPerPage\\?"/);
  assert.match(bundle, /\*ngFor=\\?"let size of rowsPerPageOptions; let index = index; let last = last; let sizes = ngForOf\\?"/);
  // The first option with the current size is marked, so a size equal to "All" shows as the number.
  assert.match(bundle, /\[selected\]=\\?"size === rowsPerPage && sizes\.indexOf\(size\) === index\\?"/);
  assert.match(bundle, /\{\{ getRowsPerPageOptionLabel\(size, last\) \}\}/);
});

test('the headless controller normalizes sizes and keeps the requested page until rows exist', async () => {
  const { createDataTableController } = await apiPromise;
  const options = { columns, pagination: true, perPage: '5' };
  const controller = createDataTableController({ ...options, data: [], page: 3 });

  assert.equal(controller.rowsPerPage, 5);
  assert.equal(controller.currentPage, 3);

  controller.update({ ...options, data: makeRows(23) });
  assert.equal(controller.currentPage, 3);
  assert.deepEqual(controller.displayedRows.map((row) => row.id), [11, 12, 13, 14, 15]);

  controller.changeRowsPerPage('0');
  assert.equal(controller.rowsPerPage, 5);
  for (const [page, expected] of [['2', 2], [2.9, 2], [NaN, 1], [99, 5]]) {
    controller.changePage(page);
    assert.equal(controller.currentPage, expected, `changePage(${String(page)})`);
  }

  controller.update({ ...options, data: [] });
  assert.equal(controller.currentPage, 1, 'a later shrink to no rows still resets to page 1');

  controller.update({ ...options, data: [], page: 4 });
  assert.equal(controller.currentPage, 4, 'a new page value waits for rows again');
  controller.update({ ...options, data: makeRows(12), page: 4 });
  assert.equal(controller.currentPage, 3);
});

function record(table, names) {
  const events = [];
  for (const name of names) {
    table[name].subscribe((event) => events.push([name, event]));
  }
  return events;
}

const PAGE_EVENTS = ['sortChange', 'pageChange', 'rowsPerPageChange', 'selectedRowsChange', 'globalFilterChange', 'columnFiltersChange', 'tableStateChange'];
const names = (events) => events.map(([name]) => name);

test('paginationComponentOptions merges over the 22.1.7 pager texts', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(12), { paginationPerPage: 5 });
  const defaults = {
    noRowsPerPage: false,
    rowsPerPageText: 'Rows:',
    rangeSeparatorText: 'of',
    selectAllRowsItem: false,
    selectAllRowsItemText: 'All',
    showingText: 'Showing',
    pageText: 'Page',
    firstPageText: 'First',
    previousPageText: 'Prev',
    nextPageText: 'Next',
    lastPageText: 'Last'
  };

  assert.deepEqual(table.paginationComponentOptions, {});
  for (const [key, value] of Object.entries(defaults)) {
    assert.equal(table.paginationOption(key), value, key);
  }
  assert.equal(table.getRowsPerPageOptionLabel(10), 10);

  table.paginationComponentOptions = { rowsPerPageText: 'Linhas:', rangeSeparatorText: undefined, showingText: null, pageText: '' };
  assert.equal(table.paginationOption('rowsPerPageText'), 'Linhas:');
  assert.equal(table.paginationOption('rangeSeparatorText'), 'of', 'undefined keeps the default');
  assert.equal(table.paginationOption('showingText'), 'Showing', 'null keeps the default');
  assert.equal(table.paginationOption('pageText'), '', 'an empty text is kept');
  table.paginationComponentOptions = null;
  assert.equal(table.paginationOption('lastPageText'), 'Last');

  const template = fs.readFileSync(bundlePath, 'utf8');
  assert.match(template, /\*ngIf=\\?"!paginationHideRowsPerPage && !paginationOption\('noRowsPerPage'\)\\?"/, 'both switches hide the selector');
});

test('selectAllRowsItem adds a last "All" option worth the total row count', async () => {
  const { DataTableComponent } = await apiPromise;
  const options = { paginationPerPage: 5, paginationRowsPerPageOptions: [4, 5, 8, 10], paginationComponentOptions: { selectAllRowsItem: true } };
  const table = createTable(DataTableComponent, makeRows(12), options);
  const events = recordEvents(table);

  assert.deepEqual(table.rowsPerPageOptions, [4, 5, 8, 10, 12]);
  assert.deepEqual(table.rowsPerPageOptions.map((size) => table.getRowsPerPageOptionLabel(size)), [4, 5, 8, 10, 'All']);
  table.paginationComponentOptions = { selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };
  assert.equal(table.getRowsPerPageOptionLabel(12), 'Todos');

  table.changePage(2);
  events.length = 0;
  table.changeRowsPerPage('12');
  assert.deepEqual(events[0], { name: 'rowsPerPageChange', event: { rowsPerPage: 12, currentPage: 1 } });
  assert.equal(table.displayedRows.length, 12);
  assert.equal(table.totalPages, 1);
  assert.deepEqual(table.rowsPerPageOptions, [4, 5, 8, 10, 12], 'the current size is not listed twice');

  table.paginationRowsPerPageOptions = [5, 12, 20];
  assert.deepEqual(table.rowsPerPageOptions, [5, 12, 20, 12], 'a configured size equal to the total stays, and "All" follows');
  assert.deepEqual(
    table.rowsPerPageOptions.map((size, index, sizes) => table.getRowsPerPageOptionLabel(size, index === sizes.length - 1)),
    [5, 12, 20, 'Todos'],
    'only the last option is labeled "All"'
  );
  assert.equal(table.getRowsPerPageOptionLabel(12, false), 12);
  table.data = [];
  assert.deepEqual(table.rowsPerPageOptions, [5, 12, 20], 'no All option without rows');

  const server = createTable(DataTableComponent, makeRows(10), {
    paginationServer: true,
    paginationTotalRows: 50,
    paginationComponentOptions: { selectAllRowsItem: true }
  });
  assert.deepEqual(server.rowsPerPageOptions, [10, 15, 20, 25, 30, 50], 'server mode uses paginationTotalRows');
});

test('selectAllRowsItem keeps every configured page size when the total equals one of them', async () => {
  const { DataTableComponent } = await apiPromise;
  const options = { paginationComponentOptions: { selectAllRowsItem: true } };
  const table = createTable(DataTableComponent, makeRows(23), options);

  assert.deepEqual(table.rowsPerPageOptions, [10, 15, 20, 25, 30, 23]);
  table.changeRowsPerPage(15);
  table.data = makeRows(15);
  table.ngOnChanges({ data: { firstChange: false } });
  table.ngDoCheck();
  assert.deepEqual(table.rowsPerPageOptions, [10, 15, 20, 25, 30, 15], 'the size the user picked stays listed');

  const tenRows = createTable(DataTableComponent, makeRows(10), options);
  assert.deepEqual(tenRows.rowsPerPageOptions, [10, 15, 20, 25, 30, 10], 'the default size stays listed');
});

test('a string paginationTotalRows keeps aria-rowcount numeric and the "All" option unique', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(10), { paginationServer: true, paginationTotalRows: '100' });

  assert.equal(table.totalRows, '100', 'totalRows keeps the 22.1.7 value');
  assert.equal(table.totalPages, 10);
  assert.equal(table.ariaRowCount, 101, 'one header row and 100 rows, not "1100"');
  assert.equal(table.paginationContext.rowCount, 100);

  const withAll = createTable(DataTableComponent, makeRows(10), {
    paginationServer: true,
    paginationTotalRows: '100',
    paginationComponentOptions: { selectAllRowsItem: true }
  });
  assert.deepEqual(withAll.rowsPerPageOptions, [10, 15, 20, 25, 30, 100]);
  withAll.changeRowsPerPage(String(withAll.rowsPerPageOptions.at(-1)));
  assert.equal(withAll.rowsPerPage, 100);
  assert.deepEqual(withAll.rowsPerPageOptions, [10, 15, 20, 25, 30, 100], 'choosing "All" does not add a second 100');
});

test('paginationResetDefaultPage goes back to the default page on every later change', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(45), { paginationDefaultPage: 2, paginationResetDefaultPage: false });
  const events = record(table, PAGE_EVENTS);

  assert.equal(table.currentPage, 2);
  table.changePage(4);
  events.length = 0;

  table.paginationResetDefaultPage = true;
  table.ngOnChanges({ paginationResetDefaultPage: { firstChange: false } });
  assert.equal(table.currentPage, 2);
  assert.deepEqual(events, [['pageChange', { page: 2, totalRows: 45 }]]);

  table.paginationResetDefaultPage = false;
  table.ngOnChanges({ paginationResetDefaultPage: { firstChange: false } });
  assert.equal(events.length, 1, 'no event when the page does not change');

  table.changePage(3);
  events.length = 0;
  table.ngOnChanges({ paginationResetDefaultPage: { firstChange: true } });
  assert.equal(table.currentPage, 3, 'the first value does not reset');
  assert.deepEqual(events, []);

  table.paginationDefaultPage = 9;
  table.ngOnChanges({ paginationDefaultPage: {}, paginationResetDefaultPage: { firstChange: false } });
  assert.equal(table.currentPage, 5, 'the default page is clamped once rows exist');
  assert.deepEqual(events, [['pageChange', { page: 5, totalRows: 45 }]]);

  const empty = createTable(DataTableComponent, [], { paginationDefaultPage: 3 });
  empty.changePage(1);
  empty.ngOnChanges({ paginationResetDefaultPage: { firstChange: false } });
  assert.equal(empty.currentPage, 3, 'without rows the default page waits');
});

test('paginationServerOptions is off by default: selection keys survive server page changes, as in 22.1.7', async () => {
  const { DataTableComponent } = await apiPromise;
  const rows = makeRows(20);
  const table = createTable(DataTableComponent, rows.slice(0, 10), { paginationServer: true, paginationTotalRows: 20, selectableRows: true });
  const events = record(table, ['selectedRowsChange']);

  assert.equal(table.paginationServerOptions, null);
  table.toggleRowSelection(rows[0]);
  table.changePage(2);
  table.data = rows.slice(10);
  table.ngOnChanges({ data: {} });
  table.toggleSort(table.columns[0]);
  assert.equal(events.length, 1, 'page and sort changes emit nothing');
  assert.deepEqual(table.selectedRows, [], 'rows of other pages are not listed');
  table.data = rows.slice(0, 10);
  table.ngOnChanges({ data: {} });
  assert.deepEqual(table.selectedRows, [rows[0]], 'the key was kept');
});

test('paginationServerOptions clears the selection on server page and sort changes unless told to keep it', async () => {
  const { DataTableComponent } = await apiPromise;
  const rows = makeRows(20);
  const table = createTable(DataTableComponent, rows.slice(0, 10), {
    paginationServer: true,
    paginationTotalRows: 20,
    selectableRows: true,
    paginationServerOptions: {}
  });
  const events = record(table, PAGE_EVENTS);

  table.changePage(2);
  assert.deepEqual(names(events), ['pageChange', 'tableStateChange'], 'nothing to clear, nothing emitted');
  table.changePage(1);
  table.toggleRowSelection(rows[0]);
  events.length = 0;
  table.changePage(2);
  assert.deepEqual(names(events), ['pageChange', 'selectedRowsChange', 'tableStateChange']);
  assert.deepEqual(events[1][1], { allSelected: false, selectedCount: 0, selectedRows: [] });

  table.changePage(1);
  table.toggleRowSelection(rows[1]);
  events.length = 0;
  table.changePage(1);
  assert.equal(table.selectedCount, 1, 'the same page is not a page change');
  table.toggleSort(table.columns[0]);
  assert.deepEqual(names(events), ['pageChange', 'tableStateChange', 'sortChange', 'selectedRowsChange', 'tableStateChange']);
  assert.equal(table.selectedCount, 0);

  table.paginationServerOptions = { persistSelectedOnSort: true };
  table.toggleRowSelection(rows[2]);
  table.toggleSort(table.columns[0]);
  assert.equal(table.selectedCount, 1, 'persistSelectedOnSort keeps it');

  const client = createTable(DataTableComponent, rows, { selectableRows: true, paginationServerOptions: {} });
  client.toggleRowSelection(rows[0]);
  client.changePage(2);
  client.toggleSort(client.columns[0]);
  assert.equal(client.selectedCount, 1, 'client pagination ignores the server options');
});

test('persistSelectedOnPageChange keeps the rows selected on other server pages', async () => {
  const { DataTableComponent } = await apiPromise;
  const rows = makeRows(15);
  const table = createTable(DataTableComponent, rows.slice(0, 5), {
    paginationServer: true,
    paginationTotalRows: 15,
    paginationPerPage: 5,
    selectableRows: true,
    paginationServerOptions: { persistSelectedOnPageChange: true }
  });
  const events = record(table, ['selectedRowsChange']);
  const goTo = (page) => {
    table.changePage(page);
    table.data = rows.slice((page - 1) * 5, page * 5);
    table.ngOnChanges({ data: {} });
    table.ngDoCheck();
  };

  table.toggleRowSelection(rows[1]);
  table.toggleRowSelection(rows[0]);
  goTo(2);
  table.toggleRowSelection(rows[6]);
  assert.deepEqual(events.map(([, event]) => event.selectedRows.map((row) => row.id)), [[2], [2, 1], [2, 1, 7]], 'selection order');
  assert.deepEqual([table.selectedCount, table.selectedRows], [3, [rows[1], rows[0], rows[6]]]);

  table.toggleAllRows(false);
  assert.deepEqual(table.selectedRows, [rows[1], rows[0]], 'deselecting this page keeps the others');
  goTo(1);
  table.toggleRowSelection(rows[1]);
  assert.deepEqual(table.selectedRows, [rows[0]]);

  const fresh = { ...rows[0], name: 'Renamed' };
  table.data = [fresh, ...rows.slice(1, 5)];
  table.ngOnChanges({ data: {} });
  assert.equal(table.selectedRows[0], fresh, 'the current page provides the latest row objects');

  table.selectableRowSelected = (row) => row.id === 3;
  table.ngOnChanges({ selectableRowSelected: {} });
  assert.deepEqual(table.selectedRows.map((row) => row.id), [3], 'the predicate decides for the rows of this page');
  goTo(3);
  assert.deepEqual(table.selectedRows.map((row) => row.id), [3], 'and keeps the selections of other pages');

  table.selectableRowSelected = null;
  table.clearSelectedRows = true;
  table.ngOnChanges({ clearSelectedRows: { firstChange: false } });
  goTo(1);
  assert.deepEqual(table.selectedRows, []);
});

test('keepPinnedRows is off by default; on, pinned rows stay on every page', async () => {
  const { DataTableComponent } = await apiPromise;
  const rows = makeRows(12);
  const inputs = { paginationPerPage: 5, pinnedTopRows: [rows[6]], pinnedBottomRows: [rows[1]] };
  const ids = (table) => table.displayedRows.map((row) => row.id);
  const legacy = createTable(DataTableComponent, rows, inputs);

  assert.equal(legacy.keepPinnedRows, false);
  legacy.changePage(2);
  assert.deepEqual([ids(legacy), legacy.totalRows, legacy.ariaRowCount], [[6, 8, 9, 10, 11], 12, 13], '22.1.7 pages pinned rows with the others');

  const table = createTable(DataTableComponent, rows, { ...inputs, keepPinnedRows: true });
  assert.deepEqual([ids(table), table.totalRows, table.totalPages, table.startRow, table.endRow], [[7, 1, 3, 4, 5, 6, 2], 10, 2, 1, 5]);
  table.changePage(2);
  assert.deepEqual([ids(table), table.startRow, table.endRow], [[7, 8, 9, 10, 11, 12, 2], 6, 10]);
  assert.deepEqual(table.displayedRows.map((row, index) => table.getRowAriaIndex(index)), [2, 8, 9, 10, 11, 12, 13]);
  assert.equal(table.ariaRowCount, 13, 'pinned rows are rows of the grid');

  table.virtualRows = true;
  table.virtualStartIndex = 1;
  table.virtualRowCount = 3;
  assert.deepEqual(ids(table), [8, 9, 10], 'the virtual window applies after the pins');
  assert.deepEqual([0, 1, 2].map((index) => table.getRowAriaIndex(index)), [8, 9, 10]);

  const server = createTable(DataTableComponent, rows.slice(0, 5), { ...inputs, paginationServer: true, paginationTotalRows: 40, keepPinnedRows: true });
  assert.equal(server.totalRows, 40, 'server totals are not changed');
});

test('persistPagination is off by default; on, the pager stays mounted while loading', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(12), { paginationPerPage: 5 });

  assert.equal(table.persistPagination, false);
  assert.deepEqual([table.showPagination, table.showPersistentPagination], [true, false]);
  table.progressPending = true;
  assert.deepEqual([table.showPagination, table.showPersistentPagination], [false, false], '22.1.7 hides the pager while loading');

  table.persistPagination = true;
  assert.equal(table.showPersistentPagination, true);
  table.progressPending = false;
  assert.equal(table.showPersistentPagination, true);
  table.data = [];
  assert.equal(table.showPersistentPagination, false, 'no rows and no load: no pager, as before');
  table.paginationServer = true;
  table.paginationTotalRows = 30;
  assert.equal(table.showPersistentPagination, false);
  table.progressPending = true;
  assert.equal(table.showPersistentPagination, true, 'a server load keeps the pager');

  const template = fs.readFileSync(bundlePath, 'utf8');
  assert.match(template, /\*ngIf=\\?"showPagination && !persistPagination\\?" \[ngTemplateOutlet\]=\\?"adtcPagination\\?"/);
  assert.match(template, /\*ngIf=\\?"showPersistentPagination\\?" \[ngTemplateOutlet\]=\\?"adtcPagination\\?"/);
});

test('paginationResetOnFilterChange is off by default; on, new filter inputs go to page 1', async () => {
  const { DataTableComponent } = await apiPromise;
  const legacy = createTable(DataTableComponent, makeRows(45));
  legacy.changePage(3);
  legacy.globalFilter = 'Person';
  legacy.ngOnChanges({ globalFilter: {} });
  assert.equal(legacy.currentPage, 3, '22.1.7 keeps the page');

  const table = createTable(DataTableComponent, makeRows(45), { paginationResetOnFilterChange: true });
  const events = record(table, ['pageChange']);
  table.changePage(3);
  table.globalFilter = 'Person';
  table.ngOnChanges({ globalFilter: { firstChange: true } });
  assert.equal(table.currentPage, 3, 'the first value does not reset');
  table.ngOnChanges({ globalFilter: { firstChange: false } });
  assert.equal(table.currentPage, 1);
  table.changePage(2);
  table.columnFilters = [{ id: 'team', value: '' }];
  table.ngOnChanges({ columnFilters: {} });
  assert.equal(table.currentPage, 1);
  assert.deepEqual(events.map(([, event]) => event.page), [3, 2], 'silent without paginationEmitOnReset');

  table.paginationEmitOnReset = true;
  table.changePage(2);
  table.ngOnChanges({ columnFilters: {} });
  assert.deepEqual(events.slice(-2), [['pageChange', { page: 2, totalRows: 45 }], ['pageChange', { page: 1, totalRows: 45 }]]);

  const server = createTable(DataTableComponent, makeRows(10), { paginationServer: true, paginationTotalRows: 50, paginationResetOnFilterChange: true });
  server.changePage(3);
  server.ngOnChanges({ globalFilter: {} });
  assert.equal(server.currentPage, 3, 'server pagination is left to the server');
});

test('paginationEmitOnReset is off by default; on, the table reports pages it changes on its own', async () => {
  const { DataTableComponent } = await apiPromise;
  const run = (inputs) => {
    const table = createTable(DataTableComponent, makeRows(24), { paginationPerPage: 5, ...inputs });
    const events = record(table, PAGE_EVENTS);
    const steps = [];
    const step = (callback) => {
      events.length = 0;
      callback();
      steps.push(events.map(([name, event]) => name === 'pageChange' ? `${name}:${event.page}/${event.totalRows}` : name));
    };

    table.changePage(3);
    step(() => table.toggleSort(table.columns[0]));
    step(() => table.toggleSort(table.columns[0]));
    table.changePage(3);
    step(() => table.setGlobalFilter('Person'));
    table.changePage(3);
    step(() => table.setColumnFilter('team', ''));
    table.changePage(5);
    step(() => {
      table.data.splice(12);
      table.ngDoCheck();
    });
    step(() => {
      table.data = makeRows(4);
      table.ngOnChanges({ data: {} });
      table.ngDoCheck();
    });
    return steps;
  };

  assert.deepEqual(run({}), [
    ['sortChange', 'tableStateChange'],
    ['sortChange', 'tableStateChange'],
    ['globalFilterChange', 'tableStateChange'],
    ['columnFiltersChange', 'tableStateChange'],
    [],
    []
  ], '22.1.7 events');
  assert.deepEqual(run({ paginationEmitOnReset: true }), [
    ['sortChange', 'pageChange:1/24', 'tableStateChange'],
    ['sortChange', 'tableStateChange'],
    ['globalFilterChange', 'pageChange:1/24', 'tableStateChange'],
    ['columnFiltersChange', 'pageChange:1/24', 'tableStateChange'],
    ['pageChange:3/12'],
    ['pageChange:1/4']
  ]);
});

test('tableStateChange carries the page, the page size and the sort', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(30), { paginationPerPage: 5 });
  const events = record(table, ['tableStateChange']);

  table.changePage(2);
  assert.deepEqual(events[0][1], {
    globalFilter: '',
    columnFilters: [],
    columnVisibility: {},
    columnOrder: [],
    groupBy: [],
    page: 2,
    rowsPerPage: 5,
    sortColumnId: null,
    sortDirection: 'asc'
  });
  table.toggleSort(table.columns[0]);
  table.toggleSort(table.columns[0]);
  assert.deepEqual(events.slice(1).map(([, event]) => [event.page, event.sortColumnId, event.sortDirection]), [[1, 'name', 'asc'], [1, 'name', 'desc']]);

  const unnamed = { name: 'Code', selector: 'code', sortable: true };
  table.columns = [unnamed];
  table.toggleSort(unnamed);
  assert.equal(events.at(-1)[1].sortColumnId, 'code', 'columns without an id report their key');
});

test('aria-rowcount counts header rows and aria-rowindex follows the page', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(23), { paginationPerPage: 5 });

  assert.equal(table.ariaRowCount, 24);
  table.changePage(2);
  assert.deepEqual([0, 4].map((index) => table.getRowAriaIndex(index)), [7, 11]);

  table.columns = [columns[0], { name: 'Group', columns: [columns[1], columns[2]] }];
  assert.equal(table.ariaRowCount, 25, 'two header rows');
  assert.equal(table.getRowAriaIndex(0), 8);
  table.noTableHead = true;
  assert.deepEqual([table.ariaRowCount, table.getRowAriaIndex(0)], [23, 6]);

  const server = createTable(DataTableComponent, makeRows(10), { paginationServer: true, paginationTotalRows: 95, paginationDefaultPage: 3 });
  assert.deepEqual([server.ariaRowCount, server.getRowAriaIndex(0), server.getRowAriaIndex(9)], [96, 22, 31]);

  const plain = createTable(DataTableComponent, makeRows(30), { pagination: false, virtualRows: true, virtualStartIndex: 10 });
  assert.deepEqual([plain.ariaRowCount, plain.getRowAriaIndex(0)], [31, 12]);
});

test('a pager button that becomes disabled hands focus to the nearest enabled one on the other side', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = new DataTableComponent();
  const focused = [];
  const doc = { body: {}, activeElement: null };
  const controls = { querySelectorAll: () => buttons };
  const buttons = ['First', 'Prev', 'Next', 'Last'].map((name) => ({
    name,
    disabled: false,
    ownerDocument: doc,
    parentNode: controls,
    listeners: [],
    focus() {
      focused.push(name);
    },
    addEventListener(type, listener) {
      this.listeners.push([type, listener]);
    },
    removeEventListener(type, listener) {
      this.listeners = this.listeners.filter((entry) => entry[0] !== type || entry[1] !== listener);
    },
    dispatch(type, repeat) {
      const event = { type, repeat, prevented: false, preventDefault() { this.prevented = true; } };
      this.listeners.filter((entry) => entry[0] === type).forEach((entry) => entry[1](event));
      return event.prevented;
    }
  }));
  const press = async (name, disabled) => {
    const button = buttons.find((item) => item.name === name);
    buttons.forEach((item) => { item.disabled = disabled.includes(item.name); });
    doc.activeElement = button;
    table.keepPagerFocus({ currentTarget: button });
    await new Promise((resolve) => setTimeout(resolve, 5));
  };

  await press('Last', ['Next', 'Last']);
  await press('Next', ['Next', 'Last']);
  await press('First', ['First', 'Prev']);
  await press('Prev', ['First', 'Prev']);
  assert.deepEqual(focused, ['Prev', 'Prev', 'Next', 'Next']);

  await press('Next', []);
  assert.equal(focused.length, 4, 'a button that stays enabled keeps focus');
  doc.activeElement = { other: true };
  table.keepPagerFocus({ currentTarget: buttons[3] });
  buttons[3].disabled = true;
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(focused.length, 4, 'focus that moved elsewhere is left alone');

  assert.doesNotThrow(() => table.keepPagerFocus({}), 'no DOM, nothing to do');
  assert.doesNotThrow(() => table.keepPagerFocus(null));
});

test('a held Enter does not activate the pager button that received focus', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = new DataTableComponent();
  const doc = { body: {}, activeElement: null };
  const controls = { querySelectorAll: () => buttons };
  const buttons = ['First', 'Prev', 'Next', 'Last'].map((name) => ({
    name,
    disabled: name === 'Next' || name === 'Last',
    ownerDocument: doc,
    parentNode: controls,
    listeners: [],
    focus() {
      doc.activeElement = this;
    },
    addEventListener(type, listener) {
      this.listeners.push([type, listener]);
    },
    removeEventListener(type, listener) {
      this.listeners = this.listeners.filter((entry) => entry[0] !== type || entry[1] !== listener);
    },
    dispatch(type, repeat) {
      const event = { type, repeat, prevented: false, preventDefault() { this.prevented = true; } };
      this.listeners.filter((entry) => entry[0] === type).forEach((entry) => entry[1](event));
      return event.prevented;
    }
  }));
  const [, prev, next] = buttons;

  // Enter on Next reached the last page: Next is disabled and hands focus to Prev while the key is still down.
  doc.activeElement = next;
  table.keepPagerFocus({ currentTarget: next });
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(doc.activeElement, prev);
  assert.equal(prev.dispatch('keydown', true), true, 'auto-repeat of the held key is ignored');
  assert.equal(prev.dispatch('keydown', true), true);
  prev.dispatch('keyup', false);
  assert.equal(prev.listeners.length, 0, 'releasing the key ends the guard');
  assert.equal(prev.dispatch('keydown', true), false, 'a new hold works as before');

  doc.activeElement = next;
  table.keepPagerFocus({ currentTarget: next });
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(prev.listeners.length, 3);
  assert.equal(prev.dispatch('keydown', false), false, 'a fresh key press is not ignored');
  assert.equal(prev.listeners.length, 0);
  doc.activeElement = next;
  table.keepPagerFocus({ currentTarget: next });
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(prev.listeners.length, 3);
  prev.dispatch('blur', false);
  assert.equal(prev.listeners.length, 0, 'leaving the button ends the guard');
});

test('paginationTemplate gets the page state and actions bound to the table', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, makeRows(12), { paginationPerPage: 4, paginationComponentOptions: { selectAllRowsItem: true } });
  const events = recordEvents(table);
  let context = table.paginationContext;

  assert.equal(table.paginationTemplate, null);
  assert.equal(context.$implicit, context);
  assert.deepEqual({ ...context, $implicit: undefined, changePage: undefined, changeRowsPerPage: undefined }, {
    $implicit: undefined,
    currentPage: 1,
    totalPages: 3,
    rowsPerPage: 4,
    rowCount: 12,
    startRow: 1,
    endRow: 4,
    rowsPerPageOptions: [4, 10, 15, 20, 25, 30, 12],
    changePage: undefined,
    changeRowsPerPage: undefined
  });

  const { changePage, changeRowsPerPage } = context;
  changePage(3);
  context = table.paginationContext;
  assert.deepEqual([context.currentPage, context.startRow, context.endRow], [3, 9, 12]);
  changeRowsPerPage('8');
  assert.deepEqual(events.map((entry) => entry.name), ['pageChange', 'tableStateChange', 'rowsPerPageChange', 'tableStateChange']);
  assert.deepEqual([table.rowsPerPage, table.currentPage], [8, 1]);
  assert.equal(table.paginationContext.changePage, changePage, 'the actions are stable');

  const template = fs.readFileSync(bundlePath, 'utf8');
  assert.match(template, /\*ngIf=\\?"paginationTemplate; else adtcPaginationContent\\?"/);
});

test('the headless controller reports resets and resets on new filter options, both opt-in', async () => {
  const { createDataTableController } = await apiPromise;
  const run = (extra) => {
    const events = [];
    const options = {
      columns,
      data: makeRows(24),
      pagination: true,
      perPage: 5,
      page: 9,
      onPageChange: (event) => events.push(`page:${event.page}`),
      onSortChange: () => events.push('sort'),
      onStateChange: (state) => events.push(`state:${state.page}`),
      ...extra
    };
    const controller = createDataTableController(options);
    const steps = [events.splice(0)];

    controller.changePage(3);
    events.length = 0;
    controller.toggleSort(columns[0]);
    steps.push(events.splice(0));
    controller.changePage(3);
    events.length = 0;
    controller.setGlobalFilter('Person');
    steps.push(events.splice(0));
    controller.changePage(3);
    events.length = 0;
    controller.update({ ...options, page: undefined, globalFilter: 'Person' });
    steps.push([...events.splice(0), controller.currentPage]);
    controller.changePage(5);
    events.length = 0;
    controller.update({ ...options, page: undefined, globalFilter: 'Person', data: makeRows(12) });
    steps.push([...events.splice(0), controller.currentPage]);
    controller.changePage(2);
    events.length = 0;
    controller.update({ ...options, page: undefined, globalFilter: 'Person 1' });
    steps.push([...events.splice(0), controller.currentPage]);
    return steps;
  };

  assert.deepEqual(run({}), [[], ['sort', 'state:1'], ['state:1'], [3], [3], [2]], 'defaults: no extra events and no filter reset');
  assert.deepEqual(run({ paginationEmitOnReset: true, paginationResetOnFilterChange: true }), [
    [],
    ['sort', 'page:1', 'state:1'],
    ['page:1', 'state:1'],
    [3],
    ['page:3', 3],
    ['page:1', 1]
  ], 'passing back the filter in effect keeps the page; a new filter goes to page 1');

  const controller = createDataTableController({ columns, data: makeRows(24), pagination: true, perPage: 5 });
  controller.toggleSort(columns[0]);
  controller.toggleSort(columns[0]);
  controller.changePage(2);
  assert.deepEqual(controller.state, {
    globalFilter: '',
    columnFilters: [],
    columnVisibility: {},
    columnOrder: [],
    groupBy: [],
    page: 2,
    rowsPerPage: 5,
    sortColumnId: 'name',
    sortDirection: 'desc'
  });
});

test('the headless filter reset compares with the filters in effect', async () => {
  const { createDataTableController } = await apiPromise;
  let state = null;
  const pages = [];
  const options = (data) => ({
    columns,
    data,
    pagination: true,
    perPage: 5,
    paginationResetOnFilterChange: true,
    paginationEmitOnReset: true,
    globalFilter: state ? state.globalFilter : '',
    columnFilters: state ? state.columnFilters : [],
    onStateChange: (next) => { state = next; },
    onPageChange: (event) => pages.push(event.page)
  });
  const controller = createDataTableController(options(makeRows(50)));

  // update() overwrites the filters, so a caller passes back the state it received.
  controller.setGlobalFilter('Person');
  controller.changePage(3);
  controller.update(options(makeRows(50)));
  assert.deepEqual([controller.globalFilter, controller.currentPage, pages], ['Person', 3, [3]], 'the same global filter keeps the page');

  controller.setColumnFilter('team', 'Red');
  controller.changePage(2);
  assert.equal(state.columnFilters, controller.columnFilters);
  controller.update(options(makeRows(50)));
  assert.equal(controller.currentPage, 2, 'the same column filters keep the page');

  const empty = createDataTableController({ columns, data: makeRows(50), pagination: true, perPage: 5, paginationResetOnFilterChange: true });
  empty.changePage(4);
  empty.update({ columns, data: makeRows(50), pagination: true, perPage: 5, paginationResetOnFilterChange: true, columnFilters: [] });
  empty.update({ columns, data: makeRows(50), pagination: true, perPage: 5, paginationResetOnFilterChange: true, columnFilters: {} });
  assert.equal(empty.currentPage, 4, 'two empty filter sets are equal');
  empty.update({ columns, data: makeRows(50), pagination: true, perPage: 5, paginationResetOnFilterChange: true, columnFilters: { team: 'Red' } });
  assert.equal(empty.currentPage, 1, 'a new filter goes to page 1');
});

test('sortColumnId never stringifies a selector function and matches the headless state', async () => {
  const { DataTableComponent, createDataTableController } = await apiPromise;
  const score = { name: 'Score', selector: (row) => row.id * 2, sortable: true };
  const team = { name: 'Team', selector: 'team', sortable: true };
  const keyed = { name: 'Key', accessorKey: 'code', sortable: true };
  const table = createTable(DataTableComponent, makeRows(5));
  const states = [];

  table.columns = [score, team, keyed];
  table.ngOnChanges({ columns: { firstChange: false } });
  table.tableStateChange.subscribe((event) => states.push(event.sortColumnId));
  table.visibleColumns.forEach((column) => table.toggleSort(column));

  const controller = createDataTableController({ columns: [score, team, keyed], data: makeRows(5) });
  const headless = [score, team, keyed].map((column) => {
    controller.toggleSort(column);
    return controller.state.sortColumnId;
  });

  assert.deepEqual(states, ['Score', 'team', 'code']);
  assert.deepEqual(headless, states);
});

test('ngDoCheck skips the row pipeline while progressPending hides the rows', async () => {
  const { DataTableComponent } = await apiPromise;
  let selectorCalls = 0;
  const score = { id: 'score', name: 'Score', sortable: true, selector: (row) => { selectorCalls += 1; return row.id; } };
  const table = createTable(DataTableComponent, makeRows(1000));

  table.columns = [score];
  table.ngOnChanges({ columns: { firstChange: false } });
  table.toggleSort(score);
  table.progressPending = true;
  table.ngOnChanges({ progressPending: { firstChange: false } });

  selectorCalls = 0;
  for (let pass = 0; pass < 3; pass += 1) {
    table.ngDoCheck();
    void table.showPagination;
    void table.showContextBar;
    table.ngAfterViewChecked();
  }
  assert.equal(selectorCalls, 0);

  // The clamp runs again once loading ends.
  table.changePage(100);
  table.data.splice(20);
  table.progressPending = false;
  table.ngOnChanges({ progressPending: { firstChange: false } });
  assert.equal(table.currentPage, 2);
});

test('expanded detail rows are numbered and counted', async () => {
  const { DataTableComponent } = await apiPromise;
  const rows = makeRows(12);
  const detailed = (inputs) => createTable(DataTableComponent, rows, { expandableRows: true, expandableRowTemplate: {}, ...inputs });
  // Positions in DOM order: each data row, then its detail row when it is expanded.
  const positions = (table) => table.displayedRows.flatMap((row, index) => {
    const own = table.getRowAriaIndex(index);
    return table.isRowExpanded(row) ? [own, own + 1] : [own];
  });

  const plain = detailed({ pagination: false });
  assert.equal(plain.ariaRowCount, 13);
  plain.toggleRowExpansion(rows[1]);
  plain.toggleRowExpansion(rows[4]);
  assert.equal(plain.ariaRowCount, 15, '12 rows, 2 detail rows and the header row');
  assert.deepEqual(positions(plain), Array.from({ length: 14 }, (_, index) => index + 2));

  const paged = detailed({ paginationPerPage: 5 });
  paged.toggleRowExpansion(rows[1]);
  paged.toggleRowExpansion(rows[6]);
  assert.equal(paged.ariaRowCount, 15);
  assert.deepEqual(positions(paged), [2, 3, 4, 5, 6, 7]);
  paged.changePage(2);
  assert.deepEqual(positions(paged), [8, 9, 10, 11, 12, 13], 'the detail row of page 1 shifts page 2');

  const server = detailed({ paginationServer: true, paginationTotalRows: 40, paginationDefaultPage: 2, paginationPerPage: 12 });
  server.toggleRowExpansion(rows[0]);
  assert.equal(server.ariaRowCount, 42, 'the current page counts its own detail rows');
  assert.deepEqual(positions(server).slice(0, 3), [14, 15, 16]);

  const withoutTemplate = createTable(DataTableComponent, rows, { expandableRows: true, pagination: false });
  withoutTemplate.toggleRowExpansion(rows[0]);
  assert.equal(withoutTemplate.ariaRowCount, 13, 'no template, no detail rows');

  const bundle = fs.readFileSync(bundlePath, 'utf8');
  assert.match(bundle, /class=\\?"adtc-expanded-row\\?"\s+role=\\?"row\\?"\s+\[attr\.aria-rowindex\]=\\?"getRowAriaIndex\(rowIndex\) \+ 1\\?"/);
});

test('persistPagination keeps the height of the rows while loading; the default adds no style', async () => {
  const { DataTableComponent } = await apiPromise;
  const rowsBlock = { nativeElement: { offsetHeight: 245 } };
  const legacy = createTable(DataTableComponent, makeRows(12), { paginationPerPage: 5 });

  legacy.rowsBlock = rowsBlock;
  legacy.progressPending = true;
  legacy.ngDoCheck();
  assert.equal(legacy.loadingStyleText, null, '22.1.7 markup without persistPagination');

  const table = createTable(DataTableComponent, makeRows(12), { paginationPerPage: 5, persistPagination: true });
  assert.equal(table.loadingStyleText, null);
  table.rowsBlock = rowsBlock;
  table.ngDoCheck();
  assert.equal(table.loadingStyleText, null, 'nothing to keep while rows show');
  table.progressPending = true;
  table.ngDoCheck();
  table.rowsBlock = undefined;
  table.ngDoCheck();
  assert.equal(table.loadingStyleText, 'min-height: 245px; box-sizing: border-box', 'measured before the rows made way for the loading block');

  const bundle = fs.readFileSync(bundlePath, 'utf8');
  assert.match(bundle, /class=\\?"adtc-state adtc-loading\\?" role=\\?"status\\?" aria-live=\\?"polite\\?" \[attr\.style\]=\\?"loadingStyleText\\?"/);
  assert.match(bundle, /<div \*ngIf=\\?"!progressPending && hasRows\\?" #adtcRows>/);
});
