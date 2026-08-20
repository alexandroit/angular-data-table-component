import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs', 'angular-22');
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

    assert.match(initial.body, /@stackline\/angular-data-table-component 22\.1\.0/);
    assert.match(initial.body, /Angular 22\.1\.3 runtime/);
    assert.equal(initial.navItems, 40);
    assert.ok(initial.tableRows >= 5);
    assert.equal(initial.overflow, false, `${viewport.name} page has horizontal overflow.`);

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
  }

  assert.deepEqual(failures, []);
  console.log('Browser docs verified in desktop and mobile viewports with live table interactions.');
} finally {
  await browser.close();
  await server.close();
}
