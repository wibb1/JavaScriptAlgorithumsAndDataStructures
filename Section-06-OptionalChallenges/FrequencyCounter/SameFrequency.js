const sameFrequency = (a, b) => {
  let aSort = a.toString().split("").sort().join("");
  let bSort = b.toString().split("").sort().join("");
  return aSort === bSort;
};

console.log(
  sameFrequency(182, 281), // true
  sameFrequency(34, 14), // false
  sameFrequency(3589578, 5879385), //true
  sameFrequency(22, 222) // false
);

const createObjectFromNumber = (num) => {
  let object = {};
  while (num > 0) {
    let remains = Math.floor(num / 10);
    let temp = num - remains * 10;
    object[temp] ? (object[temp] += 1) : (object[temp] = 1);
    num = remains;
  }
  return object;
};

const sameFrequency2 = (a, b) => {
  let obj1 = createObjectFromNumber(a);
  let obj2 = createObjectFromNumber(b);
  for (let key in obj1) {
    if (!(key in obj2 && obj1[key] === obj2[key])) return false;
  }
  return true;
};

console.log(
  sameFrequency2(182, 281), // true
  sameFrequency2(34, 14), // false
  sameFrequency2(3589578, 5879385), //true
  sameFrequency2(22, 222) // false
);
