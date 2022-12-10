var nickNames = ["Alexander", "Alex", "Alexander the Great"];
function allNicknames(callback) {
    for (var i = 0; i < nickNames.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return "".concat(nickNames[index]);
}
allNicknames(getNameAt);
