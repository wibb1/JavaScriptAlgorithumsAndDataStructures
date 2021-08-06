# Searching Algorithms

## Objectives
* Describe what a searching algorithm is
* Implement linear search on arrays
* Implement binary search on sorted arrays
* Implement naive string searching algorithm
* Implement the *KMP* string searching algorithm

## Linear Search
Given an array: 
Linear search - the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

### Linear search pseudocode
* function accepts an array and a value
* loop through the array and check if the current array element is equal to the value 
* if it is return the index at which the element is found
* if the value is not found return -1

### Linear Search Big O
Best case = O(1) = item is the first value in the array
Worst Case = O(n) = item is the last value in the array
Average case = O(0.5n) => O(n) - since we ignore all constants in Big O notation

## Binary Search (AKA Divide and Conquer)
Given a SORTED array:
Binary Search - the array must be sorted - Take half the array and check if the value is greater or less than the search value - continue to split the array until the value is found

### Binary search pseudocode
* this function accepts a sorted array of numbers and a value
* create a left pointer at the start of the array, and a right pointer at the end of the array
* While the left pointer comes before the right pointer: 
  * Create a pointer in the middle 
  * if the value is equal to the search value return the index
  * if the value is too small, move the left pointer to the middle and the right pointer to the end
  * if the value is too large, ove the right pointer to the middle and the left pointer to the end
* if you never find the value return -1

### Binary Search Time Complexity
* Worst & Average Case - O(log(n))
* Best Case - O(1)

## Naive String Search

### Basic Solution for Searching Inside a String

### Psuedocode
* Loop over the longer string
* Loop over the shorter string
* If the characters don't match, keep going
* If you complete the inner loop and find a match, increment the count of matches
* Return the count
