import { Page } from './Page.page' // importing abstact class Page for inheritance 
import { MainPage } from '../pageobjects/Main.page' //importing the MainPage class, in order to assert if it is opened
import { randomFiveCharString } from '../helpers/random_generator' // importing random string generator


export class LoginPage extends Page {
    constructor() {
        super()
    }


    //static methods of LoginPage class
    static isOpened(): boolean { 
        let loginForm = browser.$('.panel,.panel-primary')
        return loginForm.waitForVisible(3000) // waiting for login form to be visible
    }


    //setting elements via get, in order to make lazy search of the elements
    get primaryPanel()          { return browser.$('.panel-primary') }
    get primaryPanelHeader()    { return this.primaryPanel.$('.panel-heading') }
    get loginForm()             { return this.primaryPanel.$('form[name="loginform"]') }
    get loginField()            { return this.loginForm.$('input[placeholder = "Login"]') }
    get passwordField()         { return this.loginForm.$('input[placeholder = "Password"]') }
    get loginButton()           { return browser.$('button[ng-click="Login()"]') }


    // methods of LoginPage class
    open(): boolean {
        super.open()
        return LoginPage.isOpened()
    }

    login(): boolean {
        this.loginField.setValue('auto')
        this.passwordField.setValue('test')
        this.loginButton.click()
        return MainPage.isOpened()
    }

    loginWithRandomCredentials(): void {
        this.loginField.setValue(randomFiveCharString())
        this.passwordField.setValue(randomFiveCharString())
        this.loginButton.click()
    }

}