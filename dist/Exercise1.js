class Bus {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`The ${this.make} ${this.model} (${this.year}) is starting.`);
    }
}
const myBus = new Bus('Volvo', '9900', 2022);
myBus.start();
