function numberRange(num) {
  if (Number(num) < 0) {
    console.log('< 0');
  } else if (Number(num) <= 50) {
    console.log('0-50');
  } else if (Number(num) <= 100) {
    console.log('51-100');
  } else if (Number(num) > 100) {
    console.log('> 100');
  } else {
    console.log('Not a Number.');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);