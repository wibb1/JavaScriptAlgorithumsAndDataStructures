# Stacks

## Objectives
* Define what a stack is
* Understand use cases for a stack
* Implement operations on a stack data structure

## What is a stack?
Collection of data that abides by the Last in First Out (LIFO) Principle.  This means that the last element added to the stack will always be the first element removed from the stack.

### Examples
* A stack of plates - as you pile them up the last plate added will be the first plate removed.
* The computers call stack - recursion is a great way to visualize this.
* The undo/redo buttons on software are using a stack.
* History objects in the browser are a stack, back and forward

## Array implementation
* If you only use push and pop with an array you get the same functionality as a stack
* If you use only unshift and shift with an array you get the same functionality too but the time complexity will be very high - adding to the front causes all the values to be reindexed
* Arrays are not the best stacks because they take up more space

# Build our own stack with a Singly Linked List
* Only care about push and pop
* These are supposed to be constant time - which with a singly linked list push and pop were not constant time.  However shift and unshift were constant time so that is the code that will be used for the adding and removing values from the list.

# Big O of Stacks
|Algorithm|Time<br>Complexity<br>(Best)|Time<br>Complexity<br>(Average)|Time<br>Complexity<br>(Worst)|
|:-:|:-:|:-:|:-:|
|Insertion|O(1)|O(1)|O(1)|
|Removal|O(1)|O(1)|O(1)|
|Searching|O(n)|O(n)|O(n)|
|Access|O(n)|O(n)|O(n)|