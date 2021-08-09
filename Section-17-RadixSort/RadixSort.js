//******************************************************
//  Helper Functions
//******************************************************
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

//*********************************************************
// My Radix Sort - Doesn't work in IE
//*********************************************************
const radixSortMine = (nums) => {
  let iterations = mostDigits(nums);
  for (let k = 0; k < iterations; k++) {
    let buckets = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < nums.length; j++) {
      buckets[getDigit(nums[j], k)].push(nums[j]);
    }
    nums = buckets.flat(); // does not work in IE
  }
  return nums;
};
//*********************************************************
// His Radix Sort - Doesn't work in IE
//*********************************************************
const radixSortHis = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets); // does not work in IE
  }
  return nums;
};
//*********************************************************
// IE Radix Sort - Works in IE
//*********************************************************
const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat.apply([], digitBuckets); // works in IE
  }
  return nums;
};

console.log(
  radixSortMine([
    8, 15, 894, 5784, 25984, 25478, 216541, 215, 0, 45569, 1, 354168,
  ]),  radixSortHis([
    8, 15, 894, 5784, 25984, 25478, 216541, 215, 0, 45569, 1, 354168,
  ]),  radixSort([
    8, 15, 894, 5784, 25984, 25478, 216541, 215, 0, 45569, 1, 354168,
  ])
);