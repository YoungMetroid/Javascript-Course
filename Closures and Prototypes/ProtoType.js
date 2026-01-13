function Student(name){
    this.name = name;
    this.avgScore = (scoreArray) =>
        scoreArray.reduce((a,b) => a + b)/scoreArray.length;
}

//Public methods should always be defined on the prototype
//This saves resources
function StudentProto(name){
     this.name = name;
    StudentProto.prototype.avgScore = (scoreArray) =>
        scoreArray.reduce((a,b) => a + b)/scoreArray.length;
}

var heidi = new StudentProto("Heidi");
var ralf = new StudentProto("Ralf");

console.log("\nThe intros for each student (proto):" );
console.log("The avgScore for each student: ");
console.log("Heidi: ", heidi.avgScore([90, 95, 85, 88]));
console.log("Ralf: ", ralf.avgScore([80, 85, 78, 82]));
StudentProto.prototype.schoolName = "ABC School";

console.log("\nWhat do the Student objects contain:?");
console.log(heidi);
console.log(ralf);  

function StudentMultiProto(name){
    StudentMultiProto.prototype.uniName = "XYZ";
    this.name = name;

    StudentMultiProto.prototype.avgScore = (scoreArray) =>
        scoreArray.reduce((a,b) => a + b)/scoreArray.length;
    StudentMultiProto.prototype.intro = () => {
        console.log("My name is %s and I'm a student at %s.",
            this.name, this.uniName);
    }
        
    StudentMultiProto.prototype.avgScore2 = function(scoreArray){
        return scoreArray.reduce((a,b) => a + b)/scoreArray.length;
    }
}

heidi = new StudentMultiProto("Heidi");
ralf = new StudentMultiProto("Ralf");
console.log("\nThe intros for each student (multiproto):" );

console.log("Heidi: ", heidi.avgScore([90, 95, 85, 88]));
console.log("Ralf: ", ralf.avgScore([80, 85, 78, 82]));

console.log("Heidi: ", heidi.avgScore2([90, 95, 85, 88]));
console.log("Ralf: ", ralf.avgScore2([80, 85, 78, 82]));

console.log("\nThe intros for each student (multiproto):" );
heidi.intro();
ralf.intro();

console.log("\nWhat do the Student objects contain:?");
console.log(heidi);
console.log(ralf);  

class StudentClass{ 
    static uniName = "XYZ";

    constructor(name){
        this.name = name;
    }   
    avgScore(scoreArray) {
        return scoreArray.reduce((a,b) => a + b)/scoreArray.length;
    }

    intro() {
        console.log("My name is %s and I'm a student at %s.",
            this.name, StudentClass.uniName)
    }
}

heidi = new StudentClass("Heidi");
ralf = new StudentClass("Ralf");

console.log("\nThe intros for each student (class):" );
console.log("Heidi: ", heidi.avgScore([90, 95, 85, 88]));
console.log("Ralf: ", ralf.avgScore([80, 85, 78, 82]));
heidi.intro();
ralf.intro();
console.log("\nWhat do the Student objects contain:?");
console.log(heidi);
console.log(ralf);  


function Vehicle(type){
    this.type = type;

    this.printDetails = function(){
        console.log("Vehicle Type: ", this.type);
    }
}

function Car(make, model,drivenWheels){
    this.make = make;
    this.model = model;
    this.drivenWheels = drivenWheels;

    this.printDetails = function(){
        console.log("Car Make: ", this.make);
        console.log("Car Model: ", this.model);
        console.log("Driven Wheels: ", this.drivenWheels);
    }
}

function Aeroplane(make, model, numEngines, engineType){
    this.make = make;
    this.model = model;
    this.numEngines = numEngines;
    this.engineType = engineType;
}

Car.prototype = new Vehicle("Car");
var vwGTI = new Car("VW", "GTI", "Front-Wheel Drive");
console.log("The VW GTI object: ", vwGTI);  
vwGTI.printDetails();

Aeroplane.prototype = new Vehicle("Aircraft");
var airbusA320 = new Aeroplane("Airbus", "A320", 2, "Turbofan");
console.log("The Airbus A320 object: ", airbusA320);
airbusA320.printDetails();


function AirbusA320(variantName, wingspan, factoryLocation){
    this.variantName = variantName;
    this.wingspan = wingspan;
    this.factoryLocation = factoryLocation;

    this.printDetails = function(){ 
        console.log("This %s is a %s %s %s which was made in %s "+
            "and has a wingspan of %im. It has %i %s engines.",
            this.type , this.make, this.model, this.variantName,
            this.factoryLocation, this.wingspan, this.numEngines, this.engineType
        );
    }
}

AirbusA320.prototype = airbusA320;

var a320neo = new AirbusA320("NEO", 36, "Hamburg, Germany");

console.log("The Airbus A320 NEO object: ", a320neo);
a320neo.printDetails();
