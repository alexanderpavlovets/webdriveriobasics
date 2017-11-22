import { Page } from '../Page.page' // for inheritance
import { frameTimeout } from '../../test_data/frameTimeouts' // for custom wait of elements
import { MainPage } from '../Main.page'

export class Navigator extends Page{
    constructor(){
        super()
    }
    mainPage = new MainPage() // instance of MainPage for opening "New Wrestler" tab and existing wrestlers


    // static methods of Navigator class
    static isLoginPageOpened(): boolean { 
        let loginForm = browser.$('div.panel,.panel-primary')
        let loginHeaderText: string = loginForm.$('div.panel-heading.ng-binding').getText()
        let isLoginFormVisible: boolean = loginForm.waitForVisible(frameTimeout.m)
        let isLoginHeaderShown: boolean = loginHeaderText === 'Login'
        return isLoginFormVisible && isLoginHeaderShown 
    }

    static isMainPageOpened() :boolean { 
        let searchContainer = browser.$('form div.form-group')
        let filtersContainer = browser.$('form div.form-group.pull-right')
        let isSearchContainerVisible = searchContainer.waitForVisible(frameTimeout.m)
        let isFiltersContainerVisible = filtersContainer.waitForVisible(frameTimeout.m)
        return isSearchContainerVisible && isFiltersContainerVisible
    }

    static isWrestlerPageOpened(): boolean{
        let wrestlerInfoForm = browser.$('div.active form[name="fWrestler"]')
        let loadingCurrentTabIndicator = browser.$('ul.nav-tabs li.active div.spinner-loader')
        let isWrestlerFormVisible = wrestlerInfoForm.waitForVisible(frameTimeout.m)
        let isLoadingIndicatorHidden = loadingCurrentTabIndicator.waitForVisible(frameTimeout.l, true)
        return  isWrestlerFormVisible && isLoadingIndicatorHidden 
    }


    // setting elements via get, in order to make lazy search of the elements
    get navigationTabsContainer()   { return browser.$('ul.nav-tabs')}
    get openedTabsLIs()             { return this.navigationTabsContainer.$$('li')}
    get lastOpenedTab()             { return this.openedTabsLIs[this.openedTabsLIs.length - 1]}
    get firstTabWrestlers()         { return this.openedTabsLIs[0]}
    get currentAmountOfOpenedTabs() { return this.openedTabsLIs.length}
    get currentActiveTab()          { return this.navigationTabsContainer.$('li.active') }
    get closeButtonOfCurrentActiveTab() { return this.currentActiveTab.$('span.glyphicon.glyphicon-remove') }
    get loadingCurrentTabIndicator(){ return this.currentActiveTab.$('div[ng-show="tab.loading"]') }


    // methods of Navigator class
    waitForLoginPageOpened(): void {
        browser.waitUntil(() => Navigator.isLoginPageOpened(), frameTimeout.l, 'Login page is not opened')
    }

    waitForMainPageOpened(): void {
        browser.waitUntil(()=>Navigator.isMainPageOpened(), frameTimeout.l, 'Main page is not opened')
    }

    waitForWrestlerPageOpened(): void {
        browser.waitUntil(()=> Navigator.isWrestlerPageOpened(), frameTimeout.l, '"Wrestler" page is not opened')
    }

    openLoginPage(): void {
        super.open()
        this.waitForLoginPageOpened()
    }

    openMainPage(): void {
        this.firstTabWrestlers.click()
        this.waitForMainPageOpened()
    }

    openNewWrestlerTab(): void {
        this.mainPage.newWrestlerButton.click()
        this.waitForWrestlerPageOpened()
    }

    closeCurrentActiveTab(): void {
        this.closeButtonOfCurrentActiveTab.click()
    }

    openWrestlerByIndex(wrestlerIndex){
        this.mainPage.wrestlersTableBody[wrestlerIndex].click()
        this.waitForWrestlerPageOpened()
    }
}