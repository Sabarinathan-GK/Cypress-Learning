describe('Validating the Hidden Elements', () =>{
    it('Launching the url and check for the hidden element', () =>{
        cy.visit('/')
        cy.get('[name="csrfmiddlewaretoken"]').click({force:true}).type('abcd',{force:true});
        cy.get('#subscribe').click()
    })
    it.skip('Showing the hidden element',() => {
        cy.get('div.container')
          .should('be.hidden')
          .invoke('show')
          .should('be.visible')
          .find('input')
          .type('Cypress is greate')
    })
})