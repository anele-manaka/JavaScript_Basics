/* Switch statements test a value and can have many case statements which define various possible values.

*/

function caseInSwitch(value) {
    var answer = "";
    switch(value) {
        case 1 : 
            answer = "alpha";
            break;
        case 2 : 
            answer = "beta";
            break;
        case 3 : 
            answer = "gamma";
            break;
        case 4 :
            answer = "delta";
    }


    return answer;
}


console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));
// notice how the value of "5" logs an empty line in the console








/*
Write a swich statement which tests the value and sets for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
