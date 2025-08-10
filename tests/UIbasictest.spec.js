  const {test, expect} = require('@playwright/test');
 
 test('Simple Page Test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  const userName = page.locator('#username');
  const signIn = page.locator('#signInBtn');

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await userName.fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");
  await signIn.click();
});
    
    
    
  



   