import { frameTimeout } from '../test_data/frameTimeouts' // for custom wait of elements
import { dataProvider, IWrestler } from '../test_data/dataProvider' // for data of wrestler


export class WrestlerPage {
    constructor(){
    }

    // defining elements of Wrestler page
    get wrestlerDataForm()  { return browser.$('div.active form[name="fWrestler"]')}
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
    get saveButton()        { return this.wrestlerDataForm.$('button.btn-success')}
    get cancelButton()      { return this.wrestlerDataForm.$('button.btn-danger')}
    // created wrestler areas
    get photoDiv()         { return this.wrestlerDataForm.$('div.col-sm-4[ng-hide="wr.new"]') }
    get docsDiv()          { return this.wrestlerDataForm.$('div.col-sm-12[ng-hide="wr.new"]') }


    // methods of NewWrestlerPage class
    setWrestlerFields(wrestler: IWrestler) {
        this.lastName.setValue(wrestler.lastName)
        this.firstName.setValue(wrestler.firstName)
        this.dateOfBirth.setValue(wrestler.dateOfBirth)
        this.middleName.setValue(wrestler.middleName)
        this.region1.selectByAttribute('label', wrestler.region1)
        this.region2.selectByAttribute('label', wrestler.region2)
        this.fst1.selectByAttribute('label', wrestler.fst1)
        this.fst2.selectByAttribute('label', wrestler.fst2)
        this.trainer1.setValue(wrestler.trainer1)
        this.trainer2.setValue(wrestler.trainer2)
        this.style.selectByAttribute('label', wrestler.style)
        this.age.selectByAttribute('label', wrestler.age)
        this.year.selectByAttribute('label', wrestler.year)
        this.cardState.selectByAttribute('label', wrestler.cardState)
    }

    getWrestlerFields(): IWrestler {
        let dataOfDisplayedWrestler = {}
        let wrestler = dataProvider.getWrestler()
        for ( let key in wrestler) {
            dataOfDisplayedWrestler[key] = this[key].getValue()
        }
        return dataOfDisplayedWrestler as IWrestler
    }

    clickSaveButton() {
        this.saveButton.waitForEnabled(frameTimeout.s)
        this.saveButton.click()
    }
}