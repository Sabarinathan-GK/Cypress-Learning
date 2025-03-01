import userData from '../fixtures/userDetails.json'
import { signupMethod } from '../support/loginSignup'

describe('login without Session key', ()=>{
    beforeEach(()=>{
        cy.intercept('GET' , '/login').as('login')
        cy.visit('/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.wait('@login')
                .its('response.statusCode')
                .should('eq', 200)
            cy.url().should('contains', '/login')
        signupMethod()     
    })
    cy.session()
    it('Delete Account', ()=>{
        cy.deleteAccount()
    })
    
})