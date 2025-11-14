const {test, expect} = require('@playwright/test')
test('Locators', async ({page})=>{

 await page.goto('https://mcstaging.larsonjuhl.co.uk/');

 //click on login button
//  await page.getByRole("link",{name : "Login"}).click()
await page.locator('.login-top-header').click()
await page.locator("#email").fill("nidhisingh@sourcemash.com")
await page.locator("#password").fill("Test@123")
await page.locator("#send2").click()
await page.waitForTimeout(5000);
 
 //assertion to check if element is visible 
//  await expect(logoutlink).toBeVisible();
//  await page.close();

})