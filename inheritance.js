let myProtoObj = {
  foo: 1,
  bar: 2,
};

console.log(myProtoObj);

let newProtoObj = Object.create(myProtoObj);

newProtoObj.qux = 3;

console.log(newProtoObj.foo);
console.log(newProtoObj.bar);
console.log(newProtoObj);

// Another question

let objKeys = Object.keys(newProtoObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in newProtoObj) {
  console.log(key);
}