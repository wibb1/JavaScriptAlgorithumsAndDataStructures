// Fist Attempt
console.log("First Attempt");
const averagePair = (arr, average) => {
  let n = 1;
  for (let i = 0; i < arr.length - 1; ) {
    let currentAverage = (arr[i] + arr[n])/2
    if (n >= arr.length || currentAverage > average) {
      i++;
      n = 1;
    } else if (currentAverage < average) n++;
    else return true;
  }
  return false;
};

console.log(
  averagePair([1, 2, 3], 2.5), // true
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
  averagePair([], 4), // false
  averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), //false
  averagePair([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1) //false
);
