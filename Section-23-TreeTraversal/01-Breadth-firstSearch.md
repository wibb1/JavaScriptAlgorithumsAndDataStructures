# Breadth-first Search
**Steps - Iteratively**
- Create a queue (this can be an array) and a variable to store the values of the nodes visited.
- Place the root in the queue.
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
  - If there is a left property on the node dequeued - add it to the queue.
  - If there is a right property on the node dequeued - add it to the queue.
- Return the variable that stores the values.

```
TREE:
     10
  6     15
3   8     20
```
BFS Diagram:
|Step<br>Description|Queue<br>Values|Visited<br>Values|
|:-|:-|:-|
|Add root to Queue|[10]|[ ]
|Move first Queue node to Visited|[ ]|[10]
|Check for new Visited, if true add <br>node.left and node.right to Queue |[6, 15]|[10]
|Move first Queue node to Visited|[15]|[10, 6]
|Check for new Visited, if true add <br>node.left and node.right to Queue|[15, 3, 8]|[10, 6]
|Move first Queue node to Visited|[3, 8]|[10, 6, 15]
|Check for new Visited, if true add <br>node.left and node.right to Queue|[3, 8, 20]|[10, 6, 15]
|Move first Queue node to Visited|[8, 20]|[10, 6, 15, 3]
|Check for new Visited, if true add <br>node.left and node.right to Queue||
|Move first Queue node to Visited|[20]|10, 6, 15, 3, 8]
|Check for new Visited, if true add <br>node.left and node.right to Queue||
|Move first Queue node to Visited|[ ]|[10, 6, 15, 3, 8, 20]
|Nothing left in Queue - exit||
