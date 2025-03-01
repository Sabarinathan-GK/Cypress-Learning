describe('Handling JS Popups Using Cypress', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    
    it('Handling Javascript Alert', ()=>{
        cy.get('[onclick="jsAlert()"]').click()
        cy.on('window:alert', ($alertMessage) =>{
            expect($alertMessage).contains('I am a JS Alert')
        })
        cy.get('#result').should('contain','You successfully clicked an alert')
        //cypress defaulty accessing the alerts and so it will click OK automatically
    })
    it('Handling Javascript Confirm Alert to OK', ()=>{
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (msg) =>{
            expect(msg).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('contain','You clicked: Ok')
    })
    it('Handling Javascript Confirm Alert to NO', ()=>{
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (msg) =>{
            expect(msg).to.contains('I am a JS Confirm')
            return false // for cancelling the event
        })
        cy.get('#result').should('contain','You clicked: Cancel')
    })
    it('Handling Javascript Prompt ', ()=>{
        
        cy.window().then((promptVal =>{
            cy.stub(promptVal, 'prompt').returns('Sabarinathan')
        }))
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain','You entered: Sabarinathan')
    })
    it.only('Handling Javascript Prompt ', ()=>{
        // cy.window().then(()=> {
        //     return false})
        cy.on('window:prompt', ()=>{
            return false
        }) 
        cy.get('[onclick="jsPrompt()"]').click()     
    })
    it('Authendication Pop up', ()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth : {
                "username" : "admin",
                "password" : "admin"
            }
        })
        cy.get('p').should('contain','Congratulations! You must have the proper credentials.')
    })
    it('Authendication Pop up Method 2', ()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('contain','Congratulations! You must have the proper credentials.')
    })

})