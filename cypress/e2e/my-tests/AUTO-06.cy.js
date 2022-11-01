describe ('Map Creating', ()=> {

})

it(`Create Map`, function  ()  {
    let map1=new Map();
    map1.set("Mercury", {radius: 2440, density: 5.43, distance: 0.395});
    map1.set ("Venus", {radius: 6052, density: 5.24, distance: 0.723});
    map1.set("Earth", {radius: 6378, density: 5.52, distance: 1});
    map1.set("Mars", {radius: 3396, density: 3.93, distance: 1.53});
    map1.set("Jupiter", {radius: 71492, density: 1.33, distance: 5.21});
    map1.set("Saturn", {radius: 60268, density: 0.69, distance: 9.551});
    map1.set("Uranus", {radius: 25559, density: 1.27, distance: 19.213});
    map1.set("Neptune", {radius: 24764, density: 1.64, distance: 30.07})

    //output elements from Map in regure format
    map1.forEach((value, key) => {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
    })

//output of data about the planet Saturn
    cy.log(map1.get('Saturn'))

//output the total number of items in the collection
    console.log(map1.size)

//check presence elements with key 'Mercury'
    let mapSet= new Set(['Mercury','Not Mercury'])
    console.log(map1.has('Mercury'))

//delete 'Uranus'
    console.log(map1.delete('Uranus'))
    map1.forEach((value, key) => {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))


        //create a new Map
        let map2=new Map();
        map2.set("Not Venus", {radius: 6052, density: 5.24, distance: 0.723})
        map2.set("Not Mercury", {radius: 6052, density: 5.24, distance: 0.723})
        map2.set("Not Neptune", {radius: 6052, density: 5.24, distance: 0.723})
        //merge map1 and map2
        const mergedMaps = new Map([...map1, ...map2]);
        console.log(mergedMaps)
//create an object and output data to the property name and its value to the console
        let planet = {
            planet: "Mercury",
            radius: 2440,
            density: 5.43,
            distance: 0.395};
        for(let key in planet){
            console.log(key);
            console.log(planet[key])
        }

    })

})