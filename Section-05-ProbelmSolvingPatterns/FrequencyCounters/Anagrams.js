//************************************************************************* */
// my first attempt
console.log("all strings attempt");
const validAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(
  validAnagram("", ""), // true
  validAnagram("aaz", "zza"), // false
  validAnagram("anagram", "nagaram"), // true
  validAnagram("rat", "car"), // false
  validAnagram("awesome", "awesom"), // false
  validAnagram("qwerty", "qeywrt"), // true
  validAnagram("texttwisttime", "timetwisttext") // true
);
// true false true false false true true

//************************************************************************* */
// my Objects attempt
console.log("objects attempt");

const createObjectFromArray = (arr) => {
  let obj = {};
  for (let value of arr) {
    obj[value] = ++obj[value] || 1;
  }
  return obj;
};

const validAnagramObjects = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj1 = createObjectFromArray(str1);
  let obj2 = createObjectFromArray(str2);
  for (let key in obj1) {
    if (!(key in obj2 && obj1[key] == obj2[key])) return false;
  }
  return true;
};

console.log(
  validAnagramObjects("", ""), // true
  validAnagramObjects("aaz", "zza"), // false
  validAnagramObjects("anagram", "nagaram"), // true
  validAnagramObjects("rat", "car"), // false
  validAnagramObjects("awesome", "awesom"), // false
  validAnagramObjects("qwerty", "qeywrt"), // true
  validAnagramObjects("texttwisttime", "timetwisttext") // true
);
// true false true false false true true


//Anagram solution from class
console.log("Anagram solution from class")
const validAnagramInstructor = (first, second) =>
{
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0 ; i < first.length; i++){
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
  }

  for (let i =0; i<second.length; i++){
    let letter = second[i]
    // can't find letter or letter is zero then its not an annagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}
console.log(
  validAnagramInstructor("", ""), // true
  validAnagramInstructor("aaz", "zza"), // false
  validAnagramInstructor("anagram", "nagaram"), // true
  validAnagramInstructor("rat", "car"), // false
  validAnagramInstructor("awesome", "awesom"), // false
  validAnagramInstructor("qwerty", "qeywrt"), // true
  validAnagramInstructor("texttwisttime", "timetwisttext") // true
);
// true false true false false true true