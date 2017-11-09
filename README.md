# webdriveriobasics
* Add 'report --continue-on-error' to 'test' script in package.json, to launch allure, if necessary
* | - parallel run of npm scripts, || - one by one run of npm scripts- Won't work on MAC - using 'npm-run-all'
* continue describing the Wrestler Class - think about it's usage

# ToDo after first review: 
* все страницы наслед от одной и один раз 
* тест должен говорить за себя - всё логично и понятно 
* логин - забудь про него:)
* тесты пиши тольео те, что нужны 
* структура - дата провайдер
 
* + iterate over objects
* Interface can have optional property - try to create Wrestler with only required fields
* + why wrestler is always equal in all tests - because obj is created once

#TODO:
* + create Navigator class
* + приведение типов - casting TS
* all iputs and selects are pageObjs 
* + compare 2 obj without JSON
* + all tabs are connected to 'active' 
* + mine: rewrite static methods of Navigator - to have good locators and conditions (now - almost spike)
* + mine: rewrite date generator with /momentjs.com - continue with momentRandom
* rewrite objIterator - maybe standalone class

* ? mine: make browser window a little bit bigger - weird, but impossible.
/** @deprecated in favour of /session/{session id}/window/rect */ - read it later
* ? what for do i need abstract class Page ? 

* TypeScript/JavaScript: //#region and //#endregion and //region and //endregion
