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
       //cy.get('a[href="https://store.google.com/us/config/pixel_6a?hl=en-US"]').click()
       //cy.get('[data-test="cta"]').click({ multiple: true })
        //cy.contains('Buy').click({force:true})
        cy.get('button[aria-label="Buy Pixel 6a"]').eq(1).click()
                })
            })

