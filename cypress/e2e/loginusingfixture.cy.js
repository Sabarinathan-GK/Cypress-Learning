import { loginMethod, signupMethod } from "../support/loginSignup";

describe('Using fixture method to fetch the testdata', ()=>{
    beforeEach(()=>{
        cy.fixture("userDetails").then( function (loginTestData){
            this.loginTestData = loginTestData;
        })
        cy.fixture("userDetails.json").as('details')
    })

    it.skip('Inline Fixture', ()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        signupMethod()
        cy.wait(10000)
        cy.logout()
        cy.fixture("userDetails").then((inlineTestData)=>{
            var email = inlineTestData.email;
            var password = inlineTestData.password;
            loginMethod(email, password)
        })
        cy.logout()

    })

    it.skip('global before each hook testdata', function (){
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        loginMethod(this.loginTestData.email, this.loginTestData.password)
        cy.logout()
    })

    it.skip('fixtures using disc path',()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.fixture("../fixtures/userDetails.json").then((inlineTestData)=>{
            var email = inlineTestData.email;
            var password = inlineTestData.password;
            loginMethod(email, password)
        })
        cy.logout()
    })
    
    it.only('Multiple fixtures using disc path',()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.fixture("../fixtures/usersPasswords.json").then((loginTestData)=>{
            var email = loginTestData[usersPasswords][validUsers][email];
            var password = loginTestData[usersPasswords][validUsers][password];
            loginMethod(email, password)
        })
        cy.logout()
    })

    it.skip('using alias to fetch the fixtures', () =>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.get('@details').then( function (loginTestData){
            loginMethod(loginTestData.email, loginTestData.password)
        })
        cy.deleteAccount()
    })
})