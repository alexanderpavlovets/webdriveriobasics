# webdriveriobasics
* Add 'report --continue-on-error' to 'test' script in package.json, to launch allure, if necessary


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
* + Docker - selenium grid 
* + Docker compose
* + Add resourses to docker - it is really slow when 2 browsers are run with docker-grid. By default containers use (inf) - whatever they need 


#Questions:
* ? what for do i need abstract class Page ?
* ? difference between devdependencies and dependencies - npm 
* + ? make browser window a little bit bigger - works with selenium standalone only. service - not working
* ? return this.tHead.$$('th').forEach((element) => {return element.getText()}); WTF ???


#Info:
* TypeScript/JavaScript: //#region and //#endregion and //region and //endregion
* Verbose - log level to understand what returns as element
* GRID: run standalone or GRID, via npm scripts before usage. Selenium-standalone npm package should be setup -g https://www.npmjs.com/package/selenium-standalone
* Docker - use docker-compose - file is in the root, NOT USE VSCODE console - won't work
