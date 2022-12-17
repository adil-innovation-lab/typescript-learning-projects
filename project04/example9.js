"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var nicknames = ["Imran", "Alexander"];
var numbers = [1, 2];
// let combined = [...nicknames]
// console.log(combined);
var combined = __spreadArray(__spreadArray([], nicknames, true), numbers, true);
console.log(combined);
