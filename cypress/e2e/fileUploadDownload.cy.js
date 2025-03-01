// Selecting the file cy.get('input["file"]').selectFile('path/to/file.json')
// Reading a File cy.readFile('path/to/file').its('name').should('eq','Filename')
//encoding the file type cy.readFile('path/to/file/logo.png', 'base64').
//File Upload 
import 'cypress-file-upload'
describe('Verify the Upload a file',() =>{
    it('Upload',()=>{
        cy.visit('https://practice.expandtesting.com/upload')
        cy.get('input[id="fileInput"]').attachFile('example.json')
        console.warn('working')
        cy.get('#fileSubmit').click()
    })
    it('Upload using Select File',()=>{
        cy.visit('https://practice.expandtesting.com/upload')
        cy.get('input[id="fileInput"]').selectFile('AutomationExercise\cypress\fixtures/example.json')
        console.warn('working')
        cy.get('#fileSubmit').click()
    })
})