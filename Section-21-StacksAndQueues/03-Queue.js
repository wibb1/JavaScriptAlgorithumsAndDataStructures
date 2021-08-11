class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    let removed = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = removed.next;
    this.size--;
    return removed.val;
  }
}

let q = new Queue();

console.log(
  q.enqueue("FIRST"),
  q.enqueue("SECOND"),
  q.enqueue("THIRD"),
  q.dequeue(),
  q.dequeue(),
  q.dequeue()
);
