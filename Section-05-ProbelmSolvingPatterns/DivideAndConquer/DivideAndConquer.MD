# =================================================
# Divide and Conquer
# =================================================

* This pattern involves dividing a data set into smaller chuncks and then repeating a process with a subset of data
* This pattern can *decrease time complexity tremendously*

Search where you split the sorted data 
Check if the value is between the high and low value of the section  
Continue to split the section containing the value until the value you are searching for is found

## =================================================
## An Example
## =================================================

Given a *sorted* array of integer, write a function called search, that accepts a value and returns the index where the value passed to the function is located.  If the value is not found, return -1
