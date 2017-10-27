
export class Wrestler {
    constructor() {
    }


    // defining elements of Wrestler form 
    get wrestlerDataForm()  { return browser.$('form[name="fWrestler"]')}
    get lastName()          { return this.wrestlerDataForm.$('fg-input[value="wr.lname"] input')}
    get firstName()         { return this.wrestlerDataForm.$('fg-input[value="wr.fname"] input')}
    get dateOfBirth()       { return this.wrestlerDataForm.$('fg-date[value="wr.dob"] input')}
    get middleName()        { return this.wrestlerDataForm.$('fg-input[value="wr.mname"] input')}
    get region1()           { return this.wrestlerDataForm.$('fg-select[value="wr.region1"] select')}
    get region2()           { return this.wrestlerDataForm.$('fg-select[value="wr.region2"] select')}
    get fst1()              { return this.wrestlerDataForm.$('fg-select[value="wr.fst1"] select')}
    get fst22()             { return this.wrestlerDataForm.$('fg-select[value="wr.fst2"] select')}
}