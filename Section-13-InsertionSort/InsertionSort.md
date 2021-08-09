# Insertion Sort
Similar to Bubble and Selection Sort.  This sort is the first to have an actual common use.  

Insertion sort builds up the sort by gradually inserting the value to the right into the sorted values

|array|first<br>compare|second<br>compare
|:-:|:-:|:-:|
|[ 5, 3, 4, 1, 2 ] | 5| 3
| [ 3, 5, 4, 1, 2 ] | 4 | [3, 5] |
| [ 3, 4, 5, 1, 2 ] | 1 | [3, 4, 5 ] |
| [ 1, 3, 4, 5, 2 ] | 2 | [1, 3, 4, 5 ] |
| [ 1, 2, 3, 4, 5 ] | NA |  |

## Pseudocode
* Pick the second element in the array
* Compare the selected element with the element before and swap if necessary
* Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
* Repeat until the array is sorted.

There are two loops inside of each other - the first is iterating through the array the second is putting the value in the correct place

## Time Complexity
Big O is O(n^2) but it is better with nearly sorted data.  If you are adding a single number to an existing sorted array this is a good method.