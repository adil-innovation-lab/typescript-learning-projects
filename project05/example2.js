var Car2 = /** @class */ (function () {
    function Car2() {
        this.color = "Silver";
    }
    Car2.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engine.");
        }
        else {
            console.log("Shutting down engine.");
        }
    };
    return Car2;
}());
var myCar = new Car2();
myCar.power(true);
