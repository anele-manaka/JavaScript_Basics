var myNestedArray = [["the universe", 42], ["everything", 101010]];

var meaningOfLife = "The meaning of life, " + myNestedArray[0][0] + " and " + myNestedArray[1][0] + " is " + myNestedArray[0][1] + ". Binary is written in terms of " + myNestedArray[1][1] + "."

console.log(meaningOfLife)

// This will print "The meaning of life, the universe and everything is 42. Binary is written in terms of 101010."