function foo(str) {
  let found = ["Pete", "Alli", "Chris"].find(name => name === str);
  return found ?? "Not found";
}

console.log(foo("Alli"));     // => Alli
console.log(foo("Allison"));  // => Not found