"use strict";

let numbers =[10,20,30,40] ;

let [a,b,c,d] = numbers;

/*
console.log("Values after the first assignment (no rest parameters):\n");

console.log("Value of a : " + a);
console.log("Value of b : " + b);
console.log("Value of c : " + c);
console.log("Value of d : " + d);
console.log(a,b,c,d); // 10 20 30 40

[a,b,c] = numbers;

console.log("Values after the first assignment (no rest parameters):\n");

console.log("Value of a : " + a);
console.log("Value of b : " + b);
console.log("Value of c : " + c);

*/

[a, ...b] = numbers;

console.log("Values after the second assignment (with rest parameters):\n");

console.log("Value of a : " + a);
console.log("Value of b : " + b);


[, ...a] = numbers;
console.log("Values after the third assignment (with rest parameters and skipping first element):\n");
console.log("Value of a : " + a);




