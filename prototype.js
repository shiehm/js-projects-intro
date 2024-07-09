function SmartPhone(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

SmartPhone.prototype.checkBattery = function() {
  return `${this.model} has __% battery.`;
};
  
SmartPhone.prototype.displayInfo = function() {
  return `${this.brand} ${this.model} ${this.year}`;
};

// let iphone = new SmartPhone('Apple', 'iPhone12', 2020);
// let android = new SmartPhone('Android', 'SomeBrick', 2020);

// console.log(iphone);
// console.log(iphone.displayInfo());
// console.log(iphone.checkBattery());

// console.log(android);
// console.log(android.displayInfo());
// console.log(android.checkBattery());

function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype.accelerate = function() {
  console.log('Speeding up');
};

Vehicle.prototype.decelerate = function() {
  console.log('Slowing down');
};


function Car(color, weight, license) {
  Vehicle.call(this, color, weight);
  this.license = license;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.honk = function() {
  console.log('Car is honking.');
};


function Boat(color, weight, homePort) {
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;
Boat.prototype.dropAnchor = function() {
  console.log('Dropping Anchor.');
};


function Plane(color, weight, airline) {
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;
Plane.prototype.takeOff = function() {
  console.log('Taking off!');
};
Plane.prototype.land = function() {
  console.log('Landing!');
};


let hawaiianAir = new Plane('Purple', 321, 'Hawaiian Airlines' );
let hondaAccord = new Car('Black', 123, '2FAST4U' );
let ssBigBoat = new Boat('Blue', 222, 'Honolulu');

console.log(hawaiianAir);
console.log(hondaAccord);
console.log(ssBigBoat);

hawaiianAir.takeOff();
hawaiianAir.land();
hondaAccord.honk();
ssBigBoat.dropAnchor();

hawaiianAir.accelerate();
hondaAccord.accelerate();
ssBigBoat.accelerate();

hawaiianAir.decelerate();
hondaAccord.decelerate();
ssBigBoat.decelerate();

console.log(hawaiianAir.color, hondaAccord.weight, ssBigBoat.homePort);

console.log(hawaiianAir instanceof Vehicle);
console.log(hondaAccord instanceof Vehicle);
console.log(ssBigBoat instanceof Vehicle);

console.log(hawaiianAir instanceof Plane);
console.log(hondaAccord instanceof Plane);
console.log(ssBigBoat instanceof Plane);

console.log(hawaiianAir instanceof Car);
console.log(hondaAccord instanceof Car);
console.log(ssBigBoat instanceof Car);

console.log(hawaiianAir instanceof Boat);
console.log(hondaAccord instanceof Boat);
console.log(ssBigBoat instanceof Boat);