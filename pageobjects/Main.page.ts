import {Page} from './Page.page' // importing abstact class Page for inheritance 

export class MainPage extends Page{

    constructor(){
        super()
    }

    static isOpened() :boolean {
        return browser.waitForVisible('ul .nav,.nav-tabs', 3000)
    }
}