"use strict";

function function_as_first_class_citizens() {
    let addition = function(a, b){
        return a + b;
    };

    let multiplication = function(a, b){
        return a * b;
    };

    let subtraction = function(a, b){
        return a - b;
    };

    let division = function(a, b){
        return a / b;
    };

    function calculation(a,b,calculationType){
        return calculationType(a,b);
    }

    let output = calculation(10,5,addition);
    console.log("Addition of 10 and 5 is: ", output);
    output = calculation(10,5,multiplication);
    console.log("Multiplication of 10 and 5 is: ", output);
    output = calculation(10,5,subtraction);
    console.log("Subtraction of 10 and 5 is: ", output);
    output = calculation(10,5,division);
    console.log("Division of 10 and 5 is: ", output);   
}

function function_as_return_values_of_functions() {
  let fxRates = {
    INR:72,
    EUR:0.9
  }  
  let discounts = {
    INR:0.1,
    EUR:0.2
  }
  let inCart ={
    id:1,
    total: 81000,
    currency:"INR"
  }
  let euCart ={
    id:2,
    total: 772,
    currency:"EUR"
  }

  function getTotalPriceFn(cart){
    cart.finalTotal = cart.total * (1- discounts[cart.currency]);

    function totalUSDPrice(){
        return cart.finalTotal / fxRates[cart.currency];
    }
    return totalUSDPrice;
  }

  let inCartTotalUSD = getTotalPriceFn(inCart);
  let euCartTotalUSD = getTotalPriceFn(euCart);

  console.log("Type of returned function: ", typeof inCartTotalUSD);
  console.log(`India Cart: ${inCart.id} total in USD: `, inCartTotalUSD());
  console.log(`EU Cart: ${euCart.id} total in USD: `, euCartTotalUSD());

}

function_as_return_values_of_functions();
