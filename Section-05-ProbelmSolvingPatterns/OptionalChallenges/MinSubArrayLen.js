const minSubArrayLen = (arr, max) => {
  let start = 0,
    end = arr.length - 1,
    tempSum = 0;
  for (let i of arr) {
    tempSum += i;
  }
  if (tempSum < max) return 0;
  while (tempSum >= max) {
    if (arr[end] > arr[start]) {
      tempSum -= arr[start];
      start++;
    } else if (arr[end] < arr[start]) {
      tempSum -= arr[end];
      end--;
    } else {
      if (arr[end - 1] > arr[start + 1]) {
        start++;
        tempSum -= arr[start];
      } else {
        end--;
        tempSum -= arr[end];
      }
    }
  }
  return end - start + 2;
};

console.log(
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
);
