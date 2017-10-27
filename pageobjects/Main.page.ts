import { Page } from './Page.page' // importing abstact class Page for inheritance 
import { LoginPage } from './Login.page';


export class MainPage extends Page{
    constructor(){
        super()
    }


    //static methods of MainPage class
    static isOpened() :boolean {
        return browser.waitForVisible('ul.nav-tabs', 3000) // waiting for header to be visible 
    }


    // setting elements via get, in order to make lazy search of the elements:
    // define header with navigation tabs
    get navigationTabsContainer()   {return browser.$('ul.nav-tabs')}
    get openedTabsLIs()             {return this.navigationTabsContainer.$$('li')}
    get lastOpenedTab()             {return this.openedTabsLIs[this.openedTabsLIs.length - 1]}
    get firstTabWrestlers()         {return this.openedTabsLIs[0]}
    get currentAmountOfOpenedTabs() {return this.openedTabsLIs.length}
    

    // define left-side header's elements - search input, "newWrestler" button and "Loading" indicator
    get searchAndNewContainer()     {return browser.$('form div:nth-child(1)')}
    get searchField()               {return this.searchAndNewContainer.$('input')}
    get searchButton()              {return this.searchAndNewContainer.$('button[type="submit"]')}
    get newWrestlerButton()         {return this.searchAndNewContainer.$('button[type="button"]')}
    get loadingIndicator()          {return this.searchAndNewContainer.$('div.spinner-loader')}

    // define right-side filters menu 
    get filtersContainer()          {return browser.$('form div:nth-child(2)')}
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
        let loginPage = new LoginPage()
        loginPage.open()
        loginPage.login() ? console.log('Login success, Main page is opened') : console.log('Login failed!')
    }

    openFormToCreateWrestler(): boolean { // rewrite this shit!!!! Add elements like a human ! 
        let tabsOpenedInitially = this.currentAmountOfOpenedTabs // checking amount of initially opened tabs
        this.newWrestlerButton.click()
        let tabsAmountAfterCreationFormIsOpened = this.currentAmountOfOpenedTabs// checking amount of opened tabs, when +1 tab should appear
        let nameOfLastOpenedTab = this.lastOpenedTab.getText() // getting text of last opened tab - should be "New Wrestler"
        // return true if tabs amount increased by 1 and new opened tab has "NewWrestler" title
        return tabsAmountAfterCreationFormIsOpened - tabsOpenedInitially === 1 && nameOfLastOpenedTab === 'New Wrestler'
    }
}
