//creates a new array
var a = [1,2,3,5,8,13,21];

var days = ["Mon", "Tue", "Wed"]

// add a new item to the array
a.push(34);

// removing one item from the array
var c = a.pop()


// Technique  #1 forEach

//setup
var total = 0;
a.forEach(add);

//named function
function  add(number, index) {
	total = total + number;
	// console.log(index, number);
}

// console.log('total', total);


// annon function
days.forEach(function(day) {
	// console.log(day);
});

//technique  #2 for loop

var colors = ['red', "orange", "blue"];

for (var i = 0; i < colors.length; i++) {
	// console.log(i, colors[i]);
};


/**
* Arrays + Iteration
*/

/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/
var numbers = [1, 2, 3, 4];
var newNumbers = [];
var q6 = 0;

for (var i = 0; i < numbers.length; i++) {
	newNumbers.push(numbers[i] + 1);
	q6 += numbers[i]/numbers.length;
	console.log(q6);
}
console.log("newNumbers", newNumbers, "q6", q6);

/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/


