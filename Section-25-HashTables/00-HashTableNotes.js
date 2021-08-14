// Examples of Character Codes

console.log(
  "a".charCodeAt(0), // 97
  "hi".charCodeAt(0), // 104
  "hi".charCodeAt(1), // 105
  "a".charCodeAt(0) - 96, // 1
  "d".charCodeAt(0) - 96, // 4
  "z".charCodeAt(0) - 96 // 26
);


/****************************************************** 
 * HASH1
*******************************************************/

let hashKey = "hello";
const hash1 = (key, arrayLen) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let value = key.charCodeAt(value[i] - 96);
    total = (total + value) % arrayLen;
  }
  return total;
};

console.log(
  hash1("pink", 10), // 0
  hash1("orangered", 10), // 7
  hash1("cyan", 10) // 3
);


/****************************************************** 
 * HASH2
*******************************************************/
const hash2 = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char=key[i]
    let value = char.charCodeAt(value[i] - 96);
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};


/****************************************************** 
 * Dealing with Collisions
*******************************************************/






*/
console.log(

)