"use strict";

//leson3

// 1. function declaration (სინტაქსი) hoisted
function testFnc1() {
  console.log("hello");
}

testFnc1();

// 2. function expression (სინტაქსი) not hoisted
let testFnc2 = function () {
  console.log("hello2");
};
testFnc2();

// 3.arrow function (სინტაქსი) not hoisted
let testFnc3 = () => {
  console.log("hello3");
};
testFnc3();
//ან ასეც ჩაიწერება
// let testFnc3 = () => console.log('hello3')

//hoistingi არის ჯავასკრიპტის თვისება რომელიც ცვლადს ან ფუნქციას უკვე მის აღწერამდე ხდის წვდომადს. ანუ ჯერ გამოიძახო და მერე შექმნდა (ზემოდან ქვენოთ კითხვის პრინციპი არ ვრცელდება)
// var-hoisted
// let, const - not hoisted ვარით შექმნილი ცვლადი ჰოისტია ლეტით და კონსტით შექმნილი არა!

//ფრჩხილებში ვძლევთ მნიშვნელობას და გამოძახების ფრჩხილებში ვუწერთ მნიშვნელობის მონაცემს
//return თუ ფუნქციის ტანში რაღაც ხდება და ეს რარაცა კიდე სადმე დამჭირდება მაშინ ფუნქვიიდან უნდა დავაბრუნოთ ეს მნიშვნელობა ამისთვის ვიყენებთ რეთარნს da vinaxavt cvladShi
// return-ის შემდეგ ფუნქცია წყვეტს მუსაობას
function testFnc4(x, y) {
  // X და Y არის პარამეტრი ხოლო გამოძახებაში მინიჭებული მნიშვნელობა არის არგიმენტი
  console.log(x + y);
  console.log("hello");
  return x + y;
}
let resultFnc4 = testFnc4(5, 2);
testFnc4(20, 25);
console.log(resultFnc4);

//---

function testFnc(number) {
  if (number == 2) {
    console.log("hello");
    console.log("gadaeci 2");
  } else if (number == 10) {
    console.log("gadaeci 10");
  } else {
    console.log("error");
  }
}
testFnc(5);
testFnc(2);
testFnc(10);

//--

function getUserAge(birthyaer, yearnow) {
  let age = yearnow - birthyaer;
  return age;
}
let resultAge1 = getUserAge(2002, 2024);
console.log(resultAge1);

// expression

let getUserAge2 = function (birthyaer, yearnow) {
  return yearnow - birthyaer;
};
let resultAge2 = getUserAge2(1994, 2004);
console.log(resultAge2);

//arrow

// let getUserAge3 = (birthyaer, yearnow) => yearnow - birthyaer;
// let resultAge3 = getUserAge3(1990, 2024)
// console.log(resultAge3);

let getUserAge3 = (birthyaer, yearnow) => {
  let age = yearnow - birthyaer;
  //   if (age > 18) {
  //     return "drulwlovani";
  //   }
  //   return "ara srulwlovani";
  let ageResult = age > 18 ? "srulwlovani" : "arasrulwlovani";
  return ageResult;
};
let resultAge3 = getUserAge3(2010, 2024);
console.log(resultAge3);

//
function sum(...numbers) {
  let numberSum = 0;
  for (let item of numbers) {
    // numberSum=numberSum+item
    numberSum += item;
  }
  return numberSum;
}
let resultFncSum = sum(5, 15, 20, 30, 25);
console.log(resultFncSum);
let resultFncSum2 = sum(15, 40);
console.log(resultFncSum2);

//scope
// 1. global scope როცა ცვლადი არის აღწერილი გლობალურად ანუ ფიგურულ ბრჩხილებს გარეთ
let firstname = "ana";

// 2. function scope
function getAge(birthyaer) {
  let yearnow = 2024;
  let age = yearnow - birthyaer;
  return age;
}
//console.log(yearnow); არ დაიბეჭდება
let getAgeresult = getAge(1993);
console.log(getAgeresult);

// 3. block scope როცა ფორის ან იფის ან ვაილის ფიგურულ ფრჩხილებს ვეხებით ეს ეხება მხოლოდ ლეტს და კოსტს.
let birthage = 20;
if (birthage > 18) {
  let edult = true;
  console.log(edult); //dabechdis
}
// consol.log(edult); ar dabechdis

// var - > function scope
// let & const -> function & block scope

function getAgeNew(birthyaer) {
  let age = 2024 - birthyaer;
  function printage() {
    let info = `you are ${age} and born in ${birthyaer}`;
    console.log(info);
  }

  printage();

  return age;
}
let newResult = getAgeNew(1992);
console.log(newResult);
getAgeNew(1960);

//--

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

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