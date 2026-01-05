"use strict";

console.log("The min of 1,2,3: ", Math.min(1, 2, 3));

let arr1 = [1,2,3];
console.log("The min of arr1: ", Math.min(arr1));
console.log("The min of (with spread)): ", Math.min(...arr1));

console.log(...arr1)

let arr2 = [4,5,6];
let arr3 = [7,-5,9];

console.log("Min of arr2 and arr3: ", Math.min(...arr2, ...arr3));

console.log("Min of arr2 and arr3 and more: ", Math.min(...arr2, ...arr3, 10,-6));

let arrays = [...arr1, 10, ...arr3, 20];
console.log("Combined arrays: ", arrays);

let arrays2 = [
    ...arrays
    ,-10
    ,20
    ,...arr2
].sort((a,b)=> a-b);
console.log("Arrays 1,2,3 and more: ", arrays2);

let str = "Skillsoft";

console.log("str = ", str);
console.log("Array formed by spreading str: \n", [...str]);

console.log("Array formed with Array.from(str): \n", Array.from(str));



