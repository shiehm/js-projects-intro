/* Write a function that computes and returns the 
factorial of a number by using a for loop. The 
factorial of a positive integer n, signified by n!, 
is defined as the product of all integers between 
1 and n, inclusive: */

let rlSync = require("readline-sync");

function factorial(int) {
  if (int === 1) return 1;
  return int * factorial(int - 1);
}

function factorialAnswer(int) {
  let result = 1;
  for (let counter = int; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result 
}

let int = Number(rlSync.question('Enter Factorial: '));

console.log(factorial(int));
console.log (factorialAnswer(int));

// Use .reduce to create a factorial
// need to create an array where int - 1 to 0 