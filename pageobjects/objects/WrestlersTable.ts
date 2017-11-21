// defining the "Wrestlers" table from the main page

export class WrestlersTable{
    tHead
    tBody
    constructor(tHeadTag, tBodyTag){
        this.tHead = tHeadTag
        this.tBody = tBodyTag
    }

    get headerValuesArray() { 
        let fuckingArray1 = this.tHead.$$('th')
        let fuckingArray2 = []
        for (let i of fuckingArray1){
            fuckingArray2.push(i.getText())
        }
        return fuckingArray2

        // return this.tHead.$$('th').forEach((element) => {return element.getText()}); WTF ???

        // let fuck = this.tHead.$$('th')
        // let result = fuck.forEach((i)=> i.getText())
        // return result
    } 

    get visibleWrestlersArray(){ 
        let arrayOfWrestlersTRs = this.tBody.$$('tr')
        return arrayOfWrestlersTRs.forEach(wrestlerTr => {
            this.makeWrestler(this.headerValuesArray, wrestlerTr)
        });
    }

    makeWrestler(headerValuesArray, wrestlerTr){
        let wrestlerValuesArray = wrestlerTr.$$('td').array.forEach(element => { return element.getText()});
        let wrestler = {}
        for( let i = 0; i < headerValuesArray.length; i++){
            wrestler[headerValuesArray[i]] = wrestlerValuesArray[i]
        }
        return wrestler
    }

    getFirstWrestler(){
        return this.visibleWrestlersArray[0]
    }
}
