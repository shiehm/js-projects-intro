class Rectangle {
  #width;
  #height;
  
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get width() {
    return this.#width;
  }
  
  set width(width) {
    if (typeof(width) !== 'number' || width < 0) {
      throw new RangeError('Number needs to be positive.');
    }
    else {
      this.#width = width;
    }
  }
  
  get height() {
    return this.#height;
  }
  
  set height(height) {
    if (typeof(height) !== 'number' || height < 0) {
      throw new RangeError('Number needs to be positive.');
    }
    else {
      this.#height = height;
    }
  }
  
  get area() {
    return this.#width * this.#height;
  }
}

let rect = new Rectangle(10, 5);

console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 10;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}