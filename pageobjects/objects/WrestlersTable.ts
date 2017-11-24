import { mainPageTableHeaders, IWrestlerFromMainTable } from '../../test_data/dataProvider'
import { MyElementType } from './MyElementType';

// defining the "Wrestlers" table from the main page

export class WrestlersTable{
    tableHeader = mainPageTableHeaders
    tableRows
    constructor(wrestlersAsTableRowsElements){
        this.tableRows = wrestlersAsTableRowsElements
    }

    private getWrestlerData(wrestlerRow) {  // making array of wrestler values, from wrestler <td> elements
        let wrestlerRowAsWebElementsArray = wrestlerRow.$$('td')
        let wrestlerDataArray = []
        for (let eachCell of wrestlerRowAsWebElementsArray){
            wrestlerDataArray.push(eachCell.getText())
        }
        return wrestlerDataArray
    }

    private makeWrestlerObject(headerDataArray, wrestlerDataArray): IWrestlerFromMainTable{ // combining header and wrestler data into object
        let wrestler = {}
        for (let i = 0; i < headerDataArray.length; i ++) {
            wrestler[headerDataArray[i]] = wrestlerDataArray[i]
        }
        return wrestler as IWrestlerFromMainTable
    }

    getFirstWrestler(): IWrestlerFromMainTable{
        let firstWrestlerData = this.getWrestlerData(this.tableRows[0])
        return this.makeWrestlerObject(this.tableHeader, firstWrestlerData)
    }

    getWrestlerByIndex(wrestlerIndex: number): IWrestlerFromMainTable{
        let wrestlerData = this.getWrestlerData(this.tableRows[wrestlerIndex])
        return this.makeWrestlerObject(this.tableHeader,wrestlerData)
    }

    openWrestlerByIndex(wrestlerIndex: number): void{
        this.tableRows[wrestlerIndex].click()
    }

}
