//****************************************************************************** */
// First Example - first attempt
const same = (arr, arrSquared) => {
  let arr2 = arr.map((value) => value * value);
  if (arr.length === arrSquared.length) {
    arrSquared.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let arrSquaredString = arrSquared.join(",");
    let arr2String = arr2.join(",");
    return arrSquaredString === arr2String;
  } else return false;
};


// examples:
console.log("same function my first attempt");
console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); //false (must be same frequency)


//****************************************************************************** */
// first example - second attempt/refactor
console.log("same function my first refactor");
const sortedString = (arr) => {
  arr.sort((a,b) => a-b)
  return arr.join(",")
}

const same2 = (arr, arrSquared) => {
  let arr2 = arr.map((value) => value * value);
  return arr.length === arrSquared.length ? sortedString(arr2) === sortedString(arrSquared) : false;
};

console.log(same2([1, 2, 3], [1, 4, 9])); // true
console.log(same2([1, 2, 3], [1, 9])); // false
console.log(same2([1, 2, 1], [4, 4, 1])); //false (must be same frequency)

//****************************************************************************** */
// first example - third attempt/refactor w/objects
console.log("same function my third refactor");
const same3 = (arr, arrSquared) => {
  let obj1 = {};
  let obj2 = {};
  if (arr.length !== arrSquared.length) return false;
  for (let i = 0; i<arr.length; i++) {
    obj1[arr[i] ** 2] = ++obj1[arr[i] ** 2] || 1;
    obj2[arrSquared[i]] = ++obj2[arrSquared[i]] || 1;
  }
  return JSON.stringify(obj1) === JSON.stringify(obj2);
  
};
console.log(same2([1, 2, 3], [1, 4, 9])); // true
console.log(same2([1, 2, 3], [1, 9])); // false
console.log(same2([1, 2, 1], [4, 4, 1])); //false (must be same frequency)

//****************************************************************************** */
// naive solution
console.log("same function naive solution");
const sameNaive = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};
console.log(sameNaive([1, 2, 3], [1, 4, 9])); // true
console.log(sameNaive([1, 2, 3], [1, 9])); // false
console.log(sameNaive([1, 2, 1], [4, 4, 1])); //false (must be same frequency)

//****************************************************************************** */
// refactored naive solution
console.log("same function naive solution refactor");
const sameNaive2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(sameNaive2([1, 2, 3], [1, 4, 9])); // true
console.log(sameNaive2([1, 2, 3], [1, 9])); // false
console.log(sameNaive2([1, 2, 1], [4, 4, 1])); //false (must be same frequency)
