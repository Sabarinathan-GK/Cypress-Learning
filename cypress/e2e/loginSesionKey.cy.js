import userData from '../fixtures/userDetails.json'
import { signupMethod } from '../support/loginSignup'

describe('login without Session key', ()=>{
    beforeEach(()=>{
        //cy.visit('/')
        //cy.get('.shop-menu > .nav > :nth-child(4) > a').click()     
        cy.loginSession(userData.email, userData.password)
    })
    it('Product Search', ()=>{
        cy.visit('/')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('#search_product').type('Men')
        cy.get('#submit_search').click()
        cy.get('.product-image-wrapper > .single-products > .productinfo > p').then(($searchedProduct) =>{
            expect($searchedProduct).to.have.length(4)
            cy.log($searchedProduct.eq(0).text())
            expect($searchedProduct.eq(0).text()).to.be.contains('Men')
            cy.log($searchedProduct.eq(1).text())
            expect($searchedProduct.eq(1).text()).to.not.contains('Men')
            cy.log($searchedProduct.eq(2).text())
            expect($searchedProduct.eq(2).text()).to.not.contains('Men')
            cy.log($searchedProduct.eq(3).text())
            expect($searchedProduct.eq(3).text()).to.be.contains('MEN')
        })
    })
    it('Delete Account', ()=>{
        cy.visit('/')
        cy.deleteAccount()
    })
    
})