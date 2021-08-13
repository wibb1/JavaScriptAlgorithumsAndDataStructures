class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // this is without recursion
  insert = (val) => {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.values;
  };

  // this is with recursion
  insertRecursive = (val) => {
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

  hisBubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  hisInsert = (element) => {
    this.values.push(element);
    this.hisBubbleUp();
  };
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(41));
console.log(heap.insertRecursive(39));
console.log(heap.insert(33));
console.log(heap.insertRecursive(18));
console.log(heap.insert(27));
console.log(heap.insertRecursive(12));
console.log(heap.insert(55));
console.log(heap.insertRecursive(100));
