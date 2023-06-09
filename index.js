const puppeteer =require('puppeteer');




(async () => {
  const browser = await puppeteer.launch(
    {
        headless: false,
    }
  );


 
  const page = await browser.newPage();

  await page.goto('https://www.daraz.com.bd/catalog/?spm=a2a0e.home.search.1.735212f77vUfLW&q=archer c54 router');

  // Set screen size
  // await page.setViewport({width: 1080, height: 1024});
  //set view port of the page to 100%
  await page.setViewport({width: 2000, height: 1000});

  const imageSrc = await page.$$eval('.img--VQr82 img', img => img.map(i => i.src));
  const title = await page.$$eval('.title--wFj93 a', a=>a.map(i=>i.textContent));
  const currency = await page.$$eval('.price--NVB62 .currency--GVKjl', span =>span.map(i=>i.textContent) );

  console.log("Image Sources: ",imageSrc);
  console.log('Title: ', title);
  console.log('Currency: ', currency);
     
 
 








  // Take screenshot
    // const title= await page.title();


    // console.log(title)


    // await page.click(".col-md-4 a")

    // await page.waitForSelector(".col-md-8")
    // await page.type("#username", "admin")

    // await page.type("#password", "123456")
     
    // await page.click(".btn-primary",{delay:5000})
  


  // await browser.close();
})();