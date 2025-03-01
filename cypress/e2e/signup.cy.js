import {loginSignup} from '.././support/loginSignup'
describe('Sign Up Activity', () => {
  let name = "NaMuthukumar G";
  let email = `abckde${Math.random()}`;
  let password = "Sasabari@26";
  let days = 26;
  let month = 9;
  let year = "1999";
  let firstName = "NaMuthukumar";
  let lastName = "G";
  let company = "CTS";
  let address = " NO 8 Baja Street";
  let addresstwo = "T Nagar";
  let country = "India";
  let state = "Tamil Nadu";
  let city = "Chennai";
  let zipCode = 62003;
  let mobileNumber = 9877878875;
  let creationTitle = "Congratulations! Your new account has been successfully created!";
  let price = 1000;
  
  before('Base Url',()=>{
    cy.visit('/')
  })
  it.skip('User Sign up on the Automation Excerise Website', () => {

    // Sign up the website
    cy.get('a[href="/login"]').click();
    cy.get('.signup-form > h2').should('be.visible').then(()=>{
        cy.get('input[data-qa="signup-name"]').type(name);
        cy.get('input[data-qa="signup-email"]').type(email+'@gmail.com');
        cy.get('button[data-qa="signup-button"]').click();
    })

    cy.get('.signup-form > h2').should('be.visible').within(()=>{
      cy.get('input[data-qa="signup-name"]').type(name);
      cy.get('input[data-qa="signup-email"]').type(email+'@gmail.com');
      cy.get('button[data-qa="signup-button"]').click();
    })
    
    // Entering the User Details
    cy.get('#id_gender1').click();
    cy.get('#password').type(password);
    cy.get('select[name="days"]').select(days);
    cy.get('select[name="months"]').select(month);
    cy.get('#years').select(year);
    cy.get('input[name="newsletter"]').click();
    cy.get('input[name="optin"]').click();
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(address);
    cy.get('[data-qa="address2"]').type(addresstwo);
    cy.get('[data-qa="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipCode);
    cy.get('[data-qa="mobile_number"]').type(mobileNumber);

    // Create the Account
    cy.get('[data-qa="create-account"]').click();

    cy.get('.col-sm-9').should('contain',creationTitle);
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a')
  })
  before('Base Urls',()=>{
    cy.visit('/')
  })
  it.skip('Login Functionality',()=>{
    cy.visit('/')
    cy.get('a[href="/login"]').click();
    // login(email, password);
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
    cy.get('a[href="/products"]').click();
    cy.get('input[name="search"]').type("Sleeveless Dress");
    cy.get('#submit_search').click();
    cy.get('.productinfo > .btn').click();
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('h4 > a').should('contain',"Sleeveless Dress")
    cy.get('.cart_price > p').should("contain", price)
    // cy.get('.cart_total_price').then(($pprice)=>{
    //   expect($pprice).to.equal(price)
    // })
    cy.get('.col-sm-6 > .btn').click()
    cy.get('.modal-footer > .btn').click()
    // cy.get('a[href="/delete_account"]').click()
  })
  it('Explicit Assertions', ()=>{
    // cy.get('/')
    cy.get('.feature_items > .title').invoke('text').then((titleName) => {
      cy.log(titleName)
      cy.pause()
      expect(titleName).to.equal("Features Items")
    })
  })
})