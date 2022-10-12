///reference types="Cypress"


class ProductDetailsPage {

    get BuyButton(){
        return cy.get('button[aria-label="Buy Pixel 6a"]').eq(1)
    }

    get carrierChoose(){
        return  cy.get('[class="HuudXd csWRPe"]').eq(1)
    }

    get colourChoose(){
        return  cy.get('[class="HuudXd yvlQmd glq7jb"]')
    }

    get TradeInChoose(){
        return   cy.get('[data-tracking-label="Skip"]').eq(0)
    }

    get ProtectChoose(){
        return   cy.get('[aria-label="Skip preferred care"]')
    }

      get AddToCardButton(){
        return   cy.get('[class="Tr75Ib"]')
    }
}
export default new ProductDetailsPage();