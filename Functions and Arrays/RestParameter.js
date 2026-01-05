"use strict";

function sum(... nums){
    let add = nums.reduce((sum,num) => sum+num,0);
    return add;
}

let addition = sum(1,2,3,4,5);
console.log(addition); // Output: 15

function studentDetails(name, age, ...courses){

    console.log(`Student Name: ${name}`);
    console.log(`Age: ${age}`);
    courses.forEach(course => {
        console.log(`Enrolled in: ${course}`);
   });
}

studentDetails("Chris", 20, "JavaScript", "Java", "C#");