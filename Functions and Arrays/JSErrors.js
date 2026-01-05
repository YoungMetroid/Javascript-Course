"use strict";

/*
try{
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello paragraph!";
    document.body.appendChild(paragraph);
    console.log("No errors detected.");
    document.body.append(Null);
}
catch(err){
    console.log(err.message);
}
*/

function isEven(){

    var a;
    a = document.getElementById("num").value;

    try{
        if((a % 2) === 0){
            console.log("The entered number is even.");
        }
        else{
            throw "not an even number";
        }
    }
    catch(err){
        console.log("The entered value is " + err   );
    }
    finally{
        console.log("Execution completed.");
    }
}