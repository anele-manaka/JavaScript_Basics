function testStrictEquality(value) {
    if (value === '33') {
        return "Equal";
    }
    return "Not equal";
}

console.log(testStrictEquality(33));


/* Equality sign (==) tests to see if two values are equal by changing them to the same data type.
Whereas, the Strict Equality sign tests to see if they are identical; without converting them to the same data type.
*/

