import { RawResult } from "webdriverio";

export class MyInputField {
    inputElement: WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>
        & WebdriverIO.RawResult<WebdriverIO.Element>

    constructor(inputElement: WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>
        & WebdriverIO.RawResult<WebdriverIO.Element>) {
        this.inputElement = inputElement
    }

    setData(data: string) {
        this.inputElement.setValue(data)
    }
}

// Add +1 overload to parameter type