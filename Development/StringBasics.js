"use strict";

function demo(x){
    let p = document.getElementById("p2");
    p.innerHTML = `This is  ${x}, <br>
    and the length is ${(x.length).toString().bold()}.`;

    console.log(p.innerHTML);


}