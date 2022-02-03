# Objects
unordered data structres in key value pairs {hash}

## Big O of objects:
  Insertion - O(1)
  Removal - O(1)
  Searching - O(n)
  Access - O(1)

object.keys - returns an array of keys - O(n)
object.values - returns an array of values - O(n)
object.entries - returns an array of key and value pairs - O(n)
object.OwnProperty - boolean response to test if a key exists - O(1) 

# Arrays
Arrays are used when you need an order

## Big O of Arrays:
   Insertion - it depends...
   Removal - it depends...
   Searching - O(n) - requires each element to be read through until the correct value is found
   Access - O(1) - access of an individual known index is O(1)

## Insertion 
   .push - insert at end is O(1)
   .shift - insert at begining is O(n) - all the items must be moved

## Removal
   .pop - remove at end is O(1)
   .unshift - removing at begining is O(n) - all the items must be moved


## Others
   .concat - O(n+m) - add an array to an array
   .slice - O(n) - remove section from an array
   .splice - O(n) - remove or remove and replace
   .sort - O(n * log(n)) - reorder the array
   .forEach - O(n) - itterate through the array using a callback function without creating a new array
   .map - O(n) - itterate through the array using a callback function and creates a new array 
   .filter - O(n) - iterates through the array using a callback function that returns a boolean - returns a new array
   .reduce - O(n) - 
