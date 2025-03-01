// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import userDetails from '../fixtures/userDetails.json'

Cypress.Commands.add('login', () =>{
    
    cy.get('input[data-qa="login-email"]').type(userDetails.email+'@gmail.com');
    cy.get('input[data-qa="login-password"]').type(userDetails.password);
    cy.get('button[data-qa="login-button"]').click();
})


Cypress.Commands.add('loginWp', (userName, passWord)=>{
    cy.get('input[data-qa="login-email"]').type(userName+'@gmail.com');
    cy.get('input[data-qa="login-password"]').type(passWord);
    cy.get('button[data-qa="login-button"]').click();
})

Cypress.Commands.add('logout', ()=>{
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

Cypress.Commands.add('deleteAccount',()=>{
    cy.get('a[href="/delete_account"]').click();
        cy.get('b').invoke('text').then((delMsg) => {
            expect(delMsg).equal('Account Deleted!')
        })
        cy.get('[data-qa="continue-button"]').click()
})

Cypress.Commands.add('loginSession', (userName, passWord)=>{
    cy.session([userName, passWord], ()=>{
        cy.visit('/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('input[data-qa="login-email"]').type(userName+'@gmail.com');
        cy.get('input[data-qa="login-password"]').type(passWord);
        cy.get('button[data-qa="login-button"]').click();
    },
    {
        cacheAcrossSpecs : true //restroing the cache across the spec
        //without this it will consider the specfic spec
    })
})