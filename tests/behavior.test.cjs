const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');
const { pathToFileURL } = require('node:url');

const bundleUrl = pathToFileURL(
  path.resolve(__dirname, '../dist/fesm2022/stackline-angular-data-table-component.mjs')
).href;
const apiPromise = import('@angular/compiler').then(() => import(bundleUrl));

test('headless controller supports filtering, sorting, pagination, and selection', async () => {
  const { createDataTableController } = await apiPromise;
  const columns = [
    { id: 'name', name: 'Name', selector: 'name', sortable: true },
    { id: 'score', name: 'Score', selector: 'score', sortable: true }
  ];
  const rows = [
    { id: 1, name: 'Ada', score: 90 },
    { id: 2, name: 'Grace', score: 95 },
    { id: 3, name: 'Linus', score: 90 }
  ];
  const controller = createDataTableController({
    columns,
    data: rows,
    pagination: true,
    perPage: 2,
    selectableRows: true
  });

  controller.toggleSort(columns[1]);
  assert.deepEqual(controller.sortedRows.map((row) => row.id), [1, 3, 2]);

  controller.setGlobalFilter('a');
  assert.deepEqual(controller.filteredRows.map((row) => row.id), [1, 2]);
  assert.equal(controller.totalPages, 1);

  controller.toggleRowSelection(rows[0]);
  assert.equal(controller.selectedCount, 1);
  assert.deepEqual(controller.selectedRows, [rows[0]]);
});

test('sorting prepares selector values once and preserves stable order', async () => {
  const { createDataTableController } = await apiPromise;
  const rows = Array.from({ length: 2_000 }, (_, index) => ({
    id: index,
    group: index % 4
  }));
  let selectorCalls = 0;
  const column = {
    id: 'group',
    name: 'Group',
    sortable: true,
    selector(row, rowIndex) {
      selectorCalls += 1;
      assert.equal(row.id, rowIndex);
      return row.group;
    }
  };
  const controller = createDataTableController({ columns: [column], data: rows });

  controller.activeSortColumn = column;
  const sorted = controller.sortedRows;

  assert.equal(selectorCalls, rows.length);
  assert.deepEqual(
    sorted.filter((row) => row.group === 0).slice(0, 4).map((row) => row.id),
    [0, 4, 8, 12]
  );

  selectorCalls = 0;
  controller.sortDirection = 'desc';
  const descending = controller.sortedRows;
  assert.equal(selectorCalls, rows.length);
  assert.deepEqual(
    descending.filter((row) => row.group === 3).slice(0, 4).map((row) => row.id),
    [3, 7, 11, 15]
  );
});

test('unsafe-looking row and column keys behave as ordinary data keys', async () => {
  const { DataTableComponent, createDataTableController } = await apiPromise;
  const originalPolluted = Object.prototype.polluted;
  const rows = [
    { id: '__proto__', value: 'alpha' },
    { id: 'prototype', value: 'beta' },
    { id: 'constructor', value: 'gamma' }
  ];
  const columns = [
    { id: '__proto__', name: 'Value', selector: 'value' },
    { id: 'constructor', name: 'ID', selector: 'id' }
  ];

  const controller = createDataTableController({
    columns,
    data: rows,
    selectableRows: true,
    selectedKeys: JSON.parse('{"__proto__":true}')
  });

  assert.deepEqual(controller.selectedRows, [rows[0]]);
  controller.toggleRowSelection(rows[1]);
  controller.toggleRowSelection(rows[2]);
  assert.equal(controller.selectedCount, 3);

  controller.setColumnFilter('__proto__', 'beta');
  assert.deepEqual(controller.filteredRows, [rows[1]]);

  const component = new DataTableComponent();
  component.columns = columns;
  component.data = rows;
  component.selectableRows = true;
  component.toggleRowSelection(rows[0]);
  component.toggleRowSelection(rows[2]);
  assert.equal(component.selectedCount, 2);

  component.setColumnVisibility('__proto__', false);
  assert.deepEqual(component.visibleColumns.map((column) => column.id), ['constructor']);
  assert.equal(Object.prototype.polluted, originalPolluted);
});

test('objects with null prototypes and circular values are handled predictably', async () => {
  const { createDataTableController } = await apiPromise;
  const visibility = Object.create(null);
  visibility.value = true;
  const circular = {};
  circular.self = circular;
  const column = { id: 'value', name: 'Value', selector: 'value' };
  const controller = createDataTableController({
    columns: [column],
    data: [{ id: 1, value: circular }],
    columnVisibility: visibility
  });

  assert.equal(controller.visibleColumns.length, 1);
  assert.equal(controller.getCellText(controller.data[0], column, 0), '[Unserializable value]');
});
