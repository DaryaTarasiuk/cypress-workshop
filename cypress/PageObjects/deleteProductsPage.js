///reference types="Cypress"

class DeleteProductsPage {

    deleteProductFromCard(productName) {
        cy.get(`button[aria-label="Remove ${productName} from cart"]`).click()
        cy.contains(productName).should('not.exist')
    }
}


export default new DeleteProductsPage();