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

        searchObject.SearchButton()
        .click()

        //find product
        searchObject.SearchElement()

        //go to product page
        searchObject.getElement()
        .click()

        //click on Buy button
        buyElement.BuyButton.click()

        // user select a carrier
       buyElement.carrierChoose.click()

        //Then user have an opportunity to choose a colour
        buyElement.colourChoose.click()

        //then the user skips the final question before adding the product to the cart
       buyElement.TradeInChoose.click()

       //then the user skips the final question before adding the product to the cart
        buyElement.ProtectChoose.click()

        //now user can add this product to the card
        buyElement.AddToCardButton.click()


      //user wants to add one more product to the cart
        searchObject.SearchButton().click()

        //find product
        searchObject.SearchElement()

        //go to product page
        addNewElement.GoToProductPage().click()
        //click on Buy button
        addNewElement.BuyButton.click()

        //now user can delete these products from cart. As a result - the cart is empty
        deleteElements.deleteFirstElement.click()
        deleteElements.deleteSecondElement.click()
        //everybody is happy there is no reason to spend money))
    })
            })

