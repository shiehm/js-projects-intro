let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// I need a function that counts length and pushes it to an array 
// Only if that length is odd 

function arrOddLength(arr) {
  return arr.reduce((arrOddLen, words) => { 
    let len = words.length;
    if (len % 2 !== 0) {arrOddLen.push(len)} return arrOddLen; // arrOddLen is what the reduce method returns as a single value
  }, []); // The key is that you can initialize the initial value of the accumulator as an empty array!
}

console.log(arrOddLength(arr)); // => [1, 5, 3]