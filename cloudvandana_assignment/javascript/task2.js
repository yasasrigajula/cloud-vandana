//Perform sorting of an array in descending order.
// Sample array
let numbers = [6, 3, 9, 2, 7];

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);