class Car8 {
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }
  readonly vin: string;
  color: string;
  location: string;
  owner?: string;
  power(state: boolean): string {
    if (state === true) {
      return "Starting engine.";
    } else {
      return "Shutting down engine.";
    }
  }
}

class Mercedes extends Car8 {
  constructor(
    color: string,
    location: string,
    vin: string,
    alloyWheels: boolean
  ) {
    super(color, location, vin);
    this.alloyWheels = alloyWheels;
  }
  alloyWheels: boolean;
  adjustableSuspension = true;
  power(state: boolean): string {
    if (state === true) {
      console.log("Starting Mercedes engine");

      return "Starting Mercedes engine.";
    } else {
      return "Shutting down Mercedes engine.";
    }
  }
}

let myCar = new Mercedes("Silver", "California", "1A", false);

myCar.power(true);

export {};
