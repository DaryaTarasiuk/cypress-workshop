const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(Object.keys(options).length);

const {border, bg} = options.colors;
console.log(border)
//console.log(options.name);

//delete options.name;
//console.log(options);
let counter = 0
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}

const arr = [2, 12, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

cy.get('[data-test-lineitem-title]').invoke('text')
    .then(product => {
        cy.wrap(product).as('product')
    })

cy.get('[data-test-line-item-price]').invoke('text')
    .then(price => {
        cy.wrap(price).as('price')
    })

cy.get(`[data-test-line-item-price]`).each(($el, index) => {
    cy.wrap($el).invoke('text').then(actualValue => {
        expect(actualValue).to.eq(`$${PRODUCTS[index].price.toFixed(2)}`)
    })
})

cy.log('THEN The number of products in the card is correct')
cy.get('[data-test-items-count]').invoke('text').then((text) => {
    let splitText = text.split('')
    expect(+splitText[1]).to.equal(2)
})