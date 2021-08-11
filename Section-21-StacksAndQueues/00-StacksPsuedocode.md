# Stacks Push Pseudocode
* The function should accept a value
* Create a new node with the value
* If there are no nodes in the stack, set the first and last property to be the new created node
* If there is at least one node, create a variable that stores the current first property on the stack
* Reset the first property to be the newly created node
* Set the next property on the node to the previously created variable 
* Increment the stack size by 1

# Stacks Pop Pseudocode
* If there are no nodes in the stack, return null
* Create a temporary variable to store the first property on the stack
* If there is only 1 node, set the first and last property to be null
* If there is more than one node, set the first property to be the next property on the current first
* Decrement the size by 1
* Return the value of the node removed
