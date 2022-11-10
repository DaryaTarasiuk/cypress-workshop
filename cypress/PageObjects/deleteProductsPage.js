///reference types="Cypress"
import multipleProducts from "../fixtures/multipleProducts.json"
class DeleteProductsPage {

    deleteProductFromCard(productName) {
      // cy.contains('button' ,'Remove',productName).click()
       return cy.get('button[data-test-remove-btn]', productName)
    }
}

export default new DeleteProductsPage();