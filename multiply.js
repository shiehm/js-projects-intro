let rlSync = require("readline-sync");

function multiply() {
  let num1 = rlSync.question('First Number: ');
  let num2 = rlSync.question('Second Number: ');
  let product = Number(num1) * Number(num2);
  console.log(num1, ' * ', num2, ' = ', product);
}

multiply();