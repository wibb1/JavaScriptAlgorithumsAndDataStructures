class Node {
  constructor(priority, val) {
    this.val = val;
    this.priority = priority;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  // this is with recursion
  enqueue = (p, v) => {
    const bubbleUp = (idx) => {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (self[parentIdx] && self[parentIdx].priority > self[idx].priority) {
        [self[parentIdx], self[idx]] = [self[idx], self[parentIdx]];
        return bubbleUp(parentIdx);
      }
      return idx;
    };

    let self = this.values;
    let value = new Node(p, v);
    self.push(value);
    let index = self.length - 1;
    if (self.length > 1) bubbleUp(index);
    return self;
  };

  dequeue = () => {
    let self = this.values;

    const heapUp = (index) => {
      let leftI = 2 * index + 1;
      let rightI = 2 * index + 2;
      let min = Math.min(
        self[index] && self[index].priority,
        self[rightI] && self[rightI].priority,
        self[leftI] && self[leftI].priority
      );

      if (self[leftI] && self[leftI].priority === min) {
        [self[index], self[leftI]] = [self[leftI], self[index]];
        heapUp(leftI);
      } else if (self[rightI] && self[rightI].priority === min) {
        [self[index], self[rightI]] = [self[rightI], self[index]];
        heapUp(rightI);
      }
    };

    let swapI = self.length - 1;
    if (swapI > 0) {
      [self[0], self[swapI]] = [self[swapI], self[0]];
    }
    let removed = self.pop();
    heapUp(0);
    return removed;
  };
}

let heap = new MinBinaryHeap();
console.log(heap.enqueue(41, "hi"));
console.log(heap.enqueue(39, "hi"));
console.log(heap.enqueue(33, "hi"));
console.log(heap.enqueue(18, "hi"));
console.log(heap.enqueue(27, "hi"));
console.log(heap.enqueue(12, "hi"));
console.log(heap.enqueue(55, "hi"));
console.log(heap.enqueue(100, "hi"));

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");

console.log("return value =", heap.dequeue());
console.log("heap.values =", heap.values, "\n");
