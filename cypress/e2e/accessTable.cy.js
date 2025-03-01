describe('Accessing the Table',() =>{
    beforeEach(() =>{
        cy.visit('./cypress/sampleHtmls/webTable.html')
    })
    it('checking the content of the table', () => {
        cy.get('table').contains('td' , 'Jane Smith').should('be.visible')
        cy.get('table').contains('td' , 'Jane Smith').should('have.value','1002')
        cy.get('#customerTable').should('have.value','Customer Name')
    })
})








