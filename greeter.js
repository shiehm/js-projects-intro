let rlSync = require("readline-sync");

let firstName = rlSync.question("What is your first name?");
let lastName = rlSync.question("What is your last name?");
console.log('Hello ' + firstName + ' ' + lastName);


let getName = (prompt) => {
  let name = rlSync.question(prompt);
  return name;
};

let fName = getName('What is your first name? ');
let lName = getName('What is your last name? ');
console.log(`Hello, ${fName} ${lName}!`);