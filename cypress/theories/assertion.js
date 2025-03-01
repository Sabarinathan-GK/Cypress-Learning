//accessing the element with single occurrence
cy.get('.class');

//in-line timeout
cy.get('#id',{timeout : 1000}).should('be.visible')
//in cypress.config.js file we able to set the default timeout but it will consider all the file so it will take the more time to run the testcase.
//it will not set the all the element for that we should mention in config file if the website is taking some time to load the elements.



//Multiple occurance
//If the class or id is having multiple occurance in single webpage
cy.get('.single_product').eq(0).should('have.class','signle-product').click()
//eq - equal parameter
// this will store the elements as array we able to get the element using eq(index)



//should & and are the implicit assertions
.should('be.empty')
.should('be.visible')
.should('not.be.visible')
.should('eq','textvalue')
.should('have.class','.class')
.should('have.value','value')
.should('have.css','')
.should('have.id','')
.should('be.enabled')
.should('be.disabled')
.should('be.selected')
.should('have.attr','href')
.and('equal','/admin')


//Explicit Assertions
// expect assertions
expect().equals('')
expect().to.be.equal('')
expect().to.have.length(3)
expect().contain('')  // should('have.length', 3)

/*
Html file
<ul class="Connectors-list">
    <li>Walk  the dog</li>
    <li>Feed the Cat</li>
    <li>write javascript</li>
    <li>high five</li>
</ul>
*/









//for an hidden element which type=hidden 
cy.get('email').click({force:true}).type('abc')
// abc input value is not visible the input field