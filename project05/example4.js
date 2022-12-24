"use strict";
exports.__esModule = true;
var Car4 = /** @class */ (function () {
    function Car4(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car4.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engine.");
        }
        else {
            console.log("Shutting down engine.");
        }
    };
    return Car4;
}());
var myCar = new Car4("Black", "California", "1A");
var hiraCar = new Car4("Red", "Pakistan", "1B");
var alexanderCar = new Car4("Blue", "Macedonia", "1C");
console.log(alexanderCar.vin);
alexanderCar.vin = "alexanderVin";
console.log(alexanderCar.vin);
