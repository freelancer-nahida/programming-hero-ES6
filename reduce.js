// const number = [2, 3, 4, 100];
// const total = number.reduce((p, c) => p + c, 2)
// console.log(total);

// const numbers = [20, 10, 33, 28, 19];

// const sub = numbers.reduce((maria, beli) => maria * beli, 1)
// console.log(sub);


const product = [
    { id: 1, name: 'lenovo', price: 51000 },
    { id: 2, name: 'dell', price: 41000 },
    { id: 3, name: 'hp', price: 81000 },
    { id: 4, name: 'mac', price: 91000 },
]



// const prices = product.map(products => products.price)
// console.log(prices);

const totalPrice = product.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice);

//find
// const expence = products.find(p => p.price > 50000)
// console.log(expence);



// filter
// const expensive = products.filter(p => p.price > 500000);
// console.log(expensive);


// const names = products.map(product => product.name);
// console.log(names);

// const prices = products.map(product => product.price);
// console.log(prices);


//foreach

// products.forEach(p => console.log(p.id));