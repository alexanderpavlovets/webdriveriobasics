import { randomFiveCharString, randomDD_MM_YYYY } from '../helpers/random_generator' // importing random string generator'

export let wrestlerData = {
    lastName: 'LastNameTest' + randomFiveCharString(),
    firstName: 'FirstNameTest' + randomFiveCharString(),
    dateOfBirth: randomDD_MM_YYYY(),
    middleName: 'MiddleNameTest' + randomFiveCharString(),
    region1: ['AR Krym', 'Vynnitska', 'Volynska', 'Dnipropetrovska', 'Donetska', 'Ghitomerska', 'Zakarpatska', 'Zaporizka',
        'Ivano-Frankivska', 'Kyivska', 'Kyrovogradska', 'Luganska', 'Lvivska', 'Mykolaivska', 'Odeska', 'Poltavska', 'Rivnenska', 
        'Sumska', 'Ternopilska', 'Kharkivska', 'Khersonska', 'Khemlnicka', 'Cherkaska', 'Chernivetska', 'Chernigivska', 'Kyiv', 
        'Sevastopol'], // these names are equal to 'label' attribute
    region2: '',
    fst1: ['Dinamo', 'Kolos', 'Ukraina', 'Spartak', 'MON', 'ZSU', 'SK'], // these names are equal to 'label' attribute
    fst2: '',
    trainer1: '',
    trainer2: '',
    style: ['FS', 'FW', 'GR'], // these names are equal to 'label' attribute
    age: ['Junior', 'Cadet', 'Senior'], // these names are equal to 'label' attribute
    year: ['2017', '2016', '2015', '2014', '2013'], // these names are equal to 'label' attribute
    cardState: ''
}