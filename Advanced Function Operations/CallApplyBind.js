"use strict";

let firstScoreCard = {
    name: "CLara",
    math : 75,
    verbal : 82
};


let secondScoreCard = {
    name: "John",
    math : 85,
    verbal : 79
};

function printWeightedScore(mathWt, verbalWt){
    let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / (mathWt + verbalWt);
    console.log(`Weighted Score of ${this.name} is: ${weightedScore}`);
}

//call uses parameters
console.log("Linking the scorecards with call:");
printWeightedScore.call(firstScoreCard,3 ,2);
printWeightedScore.call(secondScoreCard,3 ,2);

console.log("Linking the scorecards with apply:");
//apply uses array to pass parameters
printWeightedScore.apply(firstScoreCard, [3 ,2]);
printWeightedScore.apply(secondScoreCard, [3 ,2]);

//bind returns a new function with 'this' linked to the object
console.log("Linking the scorecards with bind:");
let firstScore = printWeightedScore.bind(firstScoreCard);
let secondScore = printWeightedScore.bind(secondScoreCard);

firstScore(3 ,2);
secondScore(3 ,2);


// Limitations of these functions
// When using the arrow function, 'this' is lexically bound to the surrounding scope
// in this case, it will not refer to the scorecard objects but to the global scope
// We have to be careful while using arrow functions with call, apply and bind
console.log("Demonstrating limitation of arrow function with call, apply and bind :");
let weightedScoreArrow = (mathWt, verbalWt) => {
    let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / (mathWt + verbalWt);
    console.log(`Weighted Score of ${this.name} is: ${weightedScore}`);
    console.log("this is: ",this);
}

console.log("Using arrow function with call, apply and bind :");
weightedScoreArrow.call(firstScoreCard,3 ,2);
weightedScoreArrow.apply(firstScoreCard,[3 ,2]);
let firstScoreArrowBinding = weightedScoreArrow.bind(firstScoreCard);
firstScoreArrowBinding(3 ,2);