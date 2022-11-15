import SearchPage from "../../page-objects/searchPage";
import ProductDetailsPage from "../../page-objects/productDetailsPage";
import DeleteProductsPage from "../../page-objects/deleteProductsPage";
import multipleProducts from "../../fixtures/multipleProducts.json"
import AddNewElementPage from "../../page-objects/addNewElementPage";


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

        AddNewElementPage.getSectionOfProductsInTheCard().should('have.length', multipleProducts.length)
            .each(($section, index) => {
                cy.log('THEN  the title of selected product is correct')
                cy.wrap($section).find(`[data-test-lineitem-title]`)
                    .should('have.text', `${multipleProducts[index].name}`)
                cy.log('AND The products price is correct')
                cy.wrap($section).find(`[data-test-line-item-price]`)
                    .should('have.text',`$${multipleProducts[index].price.toFixed(2)}`)
            })
    })


    after(() => {

        multipleProducts.forEach(product => {
            cy.log('AND User  delete all products from the card')
            DeleteProductsPage.deleteProductFromCard(product.name)
        })
        cy.log('THEN the card of user is empty')
        AddNewElementPage.getEmptyCard()
    })

})
