const constant = require("../../constant")

class HomePage {

    get mainmenu(){
        return  $('//span[@class="chakra-button__icon css-1oeb2oe"]/*')
    }

    get logoutBtn(){
        return  $('#menuitem-5')
    }

    get BtnAdminOption(){
        return $('//p[@data-testid="Admin Settings"]')
    }

    get BtnAddProgram(){
        return $('//button[contains(text(),"Add Program")]')
    }

    get Title_AddProgram(){
        return $('//h2')
    }

    get Program_name(){
        return $('#name')
    }

    get Program_location(){
        return $('//div[@data-testid="msc-sessionLocation"]/*')
    }

    get Select_subject(){
        return $('//*[@id="subjects"]/div[1]')
    }

    get tutorSelector(){
        return $('//input[@id="react-select-4-input"]')
    }

    get selectCurriculum(){
        return $('//div[contains(text(),"None")]')
    }

    get uploadCSVFile(){
        return $('//div[@data-testid="student-selection-preference-grid"]/div[2]')
    }

    get btnupload(){
        return $('(//button[@type="button"])[9]')
    }
}

module.exports = new HomePage();