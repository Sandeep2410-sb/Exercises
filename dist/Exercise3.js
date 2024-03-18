class Engine {
    constructor(horsepower, fuelType) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
    displayInfo() {
        console.log(`Engine Details - Horsepower: ${this.horsepower}, Fuel Type: ${this.fuelType}`);
    }
}
class Car {
    constructor(make, model, year, engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }
    start() {
        console.log(`${this.make} ${this.model} (${this.year}) is starting...`);
    }
    printCarDetails() {
        console.log(`Car Details - Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
        this.engine.displayInfo();
    }
}
// Example usage:
const carEngine = new Engine(300, 'Petrol');
const myCar = new Car('Toyota', 'Camry', 2021, carEngine);
myCar.start();
myCar.printCarDetails();
