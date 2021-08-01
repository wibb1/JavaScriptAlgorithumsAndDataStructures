// ===========================
// Count Down
// ===========================

const countDownIterative = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done!\n");
};

countDownIterative(3);

const countDownRecursion = (num) => {
  if (num <= 0) {
    console.log("All Done!\n");
    return;
  }
  console.log(num);
  num--;
  countDownIterative(num);
};

countDownRecursion(3);

// ===========================
// SumRange
// ===========================
const sumRange = (num) => {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1); // recursive call
};

console.log(`Sum of the range = ${sumRange(3)}\n\n`);

// sumRange(3) = [return 3 + [sumRange(2) = return 2 + [sumRange(1) = return 1]]]
// sumRange(3) = [ 3 + [ 2 + [ 1 ]]] = 6

// ===========================
// Factorial
// ===========================

const factorial = (num) => {
  if (Math.abs(num) < 2) return 1;
  return num * factorial(Math.abs(num) - 1);
};

console.log(factorial(2), factorial(3), factorial(4), factorial(5));
console.log(factorial(-2), factorial(-3), factorial(-4), factorial(-5));

// ===========================
// Common Pitfalls
// ===========================

// No base case -
const factorialFailure1 = (num) => {
  if (num === 1) console.log(1);
  return num * factorialFailure2(num - 1);
};

// returning the wrong thing
const factorialFailure2 = (num) => {
  if (num === 1) return 1;
  return num * factorialFailure1(num);
};

// Collecting the odd values - with helper method - prefers this
const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

console.log(collectOddValues([...Array(10).keys()]));

// Collect all values - without helper
const collectOddValues2 = (arr) => {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  return newArr.concat(collectOddValues2(arr.slice(1)))
};

console.log(collectOddValues2([...Array(10).keys()]));
