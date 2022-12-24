"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Car8 = /** @class */ (function () {
    function Car8(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car8.prototype.power = function (state) {
        if (state === true) {
            return "Starting engine.";
        }
        else {
            return "Shutting down engine.";
        }
    };
    return Car8;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(color, location, vin, alloyWheels) {
        var _this = _super.call(this, color, location, vin) || this;
        _this.adjustableSuspension = true;
        _this.alloyWheels = alloyWheels;
        return _this;
    }
    Mercedes.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Mercedes engine");
            return "Starting Mercedes engine.";
        }
        else {
            return "Shutting down Mercedes engine.";
        }
    };
    return Mercedes;
}(Car8));
var myCar = new Mercedes("Silver", "California", "1A", false);
myCar.power(true);
