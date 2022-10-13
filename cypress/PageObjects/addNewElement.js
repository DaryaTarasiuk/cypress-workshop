///reference types="Cypress"

class addNewElement {

    get CasePage(){
        return cy.get('[aria-label="Case-Mate Tough Clear Case for Pixel 6a* (result 1 of 2)"]').click()
    }


     get BuyCaseButton(){
        return cy.get('button[aria-label="Buy Case-Mate Tough Clear Case for Pixel 6a*"]').eq(0)
    }

    get BuyOtterBoxButton(){
        return cy.get('[aria-label="Buy OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*"]').eq(0)
    }



    SelectOtterBox(){
        return cy.get('[class="card-inner background-white no-variants"]').click()
    }

    ChangeQuantityOtterBox(){
        return cy.get('[aria-label="Product Quantity"]').eq(0).select(2)
    }

}

export default new addNewElement();