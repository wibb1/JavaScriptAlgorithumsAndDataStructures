# What is a Priority Queue?
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

# Changes for this exercise
Class Name: PriorityQueue
Properties: values = []

Class Name: Node
Properties: val, priority

Switch to a Min Binary Heap for this exercise - lower priority is more urgent

# Pseudocode
Write a Min Binary Heap where:
- Each Node has a val and a priority.  Use the priority to build the heap.
- **Enqueue** method accepts a value and a priority, makes a new node, and puts it in the correct spot based on its priority
- **Dequeue** method removes root element, returns it, and rearranges heap using priority.