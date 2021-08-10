class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push([
        current.prev ? current.prev.val : current.prev,
        current.val,
        current.next ? current.next.val : current.next,
      ]);
      current = current.next;
    }
    console.log(arr);
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 0;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let oldTail = this.tail;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    oldTail.prev = null;
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
}

let list = new DoublyLinkedList();
console.log(list);
list.unshift(0);
list.print();
list.push(1);
list.print();
console.log(list.shift());
list.print();
list.unshift(0);
list.print();
console.log(list.shift());
list.print();
