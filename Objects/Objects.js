"use strict";

function objs(){
    let firstItem = {id: 1, name: "laptop", price: 500};
    let secondItem = {id: 1, name: "watch", price: 240, brand:"Sonical"};
    console.log("First Item: ", firstItem);

    console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.price}`);
    console.log(`The brand of firstItem is ${firstItem.brand}.`);
    console.log(`secondItem has a name of ${secondItem["name"]} and a price of ${secondItem["price"]}.`); 
    console.log(`The brand of secondItem is ${secondItem.brand}.`);

    console.log(Object.keys(firstItem).length);
    console.log(Object.keys(secondItem).length);

    Object.keys(firstItem).forEach(key => {
        console.log(`Key: ${key}, Value: ${firstItem[key]}`);
    });

    Object.keys(secondItem).forEach(key => {
        console.log(`Key: ${key}, Value: ${secondItem[key]}`);
    });


    const USD_EUR = 0.9;

    let thirdItem = {id:3
        ,name:"headphones"
        ,brand:"Sony"
        ,price:84
        ,priceEur: function() {
            return this.price * USD_EUR;
        }
    };
    console.log("Price of Third Item: ", thirdItem.priceEur());

    thirdItem = {id:3
        ,name:"headphones"
        ,brand:"Sony"
        ,price:84
        ,priceEur() {
            return this.price * USD_EUR;
        }
    };

    console.log("Price of ES6 Third Item: ", thirdItem.priceEur());

    thirdItem.mfgCountry = "Mexico";
    console.log("Third Item after adding mfgCountry: ", thirdItem);

    let fourthItem = new Object();
    fourthItem.id = 4;
    fourthItem.name = "Smartphone";
    fourthItem.price = 450;

    Object.keys(fourthItem).forEach(key => {
        console.log(`Key: ${key}, Value: ${fourthItem[key]}`);
    });

    delete fourthItem.price;
    console.log("Fourth Item after deleting price: ", fourthItem);
}


function thisKeywordDemoInMainWindow(){
    console.log("Is this === window? ", this === window);

    var age = 35;
    console.log("window.age: ", window.age);
    console.log("this.age: ", this.age);

    this.age = 55;
    console.log("window.age: ", window.age);
    console.log("age: ", age);

    let someFunction = ()=> this;


    console.log("This keyword returned by someFunction(): ", someFunction());
}

function thisKeyWordInsideClass(){
    let myCar = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        price: 24000,
        printDetails(){
            console.log("This is from myCar: ", this);
        },
        //This does not work since it is refering to the outer scope most likely window
        printDetailsUsingThis: function() {
            console.log(`
                Make: ${this.make}
                Model: ${this.model}
                Year: ${this.year}
                Price: ${this.price}
            `);
        },
        engine:{
            cylinders: 4,
            displacement: 2000,
            horsepower: 178,
            printDetails(){
                console.log(`
                    Displacement: ${this.displacement}cc
                    Horsepower: ${this.horsepower}hp
                    `)
            }
        }
    }
    myCar.printDetails();
    myCar.printDetailsUsingThis();
    myCar.engine.printDetails();
}

function linkingFunctionsToObjects(){
    let myCar = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        price: 24000,
        engine:{
            cylinders: 4,
            displacement: 2000,
            horsepower: 178
        }
    }
    let yourCar = {
        make: "Honda",
        model: "Accord",
        year: 2021,
        price: 26000,
        engine:{
            cylinders: 4,
            displacement: 2000,
            horsepower: 158
        }
    }
    function printCarDetails(){
        console.log(`
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}
            Price: ${this.price}
        `);
    }       
    function printEngineDetails(){
        console.log(`
            Displacement: ${this.displacement}cc
            Horsepower: ${this.horsepower}hp
        `);
    }

    console.log("My Car Details:\n");
    printCarDetails.call(myCar);
    printEngineDetails.call(myCar.engine);

    console.log("Your Car Details:\n");
    printCarDetails.call(yourCar);
    printEngineDetails.call(yourCar.engine);
    /*myCar.printDetails = printCarDetails;
    myCar.engine.printDetails = printEngineDetails;
    myCar.printDetails();
    myCar.engine.printDetails();
    */
}

function objectConstructors(){

    function Car(make,model,price,engine,year){
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;
        this.year = year;

        this.details = function(){
            console.log(`
                Make: ${this.make}
                Model: ${this.model}
                Year: ${this.year}
                Price: ${this.price}
            `);
        }
        this.engine.details = function(){
            console.log(`
                Displacement: ${this.displacement}cc
                Horsepower: ${this.horsepower}hp
            `);
        }
    }

    let s60Engine = {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250
    }

    let myCar = new Car("Volvo","S60",45000,s60Engine,2024);
    console.log(`My Car is a ${myCar.make} ${myCar.model} `);
     myCar.details();
     myCar.engine.details();
    let caymanEngine={
        cylinders: 6,
        displacement: 3000,
        horsepower: 350
    }

    let yourCar= new Car("Porsche","Cayman",60000,caymanEngine,2024);
    console.log(`Your Car is a ${yourCar.make} ${yourCar.model} `);

    yourCar.details();
    yourCar.engine.details();
}

function classLesson(){
    class Vehicle{
        constructor(make,model,price,engine,year){
            this.make = make;
            this.model = model;
            this.price = price;
            this.engine = engine;
            this.year = year;
        }

        details(){
            console.log(`
                Make: ${this.make}
                Model: ${this.model}
                Year: ${this.year}
                Price: ${this.price}
            `);
        }
    }

    let engine = {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250
    };
    let myCar = new Vehicle("Volvo","S60",45000,engine,2024);
    console.log("My Car details:");
    myCar.details();
}

function objectCopying(){
    var myCar = {
        make: "Toyota",
        model: "Camry",
        price: 24000,
        color: "Blue",

        seats:{ 
            material: "Leather",
            color: "Black"
        }
    }

    console.log("My Car: ", myCar);

    var yourCar = myCar;

    console.log("Your Car after assignment from myCar: ", yourCar);

    yourCar.tyres = "Pirelli";
    yourCar.color = "Red";
    console.log("Your Car after changing color to Red: ", yourCar);
    console.log("My Car after changing color of yourCar: ", myCar);

    //To make a shallow copy
    var hisCar = Object.assign({}, myCar);
    hisCar.seats.color = "Neon Black";
    hisCar.color = "White";
    console.log("His Car after changing seats color to Neon Black: ", hisCar);
    console.log("My Car after changing seats color of hisCar: ", myCar);
}
function objectCopingUsingSpreadOperator(){
   var myCar = {
        make: "Toyota",
        model: "Camry",
        price: 24000,
        color: "Blue",

        seats:{ 
            material: "Leather",
            color: "Black"
        }
    }

    var yourCar = {...myCar};
    yourCar.seats.color = "Neon Black";
    yourCar.color = "White";
    console.log("Your Car after changing seats color to Neon Black: ", yourCar);
    console.log("My Car after changing seats color of yourCar: ", myCar);
}  
function objectDeepCopyingUsingJSON(){
    //Fuinctions cannot be copied using this method
    //They'll be lost in the copying process
    var myCar = {
        make: "Toyota",
        model: "Camry",
        price: 24000,
        color: "Blue",

        seats:{ 
            material: "Leather",
            color: "Black"
        }
    }
    var yourCar = JSON.parse(JSON.stringify(myCar));
    yourCar.seats.color = "Neon Black";
    yourCar.color = "White";
    console.log("Your Car after changing seats color to Neon Black: ", yourCar);
    console.log("My Car after changing seats color of yourCar: ", myCar);
}
function objectMethods(){
    const myCar = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        price: 24000,
        color: "Blue",
        seats:{ 
            material: "Leather",
            color: "Black"      
        }
    }

    var samsCar = Object.create(myCar);
    samsCar.seats.color = "White"; 
    samsCar.color = "Red";

/*
console.log("Keys of myCar: ", Object.keys(myCar));
console.log("Values of myCar: ", Object.values(myCar));
console.log("Entries of myCar: ", Object.entries(myCar));
console.log("Keys of samsCar: ", Object.keys(samsCar));
*/
let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}
let yourCar = Object.assign( {engine:s60Engine},myCar);

console.log("The effect of Object.assign():");
console.log("Your Car: ", yourCar);
console.log("My Car: ", myCar);   
yourCar.color = "Red"; 
}
function freezingObjects(){
     const myCar = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        price: 24000,
        color: "Blue",
        seats:{ 
            material: "Leather",
            color: "Black"      
        }
    }

    let s60Engine = {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250
    }

    let yourCar = Object.assign(myCar,{engine:s60Engine});
    /*
    let herCar = Object.freeze(myCar);

    //herCar.color = "Yellow";
    herCar.seats.color = "White";
    //herCar.tyres = "Pirelli";
    herCar.seats.bucket = true;

    /*
    console.log("Her Car after trying to change some properties: ", herCar);
    console.log("My Car after trying to change some properties of herCar: ", myCar);
    */

    let hisCar = Object.seal(myCar);

    hisCar.color = "White"
    hisCar.seats.color = "White";
    //hisCar.weight = 1500;
    hisCar.engine.torque = 350;

    console.log("His Car after trying to change some properties: ", hisCar);
    console.log("My Car after trying to change some properties of hisCar: ", myCar);
    
}
freezingObjects();

