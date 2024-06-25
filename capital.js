function toCapital(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(toCapital('hello world'));
console.log(toCapital('goodbye'));

function toUpper(string) {
  return (string.length > 10) ? string.toUpperCase() : string;
}

console.log(toUpper('hello world'));
console.log(toUpper('goodbye'));