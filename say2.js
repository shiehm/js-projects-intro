function say(text = 'Default') {
  console.log('--> ' + text);
}

let rlSync = require("readline-sync");
let name = rlSync.question("What is my name? ");

say('hello');
say('my');
say('name');
say('is');
say(name);

say();

// Remember, parameters are what is shown as text above
// While arguments refer to the actual thing passed as text i.e. "hello"