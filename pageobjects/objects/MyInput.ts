// Redefined input element class 

export class MyInputField {
    inputElement: WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>
        & WebdriverIO.RawResult<WebdriverIO.Element>

    constructor(inputElement: WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>
        & WebdriverIO.RawResult<WebdriverIO.Element>) {
        this.inputElement = inputElement
    }


    setData(data: string): void {
        this.inputElement.setValue(data)
    }

    getData(): string {
        return this.inputElement.getValue()
    }
}