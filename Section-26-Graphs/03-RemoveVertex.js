class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  edgeExists(vertex1, vertex2) {
    return this.adjacencyList[vertex1].indexOf(vertex2);
  }

  addEdge(vertex1, vertex2) {
    if (this.edgeExists(vertex1, vertex2) < 0)
      this.adjacencyList[vertex1].push(vertex2);
    if (this.edgeExists(vertex2, vertex1) < 0)
      this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    let index1 = this.edgeExists(vertex1, vertex2);
    let index2 = this.edgeExists(vertex2, vertex1);
    let list1 = this.adjacencyList[vertex1];
    let list2 = this.adjacencyList[vertex2];
    if (index1 >= 0) {
      [list1[index1], list1[list1.length - 1]] = [
        list1[list1.length - 1],
        list1[index1],
      ];
      list1.pop();
    }
    if (index2 >= 0) {
      [list2[index2], list2[list2.length - 1]] = [
        list2[list2.length - 1],
        list2[index2],
      ];
      list2.pop();
    }
  }

  removeVertex(v) {
    let vertex = this.adjacencyList[v];
    if (!vertex) return undefined
    let edges = [];
    while (vertex.length) {
      edges.push(vertex[0]);
      this.removeEdge(vertex[0], v);
    }
    delete this.adjacencyList[v]
    return edges;
  }

  hisRemoveVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex ]
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");g.addEdge("Tokyo", "Aspen");
console.log(g);
console.log(
  "\nOriginal Graph => \n",
  g,
  "\nDallas Remove 1 = ",
  g.removeVertex("Dallas"),
  "\nDallas Remove 2 = ",
  g.removeVertex("Dallas"),
  "\nFinal Graph => \n",
  g
);
console.log(
  "\nAspen Remove 1 = ",
  g.removeVertex("Aspen"),
  "\nAspen Remove 2 = ",
  g.removeVertex("Aspen"),
  "\nFinal Graph => \n",
  g
);