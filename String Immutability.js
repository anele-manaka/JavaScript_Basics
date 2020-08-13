// Strings are immutable; which means that they cannot be altered once they've been created.

var myStr = "Jello World";

// console.log(myStr)

// Fix the "J" and make it an "H"

myStr[0] = "H"; // This would not work because of String Immutability

// Correct Method

myStr = "Hello World!"

console.log(myStr)