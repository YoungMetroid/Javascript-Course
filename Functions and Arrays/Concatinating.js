"use strict";

let europeOffices = ['Bucharest','Prague', 'Rome'];
let africaOffices = ['Durban','Narobi', 'Cairo'];
let oceaniaOffices = ['Christchurch','Sydney', 'Auckland'];

let southernOffices = africaOffices.concat(oceaniaOffices);
console.log("Southern Hemisphere Offices:\n", southernOffices);

console.log("Africa Offices array: \n", africaOffices);
console.log("Oceania Offices array: \n", oceaniaOffices);

let allOffices = africaOffices.concat(europeOffices, oceaniaOffices);
console.log("All Offices array after concatination:\n", allOffices);

//I have to use slice() method to create a 
// copy of allOffices array before sorting
let sortedOffice = allOffices.slice().sort();
console.log("Sorted All Offices array:\n", sortedOffice);
console.log("Original All Offices array remains unchanged:\n", allOffices);

console.log("Reversing the sorted offices array: \n", sortedOffice.reverse());

allOffices = africaOffices.concat(europeOffices, oceaniaOffices);
console.log("Sorted copy of allOffices using spread syntax: \n"
    ,[...allOffices].sort());

console.log("Sorted copy of allOffices using slice() and sort(): \n"
    ,allOffices.slice().sort());

console.log("Original allOffices array remains unchanged:\n", allOffices);


let numArray1 = [3,5,7,100, 300, 50,56,10,0];
console.log("numArray1: \n", numArray1);
console.log("Sorted numArray1 using sort(): \n", numArray1.slice().sort());
console.log("Sorted numArray1 using spread syntax: \n", [...numArray1].sort());

//Performing numerical sort
console.log("numArray1 using sort(function(a,b){return a-b): \n", numArray1.slice().sort(function(a,b){return a-b;}));
console.log("numArray1 using sort((a,b)=>a-b): \n", [...numArray1].sort((a,b) =>{ return a-b;}));

console.log("Reverse sorted numArray1 using sort((a,b)=> return {b-a;}): \n", numArray1.sort((a,b) => {return b-a;}));



