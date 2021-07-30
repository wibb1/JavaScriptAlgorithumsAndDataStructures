## =================================================
## Same frequency
## =================================================

Given two positive integers, find out if the two numbers have the same frequency of digits

1. remove the last value from the number (i.e. / 10 and round down) then 
2. use Frequency Counter method to determine frequency

## =================================================
## Are There Duplicates
## =================================================

Implement a function called, *areThereDuplicates* that accepts a *variable number of arguments* and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern *OR* the multiple pointers pattern

## =================================================
## Multiple Pointers - Average Pair
## =================================================
Write a function called *averagePair*.  Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.  There may be more than one pair that matches the average target.


## =================================================
## Multiple Pointers - Is Subsequence
## =================================================
Write a function called *isSubsequence* which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, *without thier order changing*

1.  the charcters do not have to be next to each other just in the proper order


## =================================================
## Sliding Window - Max Subarray Sum
## =================================================
Given an array of integers and a number, write a function called *maxSubarraySum*, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of *consecutive* elements from the original array.  In the first example [100,200,300] is a subarray of the original array, but [100,300] is not.

Complexity Constraints:
Time - O(n)
Space - O(1) 


## =================================================
## Sliding Window - Min Sub Array Len
## =================================================
Write a function called *minSubArrayLen* which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a *contiguous* subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Complexity Constraints:
Time - O(n)
Space - O(1) 




## =================================================
## Sliding Window - Find Longest Substring
## =================================================
Write a function called *findLongestSubstring* which accepts a string and returns the length of the longest substing with all distinct characters.

Complexity Constraints:
Time - O(n)
