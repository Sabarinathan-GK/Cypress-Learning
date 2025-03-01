import userDetails from '../../fixtures/userDetails.json'
import { signupMethod } from '../../support/loginSignup';


describe('Jan 6 Assignment logout and delete account using custom commands and signup with generic method',() => {
    let creationTitle = "Congratulations! Your new account has been successfully created!";
    let price = 1000;
    it('Sign in Functionality',() => {
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        signupMethod()
        cy.get('.col-sm-9').should('contain',creationTitle);
        cy.get('[data-qa="continue-button"]').click();
    })
    it('Login functionality', ()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.login()
        cy.get('b').invoke('text').then((loginUser) => {
            expect(loginUser).to.equal(userDetails.name)
        })
        cy.log('Login Successfully')
        cy.logout()
    })
    it('Add Product to Cart', () => {
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.login()
        cy.get('a[href="/products"]').click();
        cy.get('input[name="search"]').type("Sleeveless Dress");
        cy.get('#submit_search').click();
        cy.get('.productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('h4 > a').should('contain',"Sleeveless Dress")
        cy.get('.cart_price > p').should("contain", price)
        cy.get('.col-sm-6 > .btn').click()
    })
    it('Delete Account Functionality', ()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.login()
        cy.get('a[href="/delete_account"]').click();
        cy.get('b').invoke('text').then((delMsg) => {
            expect(delMsg).equal('Account Deleted!')
        })
        cy.get('[data-qa="continue-button"]').click()
    })
})