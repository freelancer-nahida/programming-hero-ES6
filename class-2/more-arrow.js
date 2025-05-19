// const difference = (x, y) => x - y;

// console.log(difference(5, 3));


// function getThird(numbers) {
//     return number[4];
// }
// const getThird = numbers => numbers[4];

// const third = getThird([5, 7, 3, 4, 57]);

// console.log(third);

// const doubleIt = num => num * 2;

// console.log(doubleIt(2));

//large math

// const doMath = (x = 0, y = 0, z = 0) => {

//     const sum = x + y + z;

//     const mult = x * y * z;

//     const result = sum + mult;

//     return result;

// }
// console.log(doMath(2, 4));

// const numbers = [3, 4, 6, 5, 3, 1, 3];

// const arrayMax = Math.max(...numbers);

// // console.log(arrayMax);

// console.log(arrayMax, ...numbers);

// const friends = [2, 4, 3, 23, 44, 32];

// // const bondhu = friends;

// const bondhu = [...friends];

// bondhu.push(12);

// console.log(bondhu);

// console.log(friends);

const actor = {

    name: 'Aj',
    age: 30,
    phone: '010123122',
    money: 10000000000
}

// const phone = actor.phone;

// const { phone, age: boyos, money: taka } = actor;
// console.log(phone);
// console.log(boyos);
// console.log(taka);

// array destructure

// const numbers = [45, 99];

// const [first, sec] = numbers;

// const [x, y] = [12, 66];

// function doubleIt(a, b) {
//     return [a * 2, b * 2];
// }
// const [prothom, ditiyo] = doubleIt(6, 7);

// console.log(prothom, ditiyo);

const glass = {
    name: 'glass',
    color: 'golden',
    price: 500,
    isCleaned: true
}
// delete glass.isCleaned;

const { isCleaned, ...shortGlass } = glass;

// console.log(isCleaned);
// console.log(shortGlass);

// Object.freeze(glass);

Object.seal(glass);

glass.source = 'bd'
console.log(glass);

// const keys = Object.keys(glass);
// const values = Object.values(glass);
// const pair = Object.entries(glass);
// // console.log(keys);
// // console.log(values);
// console.log(pair);

