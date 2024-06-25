let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// Use map and filter to first determine the lengths of all the 
// elements in an array of string values, 
// then discard the even values (keep the odd values).

function oddLengths(arr) {
  let strLen = arr.map(value => value.length);
  return strLen.filter(function(length) {
    return (length % 2 !== 0);
  });
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// Can make it shorter as follows:

function oddLen(arr) {
  let strLen = arr.map(value => value.length);
  let oddLen = strLen.filter(num => num % 2 !== 0);
  return oddLen;
}

console.log(oddLen(arr)); // => [1, 5, 3]