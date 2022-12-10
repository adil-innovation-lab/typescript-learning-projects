let returnStringOrNumber: (() => string) | number

returnStringOrNumber = "Alexander"
returnStringOrNumber = 7
returnStringOrNumber = () => "Alexander"
returnStringOrNumber = () => 7

// returnStringOrNumber = function (): number {return 7}
// returnStringOrNumber = function (): string {return "7"}
// returnStringOrNumber = 7


// let aboutImran: (name: string) => number

// aboutImran = (name: string) => {
//     return "7"
// }