//****************************************************************
//  Merge Functions
// ***************************************************************
const myMerge = (arrI, arrJ) => {
  let i = 0,
    j = 0,
    arr = [];
  while (i < arrI.length && j < arrJ.length) {
    if (arrI[i] < arrJ[j]) {
      arr.push(arrI[i]);
      i++;
    } else {
      arr.push(arrJ[j]);
      j++;
    }
  }
  for (; i < arrI.length; i++) {
    arr.push(arrI[i]);
  }
  for (; j < arrJ.length; j++) {
    arr.push(arrJ[j]);
  }
  return arr;
};

console.log(
  "\n***** myMerge *****\n",
  myMerge([1, 2, 3], [4, 5, 6]),
  "\n",
  myMerge([14, 23, 54, 67, 95, 125, 136, 145], [1, 5, 7, 9, 18, 68, 98, 100])
);

const hisMerge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

console.log(
  "\n***** hisMerge *****\n",
  hisMerge([1, 2, 3], [4, 5, 6]),
  "\n",
  hisMerge([14, 23, 54, 67, 95, 125, 136, 145], [1, 5, 7, 9, 18, 68, 98, 100])
);

const shortMerge = (arrI, arrJ) => {
  let i = 0,
    j = 0,
    arr = [];
  while (i < arrI.length || j < arrJ.length) {
    if (arrI[i] < arrJ[j] || j >= arrJ.length) {
      arr.push(arrI[i]);
      i++;
    } else {
      arr.push(arrJ[j] || i >= arrI.length);
      j++;
    }
  }
  return arr;
};

console.log(
  "\n***** shortMerge *****\n",
  shortMerge([1, 2, 3], [4, 5, 6]),
  "\n",
  shortMerge([14, 23, 54, 67, 95, 125, 136, 145], [1, 5, 7, 9, 18, 68, 98, 100])
);