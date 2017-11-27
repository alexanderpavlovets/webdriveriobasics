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
* try to fix FF with Docker 
* + seleneium standalone - dosc/change/install - set own server
* + selenium grid 
* + Docker - selenium grid 
* + Docker compose
* + Add resourses to docker - it is really slow when 2 browsers are run with docker-grid. By default containers use (inf) - whatever they need 
* + use 'chance' lib for test data generation. 
* + for modal dialog - with accept/decline only, maybe in basePage (а-ля this.getModal ...) - use in navigator!!!!
* WDIO file input cases - look and implement for photos/docs upload
* download vanilla .jar selenium - and nodes, create shell-script (not .bat) to run it, with variables (not just 3 rows)
add here also 
* Linux commands - atleast basics for console
* Linux the same as windows .jar config with automated download (according to provided vars with versions HUB/Node/Drivers)
* SauceLab or BrowserStack - make sure, that FF is working (talk to Anton). Maybe use WDIO services.
* Pull all frame into Docker image, run it on create Ubuntu inside own container
* search tests by fio and number 
* mine "throw"/"Throws" - how to handle mistake with this features
* + mine - rewrite WrestlersTable, to have all locators (now they are getted from mainPage - stupid )



#Questions:
* + ? return browser.$$('a').forEach((element) => {return element.getText()}); WTF ??? - try to cast to MyElem and then .forEach()
* ? maybe 1 spec file should contain 1 it - it will increase readablity. BUT may reduce maintainability (changes)  


#Info:
* TypeScript/JavaScript: //#region and //#endregion and //region and //endregion
* Verbose - log level to understand what returns as element
* GRID: run standalone or GRID, via npm scripts before usage. Selenium-standalone npm package should be setup -g https://www.npmjs.com/package/selenium-standalone
* Docker - use docker-compose - file is in the root, NOT USE VSCODE console - won't work
