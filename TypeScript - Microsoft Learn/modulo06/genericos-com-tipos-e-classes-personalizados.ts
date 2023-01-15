class Car {
  make: string = "Generic Car";
  doors: number = 4;
}

class ElectricCar extends Car {
  make = "Electric Car";
  doors = 4;
}

class Truck extends Car {
  make = "Truck";
  doors = 2;
}

//* Aqui T extends Car é uma restrição genérica, já que dizemos que todo T que for informado para função deve ser uma subclass de Car
function accelerate<T extends Car>(car: T): T {
  //? informamos a função que T precisa ser uma subclasse de Car, tal qual são ElectricCar e Truck
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myElectricCar = new ElectricCar();
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck();
accelerate<Truck>(myTruck);
