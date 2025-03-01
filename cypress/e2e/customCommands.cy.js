import login from '../support/commands.js'
import userDetails from '../fixtures/userDetails.json'
describe('Login using Custom Command', ()=>{
    it('Calling the custom Command without parameter', ()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.get('.signup-form > h2').should('be.visible').then(()=>{
            cy.login()
        })
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

    })
    it('Calling the custom Command with parameter', ()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.get('.signup-form > h2').should('be.visible').then(()=>{
            cy.login(userDetails.email+'@gmail.com', userDetails.password)
            cy.get('.login-form > form > p').invoke('text').should('contain', 'Your email or password is incorrect!')
        })

    })
})