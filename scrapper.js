//File to contain Amazon webpage scrapper
//window.location.href to grab current url

const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="productTitle"]/text()');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log(rawTxt);

    browser.close();
}

// scrapeProduct(window.location.href);
scrapeProduct("https://www.amazon.com/MATBEBY-Mattress-Breathable-Stretches-Protector/dp/B08KNZL6BB/ref=sr_1_5?crid=21QIA02SPE4JQ&keywords=mattress%2Btopper&qid=1677813441&sprefix=%2Caps%2C174&sr=8-5&th=1");
