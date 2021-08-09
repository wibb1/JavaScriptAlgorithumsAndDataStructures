const getDigitString = (num, place) => {
  // place is the index
  // num is the value
  let string = num.toString();
  let index = string.length - place - 1;
  return parseInt(string[index]);
};

console.log(
  getDigitString(4321, 0),
  getDigitString(4321, 1),
  getDigitString(4321, 2),
  getDigitString(4321, 3)
);

const getDigitMath = (num, place) => {
  return Math.floor((num % 10 ** (1 + place)) / 10 ** place);
};

console.log(
  getDigitMath(4321, 0),
  getDigitMath(4321, 1),
  getDigitMath(4321, 2),
  getDigitMath(4321, 3)
);

const getDigitHis = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
// pulled the [ % 10 ** (1 + place) ] to the end [ % 10 ] cleaning up the calculation and accounts for negative numbers
console.log(
  getDigitHis(4321, 0),
  getDigitHis(4321, 1),
  getDigitHis(4321, 2),
  getDigitHis(4321, 3)
);
