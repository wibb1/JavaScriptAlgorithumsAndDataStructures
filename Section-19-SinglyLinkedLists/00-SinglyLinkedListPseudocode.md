# Pushing Pseudocode
* This function should accept a value.
* Create a new node using the value passed to the function.
* If there is no head property on the list, set the head and tail to be the newly created node.
* Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
* Increment the length by one.

# Popping Pseudocode
Removing a node from the end of the linked list is more complicated because we do not have a reference to the item before the tail.  It means we have to go through the entire list to find the value before the last value.  You will need to traverse the list placing each value into a variable until the Node this.next value === null or !this.next.

* If there are no nodes in the list, return undefined.
* Loop through the list until you reach the tail.
* Set the next property of the 2nd to last node to be null.
* Set the tail to be the 2nd to last node.
* Decrement the length of the list by 1.
* Return the value of the node removed.

# Shifting Pseudocode
* If there are no nodes, return undefined.
* Store the current head property in a variable.
* Set the head property to be the current head's next property.
* Decrement the length by one.
* Return the value of the node removed.

# Unshifting Pseudocode
* This function should accept a value.
* Create a new node using the value passed to the function.
* If there is no head property on the list, set the head and tail to be the new node.
* Otherwise set the newly created node;s next property to be the current head property on the list.
* Set the head property on the list to be the new node
* Increment the length by 1.
* Return the linked list.

# Get Pseudocode
Retrieves the value at the position ("index") in the list

* Function should accept a value.
* If the index is less than 0 or greater than or equal to the length return null.
* Loop through the list until you reach the index and return the node at that specific index.

# Set Pseudocode
* This function should accept an index and value.
* Use your **get** function to find the specific node to be the value passed to the function and return true.
* If the node is not found, return false.
* If the node is found, set the value of that node to be the value passed to the function and return true.

# Insert Pseudocode
* Create a new node using the value passed to the function.
* If the index is less than zero or greater that the length, return false.
* If the index is the same as length, push the new node into the list.
* If the index is 0, unshift a new node to the start of the list.
* Otherwise, using the **get** method, access the node at the index - 1
* Set the next property on that node to be the new node.
* Set the next property on the new node to be the previous next.
* Increment the length.
* Return true.

# Remove Pseudocode
* If the index is less than zero or greater than the length, return undefined.
* If the index is the same as the length-1, use pop.
* If the index is 0 use shift.
* Otherwise, using the **get** method, access the node at the index-1.
* Set the next property on that node to be the next of the next node.
* Decrement the length.
* Return the value of the node removed.

# Reverse Pseudocode
* Must be completed in place without creating a new list.
* Swap the head and tail.
* Create a variable called next.
* Create a variable called prev.
* Create a variable called middle and initialize it to the head property.
* Loop through the list.
* Set next to be the next property on whatever middle is.
* Set the property on the middle to be whatever prev is.
* Set prev to be the value of the middle variable.
* Set the middle variable to be the value of the next variable.
