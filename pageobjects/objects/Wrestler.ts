import { wrestlerData } from './wrestlerData'
import { randomIntFromGivenRange } from '../../helpers/random_generator'

export class Wrestler {
    constructor(){
    }
    
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