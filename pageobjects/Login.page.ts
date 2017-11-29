import { IUser } from '../test_data/dataProvider' // importing Iuser interface for login(user) method
import { MyInputField } from './objects/MyInput' // for custom input elements


export class LoginPage {
    constructor() {
    }


    //setting elements via get, in order to make lazy search of the elements
    get primaryPanel() { return browser.$('.panel-primary') }
    get primaryPanelHeader() { return this.primaryPanel.$('.panel-heading') }
    get loginForm() { return this.primaryPanel.$('form[name="loginform"]') }
    get loginField() { return new MyInputField(this.loginForm.$('input[placeholder = "Login"]')) }
    get passwordField() { return new MyInputField(this.loginForm.$('input[placeholder = "Password"]')) }
    get loginButton() { return browser.$('button[ng-click="Login()"]') }


    // methods of LoginPage class
    login(user: IUser): void {
        this.loginField.setData(user.login)
        this.passwordField.setData(user.password)
        this.loginButton.click()
    }
}