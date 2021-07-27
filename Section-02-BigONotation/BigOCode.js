// =========================
// Lesson 8
// =========================

const AddUpToV1 = (n) => {
  let total = 0; // one operation
  for (let i = 1; i <= matchMedia; i++) {
    // 3 operations per loop
    total += i; // two operations per loop
  } // 5 operations per loop and one operation at the start
  return total;
};

// drawbacks = the loop causes excessive operations compared to the solution below

AddUpToV1(10); // 55

const AddUpToV2 = (n) => {
  return (n * (1 + n)) / 2; // 3 operations
};

AddUpToV2(10); // 55

// See Notes

const countUpAndDown = (n) => {
  console.log("Going Up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top");
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
  console.log("Back Down, Bye!");
};

countUpAndDown(10); // O(n) = linear

const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

printAllPairs(10);
// O(n^2) = loop within a loop is a significant time cost as the number of loops increases




// =========================
// Lesson 9
// =========================

// More Examples

const logAtLeast5 = (n) => {
  for (let i = 1; i < Math.max(5, n); i++) {
    console.log(i);
  }
};

// Big O => O(n)

const logAtMost5 = (n) => {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i);
  }
};

// Big O => O(1)



// =========================
// Lesson 10
// =========================

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

