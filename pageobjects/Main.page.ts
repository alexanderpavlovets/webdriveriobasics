import { MyInputField } from "./objects/MyInput" // for custom input elements
import { MySelectField } from "./objects/MySelect" // for custom select elements
import { WrestlersTable } from "./objects/WrestlersTable";


export class MainPage {
    constructor(){
    }


    // setting elements via get, in order to make lazy search of the elements:    
    // define left-side header's elements - search input, "newWrestler" button and "Loading" indicator
    get searchField()               {return new MyInputField(browser.$('input[ng-model="searchFor"]'))}
    get searchButton()              {return browser.$('button[ng-click="searchWrestler(searchFor)"]')}
    get newWrestlerButton()         {return browser.$('button[ng-click="newWrestler()"]')}
    get loadingSearchIndicator()    {return browser.$('div[ng-show="loading"]')}

    // define right-side filters menu 
    get filtersContainer()          {return browser.$('form div.form-group.pull-right')}
    get resetFiletersButton()       {return this.filtersContainer.$('button[ng-click="resetFilters()"]')}
    get regionsFilter()             {return new MySelectField(this.filtersContainer.$('select[ng-model="filters.fregion"]'))}
    get fstFilter()                 {return new MySelectField(this.filtersContainer.$('select[ng-model="filters.ffst"]'))}
    get yearsFilter()               {return new MySelectField(this.filtersContainer.$('select[ng-model="filters.fyear"]'))}
    get photoFilter()               {return new MySelectField(this.filtersContainer.$('select[ng-model="filters.fphoto"]'))}
    get stylesFilter()              {return new MySelectField(this.filtersContainer.$('select[ng-model="filters.fstyle"]'))}

    // define "results per page" picker, and pagination
    get paginationContainer()       {return browser.$('div.paging')}
    get shownResultsPerPageFilter() {return new MySelectField(this.paginationContainer.$('select[ng-model="perPage"]'))}
    get pagesArray()                {return this.paginationContainer.$$('a').slice(2,-2)} // removing << < > >> pointers

    //define table of shown wrestlers
    get wrestlersTableHeader()      { return browser.$('thead tr')} // header row
    get wrestlersTableBody()        { return browser.$$('tbody tr')} // body rows 


    // methods of MainPage class
    get firstWrestler(){
        let wrestlerTable = new WrestlersTable(this.wrestlersTableBody)
        return wrestlerTable.getFirstWrestler()
    }

}
