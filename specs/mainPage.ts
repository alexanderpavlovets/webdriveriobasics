import { MainPage } from '../pageobjects/Main.page'
import { LoginPage } from "../pageobjects/Login.page"
import { Navigator } from '../pageobjects/objects/Navigator'
import { WrestlersTable } from '../pageobjects/objects/WrestlersTable';
import { dataProvider } from '../test_data/dataProvider';


describe('ha!', () => {

    let mainPage = new MainPage()
    let loginPage = new LoginPage()
    let navigator = new Navigator()
    let wrestlersTable = new WrestlersTable()
    let validUser = dataProvider.users.validUser

    beforeAll(() => {
        navigator.openLoginPage()
        loginPage.login(validUser)
    })

    beforeEach(() => {
        navigator.waitForMainPageOpened()
    })

    it('it will be a miracle!', () => {
        console.log('i am starting')
        console.log(wrestlersTable.getFirstWrestlerObj().FIO)
    })
})