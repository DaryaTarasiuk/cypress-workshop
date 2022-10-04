///reference types="Cypress"

class addNewElement {

    GoToProductPage(){
        return cy.contains ('Case-Mate Tough Clear Case for Pixel 6a*').should('exist')
    }

     get BuyButton(){
        return cy.get('button[aria-label="Buy Case-Mate Tough Clear Case for Pixel 6a*"]').eq(0)
    }



}

export default new addNewElement();