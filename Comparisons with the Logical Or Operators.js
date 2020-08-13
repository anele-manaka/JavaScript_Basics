function testLogicalOr(value) {
    if (value < 100) {
        return "Outside of Range (100-250)";
    }

    if (value > 250) {
        return "Outside of Range (100-250)";
    }

    return "Within Range (100-250)";

}


console.log(testLogicalOr(125));
console.log(testLogicalOr(250));
console.log(testLogicalOr(3));
console.log(testLogicalOr(999));


// The Function Below is Identical to the one Above in Terms of Output


function testLogicalOr(value) {
    if (value < 100 || value > 250) {
        return "Outside of Range (100-250)";
    }

    return "Within Range (100-250)";

}


console.log(testLogicalOr(125));
console.log(testLogicalOr(250));
console.log(testLogicalOr(3));
console.log(testLogicalOr(999));