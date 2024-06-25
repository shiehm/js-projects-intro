let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function numberChecker(numbers) {
  let three = numbers.filter(num => num === 3);
  return console.log(three.length > 0 ? "true" : "false");
} 

numberChecker(numbers1);
numberChecker(numbers2);
numberChecker(numbers3);

// console.log('The ' + Object.keys({numbers})[0] + ' array contains 3.'); // The code to call the array name didn't work

// The answer, even easier!! Need to look through the docs more often:

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));