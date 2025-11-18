import { test, expect } from '@playwright/test';
test('handle inputbox', async ({ page }) => {

    await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php');
    //multiple ways to select option from the dropdown
    // await page.locator("#nationality").selectOption({label:'Afghan'});  //   using label
    // await page.locator("#nationality").selectOption('Afghan'); //alternate way for above step    passing visible text
    //await page.locator("#nationality").selectOption({index:5});  //we need to count each element like afgan-0 , uk-2 ,austraila-3 from dev tools.using index we can select dropdown
    // await page.locator("#nationality").selectOption({value:'afghan'}); //passing {value} 
    // await page.selectOption("#nationality",'Indian');  // by text -calling page fixture directly

    //Asserions that can be applied on drop down
    //first counting how many items are there in drop down list.
    // const optionCount = await page.locator('#nationality option').count();
    // console.log(`Number of options: ${optionCount}`);

    //1)check number of options in dropdown  -apporach 1
    // const options =await page.locator('#nationality option'); //return all webElement but they are not in array format
    // await expect(options).toHaveCount(193);
 
    //2)check number of options in dropdown  -apporach 2  return elements in array format
    // const options2 = await page.$$("#nationality option");
    // console.log("Number of options:",options2.length);

    
    // const options2 = await page.$$('#nationality option');
    // await expect(options2.length).toBe(193);
    
    //3)check presence of some value in the drop down - Approach1 
    // const content = await page.locator("#nationality").textContent();
    // await expect(content.includes('Indian')).toBeTruthy();  

    //4)check presence of some value in the drop down - Approach 2 using loops
    /*const options2 = await page.$$("#nationality option");
    let status = false;
    for(const option of options2)
    {
        //console.log(await option.textContent())  //printing all element of drop-down
        let value = await option.textContent()
        if(value.includes('Chinese')){
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();*/


    //5)select option from dropdown using loop
    const options2 = await page.$$("#nationality option");
    for(const option of options2)
    {
        let value = await option.textContent()
        if(value.includes('Chinese')){
            await page.selectOption("#nationality",value);
            break;
        }
    }
    await page.waitForTimeout(5000);

       });