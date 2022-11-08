///reference types="Cypress"

class DeleteProductsPage {

    deleteProductFromCard(productName){
        //cy.get(("button:contains('Remove')")).contains(productName).click()
        cy.contains('button', 'Remove',productName).click()
    }
}

export default new DeleteProductsPage();