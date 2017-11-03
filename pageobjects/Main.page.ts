import { Page } from './Page.page' // importing abstact class Page for inheritance 
import { frameTimeout } from '../test_data/frameTimeouts' // importing frameTimeouts for custom wait of elements


export class MainPage extends Page{
    constructor(){
        super()
    }


    //static methods of MainPage class
    static isOpened() :boolean { 
        let header = browser.$('ul.nav-tabs')
        return header.waitForVisible(frameTimeout.m)   // waiting for header to be visible
    }


    // setting elements via get, in order to make lazy search of the elements:
    // define header with navigation tabs
    get navigationTabsContainer()   { return browser.$('ul.nav-tabs')}
    get openedTabsLIs()             { return this.navigationTabsContainer.$$('li')}
    get lastOpenedTab()             { return this.openedTabsLIs[this.openedTabsLIs.length - 1]}
    get firstTabWrestlers()         { return this.openedTabsLIs[0]}
    get currentAmountOfOpenedTabs() { return this.openedTabsLIs.length}
    get currentActiveTab()          { return this.navigationTabsContainer.$('li.active') }
    get loadingCurrentTabIndicator(){ return this.currentActiveTab.$('div[ng-show="tab.loading"]') }
    
    // define left-side header's elements - search input, "newWrestler" button and "Loading" indicator
    get searchField()               {return browser.$('input[ng-model="searchFor"]')}
    get searchButton()              {return browser.$('button[ng-click="searchWrestler(searchFor)"]')}
    get newWrestlerButton()         {return browser.$('button[ng-click="newWrestler()"]')}
    get loadingSearchIndicator()    {return browser.$('div[ng-show="loading"]')}

    // define right-side filters menu 
    get filtersContainer()          {return browser.$('form div.form-group.pull-right')}
    get resetFiletersButton()       {return this.filtersContainer.$('button[ng-click="resetFilters()"]')}
    get regionsFilter()             {return this.filtersContainer.$('select[ng-model="filters.fregion"]')}
    get fstFilter()                 {return this.filtersContainer.$('select[ng-model="filters.ffst"]')}
    get yearsFilter()               {return this.filtersContainer.$('select[ng-model="filters.fyear"]')}
    get photoFilter()               {return this.filtersContainer.$('select[ng-model="filters.fphoto"]')}
    get stylesFilter()              {return this.filtersContainer.$('select[ng-model="filters.fstyle"]')}

    // define "results per page" picker, and pagination
    get paginationContainer()       {return browser.$('div.paging')}
    get shownResultsPerPageFilter() {return this.paginationContainer.$('select[ng-model="perPage"]')}
    get pagesArray()                {return this.paginationContainer.$$('a').slice(2,-2)} // removing << < > >> pointers


    // methods of MainPage class
    open(): void {
        this.firstTabWrestlers.click()
    }

    openNewWrestlerTab(): void { 
        this.newWrestlerButton.click()
    }
}
