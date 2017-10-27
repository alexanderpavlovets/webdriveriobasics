import { MainPage } from './Main.page'

export class NewWrestlerPage extends MainPage {
    constructor(){
        super()
    }


    // static methods of NewWrestler class
    static isOpened(): boolean{
        // locators not unique, but in current page - other elements with these locators are hidden 
        return browser.waitForVisible('.panel.panel-primary', 3000) && browser.$('.panel-heading').getText() === 'Wrestler info'
    }

    
}