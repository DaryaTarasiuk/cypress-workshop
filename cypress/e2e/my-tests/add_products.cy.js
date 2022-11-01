describe ('Test adding products to the user card', () => {

    Cypress.on ('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it ('Add products to the card', () => {

        cy.visit ('https://store.google.com/us/?hl=en-US&regionRedirect=true')
        cy.get ('div[aria-label="Search the Google store"]').click()
        //find product
        cy.get ('input[placeholder="Search Google Store"]').type(`pixel 6a{enter}`)
        //go to product page
        cy.contains ('Pixel 6a').should('exist').click()
        //click on Buy button
        cy.get('button[aria-label="Buy Pixel 6a"]').eq(1).click()

        // user select a carrier
        cy.get('[aria-label="Select: Unlocked"]').click()
        //then user have an opportunity to choose a colour
        cy.get('[aria-label="Select Charcoal"]').click()
        //then the user skips the final question before adding the product to the cart
        cy.get('[class="xyh6bd MaEKpb"]').click()
       //then the user skips the final question before adding the product to the cart
        cy.get('[class="IydZSc qewDlc"]').click()
        //now user can add this product to the cart
        cy.get('[data-test="add-to-cart"]').click()
        //now we should make sure that the correct product is in the cart
        //cy.get('[aria-label="Go to shopping cart"]').click()

      //user wants to add one more product to the cart
        cy.get ('div[aria-label="Search the Google store"]').click()
        //find product
        cy.get ('input[placeholder="Search Google Store"]').type(`pixel 6a{enter}`)
        //go to product page
        cy.contains ('Case-Mate Tough Clear Case for Pixel 6a*').should('exist').click()
        //click on Buy button
        cy.get('button[aria-label="Buy Case-Mate Tough Clear Case for Pixel 6a*"]').eq(0).click()

        //now user can delete these products from cart. As a result - the cart is empty
        cy.get('[aria-label="Remove Pixel 6a 128GB Charcoal (Unlocked) from cart"]').click()
        cy.get('[aria-label="Remove CaseMate Tough Clear Case for Pixel 6a from cart"]').click()
        //everybody is happy there is no reason to spend money))
    })
            })

