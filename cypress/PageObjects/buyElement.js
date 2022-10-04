///reference types="Cypress"


class buyElement {

    get BuyButton(){

        return cy.get('button[aria-label="Buy Pixel 6a"]').eq(1)
    }

    get carrierChoose(){
        return  cy.get('[aria-label="Select: Unlocked"]')
    }

    get colourChoose(){
        return  cy.get('[aria-label="Select Charcoal"]')
    }

    get TradeInChoose(){
        return   cy.get('[class="xyh6bd MaEKpb"]')
    }

    get ProtectChoose(){
        return   cy.get('[class="IydZSc qewDlc"]')
    }

      get AddToCardButton(){
        return   cy.get('[data-test="add-to-cart"]')
    }
}
export default new buyElement();