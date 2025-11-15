"use strict";

let items = [
    {name: "meat", price:25},
    {name: "bread", price:5},
    {name: "vegetables", price:10},
    {name: "drinks", price:15}
];

/*
function getTotalCost(items){
    return items.reduce((sum, item) => sum + item.price, 0);
}

let totalCost = getTotalCost(items);
console.log("Total Cost: " + totalCost);

*/
function applyTaxes(totalCost){
    return 1.05 * totalCost;
}

//console.log("Total Cost after Taxes: " + applyTaxes(totalCost));

function getTotalCost(items, callback){
    let totalCost = items.reduce((sum, item) => sum + item.price, 0);
    return callback(totalCost);
}

var totalAfterTaxes = getTotalCost(items, applyTaxes);
console.log("Total Cost after Taxes: " + totalAfterTaxes);