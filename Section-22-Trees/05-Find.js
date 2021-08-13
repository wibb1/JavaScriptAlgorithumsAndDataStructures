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

  //returns false if no tree, undefined if not found and the value if found
  hisFind(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return !found ? undefined : current;
  }

  // returns true or false
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
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
