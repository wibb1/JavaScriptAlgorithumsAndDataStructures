## Binary Search Trees (BSTs)
Binary Trees sorted into an order.  BTS are arranged so that the root is the start and nodes with lower values are to the left and nodes with higher values are to the right

## Binary Search Tree Graphic
  ```
                                                          (11)
                                (6)                         |                         (16)  
                   (3)           |           (9)            |           (14)            |           (19) 
            (2)     |    (4)     |    (8)     |    (10)     |    (13)     |    (15)     |    (18)     |    (20)
         (1) |      | (5) |      | (7) |      |      |      | (12) |      |      |      | (17) |      |      |                        
  ```

# Searching a binary tree
- BST makes it fast to look things up.
- When looking for a value you are using `if(x<node.val)`->go left; `else`-> go right in a loop until you find the value.

# How Binary Search Trees Work
- Every parent node has at most **two** children.
- Every node to the **left** of a parent node is **always less** that the parent.
- Every node to the **right** of a parent node is **always greater** than the parent.

# Big O of Binary Search Trees
- Insertion is O(log n)
- Searching is O(log n)

Worst case times are not necessarily always O(log n).  The tree can be one sided and act more like a linked list, which damages the time complexity and pushes it closer to O(n**2)