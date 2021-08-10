# Doubly Linked Lists
All we do to go from a Singly Linked List to a Doubly Linked List is to add a pointer to the previous node.  This allows referencing the previous node from the back of the list as well as the next node from the front of the list.  This changes the methods significantly.

## Objectives
* Construct a Doubly Linked List 
* Compare and contrast Doubly Linked Lists and Singly Linked Lists
* Implement basic operations on a Doubly Linked List

## How Doubly Linked Lists Work
* **Almost** identical to Singly Linked Lists, except every node has **another** pointer, to the **previous** node.
  * This improves the efficiency of all operations that start at the end of the list (i.e. pop, etc)
* Consumes more memory than a Singly Linked List - an additional pointer for each node

#
# Big O Notation
|Algorithm|Time<br>Complexity<br>(Best)|Time<br>Complexity<br>(Average)|Time<br>Complexity<br>(Worst)|
|:-:|:-:|:-:|:-:|
|Insertion|O(1)|O(1)|O(1)|
|Removal|O(1)|O(n)|O(n)|
|Searching|O(n)|O(n)|O(n)|
|Access|O(n)|O(n)|O(n)|

Technically searching is only **O(n/2)** but that is **still O(n)**.  Divide and conquer is cutting the time in half.

**Better** than **Singly Linked Lists** for speed (finding nodes in half the time which increases get, set, insert, and remove) and no need to ever reverse.

**Worse** than **Singly Linked Lists** because they have another pointer which **doubles** the memory requirements.