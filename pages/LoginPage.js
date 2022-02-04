const BasePage = require('./BasePage');

const USERNAME_INPUT = {xpath: '/html/body/div/div/div/div[2]/div/form/div[1]/input'};
const PASSWORD_INPUT = {xpath: '/html/body/div/div/div/div[2]/div/form/div[2]/input'};
const SUBMIT_BUTTON = {xpath: '/html/body/div/div/div/div[2]/div/button'};
const SUCCESS = {id: 'table_page'};
const UNSUCCESS = {xpath: '/html/body/div/div/div/div[2]/div/div'};
const LOGIN_PAGE = {id: 'main_page'};

class LoginPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

    async load() {
        await this.visit('http://localhost:4000/');
        if (await !this.isDisplayed(LOGIN_PAGE)) {
            throw new Error("Login page is not loaded")
        }
    }

    async authentecate(username, password) {
            await this.type(USERNAME_INPUT, username);
            await this.type(PASSWORD_INPUT, password);
            await this.click(SUBMIT_BUTTON);
    }

    async successMessage() {
        return await this.isDisplayed(SUCCESS);
    }

    async unsuccessMessage() {
        return await this.isDisplayed(UNSUCCESS);
    }
}

module.exports = LoginPage;


