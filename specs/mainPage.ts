import { MainPage } from '../pageobjects/Main.page'
import { LoginPage } from "../pageobjects/Login.page"
import { Navigator } from '../pageobjects/objects/Navigator'
import { dataProvider } from '../test_data/dataProvider';

describe('ha!', ()=>{

    let mainPage = new MainPage()
    let loginPage = new LoginPage()
    let navigator = new Navigator()
    let validUser = dataProvider.users.validUser

    beforeAll(()=>{
        navigator.openLoginPage()
        loginPage.login(validUser)
        navigator.waitForMainPageOpened()
    })

    it('it will be a miracle!', ()=>{
        browser.pause(1000)
        console.log('i am starting')
        console.log(mainPage.firstWrestler.FIO)
    })
})