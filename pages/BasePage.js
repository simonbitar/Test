class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async visit(url) {
        await this.driver.get(url);
    }

    find(locator) {
        return this.driver.findElement(locator);
    }

    async click(locator) {
        await this.driver.findElement(locator).click();
    }

    async type(locator, inputText) {
        return this.driver.findElement(locator).sendKeys(inputText);
    }

    async isDisplayed(locator) {
        try {
            return await this.find(locator).isDisplayed();
        } catch(error) {
            return false;
        }
    }
}

module.exports = BasePage;