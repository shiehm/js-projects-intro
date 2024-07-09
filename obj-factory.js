function createFriut(name, color) {
  return {
    name,
    color,
    
     isRipe: function() {
       return `This ${this.name} is ripe.`;
     },
     
     describe: function() {
       return `This ${this.name} is ${this.color}.`;
     },
  }
}

let apple = createFriut('Apple', 'Red');
let banana = createFriut('Banana', 'Yellow');
let berry = createFriut('Berry', 'Purple');

console.log(apple);
console.log(banana);
console.log(berry);

//

function createSmartPhone(brand, model, year) {
  return {
    brand,
    model,
    year,
  
    checkBattery() {
      return `${this.model} has __% battery.`;
    },
  
    displayInfo() {
      return `${this.brand} ${this.model} ${this.year}`;
    },
  }
}

let iphone = createSmartPhone('Apple', 'iPhone12', 2020);

console.log(iphone);
console.log(iphone.displayInfo());
console.log(iphone.checkBattery());

//

function createInstrument(instrument, type) {
  return {
    instrument,
    type,
    play: function() {
      console.log(`We are playing a tune on this ${instrument}.`);
    },
    showType: function() {
      console.log(`This ${instrument} is a ${type} instrument.`);
    },
  }
}

let violin = createInstrument('violin', 'string');
violin.play();     // We are playing a tune on this violin
violin.showType(); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
flute.play();      // We are playing a tune on this flute
flute.showType();  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
drum.play();       // We are playing a tune on this drum
drum.showType();   // This drum is a percussion instrument