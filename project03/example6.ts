function hello(name = "Alexander", ...nickNames: string[]) {
    console.log(`Hello ${name} aka ${nickNames}`);
}

hello("Imran","Alexander","Alex","Alexander the Great")