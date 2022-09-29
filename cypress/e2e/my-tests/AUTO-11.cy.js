describe ('USER IS ABLE TO CHANGE THE QUANTITY OF PRODUCTS IN THE CARD', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    before(() => {
        cy.visit('https://store.google.com/us/?hl=en-US&regionRedirect=true')
        cy.get ('div[aria-label="Search the Google store"]').click()
        //find product
        cy.get ('input[placeholder="Search Google Store"]').type(`pixel 6a{enter}`)
        cy.contains('Case-Mate Tough Clear Case for Pixel 6a*').click()
        cy.get('[class="transaction qgwtFf"]').eq(0).click()

        //add second element to the card
        cy.get('[aria-label="Google Store home. Google Store logo."]').click()
        cy.get ('div[aria-label="Search the Google store"]').click()
        //find product
        cy.get ('input[placeholder="Search Google Store"]').type(`pixel 6a{enter}`)
        cy.contains('OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*').click()
        cy.get('[aria-label="Buy OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*"]').eq(0).click()
    })


    it('Change the quantity of products in the card', () => {
        cy.visit('https://store.google.com/us/cart?hl=en-US')
        //check existing products
        //cy.contains('Case-Mate Tough Clear Case for Pixel 6a*', 'OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*').should("exist")
        //delete one product from the card
        cy.get('[aria-label="Remove CaseMate Tough Clear Case for Pixel 6a from cart"]').eq(0).click()

    })
})