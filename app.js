class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }

  assignOwner(owner) {
    this.owner = owner;
  }
}

document.getElementById('personForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;

  if (name && age >= 18) {
    let person = new Person(name, age);
    person.showInfo();
  } else {
    console.log('Please enter valid data.');
  }
});

document.getElementById('carForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let brand = document.getElementById('brand').value;
  let model = document.getElementById('model').value;

  if (brand && model) {
    let car = new Car(brand, model);
    car.showInfo();
  } else {
    console.log('Please enter valid data.');
  }
});

// let avenger = new Person('Tony Stark', 34);
// let car = new Car('Audi', 'R8');

// car.assignOwner(person);
// console.log(car.owner);