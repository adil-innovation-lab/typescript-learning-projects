class Car3 {
    constructor(color: string, location: string) {
        this.color = color
        this.location = location
    }
    color: string;
    location: string;
    power(state: boolean) {
      if (state === true) {
        console.log("Starting engine.");
      } else {
        console.log("Shutting down engine.");
      }
    }
  }
  
  let myCar = new Car3("Black", "California");
  let hiraCar = new Car3("Red", "Pakistan");
  let alexanderCar = new Car3("Blue", "Macedonia");
  
  console.log(`Adil's car is ${myCar.color}`);
  console.log(`Adil's car is ${myCar.location}`);
  console.log(`Hira's car is ${hiraCar.color}`);
  console.log(`Hira's car is ${hiraCar.location}`);
  console.log(`Alexander's car is ${alexanderCar.color}`);
  console.log(`Alexander's car is in ${alexanderCar.location}`);
  

  export{}