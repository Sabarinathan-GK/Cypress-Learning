invoke('text')
invoke('val')
invoke('show')
invoke('trigger')

cy.get('img').invoke('attr','src').should('include' , 'mylogo')
cy.get('img').invoke('removeAttr','target')  
//targret attribute url is going to open current tab itself for this removeAttr helps.

cy.get('path').val
cy.get('path').text().click()
cy.get().invoke('text').then((textValue) => {
    textValue.should('be.visible')
})



// .closest('ul') // it will retrieve the nearest values of ul ( first child)
.eq(0).contains()
.filter('.img')  // it will filter the all the img elements values
.filter(':visible') // it will filter the visible elements
.find('a').should('have.length',3) // it will consider the all the a tag and checks the length 3
.find('a[:href]').should('have.length',2)
.first() // accessing the first child of parent

.last() //accessing the last child element

.parent() //accesing the parent element
cy.get('th').parent().should('have.id', 'customerTableIds')


.children()  // it will check the all the children 

cy.get('.Connectors-list > li').should(($lis) => {
    expect($lis).to.have.length(4)
    expect($lis.eq(0)).to.contain('Walk the dog')
    expect($lis.eq(1)).to.contain('Walk the dog')
    expect($lis.eq(2)).to.contain('Walk the dog')
    expect($lis.eq(3)).to.contain('Walk the dog')
    
})

