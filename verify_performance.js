const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.text().includes('[Bolt Profiler]')) {
      console.log(msg.text());
    }
  });

  await page.goto('file://' + process.cwd() + '/index.html');

  // Wait for enough samples (100 samples * ~16ms = ~1.6s)
  await page.waitForTimeout(3000);

  await browser.close();
})();
