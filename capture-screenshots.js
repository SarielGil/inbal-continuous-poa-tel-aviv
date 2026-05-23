const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const VIEWPORTS = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 }
};

const URL = 'https://inbalhanasab.co.il/';
const OUTPUT_DIR = path.join(__dirname, 'output', 'playwright');

async function captureScreenshots() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();

  for (const [device, viewport] of Object.entries(VIEWPORTS)) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    console.log(`Capturing ${device} (${viewport.width}x${viewport.height})...`);

    try {
      await page.goto(URL, { waitUntil: 'networkidle' });
      
      // Full page screenshot
      const screenshotPath = path.join(OUTPUT_DIR, `${device}-full-page.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✓ Saved: ${screenshotPath}`);

      // Viewport screenshot
      const viewportPath = path.join(OUTPUT_DIR, `${device}-viewport.png`);
      await page.screenshot({ path: viewportPath });
      console.log(`✓ Saved: ${viewportPath}`);

    } catch (error) {
      console.error(`Error capturing ${device}:`, error.message);
    } finally {
      await context.close();
    }
  }

  await browser.close();
  console.log('\nScreenshot capture complete!');
}

captureScreenshots().catch(console.error);
