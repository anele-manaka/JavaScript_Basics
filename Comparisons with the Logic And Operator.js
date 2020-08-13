function testGreaterThan(value) {
    if (value > 100) {
        return "Over 100";
    }

    if (value > 10 && value < 100) {
        return "Over 10"; 
    }
    return "10 or Below";
}


console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100000000000));
console.log(testGreaterThan(3));



