class Vehicles {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }
  
  accelerate() {
    console.log('Speeding up');
  }
  
  decelerate() {
    console.log('Slowing down');
  }
}

class Car extends Vehicles {
  constructor(color, weight, license) {
    super(color, weight);
    this.license = license;
  }
  
  honk() {
    console.log('Car is honking.');
  }
}

class Boat extends Vehicles {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }
  
  dropAnchor() {
    console.log('Anchor dropped.');
  }
}

class Plane extends Vehicles {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }
  
  takeOff() {
    console.log('Taking off!');
  }
  
  land() {
    console.log('Landing!');
  }
}

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

console.log(hawaiianAir instanceof Vehicles);
console.log(hondaAccord instanceof Vehicles);
console.log(ssBigBoat instanceof Vehicles);

console.log(hawaiianAir instanceof Plane);
console.log(hondaAccord instanceof Plane);
console.log(ssBigBoat instanceof Plane);

console.log(hawaiianAir instanceof Car);
console.log(hondaAccord instanceof Car);
console.log(ssBigBoat instanceof Car);

console.log(hawaiianAir instanceof Boat);
console.log(hondaAccord instanceof Boat);
console.log(ssBigBoat instanceof Boat);