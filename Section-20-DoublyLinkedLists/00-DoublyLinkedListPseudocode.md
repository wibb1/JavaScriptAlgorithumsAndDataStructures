# Push Pseudocode
* Create a new node with the value passed to the function.
* If the head property is null the head and tail to be the newly created node.
* If not, set the next property on the tail to be the node.
* Set the previous property on the newly created node to be the tail.
* Set the tail to be the newly created node.
* Increment the length.
* Return the Doubly Linked List.

# Pop Pseudocode
* If there is not a tail, return undefined.
* Store the current tail in a variable to return later.
* If the length is 1, set the head and tail to be null.
* Update the tail to be the previous Node.
* Set the new tail next to be null.
* Decrement the length.
* Return the value removed.

# Shift Pseudocode
Same as Singly Linked List but have to set the previous value in the node.

* If length is 0, return undefined.
* Store the current head property in a variable (we'll call it old head).
* If the length is one.
  * Set the head to be null.
  * Set the tail to be null.
* Update the head to be the next of the old head.
* Set the head's prev property to null.
* Set the old head's next to null.
* Return the old head.

# Unshift Pseudocode
Very similar to the Singly Linked List but need to change the previous connection too.
.
* Function should take input.
* Create a new node using the input.
* If the length is 0.
  * Set the head to be the new node.
  * Set the tail to be the new node.
* Otherwise.
  * Set the prev property on the head of the list to be the new node.
  * set the next property on the new node to be the head property.
  * Update the head to be the new node.
* Increment the length.
* Return the list.

# Get Pseudocode
Can be optimized because of the previous and next values.  The index can be used to decide where to start the loop.

* Function takes input of the index you are looking for.
* If the index is less than 0 or greater than or equal to the length, return null.
* If the index is less than or equal to half the length of the list 
  * Loop through the list starting from the head and loop towards the middle.
  * Return the node once it is found.
* If the index is greater than half the length of the list.
  * loop through the list starting from the tail and loop towards the middle.
  * Return the node once it is found.


# Set Pseudocode
* Create a variable which is the result of the **get** method at the index passed to the function.
  * If the **get** method returns a valid node, set the value of that node to be the value passed to the function.
  * Return true
* Otherwise return false

# Insert Pseudocode
Similar but can be optimized using our optimized get method. Need to account for the previous and next.

* If the index is less than zero or greater than or equal to the length return false
* If the index is 0, **unshift**
* If the index is the same as the length, **push**
* Use the **get** method to access the index-1
* Set the next and prev properties on the correct nodes to link everything together
* Increment the length
* Return true

# Remove Pseudocode
* If the index is less than zero or greater than or equal to the length return undefined.
* If the index is 0, **shift**.
* If the index is length, **pop**.
* Use the get method to retrieve the item to be removed.
* Update the next and prev properties to remove the found node from the list.
* Set next and prev to null on the found node.
* Decrement the length.
* Return the removed node.