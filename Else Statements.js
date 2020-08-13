function testElse(value) {
    var result = "";

    if (value > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or smaller";
    }

    return result;
}

console.log(testElse(6));
console.log(testElse(3));
console.log(testElse(5));
console.log(testElse(1000));