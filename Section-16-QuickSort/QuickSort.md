# Quick Sort Introduction

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

<br>

# Partition/Pivot Helper

Similar to the Merge Sort there are two parts. The first breaks down the array and is usually called partition or pivot. It arranges the elements before and after the pivot.

## How does it work

An example of how it works is below

         5, 2, 1, 8, 4, 7, 6, 3

Pick the first element in the array as the pivot

                   5

2, 1, 4, 3 8, 7, 6

Pick the first element in each array as the pivot

      2                         8

1 3, 4 7, 6

Pick the first element in each array as the pivot

           3               7
               4       6

<br>

## Description

- In order to implement quick sort, it's useful to first implement a function responsible for arrainging elements in an array on either side of the pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange element in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of the elementson either side of the pivot doesn't matter
  The helper should do this ini place, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

## Picking the pivot

- The runtime of quick sort depends in part on how the pivot is selected
- Ideally, the pivot should be chosen so that it is roughly the median value in the data set you are sorting
- For simplicity, we'll always choose the pivot to be the first element (we'll talk about the concequences of this later)

## Psuedocode

- It will help to accept three arguemnts: array, start index, end index. These can default to `start = 0` and `end = (array.length - 1)`
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
  - If the pivot is greater that the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index

# Quick Sort Pseudocode

- Call the pivot helper on the array
- When the help returns the updated pivot index, recursively call the pivot helper on the subarray to either side of the index
- Your base case occurs when you conisder a subarray with less than 2 elements

# Big O Complexity

| Algorithum | Time<br>Complexity<br>(Best) | Time<br>Complexity<br>(Average) | Time<br>Complexity<br>(Worst) | Space<br>Complexity |      Use       |
| :--------: | :--------------------------: | :-----------------------------: | :---------------------------: | :-----------------: | :------------: |
| Quick Sort |          O(n log n)          |           O(n log n)            |       O(n<sup>2</sup>)        |      O(log n)       | good fast sort - best if first pivot is close to the middle |

## Why is Quick Sort n log n Complexity?

Each split creates two arrays which means splitting is O(log n). We then have to compare each of the arrays/values, which is O(n). O(n) + O(log n) = O(n log n).

## Why is the Worst Case O(n<sup>2</sup>) Complexity?

We used the first item as the pivot. If the data was already sorted it would iterate through the entire array one at a time (each decomposition would separate a single value), which is O(n). Then you need to iterate through each value to sort it, which is O(n). Therefore O(n<sup>2</sup>).

To avoid this with a sorted array you can pick the middle element as the start value (i.e. `Math.floor(arr.length/2)`). This would optimize Quick Sort.
