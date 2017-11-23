import { LoginPage } from '../pageobjects/Login.page'
import { WrestlerPage } from '../pageobjects/Wrestler.page'
import { MainPage } from '../pageobjects/Main.page'
import { Navigator } from '../pageobjects/objects/Navigator'
import { dataProvider } from '../test_data/dataProvider'


describe('Wrestler CRUD', ()=>{
    
    let loginPage = new LoginPage()
    let wrestlerPage = new WrestlerPage()
    let navigator = new Navigator()
    let mainPage = new MainPage()
    let validUser = dataProvider.users.validUser
    function makeNewWrestler() { return dataProvider.getWrestler() }
    // ? variables for tests - declare here or in tests
    // the last one test - has declaration in it - seems more logcal, than vars would be declaired here
    let creationData
    let visibleData
    let updatedData
    
    beforeAll(()=>{
        navigator.openLoginPage()
        loginPage.login(validUser)
    })

    beforeEach(()=>{
        navigator.waitForMainPageOpened()
    })

    // afterEach(()=>{
    //     navigator.closeCurrentActiveTab()
    // })
    // ? ask if it is acceptable to navigator.closeCurrentActiveTab in 3 tests except last one 
    

    it('It is possible to create new wrestler', () => {
        navigator.openNewWrestlerTab()
        wrestlerPage.setWrestlerFields(makeNewWrestler())
        creationData = wrestlerPage.getWrestlerFields()
        wrestlerPage.clickSaveButton()
        navigator.waitForWrestlerPageOpened()
        expect(navigator.currentActiveTab.getText()).toContain(creationData.lastName,
             'Provided during creation last name should be shown in created wrestler tab')
        expect(wrestlerPage.photoDiv.isVisible()).toBeTruthy('"Photo" area should be visible after wrestler creation')
        expect(wrestlerPage.docsDiv.isVisible()).toBeTruthy('"Documents" area should be visible after wrestler creation')
        navigator.closeCurrentActiveTab()
    })

    it('Wrestler data before and after creation are equal', ()=>{
        navigator.openNewWrestlerTab()
        wrestlerPage.setWrestlerFields(makeNewWrestler())
        creationData = wrestlerPage.getWrestlerFields()
        wrestlerPage.clickSaveButton()
        navigator.waitForWrestlerPageOpened()
        visibleData = wrestlerPage.getWrestlerFields()
        expect(creationData).toEqual(visibleData, 'Wrestler data after creation should be equal to data provided during creation')
        navigator.closeCurrentActiveTab()
    })

    it('It is possible to change Wrestler data after the wrestler is created', ()=>{
        navigator.openNewWrestlerTab()
        wrestlerPage.setWrestlerFields(makeNewWrestler())
        wrestlerPage.clickSaveButton()
        navigator.waitForWrestlerPageOpened()
        wrestlerPage.setWrestlerFields(makeNewWrestler())
        visibleData = wrestlerPage.getWrestlerFields()
        wrestlerPage.clickSaveButton()
        navigator.waitForWrestlerPageOpened()
        updatedData = wrestlerPage.getWrestlerFields()
        expect(visibleData).toEqual(updatedData, 'Wrestler data after update should be changed accordingly')
        navigator.closeCurrentActiveTab()
    })

    fit('It is possible to delete existing wrestler', ()=>{
        let firstWrestlerNumberBeforeDeletion = mainPage.getFirstWrestler().Num
        navigator.openWrestlerByIndex(0)
        navigator.waitForWrestlerPageOpened()
        wrestlerPage.deleteWrestler()
        navigator.waitForMainPageOpened()
        let firstWrestlerNumberAfterDeletion = mainPage.getFirstWrestler().Num
        expect(firstWrestlerNumberBeforeDeletion).not.toEqual(firstWrestlerNumberAfterDeletion, 
            'First Wrestler should be deleted from wrestlers list on main page')
    })
})