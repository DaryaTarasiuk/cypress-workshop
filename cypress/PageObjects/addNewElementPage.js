///reference types="Cypress"

class AddNewElementPage {

     selectProduct(productName){
         return cy.contains (productName).should('exist').click()
    }

    changeQuantityOtterBox(quantity){
        return cy.get('[aria-label="Product Quantity"]').eq(0).select(quantity)
    }

}

export default new AddNewElementPage();