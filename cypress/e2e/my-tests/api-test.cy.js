describe ('Test for regres', ()=> {

}) 
it ('Positive:Create user', () => {
    cy.request ('POST', `${Cypress.env("apiURL")}/api/user`, {
    "name": "hello1234",
    "job": "head123098",
      }).then (response => {
        console.log(response)
        expect (response.status).to.eq (201)
        expect (response.body).to.have.property ('name', "hello1234")
        expect (response.body).to.have.property ('job', "head123098")
      })
}

)
