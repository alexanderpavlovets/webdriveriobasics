import { Page } from './Page.page' // importing abstact class Page for inheritance 
import { frameTimeout } from '../test_data/frameTimeouts' // importing frameTimeouts for custom wait of elements
import { Iuser } from '../test_data/dataProvider' // importing Iuser interface for login(user) method


export class LoginPage extends Page {
    constructor() {
        super()
    }


    //static methods of LoginPage class - not used, maybe will be for "logOut" test
    static isOpened(): boolean { 
        let loginForm = browser.$('.panel,.panel-primary')
        return loginForm.waitForVisible(frameTimeout.m) // waiting for login form to be visible
    }


    //setting elements via get, in order to make lazy search of the elements
    get primaryPanel()          { return browser.$('.panel-primary') }
    get primaryPanelHeader()    { return this.primaryPanel.$('.panel-heading') }
    get loginForm()             { return this.primaryPanel.$('form[name="loginform"]') }
    get loginField()            { return this.loginForm.$('input[placeholder = "Login"]') }
    get passwordField()         { return this.loginForm.$('input[placeholder = "Password"]') }
    get loginButton()           { return browser.$('button[ng-click="Login()"]') }


    // methods of LoginPage class
    open(): void {
        super.open()
    }

    login(user: Iuser): void {
        this.loginField.setValue(user.login)
        this.passwordField.setValue(user.password)
        this.loginButton.click()
    }
}