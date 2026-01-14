"Use strict";

let prices = new Array(10,20,36,40,47);
let shallowCopy = prices;

prices.push(55);
console.log("Original Array prices :\n" , prices);
console.log("Shallow Copy Array shallowCopy :\n" , shallowCopy);


shallowCopy[0] = 75;
console.log("After modifying the shallowCopy array :\n");
console.log("Original Array prices :\n" , prices);
console.log("Shallow Copy Array shallowCopy :\n" , shallowCopy);


// Create a independent copy of an array called Deep Copy
// We can use the slice() method to create a deep copy of an array

let deepCopy = prices.slice(); // creates a deep copy of the prices array
console.log("Using slice method to DeepCopy the prices into deepCopy:\n" , deepCopy);

deepCopy[0] = "one";
console.log("After modifying the deepCopy array :\n");
console.log("Content of prices :\n" , prices);
console.log("Content of deepCopy :\n" , deepCopy);


prices.push(2);
console.log("Content of prices after pushing a new element:\n" , prices);

prices.unshift(0);
console.log("Content of prices after adding an element at the start:\n" , prices);

prices.pop();
console.log("Content of prices after popping an element:\n" , prices);

prices.shift();
console.log("Content of prices after shifting an element:\n" , prices);

//Remove an element from an array using delete keyword
// Note: Using the delete keyword will leave that space as undefined or empty
// And the length of the array will be the same
delete prices[2];
console.log("Content of prices after deleting an element:\n" , prices);


