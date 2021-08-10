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
    current.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return current;
  }
}

let list1 = new SinglyLinkedList();
console.log(list1);
list1.push("I");
console.log(list1);
list1.push("was");
console.log(list1);
list1.push("there");
console.log(list1);
console.log(list1.shift());
console.log(list1.shift());
console.log(list1.shift());
console.log(list1.shift());
console.log(list1.shift());
console.log(list1);
