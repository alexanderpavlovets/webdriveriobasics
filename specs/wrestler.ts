import { LoginPage } from '../pageobjects/Login.page'
import { MainPage } from '../pageobjects/Main.page'
import { WrestlerPage } from '../pageobjects/Wrestler.page'
import { Navigator } from '../pageobjects/objects/Navigator'
import { dataProvider } from '../test_data/dataProvider';


describe('Wrestler CRUD', ()=>{
    
    let loginPage = new LoginPage()
    let mainPage = new MainPage() 
    let wrestlerPage = new WrestlerPage()
    let navigator = new Navigator()
    let validUser = dataProvider.users.validUser
    let providedDuringCreationWrestlerData
    let displayedDataOfCreatedWrestler
    let displayedDataOfUpdatedWrestler
    
    beforeAll(()=>{
        navigator.openLoginPage()
        loginPage.login(validUser)
    })

    beforeEach(()=>{
        navigator.openMainPage()
        navigator.openNewWrestlerTab()
    })

    afterEach(()=>{
        navigator.closeCurrentActiveTab()
    })
    
    it('"New Wrestler" tab opens properly', ()=>{
        expect(Navigator.isWrestlerPageOpened()).toBeTruthy('"Wrestler info" from should be visible OR loading indicator should be hidden')
    })

    it('It is possible to create new wrestler', () => {
        providedDuringCreationWrestlerData = wrestlerPage.createNewWrestler(dataProvider.wrestler)
        // console.log(providedDuringCreationWrestlerData)
        expect(navigator.currentActiveTab.getText()).toContain(providedDuringCreationWrestlerData.lastName,
            'Provided during creation last name should be shown in created wrestler tab')
        expect(wrestlerPage.photoDiv.isVisible()).toBeTruthy('"Photo" area should be visible after wrestler creation')
        expect(wrestlerPage.docsDiv.isVisible()).toBeTruthy('"Documents" area should be visible after wrestler creation')
    })

    it('Wrestler data before and after creation are equal', ()=>{
        providedDuringCreationWrestlerData = wrestlerPage.createNewWrestler(dataProvider.wrestler)
        displayedDataOfCreatedWrestler = wrestlerPage.fieldsCurrentValues
        // console.log(providedDuringCreationWrestlerData)
        // console.log(displayedDataOfCreatedWrestler)
        expect(providedDuringCreationWrestlerData).toEqual(displayedDataOfCreatedWrestler, 
            'Wrestler data after creation should be equal to data provided during creation')
    })

    it('It is possible to change Wrestler data after the wrestler is created', ()=>{
        wrestlerPage.createNewWrestler(dataProvider.wrestler)
        wrestlerPage.fillAllWrestlerFields(dataProvider.wrestler)
        displayedDataOfCreatedWrestler = wrestlerPage.fieldsCurrentValues
        wrestlerPage.clickSuccess()
        displayedDataOfUpdatedWrestler = wrestlerPage.fieldsCurrentValues
        expect(displayedDataOfCreatedWrestler).toEqual(displayedDataOfUpdatedWrestler, 
            'wrestler data after update should be changed properly')
    })
})