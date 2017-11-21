import { MyElementType } from "./MyElementType";

// Redefined input element class 
export class MyInputField {
    inputElement: MyElementType

    constructor(inputElement: MyElementType) {
        this.inputElement = inputElement
    }


    setData(data: string): void {
        this.inputElement.setValue(data)
    }

    getData(): string {
        return this.inputElement.getValue()
    }
}