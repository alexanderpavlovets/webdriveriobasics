// Redefined select element class 

export class MySelectField {
    selectElement: WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>
        & WebdriverIO.RawResult<WebdriverIO.Element>

    constructor(selectElement: WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>
        & WebdriverIO.RawResult<WebdriverIO.Element>) {
        this.selectElement = selectElement
    }


    setData(data: string): void {
        this.selectElement.selectByAttribute('label', data)
    }

    getData(): string {
        return this.selectElement.getValue()
    }
}