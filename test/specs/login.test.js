const { assert } = require('chai')
const login_page = require('H:/My Project/webdriver-io/test/pageobjects/login.page')
const home_page = require('H:/My Project/webdriver-io/test/pageobjects/home.page')
const configData = require('H:/My Project/webdriver-io/config')
const constant = require('../../constant')

describe('login page feature test', () => {

    it('Verify login page title',  async () =>  {
        await  browser.url('/')
        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 10000 })
        const title = await browser.getTitle()
        console.log('login page title is: ', title)
        assert(constant.LOGIN_PAGE_TITLE,title,"page is not visible")
        await expect(browser).toHaveUrl('https://dev.login.litteraeducation.com/')
    })

    it('Login to the Admin portal', async () =>  {
        
        await login_page.inputUsername.setValue("chema@yopmail.com")
        await login_page.inputPassword.setValue('Asdqwe123$')
        await login_page.btnSubmit.click()
        const elem = await home_page.BtnAdminOption
        await elem.waitUntil(async function(){
            return await this.getText() === 'Admin Settings'
        },{
            timeout: 100000,
            timeoutMsg: 'element not able to display after the 10s'
        })
        expect(home_page.BtnAdminOption).toBeDisplayed()
    })

    it('logout from the admin portal', async() =>{

        await home_page.mainmenu.click()
        await home_page.logoutBtn.waitForExist({timeout:1000})
        await home_page.logoutBtn.click()
        await expect(browser).toHaveUrl('https://dev.login.litteraeducation.com/')
    })






})