///reference types="Cypress"

class SearchPage {
    open() {
        cy.visit('/us/?hl=en-US&regionRedirect=true')
    }

    openCardPage() {
        cy.visit('/us/cart?hl=en-US')
    }

    searchButton() {
        return cy.get('div[aria-label="Search the Google store"]')
    }

    searchByProductName(productName) {
        cy.get('input[placeholder="Search Google Store"]').type(`${productName}{enter}`)
    }

    selectProduct() {
        cy.get('[class="text-container product-text-container"]').should('exist').click()
    }

}

export default new SearchPage();
