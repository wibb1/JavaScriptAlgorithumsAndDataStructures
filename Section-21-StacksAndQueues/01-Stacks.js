class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return false;
    let oldHead = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    oldHead.next = null;
    this.first = this.first.next;
    this.size--;
    return oldHead.value;
  }
}

let stack = new Stack();
stack.push(0);
console.log(stack.first);
console.log(stack.last);
stack.push(1);
console.log(stack.first);
console.log(stack.last);
