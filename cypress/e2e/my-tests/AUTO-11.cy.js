import SearchObject from "../../PageObjects/searchObject";
import addNewElement from "../../PageObjects/addNewElement";
import deleteElements from "../../PageObjects/deleteElements";
import searchObject from "../../PageObjects/searchObject";

describe ('USER IS ABLE TO CHANGE THE QUANTITY OF PRODUCTS IN THE CARD', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    before(() => {
        cy.visit('https://store.google.com/us/?hl=en-US&regionRedirect=true')
        cy.log('GIVEN User is at Accessories page')
        SearchObject.SearchButton().click()

        cy.log('AND User can find the element he want')
        SearchObject.SearchElement()

        cy.log('WHEN User selects the product ')
        addNewElement.GoToCasePage().click()

        cy.log('THEN User can add this element to the card')
        addNewElement.BuyCaseButton.click()

        cy.log('THEN User can add new element to the card')
        SearchObject.SearchGoogleStoreLogoButton().click()
        SearchObject.SearchButton().click()
        //find product
        SearchObject.SearchElement()
        addNewElement.GoToOtterBoxPage().click()
        addNewElement.BuyOtterBoxButton.click()
    })


    it('Change the quantity of products in the card', () => {
        cy.visit('https://store.google.com/us/cart?hl=en-US')

        cy.log('THEN user change the quantity of some product')
        addNewElement.ChangeQuantityOtterBox()

        cy.log('AND finally delete one product')
        deleteElements.deleteThirdElement.click()

    })
})