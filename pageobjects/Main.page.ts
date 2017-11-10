import { MyInputField } from "./objects/MyInput" // for custom input elements
import { MySelectField } from "./objects/MySelect" // for custom select elements


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


    // methods of MainPage class

}
