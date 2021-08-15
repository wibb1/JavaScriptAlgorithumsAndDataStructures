# Adding a Vertex
- Write a method called addVertex, which accepts a vertex name 
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.

# Adding an Edge
- This function should accept two vertices, we can call them vertex1 and vertex2.
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices

# Remove an Edge
- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

# Remove Vertex
- Function should accept a vertex to remove
- The function should loop until there are no vertices in the adjacency list for that vertex
- Inside the loop, call our **removeEdge** function with the vertex we are removing and any values in the adjacency list for that vertex
- Delete the key in the adjacency list for that vertex

