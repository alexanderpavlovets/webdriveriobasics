import { Page } from '../Page.page' // for inheritance
import { frameTimeout } from '../../test_data/frameTimeouts' // for custom wait of elements
import { MainPage } from '../Main.page'

export class Navigator extends Page{
    constructor(){
        super()
    }
    mainPage = new MainPage()


    // static methods of Navigator class
    static isLoginPageOpened(): boolean { 
        let loginForm = browser.$('.panel,.panel-primary')
        return loginForm.waitForVisible(frameTimeout.m) // waiting for login form to be visible
    }

    static isMainPageOpened() :boolean { 
        let header = browser.$('ul.nav-tabs')
        return header.waitForVisible(frameTimeout.m)   // waiting for header to be visible
    }

    static isWrestlerPageOpened(): boolean{
        let wrestlerInfoForm = browser.$('div.col-sm-8')
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
    openLoginPage() {
        super.open()
        browser.waitUntil(()=>{return Navigator.isLoginPageOpened()}, frameTimeout.l, 'Login page is not opened')
    }

    openMainPage() {
        this.firstTabWrestlers.click()
        browser.waitUntil(()=>{ return Navigator.isMainPageOpened() }, frameTimeout.l, 'Main page is not opened')
    }

    openNewWrestlerTab(){
        this.mainPage.newWrestlerButton.click()
        browser.waitUntil(()=>{ return Navigator.isWrestlerPageOpened() }, frameTimeout.l, '"New Wrestler" tab is not opened')
    }

    closeCurrentActiveTab(): void {
        this.closeButtonOfCurrentActiveTab.click()
    }
}