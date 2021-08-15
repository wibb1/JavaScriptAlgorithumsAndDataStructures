class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2){
    if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2)
    if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1)
  }
}

let g = new Graph
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addEdge("Dallas", "Tokyo")
console.log(g)