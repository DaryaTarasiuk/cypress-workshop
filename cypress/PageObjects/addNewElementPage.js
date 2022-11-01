///reference types="Cypress"

class AddNewElementPage {

    get selectProduct(){
        return cy.get('[jsaction="f8hwU"]').click()
    }


     get buyCaseButton(){
        return cy.get('button[class="transaction qgwtFf"]').eq(1)
    }

    get buyOtterBoxButton(){
        return cy.get('[aria-label="Buy OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*"]').eq(0)
    }



    selectOtterBox(){
        return cy.get('[class="card-inner background-white no-variants"]').click()
    }

    changeQuantityOtterBox(){
        return cy.get('[aria-label="Product Quantity"]').eq(0).select(2)
    }

}

export default new AddNewElementPage();