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