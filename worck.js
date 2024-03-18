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
function sum2(number) {
  if (number % 2 == 0) {
    return "this number is even";
  } else {
    return "this number is odd";
  }
}

let sumResult = sum2(2);
console.log(sumResult);


// task 6
let calculateAge = (birthyaer) =>2024 - birthyaer > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
// function calculateAge(birthyaer){
//   let resultCalculate= 2024-birthyaer
//   if(resultCalculate>=18){
//     return 'srulwlovani'
//   }else{
//     return 'arasrulwlovani'
//   }
// }

let resultCalculate=calculateAge(2000)
console.log(resultCalculate);
