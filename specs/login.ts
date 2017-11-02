// TODO: move loginPage.open() into brforeEach() - here
// 2 first tests - no sence

import { LoginPage } from '../pageobjects/Login.page' //importing the LoginPage class

describe('Login Page ', () => {
    
    let loginPage = new LoginPage() //creating instance of the Login page

    it('Is openeing properly after base URL provided', () => {
        loginPage.open()
        expect(LoginPage.isOpened()).toBeTruthy('Primary panel isn\'t visible. Login page isn\'t opened')
    })

    it('Has "Login and "Password" fields visible', () => {
        loginPage.open()
        expect(loginPage.loginField.isVisible()).toBeTruthy('hasn\'t got "Login" field visible' )
        expect(loginPage.passwordField.isVisible()).toBeTruthy('hasn\'t got "Password" field visible')
    })

    it('Logging in, after correct credentials are provided', ()=> {
        loginPage.open()
        // loginPage.login(user)
        // expect(MainPage.isOpned())....
        expect(loginPage.login()).toBeTruthy('Header isn\'t visible. Login page isn\'t opened')
    })

    it('Shows an error, when invalid credentials are provided', ()=>{
        loginPage.open()
        loginPage.loginWithRandomCredentials() //loginPage.login(randomUser)
        expect(loginPage.primaryPanelHeader.getText()).toContain('Incorrect credentials','Error message isn\'t correct after invalid credentials are provided')
    })

 
})

