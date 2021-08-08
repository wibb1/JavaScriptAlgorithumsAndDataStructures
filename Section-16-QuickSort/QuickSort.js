const pivot = (arr, start = 0, end = arr.length - 1) => {
  let indexP = start,
    p = arr[start];

  for (let i = indexP + 1;i <= end; i++) {
    if (arr[i] < p) {
      indexP++;
      [arr[indexP], arr[i]] = [arr[i], arr[indexP]];
    }
  }
  [arr[start], arr[indexP]] = [arr[indexP], arr[start]];

  return indexP;
};

const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1); //left
    quickSort(arr, pivotIndex + 1, right); //right
  }
  return arr;
};

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 9, 23]));
