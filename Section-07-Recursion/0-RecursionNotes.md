# ==========================
# Recursion
# ==========================

## ==========================
## Objectives 
## ==========================

* Define what recursion is and how to use it
* Understand the tow essential components of a recursive function
* Visuallize the call stack to better debug and understand recursive functions
* Use helper method recursive and pure recursion to solve more difficult problems

## ==========================
## Notes 
## ==========================

## Why do we need to know this
* JSON.parse/JSON.stringify
* document.getElementById and DOM traversal algorithms
* Object traversal
* We will see it with more complex data structures
* It's sometimes a cleaner alternative to iteration

## What happens when we call code recursively
* It's a *stack* data structure
* Any time a function is invoked it is placed (*pushed*) on top of the call stack
* When JavaScript sees the return keyword or when the function ends, the compiler will remove (*pop*)

## Why Do I care?
* You're used to functions being pushed on the call stack and popped off when they are done
* When we write recursive functions, we keep pushing new functions onto the call stack!

## How Recursive Functions Work
* Invoke the *same* function with a different input until you reach your base case
* The *Base Case* is the condition when the recursion ends
* The input to the function must change each time 

## Common PitFalls
* No Base Case
* Forgetting to return or returning the wrong thing

*Stack overflow!* - the result of either of the two above pitfalls

## ==========================
## Helper Method Recursion 
## ==========================

In helper method recursion, the recursive function is not called directly. it is contained within another function that is called.

## collectOddValues

collectOddValues([1,2,3,4,5])
[1].concat(collectOddValues([2,3,4,5]))
      [ ].concat(collectOddValues[3,4,5])
          [3].concat(collectOddValues[4,5])
              [ ].concat(collectOddValues[4,5])
                  [5].concat(collectOddValues[])
                      []
