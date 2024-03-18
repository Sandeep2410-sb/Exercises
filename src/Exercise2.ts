class Suv {
    brand: string;
    model: string;
    year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    displayInfo() {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
  class SUV extends Suv {
    offRoadCapable: boolean;
  
    constructor(brand: string, model: string, year: number, offRoadCapable: boolean) {
      super(brand, model, year);
      this.offRoadCapable = offRoadCapable;
    }
  
    toggleOffRoadCapability() {
      const wasSuitableForOffRoad = this.offRoadCapable;
      this.offRoadCapable = !this.offRoadCapable;
      
      if (this.offRoadCapable && !wasSuitableForOffRoad) {
        console.log(`${this.brand} ${this.model} is now suitable for off-road driving.`);
      }
    }
  }
  
  // Example usage:
  const mySUV = new SUV("Toyota", "4Runner", 2022, true);
  mySUV.displayInfo(); 
  mySUV.toggleOffRoadCapability(); 
  mySUV.toggleOffRoadCapability(); 
  