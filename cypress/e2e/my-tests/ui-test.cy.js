
describe ('Test for reques', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })

    
  it ('Positive: Create user', () => {

    cy.visit ('https://store.google.com/us/?pli=1&hl=en-US')
    cy.get ('div[aria-label="Search the Google store"]').click()
    cy.get ('input[placeholder="Search Google Store"]').type(`Google Pixel Buds{enter}`)
    cy.get ('a[href="/magazine/pixel_buds_compare"]').should('exist')
  } )
}

)
