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

  // this is not constant time = O(n)
  hisRemoveEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
console.log(g);
g.removeEdge("Dallas", "Aspen");
console.log(g);
g.removeEdge("Dallas", "Tokyo");
console.log(g);
g.removeEdge("Dallas", "Tokyo");
console.log(g);