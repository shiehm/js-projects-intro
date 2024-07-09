let cessna = {
  fuel: 24.5,
  speed: 111,
  
  takeOff() {
    console.log('Taking off!');
  },
  
  land() {
    console.log('Landing!');
  },
};

console.log(cessna);
cessna.takeOff();
cessna.land();

