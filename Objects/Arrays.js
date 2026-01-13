"use strict";

let items =[
    {name: "meat", price:25}
    ,{name: "vegetables", price:17}
    ,{name: "cake", price:20}
    ,{name: "drinks", price:38}
];


let prices = [];

for(let item of items){
    prices.push(item.price);
}

console.log("Price list using for loop : " + prices);


let priceList = items.map(function(item){
    return item.price;  
});


let filterMapThenSum = items.filter(item => item.price > 20).map(item => item.price+10).reduce((sum, price) => sum + price, 0);
console.log("Filtered, Mapped and Summed : " + filterMapThenSum);


console.log("Price list using map function : " + priceList);


//sum is the accumulator and the item if the current item in the array.
//The 0 is the initial value of the accumulator.
let sumOfItem = items.reduce((sum, item)=> sum + item.price,0);
console.log("Sum of all items using reduce method: " + sumOfItem);

let expensiveItems = items.filter(item => item.price >= 25);
console.log("Expensive items using filter method: " + JSON.stringify(expensiveItems));

let costExpensiveItems = expensiveItems.reduce((sum, item) => sum + item.price,0);
console.log("Cost of expensive items using reduce method: " + costExpensiveItems);

const values = [3,2,3,5,2,4,4,4];
console.log("Original values : " + values);
const setOfValues = new Set(values);
console.log("Set of values : " ,setOfValues);
const uniqueValues = [...setOfValues];
console.log("Unique values using Set : " + uniqueValues);