const login_page = require('H:/My Project/webdriver-io/test/pageobjects/login.page')
const home_page = require('H:/My Project/webdriver-io/test/pageobjects/home.page')
const constant = require('../../constant')
const path = require('path')

describe('Add program from the Admin', () => {

    it('Login to the admin portal', async() => {
        
        await  browser.url('/')
        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 10000 })
        await expect(browser).toHaveUrl('https://dev.login.litteraeducation.com/')

        //login to the Admin portal
        
        await login_page.inputUsername.setValue("chema@yopmail.com")
        await login_page.inputPassword.setValue('Asdqwe123$')
        await login_page.btnSubmit.click()

    })

    it('Add new program', async() => {

        //creating the new program
        const elem = await home_page.BtnAdminOption
        await elem.waitUntil(async function(){
            return await this.getText() === 'Admin Settings'
        },{
            timeout: 100000,
            timeoutMsg: 'element not able to display after the 10s'
        })
        
        await home_page.BtnAddProgram.click()
        await (await home_page.Title_AddProgram).waitUntil(async function(){
            return await this.getText() === 'Add New Program'            
        },{
            timeout: 10000,
            timeoutMsg: 'element is not displayed'
        })

        await home_page.Program_name.setValue('Testing_mullai')
        await home_page.Program_location.waitForDisplayed({timeout:56000})
        await home_page.Program_location.click()
        if(constant.LOCATION_OF_SESSION === 'Online'){
        }else{
            await browser.keys('Down arrow')
            await browser.keys("\uE007");
        }

        await home_page.tutorSelector.setValue('English - EQA1')
        await browser.keys("\uE007");
        await home_page.selectCurriculum.click()

        // await home_page.uploadCSVFile.click()
        const filepath = path.join(__dirname,'../Documents/Student_import.csv')
        console.log(filepath)
        const remoteFilePath = await browser.uploadFile(filepath);
        await browser.pause(10000)
        await $('//input[@type="file"]').setValue(remoteFilePath);
        console.log('passing the filepath')
        await home_page.btnupload.click()

    })

})

















