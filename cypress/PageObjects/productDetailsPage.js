///reference types="Cypress"


class ProductDetailsPage {

//return cy.get('button[aria-label="Buy Pixel 6a"]').eq(1)
    get buyButton(){
       // return cy.get('button[class="transaction qgwtFf"]').eq(1)
      return   cy.get('[data-test="financing"]').parent().eq(1).next().find("button").click()
    }

    get carrierSelect(){
        return  cy.get('[data-test="model_selection_panel"]').eq(1)
    }

    get colourSelect(){
        return  cy.get('[aria-label="Chalk"]')
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