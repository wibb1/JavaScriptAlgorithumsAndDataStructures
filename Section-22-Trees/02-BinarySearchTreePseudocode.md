# Binary Search Tree and Node Constructor Pseudocode
- Create a node class and inside the constructor add
  - Value assigned to the value passed to the node
  - Left assigned to null
  - Right assigned to null
- Create a BTS class and inside the constructor add
  - Root assigned to null

# Binary Trees Insert Pseudocode
These can be done iteratively or **recursively**

- Create a new Node
- Starting at the root
  - Check if there is a root, if not - assign the value to the root
  - Otherwise, check if the value is greater than the root
    - If greater than the root, check if there is a node to the right
      - If there is, move to the new node and recall the function
      - If not, add the node as the right property
    - Otherwise, check if there is a node to the left
      - If there is, move to the new node and recall the function
      - If not, add the node as the left property
- Return the tree at the end

# Binary Trees Find Pseudocode
Starting at the root 
- Check if there is a root, if not we are done searching
- If there is a root, check if the value of the new node is the value we are looking for, if it is we are done
- If not check to see if the value is greater or less than the value of the root
- If it is greater
  - Check to see if there is a node to the right
    - If there is, move to that node and repeat the steps
    - If there isn't, we are done searching
- If it is less
  - Check to see if there is a node to the left
    - If there is, move to that node and repeat the steps
    - If there isn't, we are done searching