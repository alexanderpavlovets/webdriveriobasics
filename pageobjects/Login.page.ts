import {Page} from './Page.page'

class LoginPage extends Page{
    constructor(){
        super("alex")
    }
}

let login = new LoginPage()

login.open()