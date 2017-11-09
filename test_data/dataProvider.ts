import { randomFiveCharString, randomDD_MM_YYYY, randomStringFromGivenArray } from '../helpers/random_generator' // importing random string generator'

// data provider for "Wrestler" project, includes:
// interfaces: Iuser, IWrestler
// wrestlerSelects object
// dataProvider object

// interfaces
export interface IUser {
    login
    password
}

export interface IWrestler {
    lastName,
    firstName,
    dateOfBirth,
    middleName,
    region1,
    region2,
    fst1,
    fst2,
    trainer1,
    trainer2,
    style,
    age,
    year,
    cardState
}


// this is possible values of all "select" tags in "Wrestler Info" area
// all values are equal to "label" attribute
const wrestlerSelects = {
    region1: ['AR Krym', 'Vynnitska', 'Volynska', 'Dnipropetrovska', 'Donetska', 'Ghitomerska', 'Zakarpatska', 'Zaporizka',
        'Ivano-Frankivska', 'Kyivska', 'Kyrovogradska', 'Luganska', 'Lvivska', 'Mykolaivska', 'Odeska', 'Poltavska', 'Rivnenska',
        'Sumska', 'Ternopilska', 'Kharkivska', 'Khersonska', 'Khemlnicka', 'Cherkaska', 'Chernivetska', 'Chernigivska', 'Kyiv',
        'Sevastopol'], 
    region2: ['AR Krym', 'Vynnitska', 'Volynska', 'Dnipropetrovska', 'Donetska', 'Ghitomerska', 'Zakarpatska', 'Zaporizka',
        'Ivano-Frankivska', 'Kyivska', 'Kyrovogradska', 'Luganska', 'Lvivska', 'Mykolaivska', 'Odeska', 'Poltavska', 'Rivnenska',
        'Sumska', 'Ternopilska', 'Kharkivska', 'Khersonska', 'Khemlnicka', 'Cherkaska', 'Chernivetska', 'Chernigivska', 'Kyiv',
        'Sevastopol'],
    fst1: ['Dinamo', 'Kolos', 'Ukraina', 'Spartak', 'MON', 'ZSU', 'SK'],
    fst2: ['Dinamo', 'Kolos', 'Ukraina', 'Spartak', 'MON', 'ZSU', 'SK'],
    style: ['FS', 'FW', 'GR'],
    age: ['Junior', 'Cadet', 'Senior'],
    year: ['2017', '2016', '2015', '2014', '2013'],
    cardState: ['No card', 'Produced', 'Recieved']
}

// dataProvider object
export let dataProvider = {
    users: {
        validUser: { login: 'auto', password: 'test' },
        randomUser: { login: randomFiveCharString(), password: randomFiveCharString() }
    },
    getWrestler() {
        return {
            lastName: 'LastNameTest' + randomFiveCharString(),
            firstName: 'FirstNameTest' + randomFiveCharString(),
            dateOfBirth: randomDD_MM_YYYY(),
            middleName: 'MiddleNameTest' + randomFiveCharString(),
            region1: randomStringFromGivenArray(wrestlerSelects.region1),
            region2: randomStringFromGivenArray(wrestlerSelects.region2),
            fst1: randomStringFromGivenArray(wrestlerSelects.fst1),
            fst2: randomStringFromGivenArray(wrestlerSelects.fst2),
            trainer1: 'Trainer1Test' + randomFiveCharString(),
            trainer2: 'Trainer2Test' + randomFiveCharString(),
            style: randomStringFromGivenArray(wrestlerSelects.style),
            age: randomStringFromGivenArray(wrestlerSelects.age),
            year: randomStringFromGivenArray(wrestlerSelects.year),
            cardState: randomStringFromGivenArray(wrestlerSelects.cardState)
        }
    }
}