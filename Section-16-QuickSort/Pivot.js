const myPivot = (arr, start = 0, end = arr.length - 1) => {
  let indexP = start,
    p = arr[indexP],
    i = indexP + 1;
  while (i <= end) {
    if (arr[i] < p) {
      indexP++;
      [arr[indexP], arr[i]] = [arr[i], arr[indexP]];
    }
    i++;
  }
  [arr[start], arr[indexP]] = [arr[indexP], arr[start]];

  return indexP;
};

let arr1 = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(arr1);
console.log(myPivot(arr1));
console.log(arr1);

const hisPivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (array, i, j) => {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  var pivot = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
};

let arr2 = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(arr2);
console.log(myPivot(arr2));
console.log(arr2);
