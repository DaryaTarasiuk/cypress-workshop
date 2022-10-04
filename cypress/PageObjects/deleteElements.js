///reference types="Cypress"

class deleteElements {

    get deleteFirstElement(){
        return cy.get('[aria-label="Remove Pixel 6a 128GB Charcoal (Unlocked) from cart"]')
    }

    get deleteSecondElement(){
        return cy.get('[aria-label="Remove CaseMate Tough Clear Case for Pixel 6a from cart"]')
    }

}

export default new deleteElements();