import { MainPage } from './Main.page' // importing MainPage class for inheritance 
import { Wrestler } from '../objects/Wrestler'
import { wrestlerData } from '../objects/wrestlerData'

export class WrestlerPage extends MainPage {
    constructor(){
        super()
    }
    wrestler = new Wrestler() // creating instance of Wrestler class


    // static methods of NewWrestler class
    static isOpened(): boolean{
        let wrestlerInfoForm = browser.$('div.col-sm-8')
        let loadingCurrentTabIndicator = browser.$('ul.nav-tabs li.active div.spinner-loader')
        return wrestlerInfoForm.waitForVisible(3000) && loadingCurrentTabIndicator.waitForVisible(5000, true) //wait indicator to disappear for 5 seconds
    }


    // methods of NewWrestlerPage class
    openForCreation(): boolean{
        super.open()
        super.openFormToCreateWrestler()
        return WrestlerPage.isOpened()
    }
    
    openForExisting(){

    }

    fillRequiredFieldsRandomly() {
        this.wrestler.setLastName()
        this.wrestler.setFirstName()
        this.wrestler.setDOB()
        this.wrestler.setMiddleName()
        this.wrestler.setRegion1Randomly()
        this.wrestler.setFST1Randomly()
        this.wrestler.setStyleRandomly()
        this.wrestler.setAgeRandomly()
        this.wrestler.setYearRandomly()
    }

    createNewWrestlerWithRandomData() {
        this.fillRequiredFieldsRandomly()
        this.wrestler.successButton.click()
    }
}