let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));

console.log(`You are ${age} years old`);

// let age = 20;
// let time = 10;
// while (age + time <= 60) {
//   console.log(`In ${time} years, you will be ${age + time} years old.`);
//   time = time + 10;
// }

for (let time = 10; time <= 40; time += 10) {
  console.log(`In ${time} years, you will be ${age + time} years old.`);
}