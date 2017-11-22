import { mainPageTableHeaders } from '../../test_data/dataProvider'

// defining the "Wrestlers" table from the main page

export class WrestlersTable{
    tableHeader
    tableRows
    constructor(tHeadRowElement, tBodyRowsElements){
        this.tableHeader = tHeadRowElement
        this.tableRows = tBodyRowsElements
    }


    private getHeaderValuesArray() {  // making array of header values, from <th> elements
        let headerElementsArray = this.tableHeader.$$('th')
        let headerValuesArray = []
        for (let headerCell of headerElementsArray){
            headerValuesArray.push(headerCell.getText())
        }
        return headerValuesArray
        // return this.tHead.$$('th').forEach((element) => {return element.getText()}); WTF ???
        // let fuck = this.tHead.$$('th')
        // let result = fuck.forEach((i)=> i.getText())
        // return result
    }

    private getWrestlerRowValues(tableRowElement) {  // making array of wrestler values, from wrestler <td> elements
        let tableRowElementsArray = tableRowElement.$$('td')
        let tableRowValues = []
        for (let rowCell of tableRowElementsArray){
            tableRowValues.push(rowCell.getText())
        }
        return tableRowValues
    }

    private makeWrestlerObject(headerValuesArray, wrestlerValuesArray){
        let wrestler = {}
        for (let i = 0; i < headerValuesArray.length; i ++) {
            wrestler[headerValuesArray[i]] = wrestlerValuesArray[i]
        }
        return wrestler
    }

    getFirstWrestler(){
        let headerValues = this.getHeaderValuesArray()
        let firstWrestlerValues = this.getWrestlerRowValues(this.tableRows[0])
        return this.makeWrestlerObject(headerValues, firstWrestlerValues)
    }

    getAllWrestlers(){
        let headerValues = this.getHeaderValuesArray()
        let allWrestlersValues = []
        for (let wrestlerRow of this.tableRows) {
            allWrestlersValues.push(this.getWrestlerRowValues(wrestlerRow))
        }
        return allWrestlersValues
    }
}
