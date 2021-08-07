# Selection Sort
Similar to Bubble Sort, but instead of placing large values into sorted position, it places small values into sorted position.

## Examples
[ 5, 3, 4, 1, 2 ] find minimum value in the entire array (0-4) and swap it with the first element in that array (0)
[ 1, 3, 4, 5, 2 ] find the minimum value in the remaining array (1-4) and swap it with the first element in the remaining array (1)
... continue until the entire array is iterated through without swaping.
returning [ 1, 2, 3, 4, 5 ]

## Pseudocode
* Store the first element as the smallest value 
* Compare this item to the next item in the array until you find a smaller number
* If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
* If the minimum is not the value(index) you initial began with, the swap the two values
* Repeat the process with the next element in the array and including the remainder of the array

## Selection Sort Big O
O(n^2) because there are multiple iterations through the array inside the double loop.  It is really only useful when you want to minimize the number of swaps, otherwise it is too inefficient to use.  This would occur in an application that has limitted memory availability where you are sacrificing speed to reduce heap

