import SearchPage from "../../PageObjects/searchPage";
import addNewElement from "../../PageObjects/addNewElement";
import deleteElements from "../../PageObjects/deleteElements";


describe ('USER IS ABLE TO CHANGE THE QUANTITY OF PRODUCTS IN THE CARD', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    before(() => {
        cy.visit('https://store.google.com/us/?hl=en-US&regionRedirect=true')
        cy.log('GIVEN User is at Accessories page')
        SearchPage.SearchButton().click()

        cy.log('AND User can find the element he want')
        SearchPage.SearchByProductName('Case-Mate Tough Clear Case for Pixel 6a*')

        cy.log('THEN User selects the product ')
        addNewElement.CasePage

        cy.log('AND User can add this element to the card')
        addNewElement.BuyCaseButton.click()

        cy.log('THEN User can add new element to the card')
        SearchPage.SearchButtonInCart()
        SearchPage.SearchButton().click()
        //find product
        SearchPage.SearchByProductName('OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*')
        addNewElement.SelectOtterBox()
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