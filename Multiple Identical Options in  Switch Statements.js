function sequentialSizes(value) {
    var answer = "";
    switch (value) {
        case 1 :
        case 2 :
        case 3 :
            answer = "numbers";
            break;
        case "apple" :
        case "pear" :
        case "strawberry" :
        case "orange" :
            answer = "fruit";
            break;
        default :
            answer = "other stuff";
            break;

    }
    return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes("apple"));
console.log(sequentialSizes("banana"));
console.log(sequentialSizes("cherry"));
console.log(sequentialSizes("orange"));
console.log(sequentialSizes("strawberry"));
console.log(sequentialSizes("pear"));
console.log(sequentialSizes("Anele"));