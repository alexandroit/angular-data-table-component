const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { pathToFileURL } = require('node:url');

const bundlePath = path.resolve(__dirname, '../dist/fesm2022/stackline-angular-data-table-component.mjs');
const apiPromise = import('@angular/compiler').then(() => import(pathToFileURL(bundlePath).href));

const columns = [
  { id: 'name', name: 'Name', selector: 'name', sortable: true },
  { id: 'team', name: 'Team', selector: 'team' }
];

function createTable(DataTableComponent, inputs = {}) {
  const table = new DataTableComponent();
  table.columns = columns;
  table.data = [
    { id: 1, name: 'Ada', team: 'Red' },
    { id: 2, name: 'Grace', team: 'Red' },
    { id: 3, name: 'Linus', team: 'Blue' }
  ];
  table.selectableRows = true;
  table.expandableRows = true;
  table.groupBy = 'team';
  Object.assign(table, inputs);
  table.ngOnChanges(Object.fromEntries(['columns', 'data', ...Object.keys(inputs)].map((key) => [key, {}])));
  table.ngDoCheck();
  return table;
}

// Every text and accessible name the template takes from the component.
function readTexts(table) {
  const [name, team] = table.visibleColumns;
  const row = table.data[0];
  const group = table.groupedRows.find((item) => table.isGroupRow(item));
  const texts = () => ({
    sortLabels: [table.getSortButtonAriaLabel(name), table.getSortButtonAriaLabel(team)],
    sortIndicator: table.getSortIndicatorText(name),
    rowSelection: table.getRowSelectionAriaLabel(row, 0),
    rowExpansion: table.getRowExpandAriaLabel(row, 0),
    groupToggle: table.getGroupToggleAriaLabel(group),
    groupCount: table.getGroupRowCountText(group)
  });
  const before = texts();

  table.toggleSort(name);
  table.toggleRowSelection(row);
  table.toggleRowExpansion(row);
  table.toggleGroupRow(group);
  const after = texts();
  table.toggleSort(name);

  return {
    table: table.tableAriaLabel,
    loading: table.localize('', 'loadingText'),
    selectAll: table.getSelectAllAriaLabel(),
    landmark: table.paginationAriaLabel,
    pager: ['navigationAriaLabel', 'firstPageAriaLabel', 'previousPageAriaLabel', 'nextPageAriaLabel', 'lastPageAriaLabel', 'rowsPerPageAriaLabel']
      .map((key) => table.localize('pagination', key)),
    before,
    after,
    descending: [table.getSortButtonAriaLabel(name), table.getSortIndicatorText(name)]
  };
}

test('default texts and accessible names are those of 22.1.7', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent);

  assert.deepEqual(table.localization, {});
  assert.deepEqual(readTexts(table), {
    table: 'Data table',
    loading: 'Loading...',
    selectAll: 'Select all rows',
    landmark: null,
    pager: ['{table} pagination', undefined, undefined, undefined, undefined, undefined],
    before: {
      sortLabels: ['Sort Name ascending', 'Team column'],
      sortIndicator: 'Sort',
      rowSelection: 'Select row Ada',
      rowExpansion: 'Expand details for row Ada',
      groupToggle: 'Collapse group Team Red',
      groupCount: '2 rows'
    },
    after: {
      sortLabels: ['Sort Name descending', 'Team column'],
      sortIndicator: 'Asc',
      rowSelection: 'Clear selection for row Ada',
      rowExpansion: 'Collapse details for row Ada',
      groupToggle: 'Expand group Team Red',
      groupCount: '2 rows'
    },
    descending: ['Sort Name ascending', 'Desc']
  });

  assert.equal(table.selectAllAriaLabel, 'Select all rows');
  assert.equal(createTable(DataTableComponent, { selectableRowsVisibleOnly: true }).selectAllAriaLabel, 'Select all visible rows');
  assert.equal(createTable(DataTableComponent, { selectableRowsVisibleOnly: true }).getSelectAllAriaLabel(), 'Select all visible rows');
  assert.equal(createTable(DataTableComponent, { selectableRowsSingle: true }).getRowSelectionAriaLabel({ name: 'Ada' }, 0), 'Choose row Ada');
  assert.equal(createTable(DataTableComponent, { title: 'Orders' }).tableAriaLabel, 'Orders');
  assert.equal(createTable(DataTableComponent, { title: 'Orders', ariaLabel: 'Order list' }).tableAriaLabel, 'Order list');
  assert.equal(table.noDataText, 'There are no records to display');
  assert.deepEqual(table.contextMessage, { singular: 'item', plural: 'items', message: 'selected' });
});

test('the template takes every text from the component', () => {
  const bundle = fs.readFileSync(bundlePath, 'utf8');
  const template = bundle.slice(bundle.indexOf('DATA_TABLE_TEMPLATE = `'), bundle.indexOf('`;', bundle.indexOf('DATA_TABLE_TEMPLATE = `')));

  assert.ok(template.length > 1000);
  assert.doesNotMatch(template, /Loading\.\.\.|Showing|Rows:|>\s*(First|Prev|Next|Last)\s*<|'(Asc|Desc|Sort)'|\}\} rows|Page \{\{/);
  assert.match(template, /\{\{ localize\('', 'loadingText'\) \}\}/);
  assert.match(template, /\{\{ paginationOption\('showingText'\) \}\} \{\{ startRow \}\}-\{\{ endRow \}\} \{\{ paginationOption\('rangeSeparatorText'\) \}\} \{\{ totalRows \}\}/);
});

test('localization replaces every text and accessible name', async () => {
  const { DataTableComponent } = await apiPromise;
  const localization = {
    pagination: {
      navigationAriaLabel: 'Paginação',
      firstPageAriaLabel: 'Primeira página',
      previousPageAriaLabel: 'Página anterior',
      nextPageAriaLabel: 'Próxima página',
      lastPageAriaLabel: 'Última página',
      rowsPerPageAriaLabel: 'Linhas por página'
    },
    expandable: { expandRowAriaLabel: 'Abrir {row}', collapseRowAriaLabel: 'Fechar {row}' },
    loadingText: 'Carregando...',
    tableAriaLabel: 'Tabela',
    sort: {
      ascendingText: 'Cresc.',
      descendingText: 'Decresc.',
      unsortedText: 'Ordenar',
      sortAscendingAriaLabel: 'Ordenar {column} crescente',
      sortDescendingAriaLabel: 'Ordenar {column} decrescente',
      columnAriaLabel: 'Coluna {column}'
    },
    selection: {
      selectAllRowsAriaLabel: 'Selecionar todas',
      selectAllVisibleRowsAriaLabel: 'Selecionar visíveis',
      selectRowAriaLabel: 'Selecionar {row}',
      deselectRowAriaLabel: 'Desmarcar {row}',
      chooseRowAriaLabel: 'Escolher {row}'
    },
    grouping: {
      rowCountText: '{count} linhas',
      expandGroupAriaLabel: 'Abrir grupo {label}: {value}',
      collapseGroupAriaLabel: 'Fechar grupo {label}: {value}'
    }
  };
  const table = createTable(DataTableComponent, { localization });

  assert.deepEqual(readTexts(table), {
    table: 'Tabela',
    loading: 'Carregando...',
    selectAll: 'Selecionar todas',
    landmark: 'Paginação',
    pager: ['Paginação', 'Primeira página', 'Página anterior', 'Próxima página', 'Última página', 'Linhas por página'],
    before: {
      sortLabels: ['Ordenar Name crescente', 'Coluna Team'],
      sortIndicator: 'Ordenar',
      rowSelection: 'Selecionar Ada',
      rowExpansion: 'Abrir Ada',
      groupToggle: 'Fechar grupo Team: Red',
      groupCount: '2 linhas'
    },
    after: {
      sortLabels: ['Ordenar Name decrescente', 'Coluna Team'],
      sortIndicator: 'Cresc.',
      rowSelection: 'Desmarcar Ada',
      rowExpansion: 'Fechar Ada',
      groupToggle: 'Abrir grupo Team: Red',
      groupCount: '2 linhas'
    },
    descending: ['Ordenar Name crescente', 'Decresc.']
  });
  assert.equal(createTable(DataTableComponent, { localization, selectableRowsVisibleOnly: true }).getSelectAllAriaLabel(), 'Selecionar visíveis');
  // The 22.1.7 getter keeps its English literal type and value; the template renders getSelectAllAriaLabel().
  assert.equal(table.selectAllAriaLabel, 'Select all rows');
  assert.equal(createTable(DataTableComponent, { localization, selectableRowsVisibleOnly: true }).selectAllAriaLabel, 'Select all visible rows');
  assert.equal(createTable(DataTableComponent, { localization, selectableRowsSingle: true }).getRowSelectionAriaLabel({ name: 'Ada' }, 0), 'Escolher Ada');
});

test('placeholders are replaced literally and missing texts fall back to the defaults', async () => {
  const { DataTableComponent } = await apiPromise;
  const table = createTable(DataTableComponent, {
    localization: {
      selection: { selectRowAriaLabel: '{row} / {row} / {unknown}', deselectRowAriaLabel: null },
      sort: { ascendingText: undefined, unsortedText: '' },
      grouping: null
    }
  });
  const row = { name: '$& {column} $1' };

  assert.equal(table.getRowSelectionAriaLabel(row, 0), '$& {column} $1 / $& {column} $1 / {unknown}');
  table.toggleRowSelection(row);
  assert.equal(table.getRowSelectionAriaLabel(row, 0), 'Clear selection for row $& {column} $1', 'null keeps the default');
  assert.equal(table.getSortIndicatorText(table.visibleColumns[0]), '', 'an empty text is kept');
  table.toggleSort(table.visibleColumns[0]);
  assert.equal(table.getSortIndicatorText(table.visibleColumns[0]), 'Asc', 'undefined keeps the default');
  assert.equal(table.getGroupRowCountText({ leafRows: [1, 2, 3] }), '3 rows');

  table.localization = null;
  assert.equal(table.localize('', 'loadingText'), 'Loading...');
  assert.equal(table.localize('pagination', 'navigationAriaLabel'), '{table} pagination');
  table.paginationComponentOptions = null;
  assert.equal(table.paginationOption('nextPageText'), 'Next', 'null options keep the defaults, as an async pipe gives before it emits');
});

test('the pager landmark is named after the table, so several tables on a page have distinct landmarks', async () => {
  const { DataTableComponent } = await apiPromise;
  const named = (inputs) => createTable(DataTableComponent, inputs).paginationAriaLabel;

  assert.equal(named({}), null, 'an unnamed table gets no landmark, as in 22.1.7');
  assert.equal(named({ title: 'Orders' }), 'Orders pagination');
  assert.equal(named({ title: 'Orders', ariaLabel: 'Order list' }), 'Order list pagination');
  assert.equal(named({ localization: { pagination: { navigationAriaLabel: 'Pager' } } }), 'Pager', 'an explicit label makes a landmark');
  assert.equal(named({ title: 'Pedidos', localization: { pagination: { navigationAriaLabel: 'Paginação de {table}' } } }), 'Paginação de Pedidos');
  assert.equal(
    named({ localization: { tableAriaLabel: 'Tabela', pagination: { navigationAriaLabel: 'Paginação de {table}' } } }),
    'Paginação de Tabela'
  );
  assert.equal(named({ title: 'Orders', localization: { pagination: { navigationAriaLabel: '' } } }), null, 'an empty label removes the landmark');

  const bundle = fs.readFileSync(bundlePath, 'utf8');
  const template = bundle.slice(bundle.indexOf('DATA_TABLE_TEMPLATE = `'), bundle.indexOf('`;', bundle.indexOf('DATA_TABLE_TEMPLATE = `')));
  assert.match(template, /class="adtc-pagination" \[attr\.role\]="paginationAriaLabel \? 'navigation' : null" \[attr\.aria-label\]="paginationAriaLabel"/);
  assert.equal((template.match(/\[attr\.aria-label\]="getSelectAllAriaLabel\(\)"/g) || []).length, 2, 'both select-all checkboxes');
});
