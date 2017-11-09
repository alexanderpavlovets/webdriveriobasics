import { element } from 'element.js'

export class MyInputField {
    inputElement
    constructor(inputElement) {
        this.inputElement = inputElement
    }

    setData(data) {
        this.inputElement.setValue(data)
    }
}