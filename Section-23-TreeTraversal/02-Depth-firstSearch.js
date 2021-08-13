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

  // returns the node that is where the value would be placed if added or the node is equal to the value
  searchHelper(value, oldNode) {
    if (value > oldNode.value && oldNode.right) {
      return this.searchHelper(value, oldNode.right);
    } else if (value < oldNode.value && oldNode.left) {
      return this.searchHelper(value, oldNode.left);
    }
    return oldNode;
  }
  // inserts a new node into the tree
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let oldNode = this.searchHelper(val, this.root);
      if (newNode.value === oldNode.value) return undefined;
      if (newNode.value < oldNode.value) oldNode.left = newNode;
      else oldNode.right = newNode;
    }
    return this;
  }
  // Returns true or false
  find(val) {
    if (!this.root) return false;
    return this.searchHelper(val, this.root).value === val;
  }

  preOrder() {
    let values = [];
    const preOrderHelper = (node) => {
      values.push(node.value);
      if (node.left) preOrderHelper(node.left);
      if (node.right) preOrderHelper(node.right);
    };
    preOrderHelper(this.root);
    return values;
  }

  postOrder() {
    let values = [];
    const postOrderHelper = (node) => {
      if (node.left) postOrderHelper(node.left);
      if (node.right) postOrderHelper(node.right);
      values.push(node.value);
    };
    postOrderHelper(this.root);
    return values;
  }

  inOrder() {
    let values = [];
    const inOrderHelper = (node) => {
      node.left && inOrderHelper(node.left);
      values.push(node.value);
      node.right && inOrderHelper(node.right);
    };
    inOrderHelper(this.root);
    return values;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
tree.insert(16);

console.log(BinarySearchTree.print(tree.root));

console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());