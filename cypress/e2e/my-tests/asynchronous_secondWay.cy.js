describe ('Second Test for asynchronous', ()=> {

})
before(() => {
    cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
        .its('body.products').as("products")

})

it('Get list of products--second way ', function () {
   //check existing the list of products
    expect(this.products).to.exist
    //output products
    cy.log(this.products)
    //output length of array
    cy.log(this.products.length)
    //output the first element from products array
    cy.log(this.products[0])


})

