class Car9 {
    constructor(color: string, location: string, vin: string | number) {
      this.color = color;
      this.location = location;
      this.vin = vin;
    }
    readonly vin: string | number;
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
  
  class Mercedes extends Car9 {
    constructor(
      color: string,
      location: string,
      vin: number,
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
  
  let myMercedes = new Mercedes("Silver", "California", 1, false);
  let myCar = new Car9("Black", "Pakistan", 2);
  
  myCar.power(true);
  
  export {};
  