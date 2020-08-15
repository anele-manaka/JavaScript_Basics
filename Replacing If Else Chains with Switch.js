// function chainToSwitch(value) {
//     var answer = "";

//     if (value === "bob") {
//         answer = "Marley";
//     }
//     else if (value === 42) {
//         answer = "The meaning of life";
//     }
//     else if (value === 19) {
//         answer = "Anele's age";
//     }
//     else if (value === "99%") {
//         answer = "This is how much Kevin missed me";
//     }
//     else if (value === 7) {
//         answer = "Ate nine";
//     }

//     return answer;
// }

// console.log(chainToSwitch("bob"));
// console.log(chainToSwitch(42));
// console.log(chainToSwitch(19));
// console.log(chainToSwitch("99%"));
// console.log(chainToSwitch(7));
// console.log(chainToSwitch("me"));
// console.log(chainToSwitch("them"));


/* This is where I will change the code from Else If Statements to Switch Statements
*/

function chainToSwitch(value) {
    var answer = "";

    switch(value) {
        case "Bob" :
            answer = "Marley";
            break;
        case 42 :
            answer = "The meaning of life";
            break;
        case 19 :
            answer = "Anele's age";
            break;
        case "99%" :
            answer = "This is how much Kevin missedd me";
            break;
        case 7 :
            answer = "Ate nine";
            break;
    }


    return answer;
}

console.log(chainToSwitch("Bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(19));
console.log(chainToSwitch("99%"));
console.log(chainToSwitch(7));
console.log(chainToSwitch("me"));
console.log(chainToSwitch("them"));
