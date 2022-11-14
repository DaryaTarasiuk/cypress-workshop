import SearchPage from "../../page-objects/searchPage";
import AddNewElementPage from "../../page-objects/addNewElementPage";
import productDetailsPage from "../../page-objects/productDetailsPage";
import products from "../../fixtures/products.json";
import searchPage from "../../page-objects/searchPage";


describe('USER IS ABLE TO CHANGE THE QUANTITY OF PRODUCTS IN THE CARD', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    before(() => {

        products.forEach(product => {
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

            cy.log('THEN The products price is correct')
            cy.get(`[data-test-line-item-price]`).each(($el, index) => {
                cy.wrap($el).invoke('text').then(actualValue => {
                    expect(actualValue).to.eq(`$${products[index].price.toFixed(2)}`)
                })
            })
        })
        cy.get('[data-test-line-item-container]').should('have.length', products.length)

        cy.log('AND The number of products in the card is correct')
        const sumWithInitial = products.reduce((previousValue, currentValue) =>
            previousValue + currentValue.defaultQuantity, 0);
        cy.contains(`Cart (${sumWithInitial} items)`).should('exist')
    })


    it('Change the quantity of products in the card', () => {

        cy.log('GIVEN User is at the card')
        SearchPage.openCardPage()

        cy.log('WHEN user changes the quantity of Product')
        AddNewElementPage.changeQuantityOfProduct(products[0].name, 2)

        cy.log('THEN Page is reloaded - loading indicator appears and disappears')
        AddNewElementPage.loadingIndicator.should('exist')
        AddNewElementPage.loadingIndicator.should('not.exist')

        cy.get('[data-test-line-item-container]').should('have.length', products.length)

        cy.log('AND total amount was updated and is correct')
        cy.get(`[data-test-price-subtotal]`).each(($el, index) => {
            cy.wrap($el).invoke('text').then(estimatedTotal => {

                const sumWithInitial = products.reduce(
                    (previousValue, currentValue) =>
                        previousValue + currentValue.price * currentValue.quantity, 0);
                cy.log(sumWithInitial);
                expect(estimatedTotal).to.eq(`$${sumWithInitial.toFixed(2)}`)
            })
        })

        cy.log('AND The number of products in the card is correct')
        const sumWithInitial = products.reduce((previousValue, currentValue) =>
            previousValue + currentValue.quantity, 0);
        cy.contains(`Cart (${sumWithInitial} items)`).should('exist')
    })

})
