function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not equal";
}

function compareStrictEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal";
}


console.log(compareEquality(10, "10"));
console.log(compareStrictEquality(10, "10"));
