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

  get(index) {
    if (index >= this.length || index < 0) return null;
    let current;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  getBetter(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let direction = "next";

    // If it will start from the tail
    if (index > (this.length - 1) / 2) {
      current = this.tail;
      direction = "prev";
      index = this.length - 1 - index;
    }

    for (let i = 0; i < index; i++) current = current[direction];

    return current;
  }
}

let list = new DoublyLinkedList();
list.unshift(0);
list.push(1);
list.push(2);
list.print();
console.log(`get(-1)=`, list.get(-1));
console.log(`get(10)=`, list.get(10));
console.log(`get(0)=`, list.get(0));
console.log(`get(1)=`, list.get(1));
console.log(`get(2)=`, list.get(2));
console.log(`get(3)=`, list.get(3));
list.print();
