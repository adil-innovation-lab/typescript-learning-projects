"use strict";
exports.__esModule = true;
var Car3 = /** @class */ (function () {
    function Car3(color, location) {
        this.color = color;
        this.location = location;
    }
    Car3.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engine.");
        }
        else {
            console.log("Shutting down engine.");
        }
    };
    return Car3;
}());
var myCar = new Car3("Black", "California");
var hiraCar = new Car3("Red", "Pakistan");
var alexanderCar = new Car3("Blue", "Macedonia");
console.log("Adil's car is ".concat(myCar.color));
console.log("Adil's car is ".concat(myCar.location));
console.log("Hira's car is ".concat(hiraCar.color));
console.log("Hira's car is ".concat(hiraCar.location));
console.log("Alexander's car is ".concat(alexanderCar.color));
console.log("Alexander's car is in ".concat(alexanderCar.location));
