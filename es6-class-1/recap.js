// const product = [
//     { id: 1, name: 'lenovo', price: 65000 },
//     { id: 2, name: 'DELL', price: 60000 },
//     { id: 3, name: 'WALTON', price: 45000 },
//     { id: 4, name: 'SUMSONG', price: 55000 },
//     { id: 5, name: 'SAMPHONEY', price: 50000 },
// ];

//map 

// const names = product.map(products => products.name);
// console.log(names);
// const prices = product.map(products => products.price)
// console.log(prices);

//forEach

// filter

// product.forEach(p => console.log(p.id));

// const expensive = product.filter(p => p.price > 50000)
// console.log(expensive);

//  find

// const affordable = product.find(p => p.price < 50000);

// console.log(affordable);


const numbers = [2, 4, 3, 2, 66];

// const total = numbers.reduce((prev, curr) => prev + curr, 0);

// console.log(total);

// const total = product.reduce((prev, curr) => prev + curr.price, 0);
// console.log(total);

// const totalId = product.reduce((prev, curr) => prev + curr.id, 0);
// console.log(totalId);

class product {
    country = 'Bangladesh';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //method
    speak(talk) {
        console.log(`saradin pokkon kai r ${talk} `)
    }
}


const lenovo = new product('Maria');
console.log(lenovo);
lenovo.speak('kanna kori');



