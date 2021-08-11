# Trees Data Structure Intro
A little better than linked lists, also a little more complicated.  

## Objectives
- Define what a tree is.
- Compare and contrast trees and lists.
- Explain the difference between trees, binary trees, and binary search trees (This section will be dealing mostly with binary search trees.)
- Implement operations on binary search trees.

## What is a tree
Data structure that consists of nodes in a **parent/child** relationship.  Difference between tree and linked list is each "parent" node can point to multiple "child" nodes in the structure, rather than a single parent/child relation in a list.

Lists are linear, trees are non-linear.

Trees cannot reference across branches.  A parent node cannot point to nodes that are not only children of only that parent (when you do this it becomes a graph, which is another section). 

## Terminology
- Root - The top node of a tree.
- Child - A node directly connected to another node when moving away from the root.
- Parent - The node that points to a child.
- Siblings -A group of nodes with the same parent.
- Leaf -A node with no children.
- Edge - The connection between one node and another.

## Use cases for trees
- HTML DOM
- Network Routing
- Abstract Syntax Trees
- Artificial Intelligence (minimax tree)
- Folders in the operating system
- JSON

# Types of Trees

- Binary Trees
  - Each node can have at most two children.
  - Have some special properties that make them special.
- Binary Search Trees (BSTs)
  - Binary Trees sorted into an order.
  - Trees that are arranged so that the root is the head and nodes with lower values are to the left and nodes with higher values are to the right

