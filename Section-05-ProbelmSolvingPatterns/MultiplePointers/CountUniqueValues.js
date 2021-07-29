// my first attempt
console.log("My first attempt");

const countUniqueValues = (arr) => {
  let count = arr.length > 1 ? 1 : 0;
  let second = arr.length - 1;
  let first = second - 1;
  while (first >= 0) {
    if (arr[first] !== arr[second]) count++;
    first--;
    second--;
  }

  return count;
};

console.log(
  countUniqueValues([1, 1, 1, 1, 1, 2]), //2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), //7
  countUniqueValues([]), //0
  countUniqueValues([-2, -1, -1, 0, 1]) //4
);

// my refactor attempt
console.log("My refactor attempt");

const countUniqueValues2 = (arr) => {
  if (arr.length < 1) return 0;
  let j,
    count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    j = 1 + i;
    if (arr[i] !== arr[j]) count++;
  }

  return count;
};

console.log(
  countUniqueValues2([1, 1, 1, 1, 1, 2]), //2
  countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), //7
  countUniqueValues2([]), //0
  countUniqueValues2([-2, -1, -1, 0, 1]) //4
);

// my first attempt after his instruction - alter the array
console.log("Altering the array");

const countUniqueValues3 = (arr) => {
  if (arr.length < 1) return 0;
  let i = 0;
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return i + 1;
};
console.log(
  countUniqueValues3([1, 1, 1, 1, 1, 2]), //2
  countUniqueValues3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), //7
  countUniqueValues3([]), //0
  countUniqueValues3([-2, -1, -1, 0, 1]) //4
);

// my refactor attempt after his instruction - alter the array
console.log("Altering the array refactor");

const countUniqueValues4 = (arr) => {
  if (arr.length < 1) return 0;
  let i = 0,
    j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return i + 1;
};
console.log(
  countUniqueValues4([1, 1, 1, 1, 1, 2]), //2
  countUniqueValues4([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), //7
  countUniqueValues4([]), //0
  countUniqueValues4([-2, -1, -1, 0, 1]) //4
);

// Naive attempt
console.log("His Solution");
const countUniqueValuesHisSolution = (arr) => {
  if (arr.lenght === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(
  countUniqueValuesHisSolution([1, 1, 1, 1, 1, 2]), //2
  countUniqueValuesHisSolution([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), //7
  countUniqueValuesHisSolution([]), //0
  countUniqueValuesHisSolution([-2, -1, -1, 0, 1]) //4
);
