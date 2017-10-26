import { MainPage } from '../pageobjects/Main.page' // importing MainPage class, for creating instance of the page


describe('Wrestler CRUD test', ()=>{

    let mainPage = new MainPage() // Creating instance of MainPage class

    it('Create', ()=>{
        mainPage.open()
        mainPage.openFormToCreateWrestler()
    })
})