///reference types="Cypress"

class SearchPage {
    open() {
        cy.visit ('/us/?hl=en-US&regionRedirect=true')
    }

   searchButton(){
        return cy.get ('div[aria-label="Search the Google store"]')
   }

   searchButtonInCart(){
        return cy.get('[aria-label="Google Store home. Google Store logo."]').click()
   }

   searchByProductName(productName){
         cy.get ('input[placeholder="Search Google Store"]').type(`${productName}{enter}`)
    }

    selectProduct(productName){
        return cy.contains ('Pixel 6a').should('exist').click()
    }


    SearchGoogleStoreLogoButton(){
        return cy.get('[aria-label="Google Store home. Google Store logo."]').click()
    }

  }

export default  new SearchPage();
