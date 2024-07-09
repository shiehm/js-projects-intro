class SmartPhone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  checkBattery() {
    return `${this.model} has __% battery.`;
  }
  
  displayInfo() {
    return `${this.brand} ${this.model} ${this.year}`;
  }
}

let iphone = new SmartPhone('Apple', 'iPhone12', 2020);

console.log(iphone);
console.log(iphone.displayInfo());
console.log(iphone.checkBattery());