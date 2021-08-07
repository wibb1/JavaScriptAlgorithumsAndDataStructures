# Introduction

## What is sorting?
Sorting is the process of rearranging the items in a collection (e.g. array) so that the items are in some kind of order.

### Examples - we are concentrating on arrays right now
* Sorting an array of numbers from smallest to largest
* Sorting an array of people's names alphabetically
* Sorting an array of movie objects based on release year
* Sorting an array of movie objects based on revenue

Visit
https://www.youtube.com/watch?v=kPRA0W1kECg 
https://www.toptal.com/developers/sorting-algorithms 

### Why do we need to learn this
* Sorting is an incredibly common task, so it's good to know how it works. 
* There are many different ways to sort things, and different techniquest have their own advantages and disadvantages. When using built in sorts in various languages it is good to understnad what sorting methods they use and what their advantages and disadvantages are.
* 

# JavaScript  .sort()
JavaScript sort method uses the unicode value of each character to sort the input when nothing is passed in.

You can also add parameters to the function to tell it how you want it to compare the values.  This accepts two elements (a and b) and determines their sort order based on the return value.  
* If it returns a negative number then a comes before b
* If it returns a positive number then a comes after b
* if it returns 0 then a and b are equal and the same as far as the sort is concerned.

## Examples

const numberCompare = (num1, num2) => {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numbCompare);     // returns [ 4, 6, 10, 15 ]
[ 6, 4, 15, 10 ].sort((a, b) => a - b)  // returns [ 4, 6, 10, 15 ]


[ 6, 4, 15, 10 ].sort((a, b) => b - a)  // returns [ 15, 10, 6, 4 ]


const compareByLen = (str1, str2) => {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms ].sort(compareByLen);
[ "Steele", "Colt", "Data Structures", "Algorithms ].sort((a, b) => a.length - b.length);

# Bubble Sort
Not commonly implemented because it's ineffiecent.  It starts at the first value (element 1) and compares it to the next value (element 2), if the first value is large than the second then they are swapped.  Traditiional bubble sort then jumps to the next index that is greater than element 2 and performs the same operation until the end of the array is reached.  The process then starts at the begining and proceeds through the entire array again until there are no swaps.

There two ways to swap in JavaScript

ES5 method
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

## BubbleSort Pseudocode
* Start looping at the beginning of the array with variable i
* Start an inner loop at the beginning of the array with variable j
* If arr[j] is greater than arr[j+1], swap those two values! 
* Return the sorted array


# Bubble Sort Optimization
Similar to what I did at the start, if you break when there are no swaps then it saves time in the sort with nearly sorted arrays.

His naive bubble sort is O(n^2) which is terrible.  With the optimization to check if the array has been sorted it improves.  With a nearly sorted array complexity is O(n) which actually makes it a canidate for use in this scenario. 
