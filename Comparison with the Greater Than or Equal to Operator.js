function testGreaterThanOrEqualTo (value) {
    if (value >= 100) {
        return "100 or greater";
    }
    return "Below 100";

}

function testGreaterOrEqual(values) {
    if (values >= 1000000000) {
        return "Greater than 1 Billion";
    }
    return "Below 1 Billion"; 
}



console.log(testGreaterThanOrEqualTo(67));
console.log(testGreaterThanOrEqualTo(999));

console.log(testGreaterOrEqual(67));
console.log(testGreaterOrEqual(99999999));
console.log(testGreaterOrEqual(1000000001));
