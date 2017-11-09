import * as moment from 'moment'
import * as momentRandom from 'moment-random'

// generator of random values, includes functions:
// randomFiveCharString(): string
// randomIntFromGivenRange(lowerIntIncludive: number, higherIntIncludive: number): number
// randomDD_MM_YYYY(): string
// randomStringFromGivenArray(array: Array<string>): string

// function returns random sequence of 5 chars as a string - [A-Z, a-z, 0-9]
export function randomFiveCharString(): string{
    let randomStringGenerated = ''
    let possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++){
        randomStringGenerated += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length))
    }
    return randomStringGenerated
}


// function returns random Int from given range includively for both 
export function randomIntFromGivenRange(lowerIntIncludive: number, higherIntIncludive: number): number {
    return Math.floor(Math.random() * (higherIntIncludive - lowerIntIncludive + 1) + lowerIntIncludive)
}

// function returns random date string in format DD-MM-YYYY from 0 UNIX-time till today
export function randomDD_MM_YYYY(): string{
    return moment(momentRandom()).format('DD-MM-YYYY')
}

export function randomStringFromGivenArray(array: Array<string>): string {
    let randomArrayIndex = randomIntFromGivenRange(0, array.length - 1)
    return array[randomArrayIndex]
}