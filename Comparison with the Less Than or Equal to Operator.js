function testLessThanOrEqualTo(value) {
    if (value <= 100) {
        return "100 or Below";
    }
    return "Above 100";

}

function testBelowOrEqual(values) {
    if (values <= 1000000000) {
        return "1 Billion or less";
    }
    return "Above 1 Billion"; 
}



console.log(testLessThanOrEqualTo(67));
console.log(testLessThanOrEqualTo(999));

console.log(testBelowOrEqual(67));
console.log(testBelowOrEqual(99999999));
console.log(testBelowOrEqual(1000000001));
