// constructor are maddome object key and /////  value add kora jay

class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
    move(carName) {

        console.log(`${carName} o batas amay  `);
    }
}




class Bus extends Vehicle {

    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Car extends Vehicle {

}

const bus = new Bus('audi');

console.log(bus);





