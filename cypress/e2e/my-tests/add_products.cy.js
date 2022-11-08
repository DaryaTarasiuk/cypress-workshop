import SearchPage from "../../PageObjects/searchPage";
import ProductDetailsPage from "../../PageObjects/productDetailsPage";
import AddNewElement from "../../PageObjects/addNewElementPage";
import DeleteElements from "../../PageObjects/deleteProductsPage";
import AddNewElementPage from "../../PageObjects/addNewElementPage";
import DeleteProductsPage from "../../PageObjects/deleteProductsPage";


describe ('Test adding products to the user card', () => {

    Cypress.on ('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it ('Add multiple products to the card', () => {

        SearchPage.open()

        SearchPage.searchButton().click()
        cy.log(' User is at Accessories page')
        cy.log('AND User can find the element he want')
        SearchPage.searchByProductName('pixel 6a')

        cy.log('THEN User selects the product ')
        SearchPage.selectProduct('pixel 6a').then((element)=> {
            const nameEl = element.prop('innerText');
            cy.log('__________________________________');
            cy.log(nameEl);
        })



        cy.log('AND User can buy this element')
        ProductDetailsPage.buyButton.click()

        // user select a carrier
        ProductDetailsPage.colourSelect.click()

        cy.log('AND  choose the details')
        ProductDetailsPage.carrierSelect.click()

        //then the user skips the final question before adding the product to the cart
        ProductDetailsPage.tradeInSelect.click()

        //then the user skips the final question before adding the product to the cart
        ProductDetailsPage.protectSelect.click()

        cy.log('THEN Data product is presented in the card ')
        ProductDetailsPage.addToCardButton.click()


        cy.log('AND User can add new products to the card ')
        SearchPage.searchButton().click()

        //find product
        SearchPage.searchByProductName('Case-Mate Tough Clear Case for Pixel 6a*')
        AddNewElementPage.selectProduct.then((element)=> {
            const nameEl = element.prop('innerText');
            cy.log('__________________________________');
            cy.log(nameEl);
        })
        //click on Buy button
        AddNewElementPage.buyCaseButton.click()


    })

     after(()=>{
        cy.log('THEN User can delete all products from the card')
        DeleteProductsPage.deleteFirstElement.click()
        DeleteProductsPage.deleteSecondElement.click()

    })
            })

