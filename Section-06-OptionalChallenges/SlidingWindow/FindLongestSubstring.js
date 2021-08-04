const findLongestSubstring = (str) => {
  let subTotal = 0,
    arr = str.split(""),
    total = 0,
    obj = {},
    i = 0,
    index;

  while (i < arr.length) {
    if (obj[arr[i]] !== undefined) {
      subTotal = 1;
      index = obj[arr[i]] + 1;
      obj = {};
      i = index + 1;
      obj[arr[index]] = index;
    } else {
      obj[arr[i]] = i;
      subTotal++;
      i++;
      if (subTotal > total) total = subTotal;
    }
  }
  return total;
};

console.log(
  findLongestSubstring(""), // 0
  findLongestSubstring("rithmschool"), // 7
  findLongestSubstring("thisisawesome"), // 6
  findLongestSubstring("thecatinthehat"), // 7 -not
  findLongestSubstring("bbbbbb"), // 1 -not
  findLongestSubstring("longestsubstring"), // 8
  findLongestSubstring("thisishowwedoit") // 6
);
// 0 7 6 7 1 8 6
// 0 7 6 7 1 8 6
