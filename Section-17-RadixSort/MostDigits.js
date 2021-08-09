const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const myMostDigits = (arr) => {
  let digits = 1;
  for (let num of arr) {
    let temp = digitCount(num);
    if (temp > digits) digits = temp;
  }
  return digits;
};
console.log(
  myMostDigits([0, 1, 12, 123, 1234, 12345, 123456, 12345678901234567890]),
  myMostDigits([0, 123456789012345678901234567890])
);

const hisMostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
console.log(
  hisMostDigits([0, 1, 12, 123, 1234, 12345, 123456, 12345678901234567890]),
  hisMostDigits([0, 123456789012345678901234567890])
);