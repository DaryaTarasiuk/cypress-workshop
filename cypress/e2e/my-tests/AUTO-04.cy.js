describe ('Set Creating', ()=> {

})

    it(`Create set`, function  ()  {

        const currencySet= new Set()
        currencySet.add('USD')
        currencySet.add('EU')
        currencySet.add('BYN').add('RUB').add('USD')
        //console.log(mySet)

        currencySet.forEach(currencySet => {
           cy.log(currencySet)

        })

})



