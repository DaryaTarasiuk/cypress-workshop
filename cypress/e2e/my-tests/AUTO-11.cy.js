import SearchPage from "../../PageObjects/searchPage";
import addNewElement from "../../PageObjects/addNewElementPage";
import deleteProductsPage from "../../PageObjects/deleteProductsPage";
import addNewElementPage from "../../PageObjects/addNewElementPage";
import AddNewElementPage from "../../PageObjects/addNewElementPage";
import DeleteProductsPage from "../../PageObjects/deleteProductsPage";
import productDetailsPage from "../../PageObjects/productDetailsPage";
import searchPage from "../../PageObjects/searchPage";


describe('USER IS ABLE TO CHANGE THE QUANTITY OF PRODUCTS IN THE CARD', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    const PRODUCTS = [{name: 'Case-Mate Tough Clear Case for Pixel 6a*', price: 24.99, quantity:4},
        {name: 'OtterBox Alpha Flex Antimicrobial Screen Protector for Pixel 6a*', price: 44.95, quantity:1}]

    before(() => {

        PRODUCTS.forEach(product => {
            cy.log('GIVEN User is at Search page')
            SearchPage.open()
            cy.log('WHEN User clicks on search button')
            SearchPage.searchButton().click()

            cy.log('AND User enters  product name into search input ')
            SearchPage.searchByProductName(product.name)

            cy.log('AND User selects the product at AddNewElementPage ')
            AddNewElementPage.selectProduct(product.name)

            cy.log('AND User clicks on buy button')
            productDetailsPage.buyButton.click()

            cy.log('THEN User checks the price of selected product in the card')
            cy.get(`[data-test-line-item-price]`).each(($el, index) => {
                cy.wrap($el).invoke('text').then(actualValue => {
                    expect(actualValue).to.eq(`$${PRODUCTS[index].price.toFixed(2)}`)
                })
            })




            //TODO проверить продукт в корзине
        })

    })


    it('Change the quantity of products in the card', () => {
        //TODO переход в корзину   из PageObject
        cy.log('GIVEN User is at the card')
        searchPage.openCardPage()

        cy.log('WHEN user changes the quantity of Product')
        AddNewElementPage.changeQuantityOfProduct(PRODUCTS[0].name, 4)
        cy.get('circle').should('exist')
        cy.get('circle').should('not.exist')

//TODO проверить итоговую сумму
        cy.log('Then user checks  Estimated total')
        cy.get(`[data-test-price-subtotal]`).each(($el, index) => {
            cy.wrap($el).invoke('text').then(estimatedTotal => {
                expect(estimatedTotal).to.eq(`$${(PRODUCTS[0].price*PRODUCTS[0].quantity)+(PRODUCTS[1].price*PRODUCTS[1].quantity)}`)
            })
        })



    })
})