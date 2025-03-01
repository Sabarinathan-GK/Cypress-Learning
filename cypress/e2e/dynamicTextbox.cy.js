describe('Validating the Dynamic textbox', ()=>{
    it('Launching the Website and validate the dynamic textbox', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type("India")
    })
})