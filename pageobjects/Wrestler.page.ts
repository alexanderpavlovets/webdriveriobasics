import { frameTimeout } from '../test_data/frameTimeouts' // importing frameTimeouts for custom wait of elements
import { dataProvider } from '../test_data/dataProvider'


export class WrestlerPage {
    constructor(){
    }


    // static methods of NewWrestler class
    static isOpened(): boolean{
        let wrestlerInfoForm = browser.$('div.col-sm-8')
        let loadingCurrentTabIndicator = browser.$('ul.nav-tabs li.active div.spinner-loader')
        return wrestlerInfoForm.waitForVisible(frameTimeout.m) &&  // waiting for "Wrestler info" form to be visible
             loadingCurrentTabIndicator.waitForVisible(frameTimeout.l, true) //wait loading indicator to disappear
    }


    // defining elements of Wrestler page
    get wrestlerDataForm()  { return browser.$('form[name="fWrestler"]')}
    // "Wrestler info" form
    get lastName()          { return this.wrestlerDataForm.$('fg-input[value="wr.lname"] input')}
    get firstName()         { return this.wrestlerDataForm.$('fg-input[value="wr.fname"] input')}
    get dateOfBirth()       { return this.wrestlerDataForm.$('fg-date[value="wr.dob"] input')}
    get middleName()        { return this.wrestlerDataForm.$('fg-input[value="wr.mname"] input')}
    get region1()           { return this.wrestlerDataForm.$('fg-select[value="wr.region1"] select')}
    get region2()           { return this.wrestlerDataForm.$('fg-select[value="wr.region2"] select')}
    get fst1()              { return this.wrestlerDataForm.$('fg-select[value="wr.fst1"] select')}
    get fst2()              { return this.wrestlerDataForm.$('fg-select[value="wr.fst2"] select')}
    get trainer1()          { return this.wrestlerDataForm.$('fg-typeahead[value="wr.trainer1"] input')}
    get trainer2()          { return this.wrestlerDataForm.$('fg-typeahead[value="wr.trainer2"] input')}
    get style()             { return this.wrestlerDataForm.$('fg-select[value="wr.style"] select')}
    get age()               { return this.wrestlerDataForm.$('fg-select[value="wr.lictype"] select')}
    get year()              { return this.wrestlerDataForm.$('fg-select[value="wr.expires"] select')}
    get cardState()         { return this.wrestlerDataForm.$('f-select[value="wr.card_state"] select')}
    // wrestler "V" and "X" buttons
    get successButton()     { return this.wrestlerDataForm.$('button.btn-success')}
    get dangerButton()      { return this.wrestlerDataForm.$('button.btn-danger')}
    // created wrestler areas
    get photoDiv()         { return this.wrestlerDataForm.$('div.col-sm-4[ng-hide="wr.new"]') }
    get docsDiv()          { return this.wrestlerDataForm.$('div.col-sm-12[ng-hide="wr.new"]') }


    // methods of NewWrestlerPage class
    fillRequiredFieldsRandomly(wrestler) {
        this.lastName.setValue(wrestler.lastName)
        this.firstName.setValue(wrestler.firstName)
        this.dateOfBirth.setValue(wrestler.dateOfBirth)
        this.middleName.setValue(wrestler.middleName)
        this.region1.selectByAttribute('label',1)
    }

    get requiredFieldsValues() {
        let data = {

        }
        return data
    }

    createNewWrestler(wrestler) {

    }

    clickSuccess() {

    }

}