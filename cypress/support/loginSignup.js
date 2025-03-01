//Generic Method using Anonymous Function
import userDetails from '../fixtures/userDetails.json'

export const loginMethod = (email, password)=>{
        cy.get('input[data-qa="login-email"]').type(email+'@gmail.com');
        cy.get('input[data-qa="login-password"]').type(password);
        cy.get('button[data-qa="login-button"]').click();
    }

export const signupMethod = () =>{
    cy.get('.signup-form > h2').should('be.visible').then(()=>{
        cy.get('input[data-qa="signup-name"]').type(userDetails.name);
        cy.get('input[data-qa="signup-email"]').type(userDetails.email+'@gmail.com');
        cy.log(userDetails.email+'@gmail.com')
        cy.get('button[data-qa="signup-button"]').click();
    })
    // Entering the User Details
    cy.get('input[data-qa="name"]').should('have.value',userDetails.name)
    cy.get('input[data-qa="email"]').should('have.value',userDetails.email+'@gmail.com')
    cy.get('#id_gender1').click();
    cy.get('#password').type(userDetails.password);
    cy.log(userDetails.password)
    cy.get('select[name="days"]').select(userDetails.days);
    cy.get('select[name="months"]').select(userDetails.month);
    cy.get('#years').select(userDetails.year);
    cy.get('input[name="newsletter"]').click();
    cy.get('input[name="optin"]').click();
    cy.get('[data-qa="first_name"]').type(userDetails.firstName);
    cy.get('[data-qa="last_name"]').type(userDetails.lastName);
    cy.get('[data-qa="company"]').type(userDetails.company);
    cy.get('[data-qa="address"]').type(userDetails.address);
    cy.get('[data-qa="address2"]').type(userDetails.addresstwo);
    cy.get('[data-qa="country"]').select(userDetails.country);
    cy.get('[data-qa="state"]').type(userDetails.state);
    cy.get('[data-qa="city"]').type(userDetails.city);
    cy.get('[data-qa="zipcode"]').type(userDetails.zipCode);
    cy.get('[data-qa="mobile_number"]').type(userDetails.mobileNumber);

    // Create the Account
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click()

}