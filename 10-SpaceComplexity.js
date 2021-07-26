// auxiliary space complexity = the space required by the algorithum not including the space taken up by the inputs

// Rules of thumb
// 1. Most primatives (booleans, numbers, undefined, null) are constant space
// 2. Strings require O9n) space (where n is the string length)
// 3. Reference types are geneally O(n), where n is the length (for arrays) or the number of keys (for objects)

// Example

const sum = (array) => {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
};
// 2 values are created so O(1)

const double = (array) => {
  let newArray = []
  for (let value of array) {
    newArray.push(2*value)
  }
  return newArray
}
// creating new array each time the loop is run so O(n)

