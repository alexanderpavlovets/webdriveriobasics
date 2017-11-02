import { MainPage } from './Main.page' // importing MainPage class for inheritance 
import { Wrestler } from '../objects/Wrestler'

export class WrestlerPage extends MainPage {
    constructor(){
        super()
    }
    wrestler = new Wrestler() // creating instance of Wrestler class


    // static methods of NewWrestler class
    static isOpened(): boolean{
        let wrestlerInfoForm = browser.$('div.col-sm-8')
        let loadingCurrentTabIndicator = browser.$('ul.nav-tabs li.active div.spinner-loader')
        
        // ad as global ! And use everywhere with waits
        const ms = 10000
        const timeouts = {
            s: ms,
            m: 3 * ms,
            l: 5 * ms
        }
        return wrestlerInfoForm.waitForVisible(timeouts.m) && loadingCurrentTabIndicator.waitForVisible(5000, true) //wait indicator to disappear for 5 seconds
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

    get requiredFieldsValues() {
        let data = {
            lastName: this.wrestler.lastName.getValue(),
            firstName: this.wrestler.firstName.getValue(),
            dateOfBirth: this.wrestler.dateOfBirth.getValue(),
            middleName: this.wrestler.middleName.getValue(),
            region1: this.wrestler.region1.getValue(),
            fst1: this.wrestler.fst1.getValue(),
            style: this.wrestler.style.getValue(),
            age: this.wrestler.age.getValue(),
            year: this.wrestler.year.getValue()
        }
        return data
    }

    createNewWrestlerWithRandomData() {
        this.fillRequiredFieldsRandomly()
        this.wrestler.successButton.click()
    }

    clickSuccess() {
        this.wrestler.successButton.click()
    }

}