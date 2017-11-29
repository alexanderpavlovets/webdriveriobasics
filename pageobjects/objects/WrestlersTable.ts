import { wrestlersTableHeader, IWrestlerFromMainTable } from '../../test_data/dataProvider'
import { MyElementType } from './MyElementType';

// defining the "Wrestlers" table from the main page

export class WrestlersTable {
    constructor() {
    }

    //define table of shown wrestlers
    get wrestlersTableHeader() { return browser.$('thead tr') } // header row
    get wrestlersTableBody() { return browser.$$('tbody tr') } // body rows 


    private getWrestlerData(wrestlerRow) {  // making array of wrestler values, from wrestler <td> elements
        let wrestlerRowAsWebElementsArray = wrestlerRow.$$('td')
        let wrestlerDataArray = []
        for (let eachCell of wrestlerRowAsWebElementsArray) {
            wrestlerDataArray.push(eachCell.getText())
        }
        return wrestlerDataArray
    }

    private makeWrestlerObject(wrestlerDataArray): IWrestlerFromMainTable { // combining header and wrestler data into object
        let wrestler = {}
        for (let i = 0; i < wrestlersTableHeader.length; i++) {
            wrestler[wrestlersTableHeader[i]] = wrestlerDataArray[i]
        }
        return wrestler as IWrestlerFromMainTable
    }

    // methods od WrestlersTable class
    getFirstWrestlerObj(): IWrestlerFromMainTable {
        let firstWrestlerData = this.getWrestlerData(this.wrestlersTableBody[0])
        return this.makeWrestlerObject(firstWrestlerData)
    }

    getWrestlerObjByIndex(wrestlerIndex: number): IWrestlerFromMainTable {
        let wrestlerData = this.getWrestlerData(this.wrestlersTableBody[wrestlerIndex])
        return this.makeWrestlerObject(wrestlerData)
    }

    openWrestlerByIndex(wrestlerIndex: number): void {
        this.wrestlersTableBody[wrestlerIndex].click()
    }
}
