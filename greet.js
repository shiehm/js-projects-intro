let rlSync = require('readline-sync');
let greetingMessage = "Good Morning!";

greetPeople();
console.log('Printing this after calling function');
console.log('Printing this before function run');

function greetPeople() {
  name = rlSync.question("Choose a name: ");
  function greet(arg) {
    console.log(greetingMessage + ' ' + arg);
  }
  greet(name);
};

console.log('Printing this before function run, after function definition');
greetPeople();
console.log('Printing this after function run');

let greetDogs = function () { // Space after function not needed, can function()
  console.log('woof');
};

greetDogs();

/* Any function definition that doesn't have the word function 
at the very beginning of a statement is a function expression. 
Even wrapping what looks like a function declaration 
in parentheses creates a function expression: */

(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});

let greetCats = () => console.log("meow");
greetCats();