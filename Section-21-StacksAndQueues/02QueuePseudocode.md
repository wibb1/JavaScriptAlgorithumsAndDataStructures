# Enqueue Pseudocode
* The function accepts a value
* Create a new node using that value passed to the function
* If there are no nodes in the queue, set the new node to be the first and last property 

# Dequeue Pseudocode
* If there is no first property, just return null
* Store the first property in a variable
* See if the first is the same as the last (check if there is only one node). If so, set the first and last to be null
* If there is more than one node, set the first and last property to be the next property of first 
* Decrement the size by one
* Return the value of the node dequeued