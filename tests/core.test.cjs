const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { performance } = require('node:perf_hooks');
const { pathToFileURL } = require('node:url');

const bundlePath = path.resolve(__dirname, '../dist/fesm2022/stackline-angular-data-table-component.mjs');
const apiPromise = import('@angular/compiler').then(() => import(pathToFileURL(bundlePath).href));
const corePromise = apiPromise.then(() => import('@angular/core'));

const DERIVED_GETTERS = [
  'flatColumns', 'visibleColumns', 'hasColumnGroups', 'columnGroups',
  'pinnedTopDisplayRows', 'pinnedBottomDisplayRows', 'filteredPinnedTopRows', 'filteredPinnedBottomRows',
  'unpinnedRows', 'filteredRows', 'sortedRows', 'groupedRows', 'bodyRows', 'displayedRows',
  'hasRows', 'totalRows', 'totalPages', 'startRow', 'endRow',
  'selectedRows', 'selectedCount', 'selectionScopeRows', 'allRowsSelected', 'someRowsSelected'
];

// Everything a fresh reference instance needs to reproduce the derived state.
const STATE_FIELDS = [
  'columns', 'data', 'keyField', 'pagination', 'paginationServer', 'paginationTotalRows',
  'paginationPerPage', 'paginationDefaultPage', 'paginationRowsPerPageOptions', 'selectableRows',
  'selectableRowsSingle', 'selectableRowsVisibleOnly', 'selectableRowDisabled', 'sortServer',
  'manualSorting', 'manualFiltering', 'manualPagination', 'globalFilter', 'columnFilters',
  'hiddenColumns', 'columnVisibility', 'columnOrder', 'groupBy', 'grouping', 'pinnedTopRows',
  'pinnedBottomRows', 'rowPinning', 'virtualRows', 'virtualStartIndex', 'virtualRowCount',
  'currentPage', 'rowsPerPage', 'sortDirection', 'activeSortColumn', 'keepPinnedRows', 'paginationServerOptions',
  'expandableRows', 'expandableRowTemplate'
];
const PRIVATE_STATE = ['selectedKeys', 'expandedKeys', 'collapsedGroupKeys', 'selectedRowCache'];

function makeRows(count, start = 1) {
  return Array.from({ length: count }, (_, index) => {
    const id = start + index;
    return {
      id,
      name: `Person ${id}`,
      team: ['Red', 'Blue', 'Green'][id % 3],
      score: (id * 37) % 101,
      active: id % 2 === 0
    };
  });
}

function makeColumns(nested) {
  const name = { id: 'name', name: 'Name', selector: 'name', sortable: true };
  const team = { id: 'team', name: 'Team', selector: 'team', sortable: true };
  const score = { id: 'score', name: 'Score', selector: 'score', sortable: true };
  const active = { id: 'active', name: 'Active', selector: 'active', sortable: true };
  return nested
    ? [name, { name: 'Stats', columns: [team, score] }, active]
    : [name, team, score, active];
}

function createRandom(seed) {
  return function random() {
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function snapshotDerivedState(table) {
  const state = {};
  for (const getter of DERIVED_GETTERS) {
    state[getter] = table[getter];
  }
  // Row numbering reads the memoized rows and the expanded detail rows.
  state.ariaRowCount = table.ariaRowCount;
  state.rowAriaIndexes = table.displayedRows.map((row, index) => table.getRowAriaIndex(index));
  return state;
}

function createReference(DataTableComponent, table) {
  const reference = new DataTableComponent();
  for (const field of STATE_FIELDS) {
    reference[field] = table[field];
  }
  for (const field of PRIVATE_STATE) {
    reference[field] = table[field] instanceof Map ? new Map(table[field]) : Object.assign(Object.create(null), table[field]);
  }
  return reference;
}

test('the component keeps eager change detection under Angular 22', async () => {
  const { DataTableComponent } = await apiPromise;
  assert.equal(DataTableComponent.ɵcmp.onPush, false);
});

test('derived state is computed once per generation and refreshed by ngDoCheck', async () => {
  const { DataTableComponent } = await apiPromise;
  let selectorCalls = 0;
  const scoreColumn = {
    id: 'score',
    name: 'Score',
    sortable: true,
    selector(row) {
      selectorCalls += 1;
      return row.score;
    }
  };
  const rows = makeRows(100);
  const table = new DataTableComponent();
  const selectionEvents = [];

  table.columns = [{ id: 'name', name: 'Name', selector: 'name' }, scoreColumn];
  table.data = rows;
  table.pagination = true;
  table.selectableRows = true;
  table.selectedRowsChange.subscribe((event) => selectionEvents.push(event));
  table.ngOnChanges({ columns: {}, data: {} });
  table.toggleSort(scoreColumn);

  selectorCalls = 0;
  table.ngDoCheck();
  for (let pass = 0; pass < 5; pass += 1) {
    for (const getter of DERIVED_GETTERS) {
      void table[getter];
    }
  }
  assert.equal(selectorCalls, rows.length, 'one sort per generation, however often the getters are read');

  rows[0].score = 1000;
  table.ngDoCheck();
  assert.equal(table.sortedRows[table.sortedRows.length - 1], rows[0], 'in-place edits re-sort on the next pass');

  table.data = rows.slice(0, 15);
  assert.equal(table.totalRows, 15, 'a new data array is seen without lifecycle hooks');
  table.data.push(...makeRows(3, 500));
  assert.equal(table.totalRows, 18, 'an in-place push is seen without lifecycle hooks');
  assert.equal(table.totalPages, 2);

  table.toggleRowSelection(table.data[0]);
  table.toggleRowSelection(table.data[1]);
  assert.deepEqual(selectionEvents.map((event) => event.selectedCount), [1, 2]);
  assert.equal(table.selectedCount, 2);
  table.toggleRowSelection(table.data[0]);
  assert.equal(selectionEvents[2].selectedCount, 1);
  assert.deepEqual(table.selectedRows, [table.data[1]]);

  table.toggleAllRows(true);
  assert.equal(selectionEvents[3].allSelected, true);
  assert.equal(selectionEvents[3].selectedCount, 18);
  assert.equal(table.allRowsSelected, true);
});

test('memoized getters match a fresh instance across random operation sequences', async () => {
  const { DataTableComponent } = await apiPromise;
  const pick = (random, items) => items[Math.floor(random() * items.length)];
  const integer = (random, max) => Math.floor(random() * max);
  const subset = (random, rows, max) => rows.filter(() => random() < max / Math.max(rows.length, 1));
  let nextId = 1000;
  const operations = [
    ['set data through ngOnChanges', (table, random) => {
      table.data = subset(random, makeRows(60), 40);
      table.ngOnChanges({ data: {} });
    }],
    ['set data without hooks', (table, random) => {
      table.data = makeRows(integer(random, 40), integer(random, 20) + 1);
    }],
    ['push a row in place', (table) => {
      table.data.push(makeRows(1, nextId++)[0]);
    }],
    ['edit a row in place, then ngDoCheck', (table, random) => {
      if (table.data.length) {
        const row = pick(random, table.data);
        row.score = integer(random, 120);
        row.team = pick(random, ['Red', 'Blue', 'Green', 'Gold']);
      }
      table.ngDoCheck();
    }],
    ['remove a row in place, then ngDoCheck', (table, random) => {
      table.data.splice(integer(random, table.data.length), 1);
      table.ngDoCheck();
    }],
    ['set columns', (table, random) => {
      table.columns = makeColumns(random() < 0.5);
      table.ngOnChanges({ columns: {} });
    }],
    ['set the default sort', (table, random) => {
      table.defaultSortFieldId = pick(random, [null, 'score', 'team', 'missing']);
      table.defaultSortAsc = random() < 0.5;
      table.ngOnChanges({ defaultSortFieldId: {}, defaultSortAsc: {} });
    }],
    ['sort', (table, random) => {
      const columns = table.visibleColumns;
      if (columns.length) {
        table.toggleSort(pick(random, columns));
      }
    }],
    ['global filter', (table, random) => table.setGlobalFilter(pick(random, ['', 'e', 'r', '1', 'zz']))],
    ['column filter', (table, random) => {
      table.setColumnFilter(pick(random, ['team', 'name', 'score']), pick(random, ['', 'r', 'b', null, '2']));
    }],
    ['global filter without hooks', (table, random) => {
      table.globalFilter = pick(random, ['', 'o', 're']);
    }],
    ['column filters without hooks', (table, random) => {
      table.columnFilters = random() < 0.5 ? [] : [{ id: 'team', value: pick(random, ['Red', 'e']) }];
    }],
    ['change page', (table, random) => table.changePage(pick(random, [1, 2, 3, 5, 0, -1, '2', 2.7, NaN, 99]))],
    ['change rows per page', (table, random) => table.changeRowsPerPage(pick(random, [5, 10, '7', 0, -2, 'x', 3.5]))],
    ['set paginationPerPage', (table, random) => {
      table.paginationPerPage = pick(random, [5, 10, '4', 0]);
      table.ngOnChanges({ paginationPerPage: {} });
    }],
    ['set paginationDefaultPage', (table, random) => {
      table.paginationDefaultPage = pick(random, [1, 2, 4, '3']);
      table.ngOnChanges({ paginationDefaultPage: {} });
    }],
    ['set the page without hooks', (table, random) => {
      table.currentPage = integer(random, 6) + 1;
    }],
    ['select a row', (table, random) => {
      const rows = table.displayedRows.filter((row) => !table.isGroupRow(row));
      if (rows.length) {
        table.toggleRowSelection(pick(random, rows));
      }
    }],
    ['select all', (table, random) => table.toggleAllRows(random() < 0.6)],
    ['clear the selection', (table) => {
      table.clearSelectedRows = !table.clearSelectedRows;
      table.ngOnChanges({ clearSelectedRows: { firstChange: false } });
    }],
    ['selection flags', (table, random) => {
      table.selectableRowsVisibleOnly = random() < 0.5;
      table.selectableRowsSingle = random() < 0.3;
      table.selectableRowDisabled = random() < 0.5 ? null : (row) => row.score % 3 === 0;
    }],
    ['group', (table, random) => table.setGrouping(pick(random, [[], ['team'], ['team', 'active'], ['active']]))],
    ['toggle a group', (table, random) => {
      const groups = table.displayedRows.filter((row) => table.isGroupRow(row));
      if (groups.length) {
        table.toggleGroupRow(pick(random, groups));
      }
    }],
    ['pin top rows', (table, random) => {
      table.pinnedTopRows = subset(random, table.data, 2);
    }],
    ['pin bottom rows', (table, random) => {
      table.pinnedBottomRows = random() < 0.2 ? makeRows(1, 9000) : subset(random, table.data, 2);
    }],
    ['row pinning state', (table, random) => {
      table.rowPinning = random() < 0.5 ? null : { top: subset(random, table.data, 1) };
    }],
    ['column visibility', (table, random) => table.setColumnVisibility(pick(random, ['team', 'score', 'active']), random() < 0.5)],
    ['column order', (table, random) => table.setColumnOrder(random() < 0.5 ? [] : ['score', 'name'])],
    ['hidden columns', (table, random) => {
      table.hiddenColumns = random() < 0.5 ? [] : ['active'];
    }],
    ['pagination flags', (table, random) => {
      table.pagination = random() < 0.8;
      table.paginationServer = random() < 0.2;
      table.paginationTotalRows = integer(random, 80);
    }],
    ['manual flags', (table, random) => {
      table.manualSorting = random() < 0.2;
      table.manualFiltering = random() < 0.2;
      table.manualPagination = random() < 0.2;
      table.sortServer = random() < 0.2;
    }],
    ['keep pinned rows', (table, random) => {
      table.keepPinnedRows = random() < 0.5;
    }],
    ['server selection options', (table, random) => {
      table.paginationServerOptions = pick(random, [null, {}, { persistSelectedOnPageChange: true }, { persistSelectedOnSort: true }]);
    }],
    ['virtual rows', (table, random) => {
      table.virtualRows = random() < 0.3;
      table.virtualStartIndex = integer(random, 10);
      table.virtualRowCount = integer(random, 8) + 1;
    }],
    ['key field', (table, random) => {
      table.keyField = pick(random, ['id', 'id', 'missing']);
    }],
    ['expand a row', (table, random) => {
      const rows = table.displayedRows.filter((row) => !table.isGroupRow(row));
      if (rows.length) {
        table.toggleRowExpansion(pick(random, rows));
      }
    }],
    ['expandable flags', (table, random) => {
      table.expandableRows = random() < 0.7;
      table.expandableRowTemplate = random() < 0.7 ? {} : null;
    }],
    ['programmatic expansion', (table, random) => {
      table.expandableRowExpanded = random() < 0.5 ? null : (row) => row.score % 4 === 0;
      table.ngOnChanges({ expandableRowExpanded: {} });
    }],
    ['ngDoCheck', (table) => table.ngDoCheck()],
    ['end the render pass', (table) => table.ngAfterViewChecked()]
  ];

  for (const seed of [1, 7, 2026]) {
    const random = createRandom(seed);
    const table = new DataTableComponent();
    table.columns = makeColumns(true);
    table.data = makeRows(30);
    table.pagination = true;
    table.paginationPerPage = 5;
    table.selectableRows = true;
    table.ngOnChanges({ columns: {}, data: {}, paginationPerPage: {} });

    for (let step = 0; step < 400; step += 1) {
      const [name, operation] = pick(random, operations);
      operation(table, random);
      const actual = snapshotDerivedState(table);
      const expected = snapshotDerivedState(createReference(DataTableComponent, table));
      for (const getter of Object.keys(expected)) {
        assert.deepStrictEqual(actual[getter], expected[getter], `${getter} after step ${step} (${name}), seed ${seed}`);
      }
    }
  }
});

test('between render passes every read is fresh, as up to 22.1.7; the render pass shares values', async () => {
  const { DataTableComponent } = await apiPromise;
  let scoreCalls = 0;
  const score = { id: 'score', name: 'Score', sortable: true, selector(row) { scoreCalls += 1; return row.score; } };
  const rows = makeRows(30);
  const table = new DataTableComponent();
  const red = () => rows.filter((row) => row.team === 'Red').length;

  table.columns = [{ id: 'team', name: 'Team', selector: 'team' }, score];
  table.data = rows;
  table.columnFilters = { team: 'Red' };
  table.ngOnChanges({ columns: {}, data: {}, columnFilters: {} });
  table.toggleSort(score);

  // One render pass: ngDoCheck, the template's reads, then ngAfterViewChecked.
  table.ngDoCheck();
  assert.equal(table.totalRows, red());
  table.ngAfterViewChecked();

  // A parent binding above the table, or an event handler, reads before the next ngDoCheck.
  rows.find((row) => row.team === 'Red').team = 'Blue';
  assert.equal(table.totalRows, red(), 'an in-place edit is seen without a check');
  assert.equal(table.getColumnUniqueValues('team').Red, red());
  assert.equal(table.sortedRows.length, red());

  scoreCalls = 0;
  void table.totalPages;
  assert.equal(scoreCalls, red(), 'one read sorts once: the values it needs are shared within that read');
  void table.totalPages;
  assert.equal(scoreCalls, 2 * red(), 'the next read computes again');

  scoreCalls = 0;
  table.ngDoCheck();
  for (let pass = 0; pass < 3; pass += 1) {
    void table.totalPages;
    void table.displayedRows;
    void table.sortedRows;
  }
  assert.equal(scoreCalls, red(), 'the render pass sorts once');
  table.ngAfterViewChecked();

  // Rows without a keyField value: a single lookup between passes scans, as before.
  const keyless = new DataTableComponent();
  const first = { name: 'First' };
  keyless.data = [first, { name: 'Second' }];
  keyless.keyField = 'missing';
  assert.equal(keyless.getRowKey(first), '0');
  keyless.data.unshift({ name: 'Zero' });
  assert.equal(keyless.getRowKey(first), '1');
});

test('a subclass whose ngDoCheck skips super still sees in-place edits', async () => {
  const { DataTableComponent } = await apiPromise;
  class LegacyTable extends DataTableComponent {
    ngDoCheck() {
      this.checks = (this.checks || 0) + 1;
    }
  }
  const rows = makeRows(3);
  const table = new LegacyTable();

  table.columns = makeColumns(false);
  table.data = rows;
  table.ngOnChanges({ columns: {}, data: {} });
  table.toggleSort(table.columns[2]);
  table.ngDoCheck();
  assert.deepEqual(table.sortedRows.map((row) => row.id), [3, 1, 2]);
  rows[0].score = 1000;
  table.ngDoCheck();
  table.ngAfterViewChecked();
  assert.equal(table.sortedRows[2], rows[0], 'computed fresh, without the cache');
});

test('group rows keep their identity across generations', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = new DataTableComponent();
  table.columns = makeColumns(false);
  table.data = makeRows(12);
  table.ngOnChanges({ columns: {}, data: {} });
  table.setGrouping(['team']);

  const first = table.groupedRows.filter((row) => table.isGroupRow(row));
  table.ngDoCheck();
  table.data.push(...makeRows(3, 100));
  table.ngDoCheck();
  const second = table.groupedRows.filter((row) => table.isGroupRow(row));

  assert.equal(first.length, 3);
  first.forEach((row, index) => assert.equal(second[index], row));
  assert.equal(second.reduce((sum, row) => sum + row.leafRows.length, 0), 15, 'fields are refreshed in place');
  assert.deepEqual(Object.keys(second[0]), ['__adtcGroup', 'groupKey', 'groupColumn', 'groupLabel', 'groupValue', 'depth', 'leafRows']);
});

test('row keys without a key field match data.indexOf', async () => {
  const { DataTableComponent } = await apiPromise;
  const first = { name: 'First' };
  const second = { name: 'Second' };
  const pinned = { name: 'Pinned' };
  const table = new DataTableComponent();
  table.data = [first, second, first];

  for (const row of [first, second, pinned, {}, null, undefined, NaN]) {
    assert.equal(table.getRowKey(row), String(table.data.indexOf(row)));
  }

  table.data.splice(0, 1);
  assert.equal(table.getRowKey(first), '1', 'an in-place change of length rebuilds the index');
  table.data[0] = pinned;
  table.ngDoCheck();
  assert.equal(table.getRowKey(pinned), '0');
  assert.equal(table.getRowKey(second), '-1');
});

test('trackBy keeps identity tracking by default and keys group rows', async () => {
  const { DataTableComponent } = await apiPromise;
  const { DefaultIterableDiffer } = await corePromise;
  const table = new DataTableComponent();
  const group = { __adtcGroup: true, groupKey: 'team:Red' };
  const countAdded = (differ, rows) => {
    let added = 0;
    const changes = differ.diff(rows);
    if (changes) {
      changes.forEachAddedItem(() => added += 1);
    }
    return added;
  };

  assert.equal(table.trackBy, null);
  const row = { id: 1 };
  assert.equal(table.rowTrackBy(0, row), row);
  assert.equal(table.rowTrackBy(0, group), 'group:team:Red');

  // NgForOf creates its differ with the bound function, as here.
  const defaultDiffer = new DefaultIterableDiffer(table.rowTrackBy);
  countAdded(defaultDiffer, makeRows(3));
  assert.equal(countAdded(defaultDiffer, makeRows(3)), 3, 'new row objects are re-created by default, as before');

  table.trackBy = (index, item) => item.id;
  assert.equal(table.rowTrackBy(4, { id: 7 }), 7);
  assert.equal(table.rowTrackBy(0, group), 'group:team:Red');
  const keyedDiffer = new DefaultIterableDiffer(table.rowTrackBy);
  countAdded(keyedDiffer, [{ ...group }, ...makeRows(3)]);
  assert.equal(countAdded(keyedDiffer, [{ ...group }, ...makeRows(3)]), 0, 'refreshed objects with the same ids keep their rows');

  assert.match(
    fs.readFileSync(bundlePath, 'utf8'),
    /\[ngForOf\]=\\?"displayedRows\\?" \[ngForTrackBy\]=\\?"rowTrackBy\\?"/
  );
});

test('nested header columns sort ascending, then descending', async () => {
  const { DataTableComponent } = await apiPromise;
  const columns = makeColumns(true);
  const table = new DataTableComponent();
  const events = [];

  table.columns = columns;
  table.data = makeRows(9);
  table.sortChange.subscribe((event) => events.push(event));
  table.ngOnChanges({ columns: {}, data: {} });
  table.ngDoCheck();

  const score = table.visibleColumns[2];
  assert.equal(score.id, 'score');
  assert.equal(score.group, 'Stats');
  table.ngDoCheck();
  assert.equal(table.visibleColumns[2], score, 'the copy is stable across generations');

  table.toggleSort(score);
  table.ngDoCheck();
  assert.equal(table.getAriaSort(table.visibleColumns[2]), 'ascending');
  assert.match(table.getSortIndicatorClassName(table.visibleColumns[2]), /\bactive\b/);
  assert.equal(table.getSortButtonAriaLabel(table.visibleColumns[2]), 'Sort Score descending');

  table.toggleSort(table.visibleColumns[2]);
  table.ngDoCheck();
  assert.equal(table.getAriaSort(table.visibleColumns[2]), 'descending');
  assert.deepEqual(table.displayedRows.map((row) => row.score), table.data.map((row) => row.score).sort((a, b) => b - a));
  assert.deepEqual(events.map((event) => event.direction), ['asc', 'desc']);
  assert.deepEqual(Object.keys(events[0].column).sort(), ['group', 'id', 'name', 'selector', 'sortable']);

  // Fresh values: the copy follows in-place edits of the child column.
  columns[1].columns[1].name = 'Points';
  delete columns[1].columns[1].sortable;
  table.ngDoCheck();
  assert.equal(table.visibleColumns[2], score);
  assert.equal(score.name, 'Points');
  assert.equal('sortable' in score, false);
  assert.equal(score.group, 'Stats');
});

test('a child listed under two groups keeps both group labels', async () => {
  const { DataTableComponent } = await apiPromise;
  const shared = { id: 'score', name: 'Score', selector: 'score' };
  const table = new DataTableComponent();

  table.columns = [{ name: 'First', columns: [shared] }, { name: 'Second', columns: [shared] }];
  assert.deepEqual(table.columnGroups.map((group) => group.name), ['First', 'Second']);
});

test('defaultSortFieldId finds nested columns', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = new DataTableComponent();

  table.columns = makeColumns(true);
  table.data = makeRows(6);
  table.defaultSortFieldId = 'score';
  table.defaultSortAsc = false;
  table.ngOnChanges({ columns: {}, data: {}, defaultSortFieldId: {}, defaultSortAsc: {} });

  assert.equal(table.activeSortColumn, table.visibleColumns[2]);
  assert.equal(table.getAriaSort(table.visibleColumns[2]), 'descending');
  assert.equal(table.sortedRows[0].score, Math.max(...table.data.map((row) => row.score)));
});

test('new column objects keep the active sort by key, unless a default sort applies', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = new DataTableComponent();

  table.columns = makeColumns(false);
  table.data = makeRows(6);
  table.ngOnChanges({ columns: {}, data: {} });
  table.toggleSort(table.visibleColumns[2]);
  table.toggleSort(table.visibleColumns[2]);

  table.columns = makeColumns(true);
  table.ngOnChanges({ columns: {} });
  assert.equal(table.activeSortColumn, table.visibleColumns[2]);
  assert.equal(table.getAriaSort(table.visibleColumns[2]), 'descending');

  table.columns = makeColumns(false).map((column) => column.id === 'score'
    ? { ...column, selector: (row) => -row.score }
    : column);
  table.ngOnChanges({ columns: {} });
  assert.equal(table.activeSortColumn, table.columns[2], 'sorting uses the new definition');
  assert.equal(table.sortedRows[0].score, Math.min(...table.data.map((row) => row.score)));

  table.defaultSortFieldId = 'name';
  table.ngOnChanges({ defaultSortFieldId: {} });
  table.toggleSort(table.visibleColumns[2]);
  table.columns = makeColumns(false);
  table.ngOnChanges({ columns: {} });
  assert.equal(table.activeSortColumn, table.columns[0], 'a matching defaultSortFieldId still resets the sort');
  assert.equal(table.sortDirection, 'asc');
});

test('the headless controller keeps the active sort when columns are recreated', async () => {
  const { createDataTableController } = await apiPromise;
  const rows = makeRows(6);
  const columns = makeColumns(true);
  const controller = createDataTableController({ columns, data: rows });

  assert.equal(controller.flatColumns[1], columns[1].columns[0], 'nested columns keep their identity');
  controller.toggleSort(controller.flatColumns[2]);
  controller.toggleSort(controller.flatColumns[2]);

  const next = makeColumns(true);
  controller.update({ columns: next, data: rows });
  assert.equal(controller.activeSortColumn, next[1].columns[1]);
  assert.equal(controller.getAriaSort(next[1].columns[1]), 'descending');
});

function createLargeTable(DataTableComponent, size) {
  const table = new DataTableComponent();
  table.columns = [
    { id: 'id', name: 'ID', selector: 'id', sortable: true },
    { id: 'name', name: 'Name', selector: 'name', sortable: true },
    { id: 'team', name: 'Team', selector: 'team', sortable: true },
    { id: 'score', name: 'Score', selector: 'score', sortable: true },
    { id: 'active', name: 'Active', selector: 'active' },
    { id: 'label', name: 'Label', selector: (row) => `${row.team}-${row.score}` }
  ];
  table.data = makeRows(size);
  table.pagination = true;
  table.selectableRows = true;
  table.ngOnChanges({ columns: {}, data: {} });
  table.toggleSort(table.columns[3]);
  return table;
}

// The bindings the template evaluates in one change-detection pass.
function simulateRender(table) {
  const reads = [];

  reads.push(table.showContextBar && table.selectedCount, table.hasRows, table.tableAriaLabel);
  reads.push(table.totalRows, table.expandedColspan, table.hasColumnGroups);
  reads.push(table.getSelectAllAriaLabel(), table.selectAllAriaChecked, table.someRowsSelected, table.allRowsSelected);
  for (const column of table.visibleColumns) {
    reads.push(
      table.getHeaderClassName(column),
      table.getHeaderStyleText(column),
      table.getAriaSort(column),
      table.getSortButtonClassName(column),
      table.getSortButtonAriaLabel(column),
      table.getSortIndicatorClassName(column)
    );
  }
  table.displayedRows.forEach((row, rowIndex) => {
    reads.push(table.isGroupRow(row), table.getRowClassName(row), table.getRowStyleText(row));
    reads.push(table.getRowTabIndex(row), table.getRowAriaSelected(row), table.getRowSelectionAriaLabel(row, rowIndex));
    reads.push(table.isRowSelected(row), table.isSelectableDisabled(row));
    for (const column of table.visibleColumns) {
      reads.push(table.getCellClassName(column), table.getCellStyleText(column), table.getCellText(row, column, rowIndex));
    }
  });
  if (table.showPagination) {
    reads.push(table.startRow, table.endRow, table.totalRows, table.rowsPerPage, table.currentPage);
    reads.push(table.totalPages, table.currentPage === table.totalPages, table.currentPage === table.totalPages);
  }
  return reads;
}

function measure(callback) {
  const started = performance.now();
  const result = callback();
  return { ms: performance.now() - started, result };
}

test('records render timings before and after memoization (not asserted)', async (t) => {
  const { DataTableComponent } = await apiPromise;

  for (const size of [10_000, 100_000]) {
    const before = createLargeTable(DataTableComponent, size);
    const after = createLargeTable(DataTableComponent, size);
    // Recompute on every read and skip ngDoCheck, as up to 22.1.7.
    before.derivedValue = (name, compute) => compute();

    const renderBefore = () => simulateRender(before);
    const renderAfter = () => {
      after.ngDoCheck();
      return simulateRender(after);
    };

    // Untimed warm-up, so neither side pays for JIT compilation.
    renderBefore();
    renderAfter();
    const beforeRender = measure(renderBefore);
    const afterRender = measure(renderAfter);

    assert.deepEqual(afterRender.result, beforeRender.result);
    t.diagnostic(
      `${size} rows, one simulated render: ${beforeRender.ms.toFixed(1)} ms recomputing on every read, ` +
      `${afterRender.ms.toFixed(1)} ms memoized`
    );
  }
});
