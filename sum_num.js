let rlSync = require("readline-sync");

let num1 = rlSync.question("Enter first number: \n");
let num2 = rlSync.question("Enter second number: \n");
let sum = Number(num1) + Number(num2);

console.log(`The numbers ${num1} + ${num2} = ${sum}.`);