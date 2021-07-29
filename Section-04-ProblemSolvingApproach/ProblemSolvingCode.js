// Example 1
const twoSum = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};
console.log(`answer is ${twoSum(1, 2)}`);

// Example 2
const charCount = (str) => {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the count of each charater's occurance

  // make object to return at the end
  let result = {};

  // refactor regular expressions since they are slow
  // testing for alphanumeric
  const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    return (
      (code > 47 && code < 58) ||
      (code > 64 && code < 91) ||
      (code > 96 && code < 123)
    );
  };
  // loop over string
  // (let i = 0; i < str.length; i++)
  for (let char of str) {
    // check if the character key already exists in the object
    //if (/[a-z0-9]/.test(char)) {
    if (isAlphaNumeric(char)) {
      let charLower = char.toLowerCase();
      // originally had
      // if (result[char] > 0) {
      //   // if it does increment the value of the key
      //   result[char]++;
      // } else {
      //   // if not create the key and enter 1
      //   result[char] = 1;
      // }
      // my refactor
      // result[char] = result[char] > 0 ? result[char]++ : 1;
      // his refactor
      result[charLower] = ++result[charLower] || 1;
    }
  }

  // if the character is a space, period, etc don't do anything
  // return the object at the end
  return result;

  //
};

console.log(charCount("hello")); // works as expected { h: 1, e: 1, l: 2, o: 1 }

console.log(charCount("Hello hi")); // need to add .toLowerCase() to the char variable - still contains space
