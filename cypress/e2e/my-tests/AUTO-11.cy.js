import SearchPage from "../../PageObjects/searchPage";
import addNewElement from "../../PageObjects/addNewElementPage";
import deleteProductsPage from "../../PageObjects/deleteProductsPage";
import addNewElementPage from "../../PageObjects/addNewElementPage";
import AddNewElementPage from "../../PageObjects/addNewElementPage";
import DeleteProductsPage from "../../PageObjects/deleteProductsPage";


describe ('USER IS ABLE TO CHANGE THE QUANTITY OF PRODUCTS IN THE CARD', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    before(() => {
        SearchPage.open()
        cy.log('GIVEN User is at Accessories page')
        SearchPage.searchButton().click()

        cy.log('AND User can find the element he want')
        SearchPage.searchByProductName('Case-Mate Tough Clear Case for Pixel 6a*')

        cy.log('THEN User selects the product ')
        AddNewElementPage.selectProduct

        cy.log('AND User can add this element to the card')
        addNewElement.buyCaseButton.click()

        cy.log('THEN User can add new element to the card')
        SearchPage.searchButtonInCart()
        SearchPage.searchButton().click()
        //find product
        SearchPage.searchByProductName('OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*')
        AddNewElementPage.selectOtterBox()
        AddNewElementPage.buyOtterBoxButton.click()
    })


    it('Change the quantity of products in the card', () => {
        cy.visit('https://store.google.com/us/cart?hl=en-US')

        cy.log('THEN user change the quantity of some product')
        AddNewElementPage.changeQuantityOtterBox()

        cy.log('AND finally delete one product')
        DeleteProductsPage.deleteThirdElement.click()

    })
})