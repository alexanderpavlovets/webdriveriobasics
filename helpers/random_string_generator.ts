export function randomFiveCharString(): string{
    let randomStringGenerated = ''
    let possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++){
        randomStringGenerated += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length))
    }
    return randomStringGenerated
}