class Car5 {
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }
  readonly vin: string;
  color: string;
  location: string;
  owner?: string;
  power(state: boolean) {
    if (state === true) {
      console.log("Starting engine.");
    } else {
      console.log("Shutting down engine.");
    }
  }
}

let myCar = new Car5("Black", "California", "1A");
let hiraCar = new Car5("Red", "Pakistan", "1B");

let alexanderCar: Car5;

alexanderCar = {
    vin: "1C",
    color: "Red",
    location: "Macedonia",
    power() {}
}

export {};
