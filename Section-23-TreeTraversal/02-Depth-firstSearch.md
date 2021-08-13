## Depth-first Search
There are three operation you perform when doing the search that will change your output order.  They are:
1. Visit the node
2. Look at the left
3. Look at the right

By changing the order of these operations you will change the order of the information returned.

## Pre-Order - Root on the left 
**Steps - Recursively**
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node 
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node.
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable 
- Return the array of values

## Post-Order - Root on the right
The helper function changes to the following:
  - If the node has a left property, call the helper function with the left property on the node.
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values

## In-Order - Root in the middle
The helper function changes to the following:
  - If the node has a left property, call the helper function with the left property on the node.
  - Push the value of the node to the variable that stores the values.
  - If the node has a right property, call the helper function with the right property on the node