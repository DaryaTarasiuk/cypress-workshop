///reference types="Cypress"

class addNewElement {

    GoToCasePage(){
        return cy.contains ('Case-Mate Tough Clear Case for Pixel 6a*').should('exist')
    }

     get BuyCaseButton(){
        return cy.get('button[aria-label="Buy Case-Mate Tough Clear Case for Pixel 6a*"]').eq(0)
    }

    GoToOtterBoxPage(){
        return cy.contains('OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*')
    }

    get BuyOtterBoxButton(){
        return cy.get('[aria-label="Buy OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*"]').eq(0)
    }

    ChangeQuantityOtterBox(){
        return cy.get('[aria-label="Product Quantity"]').eq(0).select(2)
    }

}

export default new addNewElement();