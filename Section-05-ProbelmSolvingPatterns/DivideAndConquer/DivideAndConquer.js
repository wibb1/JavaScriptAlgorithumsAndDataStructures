console.log("Double loop try")
const example = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(
  example([1, 2, 3], 3), // 2
  example([1, 2, 3, 4, 5, 6], 4), // 3
  example([1, 2, 3, 4, 5, 6], 6), // 5
  example([1, 2, 3, 4, 5, 6], 11) // -1
);
console.log("Single loop try")
const example2 = (arr, value) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (value > arr[middle]) {
      start = middle + 1;
    } else if (value < arr[middle]) {
      end = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(
  example2([1, 2, 3], 3), // 2
  example2([1, 2, 3, 4, 5, 6], 4), // 3
  example2([1, 2, 3, 4, 5, 6], 6), // 5
  example2([1, 2, 3, 4, 5, 6], 11) // -1
);

console.log("His Example")
const search = (array, val) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};
console.log(
  search([1, 2, 3], 3), // 2
  search([1, 2, 3, 4, 5, 6], 4), // 3
  search([1, 2, 3, 4, 5, 6], 6), // 5
  search([1, 2, 3, 4, 5, 6], 11) // -1
);


