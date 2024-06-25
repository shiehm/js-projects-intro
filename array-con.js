// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);

for (let i = 0; i < objKeys.length; i += 1) {
  objKeys[i] = objKeys[i].toUpperCase();
}

console.log(objKeys);


// Answer

let objKeysA = Object.keys(obj);
let upperKeysA = objKeysA.map(keys => keys.toUpperCase());
console.log(upperKeysA);

// And using forEach, which I was trying in a different way
// Create an empty array first

let newArray = [];
let objKeysB = Object.keys(obj);
objKeysB.forEach(key => newArray.push(key.toUpperCase()));
console.log(newArray);