let nestedArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let index = 0; index < nestedArray.length; index += 1) {
  for (let i = 0; i < nestedArray[index].length; i += 1) {
    if (nestedArray[index][i] % 2 === 0) {
      console.log(nestedArray[index][i]); 
    }
  }
}

let copyArray = nestedArray.slice();

copyArray.forEach(function(innerArray) {
  innerArray.forEach(function(element) {
    if (element % 2 === 0) {
      console.log(element);
    }
  });
});