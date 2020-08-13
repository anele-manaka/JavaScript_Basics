/* In computer science, a queue is an abstract data structure
where items are kept in order. 
New items can be added to the back of the queue and old items 
can be taken off from the front of the queue.
*/

function nextInLine(arr, item) {
   
    arr.push(item);

    return arr.shift();
}

var testArray = [1, 2, 3, 4, 5];

console.log("Before:" + JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After:" + JSON.stringify(testArray));
