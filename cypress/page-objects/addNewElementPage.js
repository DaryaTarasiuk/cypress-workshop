///reference types="Cypress"

import BasePage from "./basePage";

class AddNewElementPage extends BasePage {

    selectProduct(productName) {
        return cy.contains('[class="text-container product-text-container"]', productName).should('exist').click()
    }

    changeQuantityOfProduct(productName, quantity) {
        return cy.get('[aria-label="Product Quantity"]').eq(0).select(quantity - 1)
    }


}

export default new AddNewElementPage();