function testElseIf(value) {
    if (value > 10){
        return "Greater than 10";
    }
    else if (value <5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
    
}

console.log(testElseIf(7));
console.log(testElseIf(3));
console.log(testElseIf(22));
