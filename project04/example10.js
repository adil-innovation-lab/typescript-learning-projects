var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nickNames = ["Imran", "Alexander", "Alex", "Alexander the Great"];
var preference = [1, 2, 3, 4];
function logNames(greeting) {
    var nicknames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nicknames[_i - 1] = arguments[_i];
    }
    for (var _a = 0, nicknames_1 = nicknames; _a < nicknames_1.length; _a++) {
        var nickname = nicknames_1[_a];
        console.log("".concat(greeting, " ").concat(nickname));
    }
}
logNames.apply(void 0, __spreadArray(["Hello"], nickNames, false));
logNames.apply(void 0, __spreadArray(["Hello"], preference, false));
