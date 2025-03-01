describe('Intercept Concepts' , ()=>{
    it('Login using Get method', ()=>{
            cy.visit('/')
            cy.intercept('GET' , '/view_cart').as('viewcart')
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.wait('@viewcart')
                .its('response.statusCode')
                .should('eq', 201)
            cy.url().should('contains', '/view_cart')
    })
})