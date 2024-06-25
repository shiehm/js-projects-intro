let rlSync = require("readline-sync");

function multiply(num1, num2) {
  let product = Number(num1) * Number(num2);
  return product;
}

function getNum(prompt) {
  let num = rlSync.question(prompt);
  return parseFloat(num);
}

let num1 = getNum("What is the first number?");
let num2 = getNum("What is the second number?");

console.log(num1, ' * ', num2, ' = ', multiply(num1, num2));