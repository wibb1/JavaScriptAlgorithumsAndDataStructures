// Reverse
// Write a recursive function called *reverse* which accepts a string and returns a new string in reverse.

const reverse = (str) => {
  if (str.length <= 1) return str;
  return str.slice(-1) + reverse(str.slice(0, -1));
};

console.log(
  "\nreverse = ",
  reverse("awesome"), // 'emosewa'
  reverse("rithmschool") // 'loohcsmhtir'
);

// isPalindrome
// Write a function called isPalindrome which returns true if the string passed
// to it is a palindrome (reads the same forward and backward). Otherwise it
// returns false

// need to compare half the word to the other half in reverse
// with recursion you compare each letter until they are unequal
// tacocat => t=t, a=a, c=c, done because str.length===1

const isPalindrome = (str) => {
  if (str.length === 1) return true;
  return str.slice(-1) === str.slice(0, 1)
    ? isPalindrome(str.slice(1, -1))
    : false;
};

console.log(
  "\nisPalindrome = ",
  isPalindrome("awesome"), // false
  isPalindrome("foobar"), // false
  isPalindrome("tacocat"), // true
  isPalindrome("amanaplanacanalpanama"), // true
  isPalindrome("amanaplanacanalpandemonium") // false
);

//someRecursive
// Write a function called someRecursive that accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback otherwise it returns false

const someRecursive = (arr, func) => {
  if (arr.length === 0) return false;
  return func(arr[0]) ? true : someRecursive(arr.slice(1), func);
};

const isOdd = (val) => val % 2 !== 0;

console.log(
  "\nsomeRecursive = ",
  someRecursive([1, 2, 3, 4], isOdd), // true
  someRecursive([4, 6, 8, 9], isOdd), // true
  someRecursive([4, 6, 8], isOdd), // false
  someRecursive([4, 6, 8], (val) => val > 10) // false
);

//Flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened

// **********************************************************************
// his was better. By using a loop and concat he was able to simplify
// and shorten the code
// **********************************************************************

const flatten = (arr) => {
  let arr2 = [];
  const helper = (arr) => {
    if (Array.isArray(arr[0])) {
      helper(arr[0]);
      if (arr.length > 1) helper(arr.slice(1));
    } else if (arr[0].length < 1) {
      return;
    } else {
      arr2.push(arr[0]);
      if (arr.length > 1) helper(arr.slice(1));
      return;
    }
  };
  helper(arr);
  return arr2;
};

console.log(
  "\nflatten = ",
  flatten([1, 2, 3, [4, 5]]), // [1, 2, 3, 4, 5]
  flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
  flatten([[1], [2], [3]]), // [1,2,3]
  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
);
