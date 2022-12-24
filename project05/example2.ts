class Car2 {
  color = "Silver";
  power(state: boolean) {
    if (state === true) {
      console.log("Starting engine.");
    } else {
      console.log("Shutting down engine.");
    }
  }
}

let myCar = new Car2();

myCar.power(true)