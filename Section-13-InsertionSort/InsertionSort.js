const myInsertionSort = (arr) => {
  let j, value;
  for (let i = 1; i < arr.length; i++) {
    value = arr[i];
    for (j = i - 1; j >= 0 && value < arr[j]; j--) {
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
};

console.log(myInsertionSort([5, 3, 4, 1, 2]));

const hisInsertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(hisInsertionSort([5, 3, 4, 1, 2]));