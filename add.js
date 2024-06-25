function add(a, b, c) {
  return a + b + c;
}

// add(3, 6, 9);

let result = add(3, 6, 9);
console.log(result);

let minus = (a, b) => a - b;
console.log(minus(10,5));

/* when and only when the function body contains 
a single expression that is not itself surrounded by curly braces
we can omit the return - it implies return on the single value */