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
    if (value === oldNode.value) return oldNode;
    if (value > oldNode.value) {
      if (!oldNode.right) return oldNode;
      else return this.searchHelper(value, oldNode.right);
    } else {
      if (!oldNode.left) return oldNode;
      else return this.searchHelper(value, oldNode.left);
    }
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

  hisInsert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
      }
      current = current.right;
    }
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
