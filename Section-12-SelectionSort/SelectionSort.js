// ES2015
const swapES2015 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const mySelectionSort = (arr) => {
  let minIndex = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i;
      }
    }
    swapES2015(arr, j, minIndex);
  }
  return arr;
};

console.log(mySelectionSort([5, 3, 4, 1, 2]));

const hisSelectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) { // if statement improves efficency by eliminating unnecessary swap calls
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};

console.log(hisSelectionSort([5, 3, 4, 1, 2]));
