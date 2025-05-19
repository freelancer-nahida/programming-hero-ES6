function add(a, b) {
    return a + b;

}
console.log(add(3, 2));


// function expression

const add2 = function name(a, b) {
    return a + b;
}

console.log(add2(4, 6));

// arrow function
const add3 = (a, b) => a + b;
console.log(add3(12, 2))

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

console.log(add4(12, 45, 85, 63));


