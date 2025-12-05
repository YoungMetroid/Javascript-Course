"use strict";

window.onload = firstFunction;

function firstFunction(){
    var x = 15;
    console.log("firstFunction x = ", x);
    secondFunction();
};


function secondFunction(){
    console.log("secondFunction (before delcaration) x = ", x);

    var x = 20;

    console.log("secondFunction (after declaration) x = ", x);
}

