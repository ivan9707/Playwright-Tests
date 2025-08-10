// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
 timeout: 30 *1000,
 reporter : 'html',
 expect : {
  timeout: 5000,
 },
 use: {
   
    browserName : 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 },
  },

 
 
});
module.exports = config
