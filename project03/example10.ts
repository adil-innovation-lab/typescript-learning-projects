const nickNames = ["Alexander", "Alex", "Alexander the Great"];

function allNicknames(callback: (index: number) => string) {
    for (let i = 0; i < nickNames.length; i++) {
        console.log(callback(i));
    }
}

function getNameAt(index: number) {
    return `${nickNames[index]}`
}

allNicknames(getNameAt)

function logName(name: string) {
    return `${name}`
}

allNicknames(logName)