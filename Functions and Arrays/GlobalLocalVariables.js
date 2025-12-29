'use strict';
let globallet = "This is a global variable declared with let";
let globalvar = "This is a global variable declared with var";

let numLet = 10;
var numVar = 20;
const NUM_CONST = 30;

function firstFunction(){
    let localLet = "This is a local variable declared with let";
    var localVar = "This is a local variable declared with var";
    undeclaredLocalVar = "This is an undeclared local variable";
/*
    console.log("globalLet from inside FirstFunction: " + globallet);
    console.log("globalvar from inside FirstFunction: " + globalvar);

    console.log("numLet from inside FirstFunction: " + numLet);
    console.log("numVar from inside FirstFunction: " + numVar);
    console.log("NUM_CONST from inside FirstFunction: " + NUM_CONST);

    console.log("localLet from inside FirstFunction: " + localLet);
    console.log("localVar from inside FirstFunction: " + localVar);
    console.log("undeclaredLocalVar from inside FirstFunction: " + undeclaredLocalVar);
*/

}
/*
console.log("globalLet from inside FirstFunction: " + globallet);
console.log("globalvar from inside FirstFunction: " + globalvar);

console.log("numLet from inside FirstFunction: " + numLet);
console.log("numVar from inside FirstFunction: " + numVar);
console.log("NUM_CONST from inside FirstFunction: " + NUM_CONST);

//console.log("localLet from inside FirstFunction: " + localLet);
console.log("undeclaredLocalVar from inside FirstFunction: " + undeclaredLocalVar);
*/

function secondFunction(){
    let numLet = 100;
    var numVar = 200;
    let NUM_CONST = 300;

    console.log("numLet from inside SecondFunction: " + numLet);
    console.log("numVar from inside SecondFunction: " + numVar);
    console.log("NUM_CONST from inside SecondFunction: " + NUM_CONST);
}
/*
secondFunction();
console.log("numLet from inside SecondFunction: " + numLet);
console.log("numVar from inside SecondFunction: " + numVar);
console.log("NUM_CONST from inside SecondFunction: " + NUM_CONST);
*/

function thirdFunction(){

    numLet = 1000;
    numVar = 2000;
    console.log("numLet from inside ThirdFunction: " + numLet);
    console.log("numVar from inside ThirdFunction: " + numVar);
}
/*thirdFunction();
console.log("numLet: " + numLet);
console.log("numVar: " + numVar);
*/

function fourthFunction(){

    console.log("Starting first for loop... ");
    
    // When var is delcared its scope extends to the function;
    // When let is declared its scope is limited to the block.
    j =2;
    var j;
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
    //console.log("Value of i after first for loop: " + i);

    console.log("Starting second for loop... ");

    for (; j < 10; j++){
        console.log(j);
    }
    console.log("Value of j after second for loop: " + j);
}

fourthFunction();

console.log("Value of j in the global scope: " + j);