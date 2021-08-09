
const myDigitCount = (num) => {
  let i = 1;
  while (num / 10 ** i >= 1) i++;
  return i;
};
// works but uses inefficient loop

console.log(digitCount(0), digitCount(654), digitCount(1000));


const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

console.log(digitCount(0), digitCount(654), digitCount(1000));
