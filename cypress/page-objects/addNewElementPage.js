///reference types="Cypress"

import BasePage from "./basePage";

class AddNewElementPage extends BasePage {

    selectProduct(productName) {
        return cy.contains('[class="text-container product-text-container"]', productName).should('exist').click()
    }

    changeQuantityOfProduct(productName, quantity) {
        return cy.get('[aria-label="Product Quantity"]').eq(1).select(quantity - 1)
    }

    getSectionOfProductsInTheCard(){
        return cy.get('[data-test-line-item-container]')
    }

    getTotalPriceOfProductInTheCard(){
        return cy.get(`[data-test-price-subtotal]`)
    }

    getThePriceOfEachProductInTheCard(){
        return cy.get(`[data-test-line-item-price]`)
    }

    getEmptyCard(){
        return cy.get('[data-test-cart-empty-text]').invoke('text').should('eq','Your cart is empty' )
    }
}

export default new AddNewElementPage();