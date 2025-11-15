"use strict";

class Vehicle{
    constructor(make, model, price){
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

let car1 = new Vehicle("Honda", "Accord", 30000);

let yourCar = JSON.parse(JSON.stringify(car1));

let herCar = {...car1};

let hisCar = Object.create(car1);

console.log ("Is myVar a Vehicle? ", car1 instanceof Vehicle);
console.log ("(Deep Copy)Is yourCar a Vehicle? ", yourCar instanceof Vehicle);
console.log ("{...Spread Syntax} Is herCar a Vehicle? ", herCar instanceof Vehicle);
console.log ("Is hisCar a Vehicle? ", hisCar instanceof Vehicle);