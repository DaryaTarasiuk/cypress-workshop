describe ('Creating tests by different ways', ()=> {

})
import Chance from 'chance'

it(`Test random age, first way(if/else)`, function  ()  {
 let age= chance.age()
console.log(age)


   if (age>=0 && age<= 12){
        console.log ("Child")
    } else if (age> 12 && age<= 19) {
        console.log ("Teen")
    } else if (age>19 && age<= 65){
        console.log ("Adult")
    }else if(age>65 && age<= 120){
       console.log ("Senior")
    }
})


it(`Test random age, second way(switch)`, function  () {
    let age = chance.age()
    console.log(age)

    switch (age) {

        case (age >= 0):
        case(age <= 12):
            console.log("Child");
            break;

        case (age > 12):
        case(age <= 19):
            console.log("Teen");
            break;

        case (age > 19):
        case(age <= 65):
            console.log("Adult");
            break;

        default:
            console.log("Senior")
            break;

    }
})
    it(`Test random age, third way (?)`, function  () {
        let age =chance.age()
        console.log(age)
        let title=((age>=0 && age<= 12)? 'child' :(age> 12 && age<= 19)
            ?'Teen' :(age>19 && age<= 65)?'adult'
                :'Senior');
        console.log(title)

})