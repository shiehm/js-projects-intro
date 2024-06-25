let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(things) {
  let newArray = [];
  for (let i = 0; i < things.length; i += 1) {
    if (Number.isInteger(things[i])) {
      newArray.push(things[i]);
    }
  }
  return newArray;
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]


// This was the answer, forgot filter method, much more concise
// Key realization is that I can return on the same line as a function 
// Saves creating an array and returning it 

function filterIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

console.log(filterIntegers(things));