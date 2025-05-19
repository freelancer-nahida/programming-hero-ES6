// class Product {
//     country = 'Bangladesh';
//     speak(talk) {
//         console.log(`talking about  ${talk}`);
//     }


// }
// const laptop = new Product();
// console.log(laptop);
// laptop.speak('kemon aso');


// class Product {
//     country = 'Bangladesh';
//     nahida(about) {
//         console.log(`taking about ${about}`)

//     }
// }
// console.log(new Product().nahida('Web devloper'));


// class Teacher {
//     lecture(subject) {
//         console.log(`Sir is Teachring ${subject}`);

//     }
// }

// const teachers = new Teacher();
// teachers.lecture('math');
// teachers.lecture('Science');
// teachers.lecture('chemistry')

// console.log();


// class Product {
//     country = 'Bangladesh'

//     nurani(about) {
//         console.log(`taking about  ${about}`);
//     }
// }
// const laptop = new Product();

// laptop.nurani(' Eeb devloper');

// laptop.nurani('House wife');

// laptop.nurani('Members of PQ');

// class Interduction {

//     constructor(name, hscYear, institute) {
//         this.nam = name;
//         this.hs = hscYear;
//         this.ins = institute;

//     }
// }

// const info = new Interduction('Tanjila', 2021, 'BM Collage',)
// console.log(info);

class Vehicle {

    constructor(brk, speed) {
        this.brk = brk;
        this.speed = speed;

    }
}

// class Bus extends Vehicle 
class Motorcycle extends Vehicle {
    constructor(brk, speed, wheel, seat, fluetank) {
        super(brk, speed)
        this.wheel = wheel;
        this.seat = seat;
        this.seat = seat;
        this.fluetank = fluetank;
    }

}

// const bus = new Motorcycle(true, true, 4, 40);
const motor = new Motorcycle(true, true, 4, 40, 25)
console.log(motor);

// console.log(bus);
