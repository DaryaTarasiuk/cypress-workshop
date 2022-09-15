describe ('Set Creating', ()=> {

})

    it(`Create set`, function  ()  {
        let mySet = new Set()
        mySet.add('USD')
        mySet.add('EU')
        mySet.add('BYN')
        console.log(mySet)
        mySet.forEach(mySet => {
            cy.log(mySet)
        })

    })


