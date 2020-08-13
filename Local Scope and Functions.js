// Variables declared inside of a function block are considered Local Variables.

function myLocalScope() {
    myVar = 5;

    console.log(myVar);
}

myLocalScope();

console.log(myVar);

// The variable is still accessed outside of the function; find out why.