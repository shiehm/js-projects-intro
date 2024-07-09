function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// let neuromancer = new Books('Neuromance', 'William Gibson', 1984);
// let doomsday = new Books('Doomsday Book', 'Connie Willis', 1992);

// console.log(neuromancer);
// console.log(doomsday);

function SmartPhone(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  
  this.checkBattery = function() {
    return `${this.model} has __% battery.`;
  }
  
  this.displayInfo = function() {
    return `${this.brand} ${this.model} ${this.year}`;
  }
}

let iphone = new SmartPhone('Apple', 'iPhone12', 2020);

console.log(iphone);
console.log(iphone.displayInfo());
console.log(iphone.checkBattery());