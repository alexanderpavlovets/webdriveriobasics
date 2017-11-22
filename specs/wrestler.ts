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

    afterEach(()=>{
        navigator.closeCurrentActiveTab()
    })
    

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
    })

    it('Wrestler data before and after creation are equal', ()=>{
        navigator.openNewWrestlerTab()
        wrestlerPage.setWrestlerFields(makeNewWrestler())
        creationData = wrestlerPage.getWrestlerFields()
        wrestlerPage.clickSaveButton()
        navigator.waitForWrestlerPageOpened()
        visibleData = wrestlerPage.getWrestlerFields()
        expect(creationData).toEqual(visibleData, 'Wrestler data after creation should be equal to data provided during creation')
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
    })

    fit('It is possible to delete existing wrestler', ()=>{
        navigator.openWrestlerByIndex(0)
        browser.pause(2000)
        navigator.closeCurrentActiveTab()
        browser.pause(2000)
        // continue from here - rewrite close current active tab method of Navigator - it brekes current test - because of  after each 
    })
})