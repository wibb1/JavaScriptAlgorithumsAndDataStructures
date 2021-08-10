# Push Pseudocode
* Create a new node with the value passed to the function
* If the head property is null the head and tail to be the newly created node 
* If not, set the next property on the tail to be the node 
* Set the previous property on the newly created node to be the tail
* Set the tail to be the newly created node
* Increment the length
* Return the Doubly Linked List

# Pop Pseudocode
* If there is not a tail, return undefined
* Store the current tail in a variable to return later
* If the length is 1, set the head and tail to be null
* Update the tail to be the previous Node
* Set the new tail next to be null
* Decrement the length
* Return the value removed