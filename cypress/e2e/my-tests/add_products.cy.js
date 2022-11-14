import SearchPage from "../../PageObjects/searchPage";
import ProductDetailsPage from "../../PageObjects/productDetailsPage";
import DeleteProductsPage from "../../PageObjects/deleteProductsPage";
import multipleProducts from "../../fixtures/multipleProducts.json"


describe('Test adding products to the user card', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })


    it('Add multiple products to the card', () => {

        multipleProducts.forEach(product => {
            cy.log('GIVEN User is at Search page')
            SearchPage.open()

            cy.log('WHEN User clicks on search button')
            SearchPage.searchButton().click()

            cy.log('AND User enters  product name into search input ')
            SearchPage.searchByProductName(product.name)

            cy.log('AND User selects the product at AddNewElementPage ')
            SearchPage.selectProduct(product.name)

            if (product.name == "Pixel 6a 128GB Chalk (Fi)") {
                cy.log('AND User clicks on buy button if the product is multiple')
                ProductDetailsPage.buyButton.click()

                cy.log('AND  choose the details')
                ProductDetailsPage.colourSelect.click()
                ProductDetailsPage.carrierSelect.click()
                ProductDetailsPage.tradeInSelect.click()
                ProductDetailsPage.protectSelect.click()

                cy.log('AND Data product is presented in the card ')
                ProductDetailsPage.addToCardButton.click()

            } else {
                cy.log('AND User clicks on Buy button if the product is not multiple  ')
                ProductDetailsPage.buyButton.click()
            }

        })

        cy.log('THEN  the title of selected product is correct')
        cy.get(`[data-test-lineitem-title]`).each(($el, index) => {
            cy.wrap($el).invoke('text').then(actualValue => {
                expect(actualValue).to.eq(`${multipleProducts[index].name}`)

            })
        })
        cy.log('THEN The products price is correct')
        cy.get(`[data-test-line-item-price]`).each(($el, index) => {
            cy.wrap($el).invoke('text').then(actualValue => {
                expect(actualValue).to.eq(`$${multipleProducts[index].price.toFixed(2)}`)

            })
        })
    })


    after(() => {

        multipleProducts.forEach(product => {
            cy.log('AND User  delete all products from the card')
            DeleteProductsPage.deleteProductFromCard(product.name)
        })

        cy.log('THEN the card of user is empty')
        cy.get('[data-test-cart-empty-text]').invoke('text')
            .then(items => {
                cy.wrap(items).as('items')
                expect(items).to.eq('Your cart is empty')
            })

    })

})
