describe('Handling Popups Using Cypress', ()=>{
    it.only('Date Picker Method 1', ()=>{
        cy.visit('https://www.hyrtutorials.com/p/calendar-practice.html')
        cy.get('#datepickers > tbody > :nth-child(1) > :nth-child(1)').contains('td' , 'First Date').should('be.visible')
        // cy.get('.hasDatepicker').click()
        // cy.get('a["title=Prev"]').click()
    })
    it('Date Picker Method 2', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com')
        cy.get('#male').click()
        cy.get('#txtDate').click()
        cy.get('.ui-datepicker-month').select('Aug')
        cy.get('.ui-datepicker-year').select('2029')
        cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
        cy.get('#txtDate').should('have.value','12/08/2029')
    })
})