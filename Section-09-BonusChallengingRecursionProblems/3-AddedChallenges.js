//********************************************************************************************************************************* */
// capitalizeFirst
// Write a recursive function called *capitalizeFirst*.  Given an array of strings, capitalize the first letter of each string in the array.
//********************************************************************************************************************************* */

const capitalizeFirst = (arr) => {
  let arr2 = [];

  const helper = (arr) => {
    if (!arr[0]) return;
    else {
      arr2.push(
        String.fromCharCode(arr[0].charCodeAt(0) - 32).concat(arr[0].slice(1))
      );
      return helper(arr.slice(1));
    }
  };
  helper(arr);
  return arr2;
};

// A = 65 - Z = 90
// a = 97 - z = 122

console.log(
  "[ 'Car', 'Taco', 'Banana' ] =",
  capitalizeFirst(["car", "taco", "banana"])
); // ['Car','Taco','Banana']

//********************************************************************************************************************************* */
// nestedEvenSum
// Write a recursive function called *nestedEvenSum*. Return the sum of all numbers in an object which may contain nested objects.
//********************************************************************************************************************************* */

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

// [ 2, 2, 2, true, 'yup' ]

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};
// [ 2, 2, 3, 2, 2, 'ball', 5, 1, 2, 'car' ]

// objectValuesToArray converts a nested object to an unnested array of the object's values
const objectValuesToArray = (obj) => {
  let oldArr = Object.values(obj);
  let newArr = [];
  for (let i of oldArr) {
    if (i instanceof Object) {
      newArr = newArr.concat(objectValuesToArray(i));
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};

// returnEvens accepts an unnested array and returns only the even numbers
const returnEvens = (arr) => {
  if (!arr[0]) {
    return [];
  } else if (typeof arr[0] !== "number" || arr[0] % 2 !== 0) {
    return returnEvens(arr.slice(1));
  }
  return [arr[0]].concat(returnEvens(arr.slice(1)));
};

console.log("[ 2, 4, 6 ] =", returnEvens([1, 2, 3, 4, 5, 6]));

// sumOfArray returns the sum of the values in any array
const sumOfArray = (arr) => {
  if (!arr[0]) return 0;
  return typeof arr[0] === "number"
    ? arr[0] + sumOfArray(arr.slice(1))
    : sumOfArray(arr.slice(1));
};

console.log("20 =", sumOfArray([2, 4, 6, 8]));

// the functions could be placed inside nestedEvenSum if they were not reused elsewhere
const nestedEvenSum = (obj) => {
  return sumOfArray(returnEvens(objectValuesToArray(obj)));
};

console.log(
  "6 =",
  nestedEvenSum(obj1), // 6
  "\n10 =",
  nestedEvenSum(obj2) // 10
);

//********************************************************************************************************************************* */
//  capitalizeWords
//  Write a recursive function called capitalizeWords. Give an array of words, return a new array containing each word capitalized
//********************************************************************************************************************************* */

const capitalizeLetter = (char) => {
  let charValue = char.charCodeAt(0);
  return charValue >= 97 && charValue <= 122
    ? String.fromCharCode(charValue - 32)
    : char;
};

const capitalizeWord = (str) => {
  return !str[0]
    ? []
    : capitalizeLetter(str[0]).concat(capitalizeWord(str.slice(1)));
};

const capitalizeWords = (arr) => {
  if (!arr[0]) return [];
  return [capitalizeWord(arr[0])].concat(capitalizeWords(arr.slice(1)));
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// * I would envision these functions as part of a class centered around manipulating word case

//********************************************************************************************************************************* */
//  stringifyNumbers
//  Write a function called stringifyNumbers that takes in an object and finds all the values which are numbers and converts them to strings.
//********************************************************************************************************************************* */

let objStringValues = {
  num: 1,
  test: [1, 2],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const stringifyNumbers = (obj) => {
  let newObj = {};
  for (let key in obj) {
    console.log(obj[key], obj[key] instanceof Array)
    if (typeof obj[key] === "number") newObj[key] = obj[key].toString();
    else if (obj[key] instanceof Array) {
      let arr = [];
      for (let val of obj[key]) {
        typeof val === "number" ? arr.push(val.toString()) : arr.push(val);
      }
      newObj[key] = arr;
    } else if (obj[key] instanceof Object) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else newObj[key] = obj[key];
  }
  return newObj;
};

console.log(stringifyNumbers(objStringValues));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

//********************************************************************************************************************************* */
//  collectStrings
//  Write a function called collectStrings that accepts an object and returns an array of all the values in the object that have a type of string.
//********************************************************************************************************************************* */

const objStrings = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

const returnStrings = (arr) => {
  if (!arr[0]) {
    return [];
  } else if (typeof arr[0] !== "string") {
    return returnStrings(arr.slice(1));
  }
  return [arr[0]].concat(returnStrings(arr.slice(1)));
};


const collectStrings = (obj) => {
  return returnStrings(objectValuesToArray(obj))
}


console.log(
  collectStrings(objStrings) // ["foo", "bar", "baz"]
)
