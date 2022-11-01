///reference types="Cypress"


class ProductDetailsPage {

    get buyButton(){
        return cy.get('button[aria-label="Buy Pixel 6a"]').eq(1)
    }

    get carrierSelect(){
        return  cy.get('[class="HuudXd csWRPe"]').eq(1)
    }

    get colourSelect(){
        return  cy.get('[class="HuudXd yvlQmd glq7jb"]')
    }

    get tradeInSelect(){
        return   cy.get('[data-tracking-label="Skip"]').eq(0)
    }

    get protectSelect(){
        return   cy.get('[aria-label="Skip preferred care"]')
    }

    get addToCardButton(){
        return   cy.get('[class="Tr75Ib"]')
    }
}
export default new ProductDetailsPage();