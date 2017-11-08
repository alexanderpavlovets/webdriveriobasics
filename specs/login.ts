import { LoginPage } from '../pageobjects/Login.page' 
import { Navigator } from '../pageobjects/objects/Navigator'
import { dataProvider } from '../test_data/dataProvider'


describe('Login Page ', () => {
    
    let loginPage = new LoginPage() 
    let navigator = new Navigator()
    let validUser = dataProvider.users.validUser 
    let randomUser = dataProvider.users.randomUser
    

    beforeEach(()=>{
        navigator.openLoginPage()
    })

    it('Logging in, after correct credentials are provided', ()=> {
        loginPage.login(validUser)
        expect(Navigator.isMainPageOpened()).toBeTruthy('Main page should be opened it\'s header should be visible after login')
    })

    it('Shows an error, when invalid credentials are provided', ()=>{
        loginPage.login(randomUser)
        expect(loginPage.primaryPanelHeader.getText()).toContain('Incorrect credentials',
                                                                'Error should be shown, after attemp to login with invalid credentials')
    })

 
})

