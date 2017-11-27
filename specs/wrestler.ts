import { LoginPage } from '../pageobjects/Login.page'
import { WrestlerPage } from '../pageobjects/Wrestler.page'
import { MainPage } from '../pageobjects/Main.page'
import { Navigator } from '../pageobjects/objects/Navigator'
import { dataProvider } from '../test_data/dataProvider'

import * as path  from 'path'


describe('Wrestler CRUD', () => {

    let loginPage = new LoginPage()
    let wrestlerPage = new WrestlerPage()
    let navigator = new Navigator()
    let mainPage = new MainPage()
    let validUser = dataProvider.users.validUser
    let pathToPhoto = path.join(__dirname, '..', 'test_data','images','dwayne.jpg')


    beforeAll(() => {
        navigator.openLoginPage()
        loginPage.login(validUser)
    })

    beforeEach(() => {
        navigator.waitForMainPageOpened()
    })


    describe('Create, Read, Update tests', () => {
        beforeEach(() => {
            mainPage.openNewWrestlerTab()
            navigator.waitForWrestlerPageOpened()
        })

        afterEach(() => {
            navigator.closeCurrentActiveTab()
        })

        it('It is possible to create new wrestler', () => {
            wrestlerPage.setWrestlerFields(dataProvider.getWrestler())
            let creationData = wrestlerPage.getWrestlerFields()
            wrestlerPage.clickSaveButton()
            navigator.waitForWrestlerPageOpened()
            expect(navigator.currentActiveTab.getText()).toContain(creationData.lastName,
                'Provided during creation last name should be shown in created wrestler tab')
            expect(wrestlerPage.photoDiv.isVisible()).toBeTruthy('"Photo" area should be visible after wrestler creation')
            expect(wrestlerPage.docsDiv.isVisible()).toBeTruthy('"Documents" area should be visible after wrestler creation')
        })

        it('Wrestler data before and after creation are equal', () => {
            wrestlerPage.setWrestlerFields(dataProvider.getWrestler())
            let creationData = wrestlerPage.getWrestlerFields()
            wrestlerPage.clickSaveButton()
            navigator.waitForWrestlerPageOpened()
            let visibleData = wrestlerPage.getWrestlerFields()
            expect(creationData).toEqual(visibleData, 'Wrestler data after creation should be equal to data provided during creation')
        })

        it('It is possible to change Wrestler data after the wrestler is created', () => {
            wrestlerPage.setWrestlerFields(dataProvider.getWrestler())
            wrestlerPage.clickSaveButton()
            navigator.waitForWrestlerPageOpened()
            wrestlerPage.setWrestlerFields(dataProvider.getWrestler())
            let visibleData = wrestlerPage.getWrestlerFields()
            wrestlerPage.clickSaveButton()
            navigator.waitForWrestlerPageOpened()
            let updatedData = wrestlerPage.getWrestlerFields()
            expect(visibleData).toEqual(updatedData, 'Wrestler data after update should be changed accordingly')
        })
    })

    it('It is possible to delete existing wrestler', () => {
        let firstWrestlerNumberBeforeDeletion = mainPage.getFirstWrestler().Num
        mainPage.openWrestlerByIndex(0)
        navigator.waitForWrestlerPageOpened()
        wrestlerPage.clickCancelButton()
        navigator.acceptModal()
        navigator.waitForMainPageOpened()
        let firstWrestlerNumberAfterDeletion = mainPage.getFirstWrestler().Num
        expect(firstWrestlerNumberBeforeDeletion).not.toEqual(firstWrestlerNumberAfterDeletion,
            'First Wrestler should be deleted from wrestlers list on main page')
    })

    it('Upload wrestler photo', ()=>{
        mainPage.openWrestlerByIndex(1) // not 0 because of lags in the system itself(prev it deletes wrestler - impossible t o attach photo)
        navigator.waitForWrestlerPageOpened()
        let inputElem = browser.$('div.col-sm-4[ng-hide="wr.new"] input[type="file"]')
        inputElem.chooseFile(pathToPhoto)
        // browser.chooseFile('div.col-sm-4[ng-hide="wr.new"] input[type="file"]', pathToPhoto) // this works
        let photo = browser.$('div.col-sm-4[ng-hide="wr.new"] img.center-block')
        browser.pause(4000)
        expect(photo.isVisible()).toBeTruthy('Photo is not visible')
    })
})