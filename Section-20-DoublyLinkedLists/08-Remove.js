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

  set(index, val) {
    let current = this.get(index);
    if (!current) return false;
    current.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(val);
    if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      let prev = this.get(index - 1);
      newNode.prev = prev;
      newNode.next = prev.next;
      prev.next.prev = newNode;
      prev.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}

let list = new DoublyLinkedList();
list.unshift(0);
list.push(1);
list.push(2);
list.print();
console.log(`insert(-1, -1)=`, list.insert(-1, -1));
console.log(`insert(10, -1)=`, list.insert(10, -1));
console.log(`insert(0, 'first')=`, list.insert(0, "first"));
console.log(`insert(4, 'last')=`, list.insert(4, "last"));
console.log(`insert(4, 3)=`, list.insert(4, 3));
list.print();
console.log(`remove(4)=`, list.remove(4));
list.print();
console.log("list length =", list.length);
console.log(`remove(4)=`, list.remove(4));
list.print();

console.log(`remove(0)=`, list.remove(0));
list.print();
