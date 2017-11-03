import { LoginPage } from '../pageobjects/Login.page'
import { MainPage } from '../pageobjects/Main.page'
import { WrestlerPage } from '../pageobjects/Wrestler.page'
import { dataProvider } from '../test_data/dataProvider';


describe('Wrestler CRUD', ()=>{
    
    let loginPage = new LoginPage()
    let mainPage = new MainPage() 
    let wrestlerPage = new WrestlerPage()
    let validUser = dataProvider.users.validUser
    let wrestler = dataProvider.wrestler
    
    beforeAll(()=>{
        loginPage.open()
        loginPage.login(validUser)
    })
    
    it('"New Wrestler" tab is opened ', ()=>{
        mainPage.openNewWrestlerTab()
        wrestlerPage.fillRequiredFields(wrestler)
        browser.pause(3000)
    })

    // it('Wrestler page is opened after wrestler creation', ()=>{
    //     wrestlerPage.openForCreation()
    //     wrestlerPage.createNewWrestlerWithRandomData()
    //     // createNewWrestler(wrestler) - it is random anyway
    //     expect(WrestlerPage.isOpened()).toBeTruthy('"Wrestler info" form should be visible and no loading indicator shown')
    //     expect(wrestlerPage.wrestler.photoAreaHeaderText).toContain('Photo', '"Photo" header should be visible on equal area')
    //     expect(wrestlerPage.wrestler.docsAreaHeaderText).toContain('Documents', '"Documents" header should be visible on equal area')
    // })

    // it('Created wrestler data should match to inserted data during creation', ()=>{
    //     wrestlerPage.openForCreation()
    //     wrestlerPage.fillRequiredFieldsRandomly()
    //     let dataBeforeCreation = JSON.stringify(wrestlerPage.requiredFieldsValues)
    //     wrestlerPage.clickSuccess()
    //     browser.waitUntil(()=>{return WrestlerPage.isOpened()}, 5000, '"Wrestler info" form should be visible and no loading indicator shown')
    //     let dataAfterCreateion = JSON.stringify(wrestlerPage.requiredFieldsValues)
    //     expect(dataBeforeCreation === dataAfterCreateion).toBeTruthy(
    //                                                         'Data of created wrestler should match to inserted data during wrestler creation')
    // })

    // xit('')

})