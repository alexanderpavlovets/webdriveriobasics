import { LoginPage } from '../pageobjects/Login.page' //importing the LoginPage class
import { MainPage } from '../pageobjects/Main.page'
import { dataProvider } from '../test_data/dataProvider'

describe('Login Page ', () => {
    
    let loginPage = new LoginPage() //creating instance of the Login page
    let validUser = dataProvider.users.validUser // user with valid credentials
    let randomUser = dataProvider.users.randomUser // user with random credentials

    beforeEach(()=>{
        loginPage.open()
    })

    it('Logging in, after correct credentials are provided', ()=> {
        loginPage.login(validUser)
        expect(MainPage.isOpened()).toBeTruthy('Main page should be opened it\'s header should be visible after login')
    })

    it('Shows an error, when invalid credentials are provided', ()=>{
        loginPage.login(randomUser)
        expect(loginPage.primaryPanelHeader.getText()).toContain('Incorrect credentials',
                                                                'Error should be shown, after attemp to login with invalid credentials')
    })

 
})

