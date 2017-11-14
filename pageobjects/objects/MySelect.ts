import { MyElementType } from "./MyElementType";

// Redefined select element class 
export class MySelectField {
    selectElement: MyElementType

    constructor(selectElement: MyElementType) {
        this.selectElement = selectElement
    }


    setData(data: string): void {
        this.selectElement.selectByAttribute('label', data)
    }

    getData(): string {
        return this.selectElement.getValue()
    }
}