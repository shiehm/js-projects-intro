function negZeroDetector(value) {
  return ((1 / value) === -Infinity) ? true : false;
}

console.log(negZeroDetector(0));
console.log(negZeroDetector(-0));

// More encompassing answer: 
function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));