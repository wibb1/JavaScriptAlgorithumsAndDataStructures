const AddUpToV1 = (n) => {
  let total = 0; // one operation
  for (let i = 1; i <= matchMedia; i++) {
    // 3 operations per loop
    total += i; // two operations per loop
  } // 5 operations per loop and one operation at the start
  return total;
};
// drawbacks = the loop causes excessive operations compared to the solution below

const AddUpToV2 = (n) => {
  return (n * (1 + n)) / 2; // 3 operations
};
// Much more efficient because there is no loop only 3 operations

// Big O notation:
// involves the worst case scenario


// involves O(f(n))
// an algotrithum is O(f(n)) if the number of simple operations the computer has to do is eventually less that a constant times f(n), as n increases
// f(n) could be linear -> f(n) = n
// f(n) could be quadratic => f(n) = n^2)
// f(n) could be constant => f(n) = 1
//f(n) could be something entirely different!


// AddUpToV1 has O(n) = loop performed on each value

// AddUpToV2 has O(1) = single operation

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

// O(n) = linear

const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};


// O(n^2) = loop within a loop is a significant time cost as the number of loops increases