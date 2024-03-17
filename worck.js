"use strict";

// task 1
function sum(...numbers) {
  let numberSum = 0;
  for (let item of numbers) {
    numberSum += item;
  }
  console.log(numberSum);
}

sum(10, 50, 6, 7, 8, 11, 6, 3, 9);

//task 4
function sum(number) {
  if (number % 2 == 0) {
    return "this number is even";
  } else {
    return "this number is odd";
  }
}

let sumResult = sum(2);
console.log(sumResult);


