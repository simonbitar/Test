const { Builder } = require('selenium-webdriver');
const  should = require('chai').should();
const LoginPage = require('../pages/LoginPage');

describe("Loging test",async function() {
    let driver;
    let login;
    let current;

    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build();
        login = new LoginPage(driver);
        await login.load();
    })

    this.afterEach(async function() {
        driver = driver.quit();
    })
   

    it("Login with valid username and password", async function() {
        await login.authentecate('simon', 'sssss');
        current = await login.successMessage();
        current.should.equal(true);
    })

    it("login with valid username and invalid passowrd", async function() {
        await login.authentecate('simon', 'invalid');
        current = await login.unsuccessMessage();
        current.should.equal(true);
    })

    it("login with invalid username and valid passowrd", async function() {
        await login.authentecate('invalid', 'sssss');
        current = await login.unsuccessMessage();
        current.should.equal(true);
    })
})

