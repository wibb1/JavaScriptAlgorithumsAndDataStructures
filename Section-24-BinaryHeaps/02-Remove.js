class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // this is with recursion
  insert = (val) => {
    this.values.push(val);
    let index = this.values.length - 1;
    const bubbleUp = (index) => {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] < this.values[index]) {
        [this.values[parentIndex], this.values[index]] = [
          this.values[index],
          this.values[parentIndex],
        ];
        return bubbleUp(parentIndex);
      }
      return index;
    };

    bubbleUp(index);

    return this.values;
  };

  extractMax = () => {
    let self = this.values;

    const heapDown = (index) => {
      let leftI = 2 * index + 1;
      let rightI = 2 * index + 2;
      let max = Math.max(self[index], self[leftI], self[rightI]);

      if (self[leftI] === max) {
        [self[index], self[leftI]] = [self[leftI], self[index]];
        heapDown(leftI);
      } else if (self[rightI] === max) {
        [self[index], self[rightI]] = [self[rightI], self[index]];
        heapDown(rightI);
      }
    };

    let swapI = self.length - 1;
    if (swapI > 0) {
      [self[0], self[swapI]] = [self[swapI], self[0]];
    }
    let removed = self.pop();
    heapDown(0);
    return removed;
  };

  hisExtractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChild;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && leftChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.insert(100));
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
console.log("max value =", heap.extractMax());
console.log("heap.values =", heap.values, "\n");
