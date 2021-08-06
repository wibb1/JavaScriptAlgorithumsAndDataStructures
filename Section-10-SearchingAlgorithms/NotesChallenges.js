//*************************************************************************************
//  Linear Search
//*************************************************************************************

let arrSearch = [1, 2, 5, 6, 8, 9, 10];

const linearSearch = (arr, val) => {
  let answer = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) answer = i;
  }
  return answer;
};

console.log(
  linearSearch(arrSearch, 6),
  linearSearch(arrSearch, 15),
  linearSearch(arrSearch, 7),
  linearSearch([], 1)
);

// time complexity = O(n) = linear

//*************************************************************************************
//  Binary Search
//*************************************************************************************

const binarySearch = (arr, value) => {
  let right = arr.length;
  let left = 0;
  if (!arr[0] || value > Math.max(...arr) || value < Math.min(...arr))
    return -1;
  do {
    let middle = Math.floor(left + (right - left) / 2);
    if (value === arr[middle]) return middle;
    if (value > arr[middle]) left = middle;
    if (value <= arr[middle]) right = middle;
  } while (right - left !== 1);
  return -1;
};

console.log(
  binarySearch(arrSearch, 6),
  binarySearch(arrSearch, 15),
  binarySearch(arrSearch, 7),
  binarySearch([], 1)
);

//*************************************************************************************
//  Naive String Search
//*************************************************************************************
const naiveStringSearch = (strSearch, strFind) => {
  let count = 0;
  let findLength = strFind.length;
  for (let i = 0; i < strSearch.length - findLength; i++) {
    let str = strSearch.slice(i, i + findLength);
    if (str === strFind) count++;
  }
  return count;
};

console.log(
  naiveStringSearch("abababababababababab", "aba"),
  naiveStringSearch("attack of the clones", "th"),
  naiveStringSearch("the empire strikes back", "th"),
  naiveStringSearch("spacebals", "the"),
  naiveStringSearch("a river runs through it", "th"),
  naiveStringSearch("time after time", "th")
);

// complexity is O(n)

//*************************************************************************************
// His Naive String Search
//*************************************************************************************

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[j + i]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(
  naiveSearch("abababababababababab", "aba"),
  naiveSearch("attack of the clones", "th"),
  naiveSearch("the empire strikes back", "th"),
  naiveSearch("spacebals", "the"),
  naiveSearch("a river runs through it", "th"),
  naiveSearch("time after time", "th")
);

// complexity is O(n+m)

