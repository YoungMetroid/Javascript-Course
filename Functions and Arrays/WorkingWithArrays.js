"use strict";

var i;
/*
let studentGrades = ["A", "B",3, "D", "E", 6];

console.log("Length : " + studentGrades.length);
console.log("Element at index 3:" + studentGrades[3]);
console.log("Element at index -3: " + studentGrades[-3]);

console.log("Iterating using for...of loop:");
for(let i = 0; i < studentGrades.length; i++){
    console.log("Grade at index " + i + " is: " + studentGrades[i]);
}

console.log("Es6 style for loop:");
for(let index in studentGrades){
    console.log("Grade at index " + index + " is: " + studentGrades[index]);
}

console.log("Es5 style:");
studentGrades.forEach((grade, index=2) => {
    console.log("Grade at index " + index + " is: " + grade);
});
*/

/*
console.log("Elements in vowels : ");

let vowels = new Array('a', 'e', 'i', 'o', 'u');

for(i of vowels){
    console.log(i);
}
*/

/*
let grades = [];
grades[0] = "A";
grades[1] = "B";
grades[2] = "C";
grades[3] = "D";
grades[4] = "E";
grades[7] = "H";

console.log("Grades array length: " + grades.length);
console.log("Elements in grades array:");
for(i of grades){
    console.log(i);
}   

console.log(`\nThe elements at index 5 and 6 are" ${grades[5]} and ${grades[6]}`);

*/

let testScores = [43,64,81,91,39,73];

function flagGoodScore(score){
    if(score > 70){
        console.log(`The score of ${score} is good!!!`);
    }
}

console.log("Iterating overthe test scores with foreach: ");
testScores.forEach(grade => flagGoodScore(grade));
