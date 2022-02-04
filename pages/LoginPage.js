const USERNAME_INPUT = {xpath: '/html/body/div/div/div/div[2]/div/form/div[1]/input'};
const PASSWORD_INPUT = {xpath: '/html/body/div/div/div/div[2]/div/form/div[2]/input'};
const SUBMIT_BUTTON = {xpath: '/html/body/div/div/div/div[2]/div/button'};
const SUCCESS = {xpath: '/html/body/div/div/div/div[1]/h3'};
const UNSUCCESS = {xpath: '/html/body/div/div/div/div[2]/div/div'};

class LoginPage {

    constructor(driver) {
         this.driver = driver;
    }

    async load() {
        await this.driver.get('http://localhost:4000/');
    }

    async authentecate(username, password) {
            await this.driver.findElement(USERNAME_INPUT).sendKeys(username);
            await this.driver.findElement(PASSWORD_INPUT).sendKeys(password);
            await this.driver.findElement(SUBMIT_BUTTON).click();
    }

    async successMessage() {
        return await this.driver.findElement(SUCCESS).isDisplayed();
    }

    async unsuccessMessage() {
        return await this.driver.findElement(UNSUCCESS).isDisplayed();
    }
}

module.exports = LoginPage;


