import {Page} from './Page.page' // importing abstact class Page for inheritance 


export class LoginPage extends Page{
    constructor(){
     super()
    }

    static isOpened() :boolean{
        return browser.waitForVisible('.panel,.panel-primary', 3000)
    }


    //setting elements via get, in order to make lazy search of the elements
    get primaryPanel()          {return browser.$('.panel,.panel-primary')}
    get primaryPanelHeader()    {return this.primaryPanel.$('.panel-heading')}
    get loginForm()             {return this.primaryPanel.$('form[name="loginform"]')}
    get loginField()            {return this.loginForm.$('input[placeholder = "Login"]')}
    get passwordField()         {return this.loginForm.$('input[placeholder = "Password"]')}
    get loginButton()           {return browser.$('button[ng-click="Login()"]')}
    
    

    login(){
        this.loginField.setValue('auto')
        this.passwordField.setValue('test')
        this.loginButton.click()
    }
}