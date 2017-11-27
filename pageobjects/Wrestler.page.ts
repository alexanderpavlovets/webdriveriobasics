import { frameTimeout } from '../test_data/frameTimeouts' // for custom wait of elements
import { dataProvider, IWrestler } from '../test_data/dataProvider' // for data of wrestler
import { MyInputField } from './objects/MyInput' // for custom 'imput' elements
import { MySelectField } from './objects/MySelect' // for custom 'select' elements


export class WrestlerPage {
    constructor(){
    }

    // defining elements of Wrestler page
    get wrestlerDataForm()  { return browser.$('div.active form[name="fWrestler"]')}
    // "Wrestler info" form
    get lastName()          { return new MyInputField(this.wrestlerDataForm.$('fg-input[value="wr.lname"] input'))}
    get firstName()         { return new MyInputField(this.wrestlerDataForm.$('fg-input[value="wr.fname"] input'))}
    get dateOfBirth()       { return new MyInputField(this.wrestlerDataForm.$('fg-date[value="wr.dob"] input'))}
    get middleName()        { return new MyInputField(this.wrestlerDataForm.$('fg-input[value="wr.mname"] input'))}
    get region1()           { return new MySelectField(this.wrestlerDataForm.$('fg-select[value="wr.region1"] select'))}
    get region2()           { return new MySelectField(this.wrestlerDataForm.$('fg-select[value="wr.region2"] select'))}
    get fst1()              { return new MySelectField(this.wrestlerDataForm.$('fg-select[value="wr.fst1"] select'))}
    get fst2()              { return new MySelectField(this.wrestlerDataForm.$('fg-select[value="wr.fst2"] select'))}
    get trainer1()          { return new MyInputField(this.wrestlerDataForm.$('fg-typeahead[value="wr.trainer1"] input'))}
    get trainer2()          { return new MyInputField(this.wrestlerDataForm.$('fg-typeahead[value="wr.trainer2"] input'))}
    get style()             { return new MySelectField(this.wrestlerDataForm.$('fg-select[value="wr.style"] select'))}
    get age()               { return new MySelectField(this.wrestlerDataForm.$('fg-select[value="wr.lictype"] select'))}
    get year()              { return new MySelectField(this.wrestlerDataForm.$('fg-select[value="wr.expires"] select'))}
    get cardState()         { return new MySelectField(this.wrestlerDataForm.$('f-select[value="wr.card_state"] select'))}
    // wrestler "V" and "X" buttons
    get saveButton()        { return this.wrestlerDataForm.$('button.btn-success')}
    get cancelButton()      { return this.wrestlerDataForm.$('button.btn-danger')}
    // created wrestler areas
    get photoDiv()          { return this.wrestlerDataForm.$('div.col-sm-4[ng-hide="wr.new"]') }
    get docsDiv()           { return this.wrestlerDataForm.$('div.col-sm-12[ng-hide="wr.new"]') }
    get uploadPhotoInput()  { return this.photoDiv.$('input[type="file"]')}
    get uploadDocsInput()   { return this.docsDiv.$('input[type="file"]')}



    // methods of NewWrestlerPage class
    setWrestlerFields(wrestler: IWrestler) {
        for ( let key in wrestler) {
            this[key].setData(wrestler[key])
        }
    }

    getWrestlerFields(): IWrestler {
        let dataOfDisplayedWrestler = {}
        let wrestler = dataProvider.getWrestler()
        for ( let key in wrestler) {
            dataOfDisplayedWrestler[key] = this[key].getData()
        }
        return dataOfDisplayedWrestler as IWrestler
    }

    clickSaveButton(): void {
        this.saveButton.waitForEnabled(frameTimeout.s)
        this.saveButton.click()
    }

    clickCancelButton(): void {
        this.cancelButton.waitForEnabled(frameTimeout.s)
        this.cancelButton.click()
    }
}