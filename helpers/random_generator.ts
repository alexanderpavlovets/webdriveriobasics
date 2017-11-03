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

// function returns random date string in format DD-MM-YYYY for years 1900 - 2015
export function randomDD_MM_YYYY(): string{
    let randomDateNumber: string = Math.floor((Math.random() * 31) + 1).toString() // 1-31
    let randomMonthNumber: string = Math.floor(Math.random() * 12).toString() // 0-11
    let randomYYYY = function(): number{
        return randomIntFromGivenRange(1900,2015)
    }

    let date = randomDateNumber.length > 1 ? randomDateNumber : '0' + randomDateNumber
    let month = randomMonthNumber.length > 1 ? randomMonthNumber : '0' + randomMonthNumber
    let year = randomYYYY()

    return `${date}-${month}-${year}`
}

export function randomStringFromGivenArray(array: Array<string>): string {
    let randomArrayIndex = randomIntFromGivenRange(0, array.length - 1)
    return array[randomArrayIndex]
}