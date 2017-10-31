import { wrestlerData } from './wrestlerData'
import { randomIntFromGivenRange } from '../helpers/random_generator'

export class Wrestler {
    constructor(){
    }

    // defining elements of Wrestler form 
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
    get photoArea()         { return this.wrestlerDataForm.$('div.col-sm-4[ng-hide="wr.new"]') }
    get photoAreaHeaderText(){ return this.photoArea.$('div.panel-heading').getText() }
    get docsArea()          { return this.wrestlerDataForm.$('div.col-sm-12[ng-hide="wr.new"]') }
    get docsAreaHeaderText(){ return this.docsArea.$('div.panel-heading').getText() }
    

    // methods of Wrestler class
    setFirstName() { this.firstName.setValue(wrestlerData.firstName) }
    
    setLastName() { this.lastName.setValue(wrestlerData.lastName) }
    
    setDOB() { this.dateOfBirth.setValue(wrestlerData.dateOfBirth) }
    
    setMiddleName() { this.middleName.setValue(wrestlerData.middleName)}
    
    setRegion1Randomly() {
        let randomRegionIndex = randomIntFromGivenRange(0, wrestlerData.region1.length - 1) // generating random index in region1 array
        let randomRegionValue = wrestlerData.region1[randomRegionIndex]
        this.region1.selectByAttribute('label', randomRegionValue)
    }

    setFST1Randomly() {
        let randomFST1Value = wrestlerData.fst1[randomIntFromGivenRange(0, wrestlerData.fst1.length - 1)]
        this.fst1.selectByAttribute('label', randomFST1Value)
    }

    setStyleRandomly() { 
        let randomStyleValue = wrestlerData.style[randomIntFromGivenRange(0, wrestlerData.style.length - 1)]
        this.style.selectByAttribute('label', randomStyleValue)
    }

    setAgeRandomly() {
        let randomAgeValue = wrestlerData.age[randomIntFromGivenRange(0, wrestlerData.age.length - 1)]
        this.age.selectByAttribute('label', randomAgeValue)
    }

    setYearRandomly() {
        let randomYearValue = wrestlerData.year[randomIntFromGivenRange(0, wrestlerData.year.length - 1)]
        this.year.selectByAttribute('label', randomYearValue)
    }
}