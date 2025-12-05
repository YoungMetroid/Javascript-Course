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
firstFunction();

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
}