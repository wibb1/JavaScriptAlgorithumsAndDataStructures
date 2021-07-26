// Big O notation notes:

// O(2n) = O(n)
// O(500) = O(1)
// O(13n^2) = O(n^2)
// O(n+10) = O(n)
// O(n+10) = O(n)
// O(1000n+50) = O(n)
// O(n^2 + 5n + 8) = O(n)
// O(n) = O(n^2)
//

// Big O Shorthands
// 1. Arithmetic operation are Constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array with index or in object with key are constant
// 4. Loops increase the complexity by the number of iterations
// 5. Loops witin a loop exponentially increase the iterations.

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

