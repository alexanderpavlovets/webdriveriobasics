import * as moment from 'moment'
import * as momentRandom from 'moment-random'
import * as Chance from 'chance'

// generator of random values, includes functions:
// randomFiveCharString(): string
// randomIntFromGivenRange(lowerIntIncludive: number, higherIntIncludive: number): number
// randomDD_MM_YYYY(): string
// randomStringFromGivenArray(array: Array<string>): string

let chance = new Chance()


// function returns random sequence of 5 chars as a string - [A-Z, a-z, 0-9]
export function randomFiveCharString(): string{
    return chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'})
}


// function returns random Int from given range includively for both 
export function randomIntFromGivenRange(lowerIntIncludive: number, higherIntIncludive: number): number {
    return chance.integer({min: lowerIntIncludive, max: higherIntIncludive})
}

// function returns random date string in format DD-MM-YYYY from 0 UNIX-time till today
export function randomDD_MM_YYYY(): string{
    return moment(momentRandom()).format('DD-MM-YYYY')
}

export function randomStringFromGivenArray(array: Array<string>): string {
    let randomArrayIndex = randomIntFromGivenRange(0, array.length - 1)
    return array[randomArrayIndex]
}