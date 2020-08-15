function switchOfStuff(value) {
    var answer = "";
    switch (value) {
        case "a" :
            answer = "apple";
            break;
        case "b" :
            answer = "bird";
            break;
        case "c" :
            answer = "coconut";
            break;
        default :
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff("g"));