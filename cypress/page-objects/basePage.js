class BasePage {

   get loadingIndicator(){
      return cy.get('circle')
    }

}

export default BasePage