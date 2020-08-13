function testLessThan(value) {
    if (value < 100) {
        return "Less than 100";
    }
    return "Above 100";

}

function testBelow(values) {
    if (values < 1000000000) {
        return "Less than 1 Billion";
    }
    return "Above 1 Billion"; 
}



console.log(testLessThan(67));
console.log(testLessThan(999));

console.log(testBelow(67));
console.log(testBelow(99999999));
console.log(testBelow(1000000001));
