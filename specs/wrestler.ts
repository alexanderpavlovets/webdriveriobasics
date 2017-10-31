import { MainPage } from '../pageobjects/Main.page' // importing MainPage class, for creating instance of the page
import { WrestlerPage } from '../pageobjects/Wrestler.page' // importing wrestlerPage class 


describe('Wrestler CRUD', ()=>{

    let mainPage = new MainPage() // Creating instance of MainPage class
    let wrestlerPage = new WrestlerPage() // Creating instance of wrestlerPage class

    fit('"New Wrestler" tab is opened properly', ()=>{
        mainPage.open()
        expect(mainPage.openFormToCreateWrestler()).toBeTruthy('"New Wrestler" tab should be added and have equal title')
        expect(WrestlerPage.isOpened()).toBeTruthy('"Wrestler info" form should be visible and no loading indicator shown')
    })

    fit('"Success" button becomes active after all required fields are filled', ()=>{
        wrestlerPage.openForCreation()
        wrestlerPage.fillRequiredFieldsRandomly()
        expect(wrestlerPage.wrestler.successButton.isEnabled()).toBeTruthy('"V" button shoud be active, after all required fields are filled')
    })

    fit('Wrestler page is opened after wrestler creation', ()=>{
        wrestlerPage.openForCreation()
        wrestlerPage.createNewWrestlerWithRandomData()
        expect(WrestlerPage.isOpened()).toBeTruthy('"Wrestler info" form should be visible and no loading indicator shown')
        expect(wrestlerPage.wrestler.photoAreaHeaderText).toContain('Photo', '"Photo" area should be visible')
        expect(wrestlerPage.wrestler.docsAreaHeaderText).toContain('Documents', '"Documents" area should be visible')
    })

    xit('')

})