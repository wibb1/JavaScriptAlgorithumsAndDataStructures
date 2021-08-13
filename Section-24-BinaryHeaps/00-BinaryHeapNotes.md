# Binary Heaps
Heaps are a type of data tree.  

## Objectives
- Define what a binary heap is
- Compare and contrast min and max heaps
- Implement basic methods on heaps
- Understand where heaps are used in the real world and what other data structures can be constructed from heaps

## What is a binary heap
- In a **MaxBinaryHeap**, parent nodes are always greater than the child nodes.
- In a **MinBinaryHeap**, parent nodes are always less than the child nodes
- Binary Heaps **Very** similar to a binary search tree, but with some different rules.
  - The child's values are less(Max) or greater(Min) than the parent but not ordered in any way
  - In a Heap the left and right child do not have a sort order.

## Max Binary Heap
- Each parent has at most two child nodes
- The value of each parent node is **always** greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
```
          100
     19          36
  17    3     25    1
2   7
```
## Min Binary Heap
Only difference is the smallest number is the root and the numbers are greater as you descend.
```
          1
      2           3
  17    19     36    7
25   100
```

## Why do we need to know Binary Heaps?
- They are used to implement Priority Queues, which are **very** commonly used data structures.
- They are also commonly used in **graph traversal** algorithms.

# Representing a Binary Heap in an Array
```
          100
     19          36
  17    3     25    1
2   7
```
becomes
```
100
    19  36
            17  12  25  5
                            9 15  6  11 13  8 1 4
```
## Math to find the children
- For any parent at index `n` in an array:
  - The left child is stored at `2*n + 1`. 
  - The right child is stored at `2*n + 2`.
- For and child at index `n` in an array:
  - Its parent is at index `Math.floor((n-1)/2)`.

## Adding to a Binary Heap
- We push onto the array/list adding the value to the end
- We put it in the correct place by bubbling up:
  - Take the new node and compare it to its parent
    - If the current parent is greater than the new node you swap them
    Repeat this until the parent is greater or the root is reached

Original Binary Heap:
```
41  
    39    33
              18  27    12  
```

Add 55:
```
41  
    39    33
              18  27    12  [55]
```

Compare 55 to 33, its current parent.  55 > 33 so we swap them.
```
41  
    39   [55]
              18  27  12  33
```

Compare 55 to 41, its current parent.  55 > 41 so we swap them.
```
[55]
    39    41  
              18  27  12  33
```

And since 41 was the root we have no higher values and we stop.

## Big O Notation
Insertion - O(log n)
Removal - O(log n)
Search - O(n)