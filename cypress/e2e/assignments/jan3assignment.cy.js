import userDetails from '../../fixtures/userDetails.json'


describe('Jan 3 Assignment login using custom commands',() => {
    let creationTitle = "Congratulations! Your new account has been successfully created!";
    let price = 1000;
    it('Sign in Functionality',() => {
        cy.visit('/')
        cy.get('a[href="/login"]').click();
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
    })
    it('Logout Functionality', ()=>{
        cy.visit('/')
        cy.get('a[href="/login"]').click();
        cy.login()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
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