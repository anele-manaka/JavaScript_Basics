// When you have both local and globa variables with the same name, the local variable takes precedent over the global variable.

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "Sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);