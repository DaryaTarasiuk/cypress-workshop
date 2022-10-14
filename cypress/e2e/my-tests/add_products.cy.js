import SearchPage from "../../PageObjects/searchPage";
import ProductDetailsPage from "../../PageObjects/productDetailsPage";
import AddNewElement from "../../PageObjects/addNewElement";
import DeleteElements from "../../PageObjects/deleteElements";


describe ('Test adding products to the user card', () => {

    Cypress.on ('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it ('Add products to the card', () => {

        SearchPage.open()

        cy.log('GIVEN User is at Accessories page')
        SearchPage.SearchButton().click()

        cy.log('AND User can find the element he want')
        SearchPage.SearchByProductName('pixel 6a')

        cy.log('WHEN User selects the product ')
        SearchPage.selectProduct().then((element)=> {
            const nameEl = element.prop('innerText');
            cy.log('__________________________________');
            cy.log(nameEl);
        })



        cy.log('THEN User can buy this element')
        ProductDetailsPage.BuyButton.click()

        // user select a carrier
        ProductDetailsPage.carrierChoose.click()

        cy.log('AND User  choose the details')
        ProductDetailsPage.colourChoose.click()

        //then the user skips the final question before adding the product to the cart
        ProductDetailsPage.TradeInChoose.click()

        //then the user skips the final question before adding the product to the cart
        ProductDetailsPage.ProtectChoose.click()

        cy.log('THEN Data product is presented in the card ')
        ProductDetailsPage.AddToCardButton.click()


        cy.log('AND User can add new products to the card ')
        SearchPage.SearchButton().click()

        //find product
        SearchPage.SearchByProductName('Case-Mate Tough Clear Case for Pixel 6a*')
        AddNewElement.CasePage.then((element)=> {
            const nameEl = element.prop('innerText');
            cy.log('__________________________________');
            cy.log(nameEl);
        })
        //click on Buy button
        AddNewElement.BuyCaseButton.click()

    })

     after(()=>{
        cy.log('THEN User can delete all products from the card')
        DeleteElements.deleteFirstElement.click()
        DeleteElements.deleteSecondElement.click()
        //everybody is happy there is no reason to spend money))
    })
            })

