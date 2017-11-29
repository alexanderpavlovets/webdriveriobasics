// Abstract class Page
export abstract class Page {

    constructor() {
    }

    // confirmation modal-dialog
    get confirmationModal() { return browser.$('div.modal-content') }
    get confirmYesButton() { return this.confirmationModal.$('button.btn.btn-success') }
    get confirmNoButton() { return this.confirmationModal.$('button.btn.btn-warning') }

    open() {
        browser.url('')
    }
}


