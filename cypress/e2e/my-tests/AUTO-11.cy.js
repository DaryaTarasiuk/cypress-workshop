import SearchPage from "../../PageObjects/searchPage";
import addNewElement from "../../PageObjects/addNewElementPage";
import deleteProductsPage from "../../PageObjects/deleteProductsPage";
import addNewElementPage from "../../PageObjects/addNewElementPage";
import AddNewElementPage from "../../PageObjects/addNewElementPage";
import DeleteProductsPage from "../../PageObjects/deleteProductsPage";
import productDetailsPage from "../../PageObjects/productDetailsPage";
import searchPage from "../../PageObjects/searchPage";


describe ('USER IS ABLE TO CHANGE THE QUANTITY OF PRODUCTS IN THE CARD', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    before(() => {
        const PRODUCTS = ['Case-Mate Tough Clear Case for Pixel 6a*',
            'OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*']
       PRODUCTS.forEach(product => {
            cy.log('GIVEN User is at Search page')
            SearchPage.open()
            cy.log('WHEN User clicks on search button')
            SearchPage.searchButton().click()

            cy.log('AND User enters  product name into search input ')
            SearchPage.searchByProductName(product)

            cy.log('AND User selects the product at AddNewElementPage ')
            AddNewElementPage.selectProduct(product)

            cy.log('AND User clicks on buy button')
            productDetailsPage.buyButton.click()


            //TODO Добавить проверку, что отображается новая страница:корзина, проверить продукт в корзине
        })

    })


    it('Change the quantity of products in the card', () => {
        //TODO PageObject переход в корзину
        cy.log('GIVEN User is at the card')
        searchPage.openCardPage()

        cy.log('WHEN user changes the quantity of OtterBox')
        AddNewElementPage.changeQuantityOtterBox(2)
//TODO проверить итоговую сумму

    })
})