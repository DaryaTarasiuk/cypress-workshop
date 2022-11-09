///reference types="Cypress"

class AddNewElementPage {

     selectProduct(productName){
         return cy.contains ('[class="text-container product-text-container"]',productName).should('exist').click()
    }

    changeQuantityOfProduct(productName, quantity){
       return cy.get('[aria-label="Product Quantity"]').eq(0).select(quantity)


    }

}

export default new AddNewElementPage();