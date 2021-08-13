class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  static print(node) {
    return `${node.value}: {${
      !node.left ? null : BinarySearchTree.print(node.left)
    } , ${!node.right ? null : BinarySearchTree.print(node.right)}}`;
  }

  searchHelper(value, oldNode) {
    if (value > oldNode.value && oldNode.right) {
      return this.searchHelper(value, oldNode.right);
    } else if (value < oldNode.value && oldNode.left) {
      return this.searchHelper(value, oldNode.left);
    }
    return oldNode;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let oldNode = this.searchHelper(val, this.root);
      if (newNode.value < oldNode.value) oldNode.left = newNode;
      if (newNode.value > oldNode.value) oldNode.right = newNode;
      if (newNode.value === oldNode.value) return undefined;
    }
    return this;
  }

  find(val) {
    if (!this.root) return false;
    return this.searchHelper(val, this.root).value === val;
  }

  BFS() {
    if (!this.root) return null;
    let queue = [],
      visited = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift(); // this needs to be a queue even though it is more efficient as a pop() with an array
      if (node.left != null) queue.push(node.left);
      if (node.right != null) queue.push(node.right);
      visited.push(node.value);
    }
    return visited;
  }

  hisBFS() {
    var data = [],
      queue = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);

console.log(BinarySearchTree.print(tree.root));

tree.insert(5);

console.log(BinarySearchTree.print(tree.root));

tree.insert(13);

console.log(BinarySearchTree.print(tree.root));

tree.insert(2);

console.log(BinarySearchTree.print(tree.root));

tree.insert(7);

console.log(BinarySearchTree.print(tree.root));

tree.insert(11);

console.log(BinarySearchTree.print(tree.root));

tree.insert(16);

console.log(BinarySearchTree.print(tree.root));

tree.insert(16);

console.log(BinarySearchTree.print(tree.root));

console.log("find(7) - true =", tree.find(7));

console.log("find(1) - false =", tree.find(1));
