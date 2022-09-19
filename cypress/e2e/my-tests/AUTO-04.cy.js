   import Chance from 'chance'
describe ('Set Creating', ()=> {

})

    it(`Create set,tasks 1-5`, function  ()  {
         let currencySet= new Set(['USD','EU','BYN'])
        //add elements
        currencySet.add('BYN').add('RUB').add('USD')



        currencySet.forEach(function(value) {
            cy.log(value);

        })
        //checking for presence elements in the set
        cy.log('Set has EU value: ' + currencySet.has('EU'));
         //checking for absents elements in the set
        cy.log('Set has NFT value: ' + currencySet.has('NFT'));

         //convert set to array
        let currencyArray=Array.from(currencySet)
        console.log([...currencyArray])


        //output of a random value
        chance.pickone(currencyArray)
        cy.log('Random value - '+chance.pickone(['USD','EU','BYN','RUB']))


        //output of a random values
        cy.log('Currency Set size - '+currencySet.size)
        chance.integer({min:1,max:4})
        chance.pickset(currencyArray)
        cy.log('Random values - '+chance.pickset(['USD', 'EU', 'BYN', 'RUB'], 2))
    })

   import{isSuperset,union,intersection,difference} from "D:/projects/cypress-workshop/cypress/Utils/helper";
   it(`Create new sets, task 6`, function  () {

       const setA = new Set([1,2,3,4]),
        setB = new Set([2,3]),
        setC = new Set([3,4,5,6])
       console.log(setA,setB,setC)


       console.log(isSuperset(setA,setB)),
       console.log(union(setA,setC)),
       console.log(intersection(setA,setC)),
       console.log(difference(setA,setC))


   })




