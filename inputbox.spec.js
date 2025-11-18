import { test, expect } from '@playwright/test';
test('handle inputbox', async ({ page }) => {

     await page.goto('https://demoqa.com/automation-practice-form');

    //  inputbox - first name
    await expect( page.locator('#firstName')).toBeVisible();
    await expect( page.locator('#firstName')).toBeEmpty();
    await expect( page.locator('#firstName')).toBeEditable();
    await expect( page.locator('#firstName')).toBeEnabled();
    await page.locator('#firstName').fill("john");



    // inputbox - radiobutton
    await page.locator('label[for="gender-radio-1"]').click();
    //  page.locator('#gender-radio-1').check();   //await page.check('#gender-radio-1')   ------this line giving error reason explained at end
    await expect(await page.locator('#gender-radio-1')).toBeChecked();
    await expect(await page.locator('#gender-radio-1').isChecked()).toBeTruthy();
    await expect(await page.locator('#gender-radio-2').isChecked()).toBeFalsy();      //checking if female is checked or not - it should not be checked
     
    //explaintion why check is giving error

    /* The check() method is failing because the radio input is hidden behind a label, and Playwright cannot click it directly. The call log shows:
    <label ...> intercepts pointer events

    This means the input is styled as invisible (common in custom forms), and the label handles the click. Playwright’s .check() tries to click the input, but the label blocks it.

    ✅ Why this happens

    check() works only if the element is visible and clickable.
    In demoqa.com form, the radio inputs are hidden, and labels are used for interaction.
    Click the label instead of the hidden input:
    await page.locator('label[for="gender-radio-1"]').click();
    await expect(page.locator('#gender-radio-1')).toBeChecked();
 */





    //inputbox - checkbox
    //single checkbox
    await page.locator("//label[@for='hobbies-checkbox-1']").click();        //need to use label beacuse chekcbox is hidden label is clickable
    await expect(page.locator("//input[@id='hobbies-checkbox-1']")).toBeChecked();
    expect(await page.locator('//input[@id="hobbies-checkbox-1"]').isChecked()).toBeTruthy();
    expect(await page.locator('//input[@id="hobbies-checkbox-2"]').isChecked()).toBeFalsy();   //for unchecked checkbox

    //Handling multiple checkboxes
    const checkboxesLoctors = ["//label[@for='hobbies-checkbox-1']",
                        "//label[@for='hobbies-checkbox-3']"
    ];

    for(const locator of checkboxesLoctors){          //select multiple  checkboxes
           await page.locator(locator).check();
    }

    for(const locator of checkboxesLoctors){          //Unselect multiple  checkboxes
        if(await page.locator(locator).isChecked())   //if checkbox is selected then only unselect it
       {
         await page.locator(locator).uncheck();
       }
    }

    });





