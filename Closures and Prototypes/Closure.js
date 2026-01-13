
"use strict";
function Patient(id, patientName,address, bloodGroup){
        this.id =id;
        this.patientName = patientName;
        var _address =address;
        var _bloodGroup = bloodGroup;
        this.printDetails = function(){
                console.log(
                    `Patient ID: ${this.id}, 
                    Name: ${this.patientName}, 
                    Address: ${_address}, 
                    Blood Group: ${_bloodGroup}`);
        }  
}
function Closures(){
var firstPatient = new Patient(1, "John Doe", "123 Main St", "A+");
firstPatient.printDetails();
var secondPatient = new Patient(2, "Jane Smith", "456 Elm St", "B+");
secondPatient.printDetails()
firstPatient.patientName = "Dean Thomas";
firstPatient.printDetails();
secondPatient.printDetails();
}
function ClosuresAndVariablesInNestedFunctions(){
    const PI =3;
    let getAreaFirst = function(circle){
        console.log("Inside getAreaFirst");
        console.log("Area of circle: ", PI * circle.radius * circle.radius);
    }

    function Circle(r){
        this.radius = r;
    }

    let firstCircle = new Circle(10);

    function innerFunction(){
        const PI = 3.1;
        let getAreaSecond = function(circle){
            console.log("Inside getAreaSecond");
            console.log("Area of circle: ", PI * circle.radius * circle.radius);
        }
        let getAreaThird = function(circle){
            const PI = 3.14;
            console.log("Inside getAreaThird");
            console.log("Area of circle: ", PI * circle.radius * circle.radius);
        }   
        getCircumference = function(circle){
            console.log("Inside getCircumference");
            console.log("Circumference of circle: ", 2 * PI * circle.radius);
        }
        let secondCircle = new Circle(20);
        console.log("innerFunction: Calling the functions with firsrCircle: ");
        getAreaFirst(firstCircle);
        getAreaSecond(firstCircle);
        getCircumference(firstCircle);
        getAreaThird(firstCircle);

        console.log("innerFunction: Calling the functions with secondCircle: ");
        getAreaFirst(secondCircle);
        getAreaSecond(secondCircle);
        getCircumference(secondCircle);
        getAreaThird(secondCircle);

    }
    innerFunction();
    console.log("Outside innerFunction: Calling the functions with firstCircle: ");
    getAreaFirst(firstCircle);

    function getAreaFourth(circle){
        const PI = 3.142;
        function calculateArea(){
            console.log("Inside calculateArea of getAreaFourth");
            console.log("Area of circle: ", PI * circle.radius * circle.radius);
        }
        return calculateArea;
    }

    console.log("The value of PI in this scope:" , PI);
    let circleArea = getAreaFourth(firstCircle);
    circleArea();
   
}
function counter(){
    let count = 0;
    function incrementCount(){
        return count += 1;
    }
    return incrementCount;
}

function ClosuresAndCounters(){
    var countFn = counter();
    console.log("1st invocation of countFn gives: ", countFn());
    console.log("2nd invocation of countFn gives: ", countFn());
    console.log("3rd invocation of countFn gives: ", countFn());
    for(var i = 4; i<= 8; i++){
        console.log(`${i}th invocation of countFn gives: `, countFn());
    }

    var countFn2 =  counter();
    console.log("1st invocation of countFn2 gives: ", countFn2());

    console.log("4th invocation of countFn gives: ", countFn());
}

var decCount = 0;
window.onload = function() {
    var incButton = document.getElementById("incButton");

    var decButton = document.getElementById("decButton");
    var incCount = 0;

    //anounymous function
    incButton.onclick = function() {
        incCount++;
        var incCountMessage = document.getElementById("incCount");
        incCountMessage.innerHTML = " Increment counter = " + incCount;
    };
    //assign regular function
     decButton.onclick = countDec;
};

function countDec(){
    decCount--;
    var decCountMessage = document.getElementById("decCount");
    decCountMessage.innerHTML = " Decrement counter = " + decCount;
};


function closureScope(){
    var boss = "Margaret";

    function employee(name, title){
        this.name = name;
        this.title = title;
        this.domain = "Data";

        this.intro= function(){
            let empTitle = this.domain + " " + title;
            console.log("My name is %s and I report to %s. My title is %s.", name, boss, empTitle);
        }
    }
    var troy = new employee("Troy", "Analyst");
    console.log("The employee introduction");
    troy.intro();
    
    boss = "Wolfgang";
    console.log("The employee intro after the boss change:");
    troy.intro();

    troy.domain = "ML";
    console.log("The employee intro after the domain change:");
    troy.intro();

    troy.title = "Engineer";
    console.log("The employee intro after the title change:");
    troy.intro();

    console.log(troy);
};


function myFunction(){
    console.log("'Hello' will be displayed after 10 seconds...!");
    setTimeout(function(){
        console.log("Hello");
    }, 10000);
}
//Closures and Looops
function timeoutTest(){  
    for(let i = 0; i <= 3; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 3000);
    }
}

//Getters and Setters
function getterSetterData(){
    var myVar = 1;

    return {
        getVar: function() {
            return myVar;
        },
        setVar: function(value) {
            myVar = value;
        }
    };
}

let objVar = getterSetterData();
console.log("Initial value of myVar: ", objVar.getVar());
objVar.setVar(5);
console.log("Updated value of myVar: ", objVar.getVar());

