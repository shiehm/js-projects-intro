let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keysArray = Object.keys(obj)) {
  let copyObj = {};
  for (let i = 0; i < keysArray.length; i += 1) {
    copyObj[keysArray[i]] = obj[keysArray[i]];
  }
  return copyObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }