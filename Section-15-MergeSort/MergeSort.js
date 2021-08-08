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

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  //************************************************** */
  console.log(`left = [${left}]\tright = [${right}]`);
  //************************************************** */
  return shortMerge(left, right);
};

const arr1 = [8, 3, 5, 4, 7, 6, 1, 2];
const arr2 = [14, 23, 54, 67, 95, 125, 136, 145, 1, 5, 7, 9, 18, 68, 98, 100];
console.log(
   `\n***** Complete mergeSort *****\n [ ${arr1} ] => [ ${mergeSort(arr1)} ]\n`
);
