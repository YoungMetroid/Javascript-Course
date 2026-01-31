"use strict";

function demo(x){
    var answer = 0;
    try{

        let scores = [4,9,6,5,7];
        answer = scores[x];
    }
    catch(err){
        answer = 'Invalid data input!';
    }
    finally{
        document.getElementById("p3").innerHTML = 'Finally will always execute!';
    }
    document.getElementById("p2").innerHTML = "The answer is " + answer;
}