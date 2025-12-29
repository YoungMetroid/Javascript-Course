"use strict";

function mphToKmph(mph){
    console.log("MPH value entered: " + mph);
    return mph * 1.61;
}

let speedLimit = mphToKmph(65);
console.log("Speed limit in KM/H: " + speedLimit);

let mphToKmphArrow = (mph) =>{
    console.log("MPH value entered (arrow function): " + mph);
    return mph * 1.61;
}

let speedLimitArrow = mphToKmphArrow(80);
console.log("Speed limit in KM/H (arrow function): " + speedLimitArrow);

let speedLimitArrowImplicit = mph => mph * 1.61;
console.log("Speed limit in KM/H (arrow function implicit return): " + speedLimitArrowImplicit(90));


let triangleArea = (base,height) => 0.5 * base * height;
console.log("Area of triangle: " + triangleArea(10,5));

let functionCopy = triangleArea;
console.log("Area of triangle using function copy with a base of 8 and height of 4: " + functionCopy(8,4));

var x = function(f){return 5 * (f-32)/9;};
console.log("Temperature 100F in Celsius: " + x(100));