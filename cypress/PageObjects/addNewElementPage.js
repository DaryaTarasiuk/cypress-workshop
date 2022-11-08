///reference types="Cypress"

class AddNewElementPage {

     selectProduct(productName){
         return cy.contains (productName).should('exist').click()
    }

     get buyCaseButton(){
        return cy.get('button[class="transaction qgwtFf"]').eq(1)
    }

    get buyOtterBoxButton(){
        return cy.get('[aria-label="Buy OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*"]').eq(1)
    }


    changeQuantityOtterBox(quantity){
        return cy.get('[aria-label="Product Quantity"]').eq(0).select(quantity)
    }

}

export default new AddNewElementPage();