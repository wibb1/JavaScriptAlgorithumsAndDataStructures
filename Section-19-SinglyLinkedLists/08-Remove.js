class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let current;
    if (!this.head) return current;
    current = this.head;
    if (!current.next) {
      this.head = null;
    } else {
      let next = this.head.next;
      let last;
      while (next) {
        last = current;
        current = last.next;
        next = current.next;
      }
      last.next = null;
    }
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return current;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let value = this.head;
    for (let i = 0; i < index; i++) {
      value = value.next;
    }
    return value;
  }

  set(index, newVal) {
    let value = this.get(index);
    if (!value) return false;
    value.val = newVal;
    return true;
  }

  insert(index, newVal) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(newVal);
    if (index === 0) return !!this.unshift(newVal);
    let pre = this.get(index - 1);
    let value = new Node(newVal);
    value.next = pre.next;
    pre.next = value;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let pre = this.get(index - 1);
    let removed = pre.next;
    pre.next = removed.next;
    this.length--;
    return removed;
  }
}

let list1 = new SinglyLinkedList();

list1.push("I");
list1.push("was");
list1.push("there");
console.log("insert not -", list1.insert(2, "not"));
console.log("***Original***");
console.log("get 0 -", list1.get(0));
console.log("get 1 -", list1.get(1));
console.log("get 2 -", list1.get(2));
console.log("get 3 -", list1.get(3));
console.log("get 4 -", list1.get(4));
console.log("***Remove 1***");
console.log("remove 2 -", list1.remove(2));
console.log("get 0 -", list1.get(0));
console.log("get 1 -", list1.get(1));
console.log("get 2 -", list1.get(2));
console.log("get 3 -", list1.get(3));
console.log("get 4 -", list1.get(4));
console.log("***Remove 2***");
console.log("remove 2 -", list1.remove(2));
console.log("get 0 -", list1.get(0));
console.log("get 1 -", list1.get(1));
console.log("get 2 -", list1.get(2));
console.log("get 3 -", list1.get(3));
console.log("get 4 -", list1.get(4));
console.log("***Remove 3***");
console.log("remove 2 -", list1.remove(2));
console.log("get 0 -", list1.get(0));
console.log("get 1 -", list1.get(1));
console.log("get 2 -", list1.get(2));
console.log("get 3 -", list1.get(3));
console.log("get 4 -", list1.get(4));
console.log("***Remove 4***");
console.log("get -2 -", list1.remove(-2));
console.log("get 0 -", list1.get(0));
console.log("get 1 -", list1.get(1));
console.log("get 2 -", list1.get(2));
console.log("get 3 -", list1.get(3));
console.log("get 4 -", list1.get(4));
