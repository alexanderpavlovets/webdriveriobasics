import { LoginPage } from "../pageobjects/Login.page";
import { WrestlerPage } from "../pageobjects/Wrestler.page";
import { WrestlersTable } from "../pageobjects/objects/WrestlersTable";
import { Navigator } from "../pageobjects/objects/Navigator";
import { Uploader } from "../pageobjects/objects/Uploader";
import { dataProvider } from "../test_data/dataProvider";

let loginPage = new LoginPage()
let wrestlerPage = new WrestlerPage()
let wrestlersTable = new WrestlersTable()
let navigator = new Navigator()
let uploader = new Uploader()
let validUser = dataProvider.users.validUser

describe('Upload ', () => {

    beforeAll(() => {
        navigator.openLoginPage()
        loginPage.login(validUser)
    })

    beforeEach(() => {
        navigator.waitForMainPageOpened()
        wrestlersTable.openWrestlerByIndex(0)
        navigator.waitForWrestlerPageOpened()
    })

    afterEach(() => {
        navigator.closeCurrentActiveTab()
    })


    it('Upload wrestler photo', () => {
        uploader.uploadPhoto(wrestlerPage.uploadPhotoInput)
        uploader.waitForPhotoToBeUploaded(wrestlerPage.wrestlerPhoto)
        expect(wrestlerPage.wrestlerPhoto.isVisible()).toBeTruthy('Wrestler photo should be visible after it\'s upload')
    })

    it('Upload wrestler document', () => {
        let amountOfDocementsBeforeAttachment = wrestlerPage.attachedDocumentsAmount
        uploader.uploadDocument(wrestlerPage.uploadDocsInput)
        uploader.waitForDocumentToBeUploaded(wrestlerPage.attachedDocumentsArray[amountOfDocementsBeforeAttachment])
        let amountOfDocumentsAfterAttachment = wrestlerPage.attachedDocumentsAmount
        let attachedDocumentsAmount = amountOfDocumentsAfterAttachment - amountOfDocementsBeforeAttachment
        expect(attachedDocumentsAmount).toBe(1, 'Document should be attached to wrestler page')
    })
})