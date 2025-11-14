 //code to print all the link present on a page.
const {test, expect} = require('@playwright/test')
test('LocatingMultipleElements', async ({page})=>{

 await page.goto('https://www.demoblaze.com/index.html');

 const links = await page.$$('a');
 
 for(const link of links)
  {
    //extracting text value from each link 
    const linktext= await link.textContent();
    console.log(linktext);
  }

 //capturing all product present on page
  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
  const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
  for(const product of products)
  {
    const productName = await product.textContent();
    console.log(productName);
  }

 })
