import { LoginPage } from '../pageobjects/Login.page'
import { WrestlerPage } from '../pageobjects/Wrestler.page'
import { MainPage } from '../pageobjects/Main.page'
import { WrestlersTable } from '../pageobjects/objects/WrestlersTable';
import { Navigator } from '../pageobjects/objects/Navigator'
import { Uploader } from '../pageobjects/objects/Uploader'
import { dataProvider } from '../test_data/dataProvider'




describe('Wrestler CRUD', () => {

    let loginPage = new LoginPage()
    let wrestlerPage = new WrestlerPage()
    let mainPage = new MainPage()
    let wrestlersTable = new WrestlersTable()
    let navigator = new Navigator()
    let uploader = new Uploader()
    let validUser = dataProvider.users.validUser

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
            expect(wrestlerPage.photoAreaDiv.isVisible()).toBeTruthy('"Photo" area should be visible after wrestler creation')
            expect(wrestlerPage.docsAreaDiv.isVisible()).toBeTruthy('"Documents" area should be visible after wrestler creation')
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
        let firstWrestlerNumberBeforeDeletion = wrestlersTable.getFirstWrestlerObj().Num
        wrestlersTable.openWrestlerByIndex(0)
        navigator.waitForWrestlerPageOpened()
        wrestlerPage.clickCancelButton()
        navigator.acceptModal()
        navigator.waitForMainPageOpened()
        let firstWrestlerNumberAfterDeletion = wrestlersTable.getFirstWrestlerObj().Num
        expect(firstWrestlerNumberBeforeDeletion).not.toEqual(firstWrestlerNumberAfterDeletion,
            'First Wrestler should be deleted from wrestlers list on main page')
    })

    it('Upload wrestler photo', ()=>{
        wrestlersTable.openWrestlerByIndex(1) // not 0 because of lags in the system itself(prev 'it' deletes wrestler - impossible t o attach photo)
        navigator.waitForWrestlerPageOpened()
        uploader.uploadPhoto(wrestlerPage.uploadPhotoInput)
        uploader.waitForPhotoToBeUploaded(wrestlerPage.wrestlerPhoto)
        expect(wrestlerPage.wrestlerPhoto.isVisible()).toBeTruthy('Wrestler photo should be visible after it\'s upload')
    })
})