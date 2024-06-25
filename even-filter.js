let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (let index = 0; index < myArray.length; index += 1) {
  if (myArray[index] % 2 === 0) {
    console.log(myArray[index]); 
  }
}

myArray.slice().forEach(function(element) {
  if (element % 2 === 0) {
    console.log(element);
  }
});