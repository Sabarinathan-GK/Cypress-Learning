describe('Launching the base Url', ()=>{
    it('Visiting the base Url', ()=>{
        cy.visit('/');
    })
    it('checking the text with expected text', ()=>{
        cy.visit('/');
        cy.get('.title.text-center').contains('Features Items')
        }) 
})