import { IUser } from '../test_data/dataProvider' // importing Iuser interface for login(user) method


export class LoginPage {
    constructor() {
    }


    //setting elements via get, in order to make lazy search of the elements
    get primaryPanel()          { return browser.$('.panel-primary') }
    get primaryPanelHeader()    { return this.primaryPanel.$('.panel-heading') }
    get loginForm()             { return this.primaryPanel.$('form[name="loginform"]') }
    get loginField()            { return this.loginForm.$('input[placeholder = "Login"]') }
    get passwordField()         { return this.loginForm.$('input[placeholder = "Password"]') }
    get loginButton()           { return browser.$('button[ng-click="Login()"]') }


    // methods of LoginPage class
    login(user: IUser): void {
        this.loginField.setValue(user.login)
        this.passwordField.setValue(user.password)
        this.loginButton.click()
    }
}