/* Challenging Exercise This exercise has nothing to do with this chapter. 
Instead, it uses concepts you learned earlier in the book. 
If you can't figure out the answer, don't worry: 
this question can stump developers with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if value is NaN, 
false otherwise. You can also use Object.is(value, NaN) to make the same determination.

create a function named isNotANumber that returns true if 
the value passed to it as an argument is NaN, false if it is not. */


function isNotANum(value) {
  if (value - 1) {
    return false;
  } else {
    return true;
  }
}

console.log(isNotANum(NaN));
console.log(isNotANum(5));
console.log(isNotANum(3.567));


// Ah I see, the trick is that NaN is the only JS value that does not = itself

function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(5));
console.log(isNotANumber(3.567));