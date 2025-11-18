// Playwright includes test assertions in the form of expect function. To make an assertion, call expect(value)
//  and choose a matcher that reflects the expectation. There are many generic matchers like toEqual, toContain, toBeTruthy that can be used to assert any conditions.

/*Hard Assertion

Definition: A hard assertion immediately fails the test if the assertion condition is not met.
Behavior: Execution stops at the point of failure; subsequent steps in the same test will not run.
Use Case: When the next steps depend on the current condition being true.


Soft Assertion

Definition: A soft assertion records the failure but allows the test to continue executing.
Behavior: Execution continues even if the assertion fails; all failures are reported at the end.
Use Case: When you want to validate multiple conditions in one test without stopping at the first failure.*/



//these are hard assertions
import { test, expect } from '@playwright/test';
test('AssertionsTest', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register?returnUrl');
    
    // 1)await expect(page).toHaveURL()	                    Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl');
    
    // 2)await expect(page).toHaveTitle()               	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3)await expect(locator).toBeVisible()	            Element is visible
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //4)await expect(locator).toBeEnabled()	                Control/Element is enabled
    //  await expect(locator).toBeDisabled()	            Element is disabled
    const searchStoreBox = await page.locator('#small-search-box-form');
    await expect(searchStoreBox).toBeEnabled();	

    //5)await expect(locator).toBeChecked()	                radio/Checkbox is checked

    //radio button
    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();      //select radio button
    await expect(maleRadioButton).toBeChecked();	

    //checkbox
    const newsletterCheckbox = await page.locator('.form-check-input');
    await expect(newsletterCheckbox).toBeChecked();	

    //6)await expect(locator).toHaveAttribute()	          Element has a DOM attribute
    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type','submit');	

    //7)await expect(locator).toHaveText()	               Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register'); // matches full text

    //8)await expect(locator).toContainText()	           Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Regi');   //partial text

    //9)await expect(locator).toHaveValue()	               Input has a value
    const emailInput = await page.locator('#Email');
    emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

    //10)await expect(locator).toHaveCount()	           List has exact number of children or list of elements has given length
    const options = await page.locator('select[id=customerCurrency] option');
    await expect(options).toHaveCount(2);


    });

    