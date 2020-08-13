function testStrictlyNotEqual(value) {
    if (value !== 17){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictlyNotEqual("17"));
console.log(testStrictlyNotEqual(17));
