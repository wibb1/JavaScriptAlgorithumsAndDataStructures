# Insert Pseudocode
- Push the value into the values property on the heap.
- Bubble the value up:
  - Create a variable called index, which is the length of the values Property
  - Create a values called parent index, which is the floor of (index-1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index.
    - Swap the value of values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over.


# extractMax Pseudocode 
Removing from a Max Binary Heap is always done from the root since that is the highest level concern in the heap. 

The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap, or the minimum element in a min-heap, and restoring the properties is called **down-heap**.  It is also known as *sink-down*, *bubble-down*, *percolate-down*, *sift-down*, *trickle down*, *heapify-down*, *cascade-down*, or *extract-min/max*.

- Swap the root (value to be removed) with the last value in the array
- Pop off the last value to remove it and assign it to a variable to return at the end
- Have the new root *down-heap* to the correct index
  - Your parent index starts at 0 (the root)
  - Find the index of the left child (2 * index + 1).  Make sure its not out of bounds!
  - Find the index of the right child (2 * index + 2). Make sure it is not out of bounds!
  - If the root is less than either child, swap with the greatest child. 
  - The child index you swapped to now becomes the new parent index.
  - Keep looping and swapping until neither child is greater than the element.
- Return the old root.


