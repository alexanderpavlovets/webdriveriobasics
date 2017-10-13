import { LoginPage } from '../pageobjects/Login.page' //importing the LoginPage class
import { MainPage } from '../pageobjects/Main.page' //importing the MainPage class, in order to assert if it is opened

let loginPage = new LoginPage() //creating instance of the Login page

describe('Login Page ', () => {
    it('Is openeing properly after base URL provided', () => {
        loginPage.open()
        expect(LoginPage.isOpened()).toBeTruthy('Primary panel isn\'t visible. Login page isn\'t opened')
    })

    it('Has "Login and "Password" fields visible', () => {
        loginPage.open()
        expect(loginPage.loginField.isVisible()).toBeTruthy('hasn\'t got "Login" field visible' )
        expect(loginPage.passwordField.isVisible()).toBeTruthy('hasn\'t got "Password" field visible')
    })

    it('Logging in after correct credentials are provided', ()=> {
        loginPage.open()
        loginPage.login()
        expect(MainPage.isOpened()).toBeTruthy('Header isn\'t visible. Login page isn\'t opened')
    })
})

