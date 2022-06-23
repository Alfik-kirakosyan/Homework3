//Homework 4



//Task 1

//Create a function to get the intersection of two arrays

function intersectionOfArrs(arr1, arr2) {
    const newArr = arr1.concat(arr2);
  
    return newArr.filter(function(item, index) {
      return newArr.indexOf(item) !== index;
    });
}  

//Task 2

//Create a function to get the sum of each positive element from the given array. If there are
//no positive values in the array, return 0

function sumOfPositives(arr) {
    return arr.filter(function(item) {
      return item > 0;
    }).reduce(function(aggr, item) {
      return aggr + item;
    }, 0)
}

//Task 3

//Create a function that takes an array and returns the sum of all numbers in the array. If there
//are no numbers in the array, return 0

function sumOfNums(arr) {
    return arr.filter(function(item) {
      return typeof(item) === "number";
    }).reduce(function(aggr, item) {
      return aggr + item;
    }, 0);
}

//Task 4

//Create a function that performs an even-odd transform to an array, n times. Each even-odd
//transformation:
// ● Adds two (+2) to each odd integer.
// ● Subtracts two (-2) from each even integer


function evenOddTransform(arr, num) {
    let result ;
      
    while (num > 0) {
      result = arr.map(function(item) {
        if (item % 2 !== 0) {
          return item + 2;
        }
        return item - 2
      });

      arr = result;
      num--
    }
      
    return result;
}

//Task 5

//Create a function that takes an array of numbers nums as an argument. Square each
//number in the array if the number is even and square root the number if it is odd. Return the
//sum of the new array rounded to two decimal places.


function squareArrNums(arr) {
    let result = arr.reduce(function(aggr, item) {
  	if(item % 2 === 0){
    	return aggr + item ** 2;
    }
    return aggr + item ** (1/2);
  }, 0)

    return Math.round(100 * result) / 100;
}

//Task 6

//Create a function that takes in an array and returns an array of the accumulating sum.

function accumulativeSum(arr) {
	let result = [];
  
	arr.reduce(function(aggr, item, index) {
  	return result[index] = aggr + item;
  }, 0)

	return result;
}















