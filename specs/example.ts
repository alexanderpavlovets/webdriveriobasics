
describe('1', ()=>{
    it('1', ()=>{
        browser.url('')
        
        expect(1).toBe(1)
    })
})

describe('2', ()=>{
    it('2', ()=> {
        browser.url('')
        expect(true).toBe(false)
    })
})