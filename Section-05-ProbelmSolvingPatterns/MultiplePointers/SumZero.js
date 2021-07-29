// my first attempt - get it working - contains double loop
console.log("My first attempt");

const sumZero = (arr) => {
  for (let i of arr) {
    let value = arr.find((e) => -e === i);
    if (value) return [value, i];
  }
  return undefined;
};

console.log(
  sumZero([-3, -2, -1, 0, 1, 2, 3]), // [-3,3]
  sumZero([-2, 0, 1, 3]), // undefined
  sumZero([1, 2, 3]) // undefined
);

// my refactor
console.log("My refactor");

const sumZero2 = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] === -arr[j]) {
      return [arr[i], arr[j]];
    } else if (arr[i] < -arr[j]) {
      j--;
    } else {
      i++;
    }
  }
  return undefined;
};

console.log(
  sumZero2([-3, -2, -1, 0, 1, 2, 3]), // [-3,3]
  sumZero2([-2, 0, 1, 3]), // undefined
  sumZero2([1, 2, 3]) // undefined
);

// naive solution
console.log("Naive solution");
const sumZeroNaive = (arr) => {
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === 0) return [i, j];
    }
  }
}; // this is incorrect because it returns [0,0] for the second test

console.log(
  sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]), // [-3,3]
  sumZeroNaive([-2, 0, 1, 3]), // undefined
  sumZeroNaive([1, 2, 3]) // undefined
);

// refactored solution
console.log("His refactor");
const sumZeroRefactor = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
console.log(
  sumZeroRefactor([-3, -2, -1, 0, 1, 2, 3]), // [-3,3]
  sumZeroRefactor([-2, 0, 1, 3]), // undefined
  sumZeroRefactor([1, 2, 3]) // undefined
);
