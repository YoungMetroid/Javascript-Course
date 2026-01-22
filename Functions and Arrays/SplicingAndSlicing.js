"use strict";

let dogBreeds = ['Labrador', 'Poodle', 'Bulldog'
    ,'Beagle', 'Boxer', 'Dachshund'];

console.log("Original contents of dogBreeds array:\n", dogBreeds);

dogBreeds.splice(4,0, 'Doberman','Dalmatian');

console.log("Spliced contents of dogBreeds array:\n", dogBreeds);

dogBreeds.splice(2,1, 'German Shepherd');

console.log("After replacing an element in dogBreeds array:\n", dogBreeds);

dogBreeds.splice(0,2);
console.log("After removing first two elements from dogBreeds array:\n", dogBreeds);


let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("Sliced portion of dogBreeds array from index 3 to end:\n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(1,3);
console.log("Sliced portion of dogBreeds array from index 1 to 3:\n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3,-1);
console.log("Sliced portion of dogBreeds array from index -3 to -1:\n", sliceOfDogBreeds);