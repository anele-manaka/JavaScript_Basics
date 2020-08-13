function testLogicalAnd(value) {
    if (value <= 50) {
        if (value >= 25) {
            return "Yes";
        }
    }
    return "No";
}


console.log(testLogicalAnd(33));
console.log(testLogicalAnd(100));
console.log(testLogicalAnd(12));
console.log(testLogicalAnd(50));


// The Function Below is Identical to the One Above in Terms of Output
function testLogicalAnd(value) {
    if (value <= 50 && value >= 25) {
            return "Yes";
        }
        return "No";
}

console.log(testLogicalAnd(33));
console.log(testLogicalAnd(100));
console.log(testLogicalAnd(12));
console.log(testLogicalAnd(50));