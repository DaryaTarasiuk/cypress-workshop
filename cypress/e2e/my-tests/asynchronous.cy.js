describe ('Test for asynchronous', ()=> {

})

it('Get list of products ', function () {

    cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').then((response) => {
        cy.wrap(response.body).as("products");
        cy.wrap(response.body.products)
        //output products
        cy.log(response.body.products)
        //output length of array
        cy.log(response.body.products.length)
        //output the first element from products array
        cy.log(response.body.products[0])
    })

})


