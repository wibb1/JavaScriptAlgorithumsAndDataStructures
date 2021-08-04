// using JavaScript methods
console.log("using JavaScript methods");
const areThereDuplicatesFrequencyJavaScript = (...values) => {
  let unique = [...new Set(values)].join("");
  return unique !== values.join("");
};
console.log(
  areThereDuplicatesFrequencyJavaScript(1, 2, 3), // false
  areThereDuplicatesFrequencyJavaScript(1, 2, 2), // true
  areThereDuplicatesFrequencyJavaScript("a", "b", "c", "d") // true
);
// Single Line Solution
console.log("His Single Line Solution");
const areThereDuplicatesFrequencyJavaScript2 = () => {
  return new Set(arguments).size !== arguments.length
}


console.log(
  areThereDuplicatesFrequencyJavaScript(1, 2, 3), // false
  areThereDuplicatesFrequencyJavaScript(1, 2, 2), // true
  areThereDuplicatesFrequencyJavaScript("a", "b", "c", "d") // true
);

const createObjectFromArray = (arr) => {
  let obj = {};
  for (let value of arr) {
    obj[value] ? (obj[value] += 1) : (obj[value] = 1);
  }
  return obj;
};

// using Frequency Method
console.log("using Frequency Method");
const areThereDuplicatesFrequency = (...arr) => {
  let obj = createObjectFromArray(arr);
  for (let key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
};

console.log(
  areThereDuplicatesFrequency(1, 2, 3), // false
  areThereDuplicatesFrequency(1, 2, 2), // true
  areThereDuplicatesFrequency("a", "b", "c", "d") // true
);

// Using Multiple Pointers
console.log("Using Multiple Pointers");
const areThereDuplicatesMultiple = (...arr) => {
  arr = arr.sort()
  if (arr.length === 0) return false;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
};

console.log(
  areThereDuplicatesMultiple(1, 2, 3), // false
  areThereDuplicatesMultiple(1, 2, 2), // true
  areThereDuplicatesMultiple("a", "b", "c", "d") // true
);
