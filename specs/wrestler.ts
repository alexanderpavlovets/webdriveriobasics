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
    let providedDuringCreationWrestlerData
    let displayedDataOfCreatedWrestler
    
    beforeAll(()=>{
        loginPage.open()
        loginPage.login(validUser)
    })
    
    fit('"New Wrestler" tab opens properly', ()=>{
        mainPage.openNewWrestlerTab()
        expect(WrestlerPage.isOpened()).toBeTruthy('"Wrestler info" from should be visible OR loading indicator should be hidden')
    })

    fit('It is possible to create new wrestler', () => {
        mainPage.open()
        browser.pause(2000)
        mainPage.openNewWrestlerTab()
        browser.pause(2000)
        console.log('before the setValue')
        browser.$('form[name="fWrestler"] fg-input[value="wr.fname"] input').setValue(123333333)
        console.log('after setValue')
        browser.pause(2000)
        providedDuringCreationWrestlerData = wrestlerPage.createNewWrestler(wrestler)
        expect(mainPage.currentActiveTab.getText()).toContain(providedDuringCreationWrestlerData.lastName,
            'Provided during creation last name should be shown in created wrestler tab')
        expect(wrestlerPage.photoDiv.isVisible()).toBeTruthy('"Photo" area should be visible after wrestler creation')
        expect(wrestlerPage.docsDiv.isVisible()).toBeTruthy('"Documents" area should be visible after wrestler creation')
    })

    xit('Wrestler data before and after creation are equal', ()=>{
        mainPage.open()
        mainPage.openNewWrestlerTab()
        // browser.waitUntil(()=>{return WrestlerPage.isOpened()}, 2000)
        providedDuringCreationWrestlerData = JSON.stringify(wrestlerPage.createNewWrestler(wrestler))
        displayedDataOfCreatedWrestler = JSON.stringify(wrestlerPage.fieldsCurrentValues)
        expect(providedDuringCreationWrestlerData === displayedDataOfCreatedWrestler).toBeTruthy()
    })
})