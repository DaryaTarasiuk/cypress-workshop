//import PageObjects from '../../PageObjects/searchObject';
import buyElement from "../../PageObjects/buyElement";
import addNewElement from "../../PageObjects/addNewElement";
import deleteElements from "../../PageObjects/deleteElements";
import searchObject from "../../PageObjects/searchObject";


describe ('Test adding products to the user card', () => {

    Cypress.on ('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it ('Add products to the card', () => {

        cy.visit ('https://store.google.com/us/?hl=en-US&regionRedirect=true')

        cy.log('GIVEN User is at Accessories page')
        searchObject.SearchButton().click()

        cy.log('AND User can find the element he want')
        searchObject.SearchElement()

        cy.log('WHEN User selects the product ')
        searchObject.GoToElementPage().click()

        cy.log('THEN User can buy this element')
        buyElement.BuyButton.click()

        // user select a carrier
       buyElement.carrierChoose.click()

        cy.log('AND User can choose the colour')
        buyElement.colourChoose.click()

        //then the user skips the final question before adding the product to the cart
       buyElement.TradeInChoose.click()

       //then the user skips the final question before adding the product to the cart
        buyElement.ProtectChoose.click()

        cy.log('THEN Data product is presented in the card ')
        buyElement.AddToCardButton.click()


      cy.log('AND User can add new products to the card ')
        searchObject.SearchButton().click()

        //find product
        searchObject.SearchElement()

        //go to product page
        addNewElement.GoToCasePage().click()
        //click on Buy button
        addNewElement.BuyCaseButton.click()

        cy.log('THEN User can delete all products from the card')
        deleteElements.deleteFirstElement.click()
        deleteElements.deleteSecondElement.click()
        //everybody is happy there is no reason to spend money))
    })
            })

