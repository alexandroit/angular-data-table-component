import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs', 'angular-22');
const docsManifest = JSON.parse(fs.readFileSync(path.join(root, 'docs-src/angular-22/package.json'), 'utf8'));
const explicitUrl = process.env.STACKLINE_ANGULAR_DATA_TABLE_URL;
const screenshotDir = process.env.STACKLINE_SCREENSHOT_DIR;
const chrome = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean).find((candidate) => fs.existsSync(candidate));

assert.ok(chrome, 'Chrome or Chromium was not found.');

function contentType(file) {
  if (file.endsWith('.html')) return 'text/html; charset=utf-8';
  if (file.endsWith('.js')) return 'text/javascript; charset=utf-8';
  if (file.endsWith('.css')) return 'text/css; charset=utf-8';
  if (file.endsWith('.svg')) return 'image/svg+xml';
  if (file.endsWith('.json')) return 'application/json';
  return 'application/octet-stream';
}

async function startServer() {
  if (explicitUrl) {
    return { url: explicitUrl, close: async () => undefined };
  }

  assert.ok(fs.existsSync(path.join(docs, 'index.html')), 'Build the Angular 22 docs first.');
  const server = http.createServer((request, response) => {
    const pathname = new URL(request.url || '/', 'http://127.0.0.1').pathname;
    const relative = pathname === '/' ? 'index.html' : decodeURIComponent(pathname.slice(1));
    const file = path.resolve(docs, relative);

    if (!file.startsWith(`${docs}${path.sep}`) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      response.writeHead(404).end('Not found');
      return;
    }

    response.writeHead(200, { 'content-type': contentType(file) });
    fs.createReadStream(file).pipe(response);
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });

  const address = server.address();
  assert.ok(address && typeof address === 'object');
  return {
    url: `http://127.0.0.1:${address.port}/`,
    close: () => new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    })
  };
}

async function openExample(page, title, id, selector) {
  await page.evaluate((label) => {
    const button = Array.from(document.querySelectorAll('.nav button'))
      .find((item) => item.textContent?.includes(label));
    button?.click();
  }, title);
  await page.waitForFunction((hash) => window.location.hash === hash, {}, `#/${id}`);
  await page.waitForSelector(selector, { visible: true });
}

async function clickButton(page, scope, text) {
  const handle = await page.evaluateHandle((scopeSelector, label) => Array.from(document.querySelectorAll(`${scopeSelector} button`))
    .find((button) => button.textContent?.trim() === label), scope, text);
  const button = handle.asElement();
  assert.ok(button, `${scope} has no "${text}" button.`);
  await button.click();
}

async function waitForText(page, selector, expected) {
  await page.waitForFunction((target, text) => {
    return document.querySelector(target)?.textContent?.replace(/\s+/g, ' ').trim() === text;
  }, { timeout: 5_000 }, selector, expected);
}

// Runs in the page: texts and ARIA attributes of one example's table and default pager.
function readTable(scopeSelector) {
  const scope = document.querySelector(scopeSelector);
  const text = (element) => (element?.textContent || '').replace(/\s+/g, ' ').trim();
  const table = scope.querySelector('table');
  const pager = scope.querySelector('.adtc-pagination');
  const meta = pager.querySelector('.adtc-pagination-meta');
  const select = pager.querySelector('.adtc-pagination-size select');
  const label = pager.querySelector('.adtc-pagination-size')?.cloneNode(true);
  label?.querySelector('select')?.remove();

  return {
    table: [table.getAttribute('aria-label'), table.getAttribute('aria-rowcount'), scope.querySelector('tbody tr').getAttribute('aria-rowindex')],
    navigation: [pager.getAttribute('role'), pager.getAttribute('aria-label')],
    live: [meta.getAttribute('aria-live'), meta.getAttribute('aria-atomic')],
    meta: text(meta),
    indicator: text(pager.querySelector('.adtc-page-indicator')),
    rowsPerPage: [text(label), select?.getAttribute('aria-label') ?? null, select?.value ?? null, text(select?.selectedOptions[0])],
    options: Array.from(select?.options || [], (option) => [option.value, text(option)]),
    buttons: Array.from(pager.querySelectorAll('button'), (button) => [text(button), button.getAttribute('aria-label')]),
    sort: Array.from(scope.querySelectorAll('th .adtc-sort-button'), (button) => [
      text(button.querySelector('.adtc-sort-indicator')),
      button.getAttribute('aria-label')
    ]),
    selection: [
      scope.querySelector('thead input')?.getAttribute('aria-label') ?? null,
      scope.querySelector('tbody input')?.getAttribute('aria-label') ?? null
    ]
  };
}

const server = await startServer();
const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});

try {
  const page = await browser.newPage();
  const firstPartyOrigin = new URL(server.url).origin;
  const failures = [];

  page.on('pageerror', (error) => failures.push(`pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() !== 'error') return;
    const sourceUrl = message.stackTrace()[0]?.url;
    const referenced = message.text().match(/https?:\/\/[^\s'"\)]+/g) || [];
    const thirdPartyOnly = referenced.length > 0 && referenced.every(
      (url) => new URL(url).origin !== firstPartyOrigin
    );

    if ((sourceUrl && new URL(sourceUrl).origin === firstPartyOrigin) || (!sourceUrl && !thirdPartyOnly)) {
      failures.push(`console: ${message.text()} ${JSON.stringify(message.stackTrace())}`);
    }
  });
  page.on('requestfailed', (request) => {
    if (new URL(request.url()).origin === firstPartyOrigin) failures.push(`request: ${request.url()}`);
  });
  page.on('response', (response) => {
    if (new URL(response.url()).origin === firstPartyOrigin && response.status() >= 400) {
      failures.push(`http ${response.status()}: ${response.url()}`);
    }
  });

  for (const viewport of [
    { width: 1440, height: 1000, name: 'desktop' },
    { width: 390, height: 844, name: 'mobile' }
  ]) {
    await page.setViewport(viewport);
    const target = new URL(server.url);
    target.searchParams.set('viewport', viewport.name);
    target.hash = '/basic';
    const response = await page.goto(target.href, {
      waitUntil: 'networkidle0',
      timeout: 90_000
    });
    assert.ok(response?.ok(), `${viewport.name} documentation returned HTTP ${response?.status()}.`);
    try {
      await page.waitForSelector('stackline-data-table tbody tr', { visible: true });
    } catch (error) {
      throw new Error(`${error.message}\n${failures.join('\n')}`);
    }

    const initial = await page.evaluate(() => ({
      body: document.body.textContent || '',
      navItems: document.querySelectorAll('.nav button').length,
      tableRows: document.querySelectorAll('stackline-data-table tbody > tr').length,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    }));

    assert.ok(initial.body.includes(`@stackline/angular-data-table-component ${docsManifest.dependencies['@stackline/angular-data-table-component']}`));
    assert.ok(initial.body.includes(`Angular ${docsManifest.dependencies['@angular/core']} runtime`));
    assert.equal(initial.navItems, 43);
    assert.ok(initial.tableRows >= 5);
    assert.equal(initial.overflow, false, `${viewport.name} page has horizontal overflow.`);

    // Default texts and accessible names are those of 22.1.7. The select shows the real
    // page size (5, not the first option); the pager landmark, live region and row
    // indexes are the 22.2.0 additions.
    assert.deepEqual(await page.evaluate(readTable, 'basic-example'), {
      table: ['Orders table', '13', '2'],
      navigation: ['navigation', 'Orders table pagination'],
      live: ['polite', 'true'],
      meta: 'Showing 1-5 of 12',
      indicator: 'Page 1 of 3',
      rowsPerPage: ['Rows:', null, '5', '5'],
      options: [['4', '4'], ['5', '5'], ['8', '8'], ['10', '10']],
      buttons: [['First', null], ['Prev', null], ['Next', null], ['Last', null]],
      sort: [
        ['Asc', 'Sort Order descending'],
        ['Sort', 'Sort Customer ascending'],
        ['Sort', 'Sort Status ascending'],
        ['Sort', 'Sort Total ascending']
      ],
      selection: ['Select all rows', 'Select row SO-1001']
    });

    if (screenshotDir) {
      fs.mkdirSync(screenshotDir, { recursive: true });
      await page.screenshot({
        path: path.join(screenshotDir, `angular-data-table-${viewport.name}.png`),
        fullPage: true
      });
    }

    await page.click('stackline-data-table tbody input[type="checkbox"]');
    await page.waitForFunction(() => {
      const log = document.querySelector('.event-log pre');
      return !!log?.textContent?.includes('basic selection');
    });

    // "Last" becomes disabled on the last page, so focus moves to an enabled pager button.
    await clickButton(page, 'basic-example .adtc-pagination', 'Last');
    await waitForText(page, 'basic-example .adtc-page-indicator', 'Page 3 of 3');
    await page.waitForFunction(() => {
      const active = document.activeElement;
      return active instanceof HTMLButtonElement && !active.disabled && !!active.closest('basic-example .adtc-pagination');
    }, { timeout: 5_000 });

    const kitchenSink = await page.$x?.('//button[contains(., "Kitchen sink")]');
    if (kitchenSink && kitchenSink[0]) {
      await kitchenSink[0].click();
    } else {
      await page.evaluate(() => {
        const button = Array.from(document.querySelectorAll('.nav button'))
          .find((item) => item.textContent?.includes('Kitchen sink'));
        button?.click();
      });
    }
    await page.waitForFunction(() => window.location.hash === '#/kitchen-sink');
    await page.waitForSelector('kitchen-sink-example stackline-data-table', { visible: true });

    await page.evaluate(() => {
      const button = Array.from(document.querySelectorAll('.nav button'))
        .find((item) => item.textContent?.includes('Headless custom HTML'));
      button?.click();
    });
    await page.waitForFunction(() => window.location.hash === '#/headless-html');
    await page.waitForSelector('headless-html-example .headless-card', { visible: true });
    await page.waitForFunction(() => {
      const panels = Array.from(document.querySelectorAll('.code-panel pre'));
      return panels.some((panel) => panel.textContent?.includes('createDataTableController'));
    });

    const headless = await page.evaluate(() => ({
      cards: document.querySelectorAll('.headless-card').length,
      source: Array.from(document.querySelectorAll('.code-panel pre'))
        .map((panel) => panel.textContent || '')
        .join('\n')
    }));
    assert.ok(headless.cards >= 4);
    assert.match(headless.source, /createDataTableController/);
    assert.doesNotMatch(headless.source, /Unable to load source file/);

    await openExample(page, 'Hide rows-per-page selector', 'hide-rows-per-page', 'hide-rows-per-page-example .adtc-pagination');
    const readSelectors = () => page.evaluate(() => Array.from(
      document.querySelectorAll('hide-rows-per-page-example stackline-data-table'),
      (table) => [
        table.querySelectorAll('.adtc-pagination-controls button').length,
        table.querySelector('.adtc-pagination-size select')?.value ?? null
      ]
    ));
    // paginationHideRowsPerPage and paginationComponentOptions.noRowsPerPage both hide it.
    assert.deepEqual(await readSelectors(), [[4, null], [4, null]]);
    // Showing it again creates a new select, which must show the real page size.
    for (const checkbox of await page.$$('hide-rows-per-page-example .filter-toolbar input[type="checkbox"]')) {
      await checkbox.click();
    }
    await page.waitForFunction(() => document.querySelectorAll('hide-rows-per-page-example .adtc-pagination-size select').length === 2, { timeout: 5_000 });
    assert.deepEqual(await readSelectors(), [[4, '5'], [4, '5']]);
    // Two pagers on one page: each landmark is named after its table, so the names differ.
    assert.deepEqual(await page.$$eval('hide-rows-per-page-example .adtc-pagination', (pagers) => pagers.map((pager) => [pager.getAttribute('role'), pager.getAttribute('aria-label')])), [
      ['navigation', 'Fixed page size pagination'],
      ['navigation', 'Fixed page size with paginationComponentOptions pagination']
    ]);

    await openExample(page, 'Client pagination', 'client-pagination', 'client-pagination-example .adtc-pagination');
    // Holding Enter on Next stops on the last page: the auto-repeat does not activate Prev, which gets the focus.
    await page.evaluate(() => document.querySelector('.event-log button')?.click());
    await page.evaluate(() => Array.from(document.querySelectorAll('client-pagination-example .adtc-pagination button'))
      .find((button) => button.textContent?.trim() === 'Next')?.focus());
    await page.keyboard.down('Enter');
    for (let repeat = 0; repeat < 15; repeat += 1) {
      await new Promise((resolve) => setTimeout(resolve, 40));
      await page.keyboard.down('Enter');
    }
    await page.keyboard.up('Enter');
    await waitForText(page, 'client-pagination-example .adtc-page-indicator', 'Page 3 of 3');
    await new Promise((resolve) => setTimeout(resolve, 200));
    assert.deepEqual(await page.evaluate(() => [
      document.querySelector('client-pagination-example .adtc-page-indicator')?.textContent?.replace(/\s+/g, ' ').trim(),
      document.activeElement?.textContent?.trim(),
      (document.querySelector('.event-log pre')?.textContent?.match(/client page/g) || []).length
    ]), ['Page 3 of 3', 'Prev', 2]);

    await openExample(page, 'Pagination options', 'pagination-options', 'pagination-options-example .adtc-pagination');
    assert.deepEqual(await page.evaluate(readTable, 'pagination-options-example'), {
      table: ['Tabela de pedidos', '13', '2'],
      navigation: ['navigation', 'Paginação'],
      live: ['polite', 'true'],
      meta: 'Mostrando 1-5 de 12',
      indicator: 'Página 1 de 3',
      rowsPerPage: ['Linhas por página:', 'Linhas por página', '5', '5'],
      options: [['4', '4'], ['5', '5'], ['8', '8'], ['10', '10'], ['12', 'Todos']],
      buttons: [
        ['Primeira', 'Primeira página'],
        ['Anterior', 'Página anterior'],
        ['Próxima', 'Próxima página'],
        ['Última', 'Última página']
      ],
      sort: [
        ['Ordenar', 'Ordenar Pedido em ordem crescente'],
        ['Ordenar', 'Ordenar Cliente em ordem crescente'],
        ['Ordenar', 'Ordenar Situação em ordem crescente'],
        ['Ordenar', 'Ordenar Total em ordem crescente']
      ],
      selection: [null, null]
    });
    await page.select('pagination-options-example .adtc-pagination select', '12');
    await waitForText(page, 'pagination-options-example .adtc-page-indicator', 'Página 1 de 1');
    assert.equal(await page.$$eval('pagination-options-example tbody tr', (rows) => rows.length), 12);
    await page.click('pagination-options-example th .adtc-sort-button');
    await waitForText(page, 'pagination-options-example th .adtc-sort-indicator', 'Cresc.');
    assert.equal(
      await page.$eval('pagination-options-example th .adtc-sort-button', (button) => button.getAttribute('aria-label')),
      'Ordenar Pedido em ordem decrescente'
    );

    await openExample(page, 'Custom pagination template', 'custom-pagination-template', 'custom-pagination-template-example .custom-pager');
    const readCustomPager = () => page.evaluate(() => {
      const pager = document.querySelector('custom-pagination-template-example .adtc-pagination');
      return {
        builtIn: pager.querySelectorAll('.adtc-pagination-meta, .adtc-pagination-controls').length,
        range: pager.querySelector('.custom-pager-range')?.textContent?.replace(/\s+/g, ' ').trim(),
        current: pager.querySelector('[aria-current="page"]')?.textContent?.trim(),
        rows: document.querySelectorAll('custom-pagination-template-example tbody tr').length
      };
    });
    assert.deepEqual(await readCustomPager(), { builtIn: 0, range: '1-4 of 12 orders', current: '1', rows: 4 });
    await page.click('custom-pagination-template-example .custom-pager button[aria-label="Page 3"]');
    await waitForText(page, 'custom-pagination-template-example [aria-current="page"]', '3');
    assert.deepEqual(await readCustomPager(), { builtIn: 0, range: '9-12 of 12 orders', current: '3', rows: 4 });
    await page.select('custom-pagination-template-example .custom-pager select', '8');
    await waitForText(page, 'custom-pagination-template-example .custom-pager-range', '1-8 of 12 orders');
    assert.deepEqual(await readCustomPager(), { builtIn: 0, range: '1-8 of 12 orders', current: '1', rows: 8 });
    // The template keeps focus when its Next button disables itself, and announces the range.
    await page.evaluate(() => Array.from(document.querySelectorAll('custom-pagination-template-example .custom-pager button'))
      .find((button) => button.textContent?.trim() === 'Next')?.focus());
    await page.keyboard.press('Enter');
    await waitForText(page, 'custom-pagination-template-example [aria-current="page"]', '2');
    await page.waitForFunction(() => document.activeElement?.getAttribute('aria-label') === 'Page 2', { timeout: 5_000 });
    assert.deepEqual(await page.$eval('custom-pagination-template-example .custom-pager-range', (range) => [range.getAttribute('aria-live'), range.getAttribute('aria-atomic')]), ['polite', 'true']);

    await openExample(page, 'Row pinning', 'row-pinning', 'row-pinning-example stackline-data-table tbody tr');
    const readPinnedPage = () => page.evaluate(() => {
      const scope = document.querySelector('row-pinning-example');
      const text = (element) => (element?.textContent || '').replace(/\s+/g, ' ').trim();
      const firstCells = (selector) => Array.from(scope.querySelectorAll(selector), (row) => text(row.querySelector('td')));
      return {
        meta: text(scope.querySelector('.adtc-pagination-meta')),
        indicator: text(scope.querySelector('.adtc-page-indicator')),
        rows: firstCells('tbody tr'),
        top: firstCells('tbody tr.adtc-row-pinned-top'),
        bottom: firstCells('tbody tr.adtc-row-pinned-bottom')
      };
    });
    await clickButton(page, 'row-pinning-example .adtc-pagination', 'Next');
    await waitForText(page, 'row-pinning-example .adtc-page-indicator', 'Page 2 of 3');
    // keepPinnedRows is off by default: pinned rows are paginated with the others, as in 22.1.7.
    assert.deepEqual(await readPinnedPage(), {
      meta: 'Showing 6-10 of 12',
      indicator: 'Page 2 of 3',
      rows: ['SO-1006', 'SO-1008', 'SO-1009', 'SO-1010', 'SO-1011'],
      top: [],
      bottom: []
    });
    await page.click('row-pinning-example .filter-toolbar input[type="checkbox"]');
    await waitForText(page, 'row-pinning-example .adtc-page-indicator', 'Page 2 of 2');
    assert.deepEqual(await readPinnedPage(), {
      meta: 'Showing 6-10 of 10',
      indicator: 'Page 2 of 2',
      rows: ['SO-1007', 'SO-1008', 'SO-1009', 'SO-1010', 'SO-1011', 'SO-1012', 'SO-1002'],
      top: ['SO-1007'],
      bottom: ['SO-1002']
    });

    await openExample(page, 'Server pagination', 'server-pagination', 'server-pagination-example stackline-data-table tbody tr');
    const topBefore = await page.$eval('server-pagination-example .adtc-pagination', (pager) => pager.getBoundingClientRect().top + window.scrollY);
    await clickButton(page, 'server-pagination-example .adtc-pagination', 'Next');
    // persistPagination keeps the pager mounted, and in place, while the next page loads.
    const topWhileLoading = await (await page.waitForFunction(() => {
      const pager = document.querySelector('server-pagination-example .adtc-pagination');
      return !!document.querySelector('server-pagination-example .adtc-loading') && !!pager &&
        pager.getBoundingClientRect().top + window.scrollY;
    }, { timeout: 5_000 })).jsonValue();
    assert.ok(Math.abs(topWhileLoading - topBefore) <= 1, `the pager moved from ${topBefore} to ${topWhileLoading} px while loading`);
    await waitForText(page, 'server-pagination-example tbody tr td:nth-child(2)', 'SO-1005');
    assert.equal(
      await page.$eval('server-pagination-example .adtc-page-indicator', (indicator) => indicator.textContent?.replace(/\s+/g, ' ').trim()),
      'Page 2 of 3'
    );
    // A keyboard sort reloads page 1 without unmounting the header, so focus stays on the sort button.
    await page.focus('server-pagination-example th .adtc-sort-button');
    await page.keyboard.press('Enter');
    await waitForText(page, 'server-pagination-example .adtc-page-indicator', 'Page 1 of 3');
    await waitForText(page, 'server-pagination-example th .adtc-sort-indicator', 'Asc');
    await new Promise((resolve) => setTimeout(resolve, 500));
    assert.deepEqual(await page.evaluate(() => [
      !!document.activeElement?.matches('server-pagination-example th .adtc-sort-button'),
      !!document.querySelector('server-pagination-example .adtc-loading')
    ]), [true, false]);

    await openExample(page, 'Expandable rows', 'expandable-rows', 'expandable-rows-example stackline-data-table tbody tr');
    // Expanded detail rows are rows of the grid: they are counted and numbered in order.
    const expandable = await page.evaluate(() => {
      const table = document.querySelector('expandable-rows-example table');
      return {
        count: table.getAttribute('aria-rowcount'),
        rows: table.querySelectorAll('[role="row"]').length,
        details: table.querySelectorAll('tr.adtc-expanded-row').length,
        indexes: Array.from(table.querySelectorAll('tbody tr'), (row) => Number(row.getAttribute('aria-rowindex')))
      };
    });
    assert.ok(expandable.details > 0, 'the example expands rows by default');
    assert.equal(Number(expandable.count), expandable.rows);
    assert.deepEqual(expandable.indexes, Array.from({ length: expandable.rows - 1 }, (_, index) => index + 2));

    await openExample(page, 'Dark theme', 'dark', 'dark-example .adtc-pagination');
    // The rows-per-page label uses the same light text as the rest of the dark pager.
    assert.equal(await page.$eval('dark-example .adtc-pagination-size', (label) => getComputedStyle(label).color), 'rgb(176, 193, 216)');

    await openExample(page, 'Header groups', 'header-groups', 'header-groups-example stackline-data-table tbody tr');
    const readOrderSort = () => page.evaluate(() => {
      const header = document.querySelector('header-groups-example th[aria-sort]');
      return [
        header?.querySelector('.adtc-sort-button span')?.textContent?.trim(),
        header?.getAttribute('aria-sort'),
        header?.querySelector('.adtc-sort-indicator')?.textContent?.trim(),
        document.querySelector('header-groups-example tbody td')?.textContent?.trim()
      ];
    });
    // Nested columns sort both ways: the second click switches to descending.
    await page.click('header-groups-example th[aria-sort] button');
    await waitForText(page, 'header-groups-example th[aria-sort] .adtc-sort-indicator', 'Asc');
    await page.click('header-groups-example th[aria-sort] button');
    await waitForText(page, 'header-groups-example th[aria-sort] .adtc-sort-indicator', 'Desc');
    assert.deepEqual(await readOrderSort(), ['Order', 'descending', 'Desc', 'SO-1012']);

    // The HttpClient example loads its JSON fixture.
    await openExample(page, 'HttpClient data', 'http-client-data', 'http-client-data-example stackline-data-table tbody tr');
    assert.equal(await page.$eval('http-client-data-example .api-toolbar strong', (count) => count.textContent.trim()), '12');
    assert.equal(await page.$('http-client-data-example .error-message'), null);
  }

  assert.deepEqual(failures, []);
  console.log('Browser docs verified in desktop and mobile viewports with live table interactions.');
} finally {
  await browser.close();
  await server.close();
}
