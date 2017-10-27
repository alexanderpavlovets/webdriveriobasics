import { MainPage } from '../pageobjects/Main.page' // importing MainPage class, for creating instance of the page
import { NewWrestlerPage } from '../pageobjects/NewWrestler.page'


describe('Wrestler CRUD test', ()=>{

    let mainPage = new MainPage() // Creating instance of MainPage class

    it('"New Wrestler tab is opened properly"', ()=>{
        mainPage.open()
        expect(mainPage.openFormToCreateWrestler()).toBeTruthy('"New Wrestler" tab should be added and have equal title')
        expect(NewWrestlerPage.isOpened()).toBeTruthy('"Wrestler info" form should be visible and have equal title')
    })

    fit('test', ()=>{
        mainPage.open()
        mainPage.openFormToCreateWrestler()
        browser.$('fg-input[value="wr.lname"] input').setValue('Last name inserted !!!')
        browser.pause(3000)
    })

})