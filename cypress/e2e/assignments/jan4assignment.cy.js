describe('Verify the Sorting Product details are displayed correctly', ()=>{
    it('Verifying as Array', ()=>{
         //Select high to low 
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        cy.get(".product_sort_container").select("Price (high to low)"); 
        cy.get(".inventory_item_price").then(($elements)=>{ 
        const originalPrices = [...$elements].map((el)=> 
        parseFloat(el.innerText.replace(/[^0-9.]/g,''))); 
        const sortedPrices = [...originalPrices].sort((a,b)=> b-a) 
        //Print the array outputs 
        cy.log("Actual displayed prices of the items in array is  : "+originalPrices) 
        cy.log("Expected sorted prices in array is  : "+sortedPrices) 
        //Check prices are displayed/filtered low to high 
        expect(originalPrices).to.deep.equal(sortedPrices) 
        }) 
    }) 
    it('Verifying with Array Elements', ()=>{
        const priceItems =[];
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.inventory_item_price').each(($prices) =>{
            priceItems.push($prices.text())
        }).then(()=>{
            cy.log(priceItems.join(','))
        })
        cy.get('.inventory_item_price').then(($inventoryProducts) =>{
            expect(parseFloat($inventoryProducts.eq(0).text().slice(1))).to.be.lessThan(parseFloat($inventoryProducts.eq(1).text().slice(1)))
            expect(parseFloat($inventoryProducts.eq(2).text().slice(1))).to.be.greaterThan(parseFloat($inventoryProducts.eq(1).text().slice(1)))
        })
    })
})