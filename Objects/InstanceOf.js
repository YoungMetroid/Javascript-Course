"use strict";

class Vehicle {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price; 
    }


};

let myCar = new Vehicle("Chevy", "Camaro", 35000); 
let yourCar = JSON.parse(JSON.stringify(myCar));
let herCar = {...myCar};
let hisCar = Object.assign({}, myCar);