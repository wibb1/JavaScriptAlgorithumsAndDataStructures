# Radix Sort Intro
* Special algorithm that works on list of numbers
* It never makes comparisons between elements
* It sorts based on the number of digits

# How it works
array = [ 1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29] 

## Sort by Ones
|Index|0|1|2|3|4|5|6|7|8|9|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Value|||902|593|4||86<br>4386<br>3556<br>1556|9637<br>8157<br>7|408|29

array = [ 902, 593, 4, 86, 4386, 3556, 1556, 9637, 8157, 7, 408, 29 ]

## Sort by Tens
|Index|0|1|2|3|4|5|6|7|8|9|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Value|408<br>7<br>4<br>902||29|9637||8157<br>3556<br>1556|||86<br>4386|593|

array = [ 902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593 ]

## Sort by Hundreds
|Index|0|1|2|3|4|5|6|7|8|9|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Value|86<br>29<br>7<br>4|8157||4386|408|593<br>3556<br>1556|9637|||902

array = [ 4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902 ]

## Sort By Thousands
|Index|0|1|2|3|4|5|6|7|8|9|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Value|902<br>593<br>408<br>86<br>29<br>7<br>4|1556||3556|4386||||8157|9637|

array = [ 4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637 ]

# Radix Sort Helpers
In oder to implement radix sort, it's helpful to build a few helper functions first.
## getDigit

`getDigit(num, place)` - returns the digit num at the place value

## digitCount
`digitCount(num)` - returns the number of digits in a value

## mostDigits
`mostDigits(nums)` - returns the count of the digits (using digitCount) in the largest value in the array

# Radix Function Pseudocode
* Define a function that accepts list of numbers.
* Figure out how many digits the largest number has = number of sorts.
* Loop from k = 0 to the largest digit.
* For each iteration of the loop:
  * Create buckets (arrays) for each digit (0 to 9) - array of arrays.
  * Place each number in the corresponding bucket based on its k<sup>th</sup> digit.
* Replace our existing array with the values in our buckets, starting with 0 and going up to 9.
* Return the sorted array at the end.

# Radix Function Big O
|Algorithm|Time<br>Complexity<br>(Best)|Time<br>Complexity<br>(Average)|Time<br>Complexity<br>(Worst)|Space<br>Complexity|Use|Type|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Radix Sort|O(nk)|O(nk)|O(nk)|O(n+k)|Sorting integers|Non-Comparison|