describe ('Array Creating', ()=> {

})

it(`Create Array`, function  ()  {
    let planets= ([
            {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
            {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ])



   //add solarSystem
    planets.forEach(planet => {
        cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', solarSystem:true '));
    })



        //output planets Array to the console
    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })
//add a new element
    let newLength = planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})

//output new planets Array to the console
    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })

//sum the radiuse
    const totalRadius=planets.reduce((acc,cur)=>{
       return acc+cur.radius;
    },0)
    cy.log('Total radius is  ' + totalRadius)

//planet with Distance>5

    const getPlanetsWithDistance=planets.filter((planet)=> planet.distance>5);

   console.log(getPlanetsWithDistance)


//  delete "SomeNewPlanet"

    planets.splice(8)
    cy.log(planets)

//sort plants by radius

    planets.sort(function(a, b) {
        return a.radius - b.radius;
    });
   // output array
    planets.forEach((planet) => {
        console.log(planet);
    });

//sort planets by name
    planets.sort(function(a, b) {
        return a.planet.localeCompare(b.planet);
    });
   // output array
    planets.forEach((planet) => {
        console.log(planet);
    });
//array length
    console.log(planets.length)

})

