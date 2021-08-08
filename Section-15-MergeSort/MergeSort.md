# Merge Sort

* Time complexity O(n log n)
* More complex

1. Combination of three things - spliting, merging and sorting
2. Exploits the fact that arrays of 0 or 1 element are already sorted
3. Decomposes arrays into smaller arrays of 0 or 1 element, then building up a newly sorted array (i.e. divide and conquer approach)

## Example
Split the array:
                          [ 8, 3, 5, 4, 7, 6, 1, 2 ]
                                     
                    [ 8, 3, 5, 4 ]             [ 7, 6, 1, 2 ]
                         
                [ 8, 3 ]     [ 5, 4 ]       [ 7, 6 ]    [ 1, 2 ]
                  
              [ 8 ] [ 3 ]  [ 5 ] [ 4 ]   [ 7 ] [ 6 ]  [ 1 ]  [ 2 ]

Merge each pair of arrays and sort by which is smaller:

             [ 8 ] [ 3 ]    [ 5 ] [ 4 ]    [ 7 ] [ 6 ]    [ 1 ] [ 2 ]
                
                [ 3, 8 ]      [ 4, 5 ]       [ 6, 7 ]       [ 1, 2 ]

                   [ 3, 4, 5, 8 ]                [ 1, 2, 6, 7 ]

                            [ 1, 2, 3, 4, 5, 6, 7, 8 ]

<br>

# Merge Arrays Implementation
* In order to implement merge sort, it's useful to first implement a function responsible for merging two arrays.
* Given two arrays which are sorted, this helper function should create a new array which is also sorted, and includes all the elements of the two input arrays.
* This shuld run in **O(n+m)** time and **O(n+m)** space and **should not** modify the parameters passed to it.

## Psuedocode
* Create an empty array
* Look for the smallest values in each input array, the 0 index values
* While there are values that we still have not compared
  * Select the smaller of the two values and push it into the results array
  * Increase the index value of the array selected 
  * Compare the next two values

## Notes 
- shortMerge was the cleanest - it did not affect speed so I would appoint that the best.
- Could also use arrI[i] === undefined but it does the same thing

<br>

# Merge Sort Implementation
Uses recursion to execute the sort.

## Pseudocode
* Break up the array into halves until you have arrays that are empty or only have one element
* Once you have smaller sorted arrays merge those arrays with other sorted arrays until you are back at the full length array
* Once the array has been merged back together return the merged (and sorted!) array