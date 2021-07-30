// First Attempt
console.log("First Attempt");
const maxSubarraySum = (arr, len) => {
  if (arr.length < len) return null;
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length - len + 1; i++) {
    //console.log(sum)
    if (sum > answer) {
      answer = sum;
    }
    sum += arr[i + len] - arr[i];
  }
  return answer;
};
console.log(
  maxSubarraySum([100, 200, 300, 400], 2), //700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([2, 3], 3) // null
);
