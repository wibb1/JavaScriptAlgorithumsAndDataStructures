# Graphs

Used in Social Networks, Recommendations on Netflix, and Advertisers

# Objectives

- Explain what a graph is
- Compare and contrast different types of graphs and their use cases in the real world
- Implement a graph using an adjacency list
- Traverse through a graph using BFS and DFS
- Compare and contrast graph traversal algorithms

# What is a Graph

A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered pairs for a **directed graph**.

Basically a **graph** is a collection of **nodes** and the **connections** between those nodes.

There is no root that starts the graph they are just all interconnected

# Uses of Graphs

- Social Networking
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Many others...

## Social Network

<img src="https://live.staticflickr.com/7011/6602925613_6616c8b1a3_b.jpg"
alt="https://www.flickr.com/photos/kencf0618/6602925613/"
style="display: block; margin-left: 10px; float: right; width: 300px"> People (nodes) are stored in a graph and your friends are the connections. is an example of this, this is a graphic of the graph of friends on a social network.

The Internet is also able to be mapped in a similar way. Maps are also very similar to the diagram, used by google maps to determine the fastest way to get from one place to another.

Recommendations on websites link what other people who also bought your current cart items bought and suggests those items - "People also watched", "You might also like", People you might know", or "Frequently bought with".

# Essential Graph Terms

- **Vertex** - a node
- **Edge** - connection between nodes
- **Weighted/Unweighted** - values assigned to distances between vertices
- **Directed/Undirected** -directions assigned to distance between vertices

**Directed Graph** - _Edges_ can only be traversed in the direction. _Vertices_ only have one connection similar to a Singly Linked List. Social networks often use this model since the relationship is not necessarily a two interest. Examples include Twitter or Instagram.

**Weighted Graph** - assigns a value to the _Edge_ between two _Vertices_. Examples include maps where the distances and speed limit the usability of each road (_Edge_) between two locations (_Vertices_)

# Storing a Graph

Two standard approaches: **Adjacency Matrix** and **Adjacency List**

## Adjacency Matrix

The graph we are going to try to represent will look like this.

```
[f] ---- [a] ---- [b]
 |                 |
 |                 |
[e]----- [d] ---- [c]
```

### Matrix

|   -   | **A** | **B** | **C** | **D** | **E** | **F** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **A** |   0   | **1** |   0   |   0   |   0   | **1** |
| **B** | **1** |   0   | **1** |   0   |   0   |   0   |
| **C** |   0   | **1** |   0   | **1** |   0   |   0   |
| **D** |   0   |   0   | **1** |   0   | **1** |   0   |
| **E** |   0   |   0   |   0   | **1** |   0   | **1** |
| **F** | **1** |   0   |   0   |   0   | **1** |   0   |

### Adjacency List

Inside the code it could be stored in a two dimensional array

`array = [ [1, 5], [0, 2], [1, 3], [2, 4], [3, 5], [4, 0] ]`

| Index | Subarray  |
| :---: | :-------: |
|   0   | `[1, 5],` |
|   1   | `[0, 2],` |
|   2   | `[1, 3],` |
|   3   | `[2, 4],` |
|   4   | `[3, 5],` |
|   5   | `[4, 0] ` |

Or it could be stored as an object with array

```
{
  A: [ "B", "F" ],
  B: [ "A", "C" ],
  C: [ "B", "D" ],
  D: [ "C", "E" ],
  E: [ "D", "F" ],
  F: [ "E", "A" ],
}
```

# Differences & Big O

V - number of vertices
E - number of edges

| **OPERATION** | **ADJACENCY LIST** | **ADJACENCY MATRIX** |
| :------------ | :----------------- | :------------------- |
| Add Vertex    | O(1)               | O(V^2)               |
| Add Edge      | O(1)               | O(1)                 |
| Remove Vertex | O(V+E)             | O(V^2)               |
| Remove Edge   | O(E)               | O(1)                 |
| Query         | O(V+E)             | O(1)                 |
| Storage       | O(V+E)             | O(V^2)               |

**Adjacency List** - Storage increases by the number of vertices squared - every new one requires a column and row in the two dimensional array.
**Adjacency Matrix** - Storage increases by the sum of edges and indices - each connection or node


### Compare and contrast
|Description|Adjacency List|Adjacency Matrix|
|:-|:-|:-|
|Space complexity in sparse graphs|Lower|Higher|
|Iterate over all Edges|Faster|Slower|
|Find specific edge|Slower|Faster

We are going with an Adjacency List - Why? Most real world data tends to be sparse.  We are going to use an undirected graph.

