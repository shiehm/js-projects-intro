let array = [3, 5, 7];

// Use reduce to compute the sum of the squares of all of the numbers in an array:

function sumOfSquares(array) {
  return array.reduce((acc, ele) => acc + ele ** 2, 0);
}

console.log(sumOfSquares(array)); // => 83