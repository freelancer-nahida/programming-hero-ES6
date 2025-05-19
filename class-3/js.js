// var let const
// default parameter
//template string
//arrow function
// *destructuring  and spread operator

// ***************************
// function add(a = 0, b = 99) {
//     return a + b;

// }
// console.log(add(1,5));

//////************************ */
// const a = 56;
// const b = 60;
// console.log(`sum of ${a} and ${b} is ${a + b}`);
// *****************************
const square = x => x ** 2;
console.log(square(2));

// ***************
const numbers = {
    name: 'numeric',
    roll: 68


}
const { name, roll } = numbers;
console.log(roll);

// Access value

// const product = [{ price: 500 }];

// console.log(product[0].price)

// const user = {
//     id: 5001,
//     name: 'Nahida Sultana',
//     address: {
//         // street: {
//         first: 'nalchity',
//         second: 'jhalokathi',
//         third: 'Barisal',
//         // },
//         city: 'Dhaka'
//     }



// }
// console.log(user.address.street?.third)

const product = {

    count: 5000,
    data: [
        { id: 1, name: 'samsung', price: 64000 },
        { id: 2, name: 'appo', price: 20000 }

    ]

}
console.log(product.data[1].id);
