function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error: Not an integer.');
    return;
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

let rlSync = require("readline-sync");
let input = rlSync.question('Enter Integer: ');

evenOrOdd(Number(input));