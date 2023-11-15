const { expect } = require("chai");
const { clickElement, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Ticket booking test", () => {
  test("Book an affordable ticket'", async () => {
    await clickElement(page, "body > nav > a:nth-child(4)");
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)");
    await clickElement(page, "body > main > section > button");
    await page.waitForSelector("body > main > section > header > h2");
    const actual = await getText(page, "body > main > section > div > button");
    expect(actual).contain("Получить код бронирования");
  });

  test("Book three free tickets", async () => {
    await clickElement(page, "body > nav > a:nth-child(4)");
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(3)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
    await clickElement(page, "body > main > section > button");
    await page.waitForSelector("body > main > section > div > button");
    await clickElement(page, "body > main > section > div > button");
    const actual = await getText(page, "body > main > section > header > h2");
    expect(actual).contain("Электронный билет");
  });
  
  test("Book a ticket for the purchased seat", async () => {
    await clickElement(page, "body > nav > a:nth-child(4)");
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
    expect(String(await page.$eval("button", (button) => { return button.disabled;
    })
   )
  ).contain("true");
 });
});