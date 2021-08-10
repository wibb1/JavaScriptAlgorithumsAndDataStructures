# Singly Linked List

## Objectives
* Define what a Singly Linked List is.
* Compare and contrast Linked Lists with Arrays
* Implement insertion, removal and traversal methods on Singly Linked Lists

## What is a Linked List
* Data structure that contains a **head**, **tail**, and **length** property
* Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null

## Singly Linked List
```
        length = 4
  ---------------------     
  |                   |
head                 tail
[4]--->[6]--->[8]--->[2]--->null
   next   next   next   next
```

## Comparison with arrays

**Linked Lists:**
* Do not have indices
* Connected via nodes with a next pointer
* Random access is not allowed

**Arrays:**
* Indexed in order
* Insertion and deletion can be expensive
* Can quickly be accessed at specific index