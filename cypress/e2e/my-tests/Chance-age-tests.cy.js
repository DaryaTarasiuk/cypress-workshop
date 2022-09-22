describe ('Creating tests by different ways', ()=> {

})
import Chance from 'chance'

it(`Test random age, first way`, function  ()  {
chance.age()
console.log(chance.age())

   if (chance.age < 13) {
        console.log ("Child");
    } else if (chance.age() <18) {
        console.log ("Teen");
    } else if (chance.age() <60){
        console.log ("Adult");
    }else if(chance.age>60){
       console.log ("Senior");
    }

})

it(`Test random age, second way`, function  () {
    chance.age()
    console.log(chance.age())

    switch (chance.age()) {

        case (chance.age()>=0,chance.age()<=13):
          console.log("Child");
           break;
        case (chance.age()>=13,chance.age()<=18):
            console.log("Teen");
            break;
        case (chance.age()>=18,chance.age()<=60):
            console.log("Adult");
            break;
        case (chance.age()>=60,chance.age()<=100):
            console.log("Senior");
            break;

    }

})