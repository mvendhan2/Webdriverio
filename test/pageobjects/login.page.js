
const constant = require('H:/My Project/webdriver-io/constant')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage{
    /**test/pageobjects/login.page.js
     * define selectors using getter methods
     */
    get inputUsername () {
        return  $('//input[@id="email"]');
    }

    get inputPassword () {
        return  $('//input[@id="password"]');
    }

    get btnSubmit () {
        return  $('button[type="submit"]');
    }
    

}

module.exports = new LoginPage();
