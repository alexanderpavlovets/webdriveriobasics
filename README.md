# webdriveriobasics
* Add 'report --continue-on-error' to 'test' script in package.json, to launch allure, if necessary
* | - parallel run of npm scripts, || - one by one run of npm scripts- Won't work on MAC - using 'npm-run-all'



#TODO:
* + create Navigator class
* + приведение типов - casting TS
* + all iputs and selects are pageObjs 
* + compare 2 obj without JSON
* + all tabs are connected to 'active' 
* + mine: rewrite static methods of Navigator - to have good locators and conditions (now - almost spike)
* + mine: rewrite date generator with /momentjs.com - continue with momentRandom
* + create objIterator of get/set data for WrestlerPage
* mine: write some tests 
* + seleneium standalone - dosc/change/install - set own server
* + selenium grid 


#Questions:
* ? what for do i need abstract class Page ?
* ? difference between devdependencies and dependencies - npm 
* + ? make browser window a little bit bigger - works with selenium standalone only. service - not working


#Info:
* TypeScript/JavaScript: //#region and //#endregion and //region and //endregion
* Verbose - log level to understand what returns as element
* GRID: run standalone or GRID, via npm scripts before usage. Selenium-standalone npm package should be setup -g https://www.npmjs.com/package/selenium-standalone
