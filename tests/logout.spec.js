import { test, expect } from '@playwright/test';
//file is creadted using the folowing the command -  npx playwright codegen -o tests/logout.spec.js
test('test', async ({ page }) => {
  await page.goto('https://mcstaging.larsonjuhl.co.uk/');
  await page.getByRole('link', { name: 'Login' }).click();
  // await page.getByRole('textbox', { name: 'E-mail address *' }).click();
  await page.getByRole('textbox', { name: 'E-mail address *' }).fill('nidhisingh@sourcemash.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '› Logout' }).click();
  await page.goto('https://mcstaging.larsonjuhl.co.uk/');
});

//npx playwright codegen --target javascript
//npx playwright codegen --browser chromium
//npx playwright codegen --device "iphone 13"
//npx playwright codegen --device "iphone13"      it will print all sipporte device in which we can do recording
//npx playwright codegen --viewport-size "1280,720"
