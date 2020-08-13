/* Scope refers to the visibility of variables.
Variables which are defined outside of a function block have a Global Scope
"Global Scope means that they can be seen everywhere in your JS Code*/

var myGlobal = 10;

function function1() {
    // var oopsGlobal = 5;
    oopsGlobal = 5;
/* if we put the "var" keyword above, the variable would only be assigned to this function (Function2). 
However, if we do not put the "var" keyword, the variable will AUTOMATICALLY become a GLOBAL VARIABLE.
*/



}

function function2(){
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

function1();
function2();

