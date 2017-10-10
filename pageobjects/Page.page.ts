// Abstract class Page

export abstract class Page{
    name: string
    constructor(name){
        this.name = name
    }

    open(){
        console.log('opened' + this.name)
    }
}
