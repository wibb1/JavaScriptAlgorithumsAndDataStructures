//my first attempt - double loop
console.log("My first attempt");
const maxSubarraySum = (arr, count) => {
  if (count > arr.length) return null;
  let finalAnswer = -Infinity,
    answer;
  for (let i = 0; i < arr.length - count + 1; i++) {
    answer = 0;
    for (let j = i; j < i + count; j++) {
      answer += arr[j];
    }
    if (finalAnswer < answer) finalAnswer = answer;
  }
  return finalAnswer;
};

console.log(
  maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), // 10
  maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), // 17
  maxSubarraySum([4, 2, 1, 6], 1), // 6
  maxSubarraySum([4, 2, 1, 6, 2], 4), // 13
  maxSubarraySum([], 4), // null
  maxSubarraySum([1, 2, 3, 4, 5], 0) //0
);

//my refactored solution - add then compare first and last digits
console.log("My first attempt refactored to remove loop");
const maxSubarraySum2 = (arr, count) => {
  if (count > arr.length) return null;
  let finalAnswer = 0;
  for (let i = 0; i < count; i++) {
    finalAnswer += arr[i];
  }
  let answer = finalAnswer
  for (let i = count; i < arr.length; i++) {
    answer = answer + arr[i] - arr[i - count];
    if (answer > finalAnswer) finalAnswer = answer;
  }
  return finalAnswer;
};

console.log(
  maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2), // 10
  maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4), // 17
  maxSubarraySum2([4, 2, 1, 6], 1), // 6
  maxSubarraySum2([4, 2, 1, 6, 2], 4), // 13
  maxSubarraySum2([], 4), // null
  maxSubarraySum2([1, 2, 3, 4, 5], 0) // 0
);
// naive solution
console.log("naive solution");
const maxSubarraySumNaive = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
console.log(
  maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 2), // 10
  maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 4), // 17
  maxSubarraySumNaive([4, 2, 1, 6], 1), // 6
  maxSubarraySumNaive([4, 2, 1, 6, 2], 4), // 13
  maxSubarraySumNaive([], 4), // null
  maxSubarraySumNaive([1, 2, 3, 4, 5], 0) // 0
);

// Refactored solution
console.log("Refactored solution");
const maxSubarraySumRefactored = (arr, num) => {
  let maxSum = 0,
    tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
console.log(
  maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 2), // 10
  maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 4), // 17
  maxSubarraySumRefactored([4, 2, 1, 6], 1), // 6
  maxSubarraySumRefactored([4, 2, 1, 6, 2], 4), // 13
  maxSubarraySumRefactored([], 4), // null
  maxSubarraySumRefactored([1, 2, 3, 4, 5], 0) // 0
);
