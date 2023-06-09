const puppeteer =require('puppeteer');


async () => {
    const browser = await puppeteer.launch(
      {
          headless: false,
      }
    );
  
  
   
    const page = await browser.newPage();
  
    await page.goto('https://www.google.com/search?q=Find the top 5 shoe brands in the market');
  
    // Set screen size
    // await page.setViewport({width: 1080, height: 1024});
    //set view port of the page to 100%
    await page.setViewport({width: 2000, height: 1000});

    const listItems = await page.$$eval('.TrT0Xe', items => {
        return items.map(item => item.textContent.trim());
      });

      console.log(listItems);

    const element=await page.$$eval(".MjjYud .yuRUbf a", a=>a.map(i=>i.href));

    console.log(element);

























    // await browser.close();
}








