class Bus {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log(`The ${this.make} ${this.model} (${this.year}) is starting.`);
    }
}

const myBus = new Bus('Volvo', '9900', 2022);
myBus.start();

