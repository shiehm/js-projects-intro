class Person {
  #name;
  #age;
  
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }
  
  get name() {
    return this.#name;
  }
  
  set name(name) {
    this.#name = name;
  }
  
  get age() {
    return this.#age;
  }
  
  set age(age) {
    if (typeof(age) === 'number' && age > 0) {
      this.#age = age;
    } else {
      throw new RangeError('Age must be positive');
    }
  }
  
  showAge() {
    console.log(this.#age);
  }
}

let person = new Person('John', 30);

console.log(person.age); // 30
person.age = 31;
console.log(person.age);
console.log(person.name);
person.name = 'Melvin Shieh';
console.log(person.name);

person.showAge(); // 31

try {
  person.age = -5;
  // The following line will not run
  person.showAge();
} catch (e) {
  // The following line will run
  console.log('RangeError: Age must be positive');
}

