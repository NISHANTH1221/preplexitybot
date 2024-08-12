import {By, Builder, Browser,until, Key} from "selenium-webdriver";

const searchForTopic = async (topic) => {

  let searchQuery = topic;

  let driver;

  try {

    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.google.com');

    // Find the search box using its name attribute
    let searchBox = await driver.findElement(By.name('q'));

    // Type the search query
    await searchBox.sendKeys(`${searchQuery}`,Key.RETURN);

    await driver.wait(until.elementLocated(By.id('search')), 10000);

    // Find the "News" tab
    let newsTab = await driver.findElement(By.linkText("News"));
    
    // Click the "News" tab
    await newsTab.click();

    let firstNewsLink = await driver.findElement(By.className("WlydOe"))

    await firstNewsLink.click()
    
    //Generally all the will be in p tags so elements will store all the p tags and we will extract 
    let finalText="";

    let elements = await driver.findElements(By.css('p'));

    for(let e of elements) {
      finalText+= await e.getText()
    }
    return finalText

  } catch (e) {

    console.log(e)

  } finally {

    await driver.quit();

  }
}

export default searchForTopic;