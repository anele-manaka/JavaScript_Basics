var sum = 0;

function addSeven() {
    sum = sum + 7;
}

function addTwenty() {
    sum += 20;
}

console.log(addSeven(), addTwenty());

// These will both print "undefined" because we didn't assign any return values to the functions

