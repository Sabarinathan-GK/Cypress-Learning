describe('try catch', () =>{
    it('launching website', ()=>{
        try{
            cy.visit('www.google.com')
            cy.get('#submit')
        }catch(error){
            cy.log(error.Message)
        }
    })
})